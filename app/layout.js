import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css"


export const metadata = {
    title: "The Wild Aura Hotel",
}

export default function RootLayout({children}) {
    return (

        <html lang={"en"}>
        <body className={"bg-primary-950 text-primary-100"}>
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