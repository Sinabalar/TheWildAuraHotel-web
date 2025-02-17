import Link from "next/link";

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <img src={"/logo.png"} height="80" width="80" alt="The Wild Oasis logo"/>
            <span className="text-xl font-semibold text-primary-100">
        The Wild Aura
      </span>
        </Link>
    );
}

export default Logo;
