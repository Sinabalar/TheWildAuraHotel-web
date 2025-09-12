import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {getBookedDatesByCabinId, getSettings} from "@/app/_lib/data-service";

export default async function Reservation({cabin}) {

    const [ setting, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin?.id)
    ]);
    return (
        <div className={"flex flex-col border border-primary-800 min-h-[400px]"}>
            <DateSelector
                settings={setting}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            <ReservationForm cabin={cabin}/>
        </div>
    );
}