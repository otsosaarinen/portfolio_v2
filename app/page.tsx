"use client";

import Link from "next/link";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";

//import { Noto_Sans_JP } from "next/font/google";
//const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

type SkillType = {
    [skill: string]: string[];
};

const skills: SkillType[] = [
    {
        Frontend: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "TailwindCSS",
        ],
    },
    { Backend: ["Node.js", "Express.js", "Python"] },
    { "Cloud & database": ["Apache Kafka", "Microsoft Azure", "SQLite3"] },
    { Miscellaneous: ["REST API", "OAuth 2.0", "GitHub", "Gen AI", "Grafana"] },
];

export default function Home() {
    return (
        <>
            {/*<div
                className={`${noto_sans_jp.className} text-8xl text-neutral-200 font-semibold overflow-hidden`}
            >
                <div className="absolute right-10 [writing-mode:vertical-lr] ">
                    工学 <br />
                    プログラミング
                </div>
                <div className="absolute left-0 top-200 ">開発者</div>
                <div className="absolute left-0 top-0">ソフト</div>
            </div>*/}

            <div className="h-[95vh] w-auto m-0 flex flex-row flex-wrap justify-evenly items-center">
                <div className="flex flex-col justify-center items-start gap-7">
                    <h1 className="text-2xl font-medium">Hey! My name is</h1>
                    <h1 className="text-8xl font-extrabold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                        Otso Saarinen
                    </h1>
                    <h2 className="text-2xl font-medium">
                        ICT engineering student
                        <br />
                        who likes building stuff with{" "}
                        <span className="text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                            <Typewriter
                                words={[
                                    "React",
                                    "Next.js",
                                    "Tailwind CSS",
                                    "Azure",
                                    "Node.js",
                                    "TypeScript",
                                ]}
                                typeSpeed={80}
                            />
                        </span>
                    </h2>
                    <div className="text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 text-white p-2 animate-bounce hover:cursor-pointer">
                        <Link href="/projects">
                            Click here to view my projects
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <div className="text-2xl font-medium">My Tech Stack</div>
                    <div className="flex flex-row gap-3">
                        {skills.map((skilltype, index) => {
                            const skillType = Object.keys(skilltype)[0];
                            const skillList = skilltype[skillType];

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col justify-start items-start gap-1 text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent"
                                >
                                    <div>{skillType}</div>
                                    {skillList.map((skill, skillIndex) => {
                                        return (
                                            <Badge
                                                key={skillIndex}
                                                className="text-base border-indigo-500"
                                                variant="secondary"
                                            >
                                                {skill}
                                            </Badge>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

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
        </>
    );
}
