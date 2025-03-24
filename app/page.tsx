"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";
import { Target } from "lucide-react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-15 w-auto h-[94vh] text-neutral-800">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-2xl font-medium">Hey! My name is</h1>

                    <h1 className="text-8xl font-extrabold  bg-linear-to-r  from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Otso Saarinen
                    </h1>

                    <h2 className="text-3xl font-extrabold">
                        ICT engineering student @Turku UAS who likes building
                        stuff with{" "}
                        <span className="text-3xl text-indigo-500 font-bold">
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

                <div className="flex flex-col justify-center items-center text-xl font-bold">
                    <div className="text-2xl">My Tech Stack</div>
                    <div className="flex flex-row gap-5">
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-sky-500 font-semibold">
                            Frontend
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">JavaScript</Badge>
                            <Badge variant="outline">React</Badge>
                            <Badge variant="outline">Next.js</Badge>
                            <Badge variant="outline">Tailwind CSS</Badge>
                        </div>
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-sky-500 font-semibold">
                            Backend
                            <Badge variant="outline">Node.js</Badge>
                            <Badge variant="outline">Express.js</Badge>
                            <Badge variant="outline">Python</Badge>
                        </div>
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-sky-500 font-semibold">
                            Cloud & database
                            <Badge variant="outline">Microsoft Azure</Badge>
                            <Badge variant="outline">Apache Kafka</Badge>
                            <Badge variant="outline">SQLite3</Badge>
                        </div>
                        <div className="text-2xl flex flex-col justify-start items-center gap-1 text-sky-500 font-semibold">
                            Miscellaneous
                            <Badge variant="outline">REST API</Badge>
                            <Badge variant="outline">Gen AI</Badge>
                            <Badge variant="outline">GitHub</Badge>
                            <Badge variant="outline">Grafana</Badge>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[6vh] flex flex-row gap-3 justify-center items-center w-full bg-indigo-500 text-white">
                <Link href={"https://vercel.com/home"}>Hosted on Vercel</Link>
                {" | "}
                <Link href={"https://github.com/otsosaarinen/portfolio_v2"}>
                    Source code
                </Link>
            </div>
        </>
    );
}
