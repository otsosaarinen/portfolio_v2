"use client";

import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";
import { Noto_Sans_JP } from "next/font/google";

const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

type SkillCategory = {
    [category: string]: string[];
};

const skills: SkillCategory[] = [
    {
        frontend: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "TailwindCSS",
        ],
    },
    { backend: ["Node.js", "Express.js", "Python"] },
    { "cloud & database": ["Apache Kafka", "Microsoft Azure", "SQLite3"] },
    { miscellaneous: ["REST API", "GitHub", "Gen AI", "Grafana"] },
];

export default function Home() {
    return (
        <>
            <div className="h-[94vh] w-auto m-0 flex flex-row flex-wrap justify-evenly items-center gap-15">
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
                <div className="flex flex-col justify-center items-start">
                    <div className="text-2xl font-medium ">My Tech Stack</div>
                    <div className="flex flex-row gap-5">
                        {skills.map((skillset, index) => {
                            const skillType = Object.keys(skillset)[0];
                            const skillList = skillset[skillType];

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col justify-start items-start gap-1 text-2xl font-semibold bg-linear-to-r  from-sky-500 to-indigo-500 bg-clip-text text-transparent "
                                >
                                    <div>
                                        {skillType.charAt(0).toUpperCase() +
                                            skillType.slice(1)}
                                    </div>
                                    {skillList.map((skill, skillIndex) => {
                                        return (
                                            <Badge
                                                key={skillIndex}
                                                className="text-base"
                                                variant="outline"
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
                {/*<div
                    className={`${noto_sans_jp.className} text-9xl [writing-mode:vertical-lr] text-neutral-300`}
                >
                    加盟国は
                </div>*/}
            </div>
            <div className="h-[6vh] w-full flex flex-row gap-3 justify-center items-center bg-indigo-500 text-white">
                <Link
                    href={"https://vercel.com/home"}
                    className="hover:underline"
                >
                    Hosted on Vercel
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
