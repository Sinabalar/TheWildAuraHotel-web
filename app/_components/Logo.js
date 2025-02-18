import Link from "next/link";
import Image from "next/image";

function Logo() {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <Image
                src={"/logo.png"}
                quality={100}
                height="100"
                width="100"
                alt="The Wild Oasis logo"
            />
            <span className="text-xl font-semibold text-primary-100">
        The Wild Aura
      </span>
        </Link>
    );
}

export default Logo;
