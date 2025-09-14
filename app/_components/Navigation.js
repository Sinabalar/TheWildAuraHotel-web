import Link from "next/link";
import {auth} from "@/app/_lib/auth";
import Image from "next/image";

export default async function Navigation() {

    const session = await auth();

    return (
        <nav className="z-10 text-xl">
            <ul className="flex gap-16 items-center">
                <li>
                    <Link href={"/cabins"} className="hover:text-accent-400 transition-colors">
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link href={"/about"} className="hover:text-accent-400 transition-colors">
                        About
                    </Link>
                </li>
                {
                    session?.user?.image
                        ? (
                            <li>
                                <Link
                                    href={"/account"}
                                    className="hover:text-accent-400 transition-colors flex items-center gap-2"
                                >
                                    <Image
                                        width={30}
                                        height={30}
                                        className={"rounded-full"}
                                        src={session?.user?.image}
                                        alt={"user avatar"}
                                        referrerPolicy={"no-referrer"}
                                    />
                                    <span>Guest area</span>
                                </Link>
                            </li>
                        )
                        : (
                            <li>
                                <Link
                                    href={"/account"}
                                    className="hover:text-accent-400 transition-colors"
                                >
                                    Guest area
                                </Link>
                            </li>
                        )
                }
            </ul>
        </nav>
    );
}
