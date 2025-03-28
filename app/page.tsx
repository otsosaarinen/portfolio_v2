"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "react-simple-typewriter";

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
    { Miscellaneous: ["REST API", "OAuth 2.0", "Gen AI", "Grafana", "GitHub"] },
];

export default function Test() {
    return (
        <>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                <div className="col-span-2 text-2xl font-medium">
                    Hey! My name is
                </div>
                <div className="col-span-2 text-8xl font-extrabold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent border-transparent border-b-indigo-500 border-2">
                    Otso Saarinen
                </div>
                <div className="flex justify-start items-center">
                    <div className="text-2xl font-medium">
                        ICT engineering student <br /> who likes building stuff
                        with{" "}
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
                    </div>
                </div>
                <div className="row-span-3 flex flex-col justify-center items-start">
                    <div className="text-2xl font-medium">My Tech Stack</div>
                    <div className="flex flex-row flex-wrap gap-3">
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
                <div className="flex justify-start items-center p-2 text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 text-white hover:cursor-pointer">
                    <Link href="/projects">Click here to view my projects</Link>
                </div>
            </div>
        </>
    );
}
