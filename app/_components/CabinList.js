import CabinCard from "@/app/_components/CabinCard";
import {getCabins} from "@/app/_lib/data-service";

export default async function CabinList({filter}) {

    // noStore();
    const cabins = await getCabins();

    let displayCabins;

    if (filter === "all") displayCabins = cabins;
    if (filter === "small") displayCabins = cabins.filter(cabins => cabins?.maxCapacity <= 3);
    if (filter === "medium") displayCabins = cabins.filter(cabins => cabins?.maxCapacity >= 4 && cabins?.maxCapacity <= 7);
    if (filter === "large") displayCabins = cabins.filter(cabins => cabins?.maxCapacity <= 8);

    if (!cabins.length) return null;

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayCabins?.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id}/>
            ))}
        </div>
    );
}