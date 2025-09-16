"use server";

import {auth, signIn, signOut} from "@/app/_lib/auth";
import {createBooking, deleteBooking, getBookings, updateBooking, updateGuestData} from "@/app/_lib/data-service";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function CreateBooking(bookingData, formData) {
    const session = await auth()
    if (!session) throw new Error("You must logged in");

    const newBookingData = {
        ...bookingData,
        guestID: session?.user?.guestId,
        numGuests: Number(formData.get("numGuests")),
        observations: formData.get("observations").slice(0, 1000),
        extrasPrice: 0,
        totalPrice: bookingData.cabinPrice,
        status: "unconfirmed",
        hasBreakfast: false,
        isPaid: false,

    }

    await createBooking(newBookingData);
}

export async function updateProfile(formData) {
    const session = await auth()
    if (!session) throw new Error("You must logged in");

    const nationalID = formData.get("nationalID");
    const [nationality, countryFlag] = formData.get("nationality").split("%");

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID)) {
        throw new Error("Please provide a valid national id")
    }

    const updateData = {nationality, countryFlag, nationalID}

    await updateGuestData(session?.user?.guestId, updateData)

    revalidatePath("/account/profile")

}

export async function signInAction() {
    await signIn(
        "google",
        {
            redirectTo: "/account"
        }
    )
}

export async function signOutAction() {
    await signOut(
        {
            redirectTo: "/"
        }
    )
}

export async function removeBooking(bookingId) {

    const session = await auth()
    if (!session) throw new Error("You must logged in");

    const guestBookings = await getBookings(session?.user?.guestId);
    const guestBookingsIds = guestBookings.map(
        booking => booking.id
    );
    if (!guestBookingsIds.includes(bookingId)) {
        throw new Error("You are not allowed to delete this booking");
    }

    await deleteBooking(bookingId);
    revalidatePath("/account/reservations");

}

export async function editBooking(formData) {

    const reservationID = Number(formData.get("reservationID"));
    const updatedFields = {
        numGuests: Number(formData.get("numGuests")),
        observations: formData.get("observations").slice(0, 1000)
    };

    const session = await auth();
    if (!session) throw new Error("You must logged in");

    const guestBookings = await getBookings(session?.user?.guestId);
    const guestBookingsIds = guestBookings.map(
        booking => booking.id
    );
    if (!guestBookingsIds.includes(reservationID)) {
        throw new Error("You are not allowed to edit this booking");
    }

    await updateBooking(reservationID, updatedFields);
    revalidatePath(`/account/reservations/edit/${reservationID}`);
    redirect("/account/reservations");
    revalidatePath("/account/reservations");


}