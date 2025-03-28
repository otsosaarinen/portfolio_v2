import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../public/LinkedIn logo.png";
import GitHubLogo from "../public/GitHub logo.png";
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
      <body
        className={`${poppins.className} flex min-h-screen flex-col bg-white text-neutral-800`}
      >
        <main className="flex flex-grow items-center justify-center p-5">
          {children}
        </main>
        <footer className="flex h-auto w-full flex-row items-center justify-center gap-4 bg-indigo-500 p-4 text-white">
          <Link href={"https://vercel.com/home"} className="hover:underline">
            Hosted on Vercel
          </Link>
          <span>{"</>"}</span>
          <Link
            href={"https://github.com/otsosaarinen/portfolio_v2"}
            className="hover:underline"
          >
            Source code
          </Link>
          <span>{"</>"}</span>
          <Link href="https://github.com/otsosaarinen">
            <Image
              src={GitHubLogo}
              alt="GitHub logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/otsosaarinen/">
            <Image
              src={LinkedInLogo}
              alt="LinkedIn logo"
              width={30}
              height={30}
              className="object-contain"
            />
          </Link>
        </footer>
      </body>
    </html>
  );
}
