export default function FilterButton({filter, children, onFilter, isActive}) {
    return (
        <button
            className={`px-5 py-2 hover:bg-primary-700 transition-colors ${
                isActive ? "bg-primary-700 text-primary-50" : ""
            }`}
            onClick={() => onFilter(filter)}
        >
            {children}
        </button>
    );
}