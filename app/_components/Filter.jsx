"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import FilterButton from "@/app/_components/FilterButton";

export default function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // Get current active filter
    const activeFilter = searchParams.get("capacity") ?? "all";

    // Filter configuration
    const filters = [
        {
            key: "all",
            label: "All cabins",
            value: "all"
        },
        {
            key: "small",
            label: "1—3 guests",
            value: "small"
        },
        {
            key: "medium",
            label: "4—7 guests",
            value: "medium"
        },
        {
            key: "large",
            label: "8—12 guests",
            value: "large"
        }
    ];

    const handleFilter = function (filter) {
        const params = new URLSearchParams(searchParams);
        if (filter === "all") {
            params.delete("capacity");
        } else {
            params.set("capacity", filter);
        }
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    }

    return (
        <div className="border border-primary-800 flex rounded-lg">
            {filters.map((filter) => (
                <FilterButton
                    key={filter.key}
                    filter={filter.value}
                    onFilter={handleFilter}
                    isActive={activeFilter === filter.value}
                >
                    {filter.label}
                </FilterButton>
            ))}
        </div>
    );
}