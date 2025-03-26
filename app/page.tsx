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

type ProjectItem = {
    Description: string;
    GitHub: string;
    Badges: string[];
};

type ProjectType = {
    [project: string]: ProjectItem[];
};

const projects: ProjectType = {
    "Spotify Web Controller": [
        {
            Description:
                "A web application that allows users to control their Spotify playback. It utilizes the Spotify Developer API for managing playback, with user authentication handled via the OAuth 2.0 protocol.",
            GitHub: "github.com/otsosaarinen/spotify-web-controller",
            Badges: [
                "TypeScript",
                "React",
                "Tailwind CSS",
                "Spotify API",
                "OAuth 2.0",
            ],
        },
    ],
    Klemmari: [
        {
            Description:
                "A web application featuring a GPT-4o-powered chatbot that assists users with settings adjustments, navigation, and answering questions. The language model is built using a RAG (Retrieval-Augmented Generation) model for optimal responses and is hosted on Microsoft Azure.",
            GitHub: "github.com/otsosaarinen/klemmari",
            Badges: [
                "Microsoft Azure",
                "OpenAI",
                "Gen AI",
                "JavaScript",
                "React",
                "Python",
            ],
        },
    ],
    "My thesis": [
        {
            Description:
                "My thesis focuses on real-time patient data collection and analysis using the Apache Kafka platform. As part of the research, I developed a prototype for healthcare that integrates Apache Kafka, Python, InfluxDB, and Grafana to enable real-time health data visualization.",
            GitHub: "github.com/otsosaarinen/thesis",
            Badges: [
                "Apache Kafka",
                "Python",
                "InfluxDB",
                "Grafana",
                " Real-time Analytics",
            ],
        },
    ],
};

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

            <div className="h-[100vh] w-auto m-0 flex flex-row flex-wrap justify-evenly items-center">
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
                                    "Azure",
                                    "Node.js",
                                    "TypeScript",
                                ]}
                                typeSpeed={80}
                            />
                        </span>
                    </h2>
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
            </div>
            <div className="h-[94vh] w-auto m-0 flex flex-col justify-center items-center gap-3">
                <div className="text-2xl font-medium">My projects</div>
                <div className="flex flex-row flex-wrap gap-3">
                    {Object.entries(projects).map(
                        ([projectKey, projectArray]) => (
                            <div
                                className="flex flex-col justify-center items-center gap-2"
                                key={projectKey}
                            >
                                <div className="bg-neutral-100 border-neutral-200 border-solid border-3 rounded-lg p-2">
                                    {projectArray.map(
                                        (project, projectIndex) => (
                                            <div
                                                className="flex flex-col gap-2"
                                                key={projectIndex}
                                            >
                                                <span className="text-2xl font-semibold bg-linear-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                                                    {projectKey}
                                                </span>
                                                <span className="flex flex-row flex-wrap gap-1">
                                                    {project.Badges.map(
                                                        (badge, badgeIndex) => (
                                                            <Badge
                                                                key={badgeIndex}
                                                                className="text-base bg-white"
                                                                variant={
                                                                    "outline"
                                                                }
                                                            >
                                                                {badge}
                                                            </Badge>
                                                        )
                                                    )}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                                {projectArray.map((project, index) => (
                                    <AlertDialog key={index}>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="outline">
                                                Read more
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    {projectKey}
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    {project.Description}
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogAction>
                                                    Close
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                ))}
                            </div>
                        )
                    )}
                </div>
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
