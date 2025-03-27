import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

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
            <body className={`${poppins.className} text-neutral-800 bg-white`}>
                {children}
                <div className="h-[5vh] w-full flex flex-row gap-3 justify-center items-center bg-indigo-500 text-white">
                    <Link
                        href={"https://vercel.com/home"}
                        className="hover:underline"
                    >
                        Hosted on Vercel
                    </Link>
                    <span>{"</>"}</span>
                    <Link
                        href={"https://github.com/otsosaarinen"}
                        className="hover:underline"
                    >
                        GitHub
                    </Link>
                    <span>{"</>"}</span>
                    <Link
                        href={"https://github.com/otsosaarinen/portfolio_v2"}
                        className="hover:underline"
                    >
                        Source code
                    </Link>
                </div>
            </body>
        </html>
    );
}
