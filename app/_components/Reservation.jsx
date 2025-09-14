import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import {getBookedDatesByCabinId, getSettings} from "@/app/_lib/data-service";
import {auth} from "@/app/_lib/auth";
import LoginMessage from "@/app/_components/LoginMessage";

export default async function Reservation({cabin}) {

    const [setting, bookedDates] = await Promise.all([
        getSettings(),
        getBookedDatesByCabinId(cabin?.id)
    ]);

    const session = await auth();

    return (
        <div className={"flex flex-col items-center justify-center min-h-[400px]"}>
            <DateSelector
                settings={setting}
                bookedDates={bookedDates}
                cabin={cabin}
            />
            {
                session?.user
                    ? (

                        <ReservationForm
                            user={session?.user}
                            cabin={cabin}
                        />
                    )
                    : (
                        <LoginMessage/>
                    )
            }
        </div>
    );
}