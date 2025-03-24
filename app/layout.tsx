import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

const quicksand = Quicksand({ subsets: ["latin"] });

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
                className={`${quicksand.className} bg-(--background) text-(--foreground)`}
            >
                {children}
            </body>
        </html>
    );
}
