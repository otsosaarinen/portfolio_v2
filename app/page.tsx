"use client";

import Link from "next/link";
import Image from "next/image";
import LinkedInLogo from "../public/LinkedIn logo.png";
import GitHubLogo from "../public/GitHub logo.png";
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

export default function Home() {
    return (
        <>
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
                    <div className="p-2 text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 text-white hover:cursor-pointer">
                        <Link href="/projects">
                            Click here to view my projects
                        </Link>
                    </div>
                    <div className="flex gap-3">
                        <Image
                            src={GitHubLogo}
                            alt="GitHub logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <Image
                            src={LinkedInLogo}
                            alt="LinkedIn logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
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
        </>
    );
}
