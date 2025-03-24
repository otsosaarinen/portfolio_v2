import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Home() {
    return (
        <>
            <div className="flex flex-col gap-10 items-center justify-center w-auto h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-8xl font-semibold">otso saarinen</h1>
                    <h2 className="text-4xl">ict engineering student</h2>
                </div>

                <div className="flex flex-col justify-center items-center text-xl">
                    <div>my skills</div>
                    <div className="flex flex-row">
                        <div className="text-xl flex flex-col justify-start items-center gap-1 px-4">
                            frontend
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">JavaScript</Badge>
                            <Badge variant="outline">React</Badge>
                            <Badge variant="outline">Next.js</Badge>
                            <Badge variant="outline">Tailwind CSS</Badge>
                        </div>
                        <div className="text-xl flex flex-col justify-start items-center gap-1 px-4">
                            backend
                            <Badge variant="outline">Node.js</Badge>
                            <Badge variant="outline">Express.js</Badge>
                            <Badge variant="outline">Python</Badge>
                        </div>
                        <div className="text-xl flex flex-col justify-start items-center gap-1 px-4">
                            cloud & database
                            <Badge variant="outline">Microsoft Azure</Badge>
                            <Badge variant="outline">Apache Kafka</Badge>
                            <Badge variant="outline">SQLite3</Badge>
                        </div>
                        <div className="text-xl flex flex-col justify-start items-center gap-1 px-4">
                            misc
                            <Badge variant="outline">REST API</Badge>
                            <Badge variant="outline">Gen AI</Badge>
                            <Badge variant="outline">GitHub</Badge>
                            <Badge variant="outline">Grafana</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
