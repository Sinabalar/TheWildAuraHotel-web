"use client";

import ReservationCard from "@/app/_components/ReservationCard";
import {removeBooking} from "@/app/_lib/actions";
import {useOptimistic} from "react";

export default function ReservationList({bookings}) {

    const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, (currBookings, bookingId) => {
        return currBookings.filter((booking) => booking.id !== bookingId);
    });

    async function handleDelete(bookingId) {
        optimisticDelete(bookingId)
        await removeBooking(bookingId);
    }

    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard
                    key={booking.id}
                    onDelete={handleDelete}
                    booking={booking}
                />
            ))}
        </ul>
    );
}