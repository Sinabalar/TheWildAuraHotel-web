import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap"
});

export const metadata = {
    title: {
        template: "%s | The Wild Aura Hotel",
        default: "Welcome | The Wild Aura Hotel"
    },
    description: "Luxurious cabin Hotel located in the heart of nature surrounded by beautiful mountains and dark Foresters."
}

export default function RootLayout({children}) {
    return (

        <html lang={"en"}>
        <body className={`${josefin.className} bg-primary-950 text-primary-100`}>
        <header>
            <Logo/>
            <Navigation/>
        </header>
        <main>
            {children}
        </main>
        <footer>Copyright by Wild Aura</footer>
        </body>
        </html>
    );
}