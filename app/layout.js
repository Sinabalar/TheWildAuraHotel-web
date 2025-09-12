import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google";
import Header from "@/app/_components/Header";
import {ReservationProvider} from "@/app/context/ReservationContext";

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
        <body
            className={`${josefin.className} bg-primary-950 text-primary-100 flex flex-col min-h-screen antialiased relative`}
        >
        <Header/>
        <div className={"flex-1 px-8 py-12 grid"}>
            <main className={" max-w-7xl mx-auto w-full"}>
                <ReservationProvider>
                    {children}
                </ReservationProvider>
            </main>
        </div>
        </body>
        </html>
    );
}