import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Quicksand } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

const quicksand = Quicksand({ subsets: ["latin"] });

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Otso Saarinen",
    description: "My Next.js Portoflio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${nunito.className} bg-(--background) text-(--foreground)`}
            >
                {children}
            </body>
        </html>
    );
}
