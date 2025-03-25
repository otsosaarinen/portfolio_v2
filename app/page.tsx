"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";
import { Noto_Sans_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="h-[94vh] w-auto flex flex-row flex-wrap justify-evenly items-center gap-15">
                <div className="flex flex-col justify-center items-start gap-3">
                    <h1 className="text-2xl font-medium">Hey! My name is</h1>

                    <h1 className="text-8xl font-extrabold  bg-linear-to-r  from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Otso Saarinen
                    </h1>

                    <h2 className="text-2xl font-medium">
                        ICT engineering student
                        <br />
                        who likes building stuff with{" "}
                        <span className="text-2xl font-semibold  bg-linear-to-r  from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                            <Typewriter
                                words={[
                                    "React",
                                    "Next.js",
                                    "Tailwind CSS",
                                    "Node.js",
                                    "TypeScript",
                                ]}
                                typeSpeed={80}
                            />
                        </span>
                    </h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-2xl font-medium">My Tech Stack</div>
                    <div className="flex flex-row gap-5">
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-indigo-500 font-semibold">
                            Frontend
                            <Badge className="text-base" variant="outline">
                                TypeScript
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                JavaScript
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                React
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Next.js
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Tailwind CSS
                            </Badge>
                        </div>
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-indigo-500 font-semibold">
                            Backend
                            <Badge className="text-base" variant="outline">
                                Node.js
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Express.js
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Python
                            </Badge>
                        </div>
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-indigo-500 font-semibold">
                            Cloud & database
                            <Badge className="text-base" variant="outline">
                                Apache Kafka
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Microsoft Azure
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                SQLite3
                            </Badge>
                        </div>
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-indigo-500 font-semibold">
                            Miscellaneous
                            <Badge className="text-base" variant="outline">
                                REST API
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                GitHub
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Gen AI
                            </Badge>
                            <Badge className="text-base" variant="outline">
                                Grafana
                            </Badge>
                        </div>
                    </div>
                </div>

                <div
                    className={`${noto_sans_jp.className} text-9xl [writing-mode:vertical-lr] text-neutral-300`}
                >
                    加盟国は
                </div>
            </div>

            <div className="h-[6vh] w-full flex flex-row gap-3 justify-center items-center bg-indigo-500 text-white">
                <Link
                    href={"https://vercel.com/home"}
                    className="hover:underline"
                >
                    Hosted on Vercel
                </Link>
                <span>&#9675;</span>
                <Link
                    href={"https://github.com/otsosaarinen/portfolio_v2"}
                    className="hover:underline"
                >
                    Source code
                </Link>
            </div>
        </>
    );
}
