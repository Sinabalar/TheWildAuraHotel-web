"use server";

import {auth, signIn, signOut} from "@/app/_lib/auth";
import {deleteBooking, getBookings, updateGuestData} from "@/app/_lib/data-service";
import {revalidatePath} from "next/cache";

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

export async function deleteReservation(bookingId) {

    const session = auth()
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