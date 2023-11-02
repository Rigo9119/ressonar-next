import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
