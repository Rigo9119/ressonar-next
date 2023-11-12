import Footer from "@/components/footer/footer";
import "./globals.css";
import NavBar from "@/components/nav/navBar";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",

};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
