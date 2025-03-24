import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-auto h-screen">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="">otso saarinen</h1>
                    <h2 className="">ict engineering student</h2>
                </div>

                <div className="flex flex-row gap-5">
                    <div>github</div>
                    <div>linkedin</div>
                    <div>email</div>
                </div>

                <div className="flex flex-row gap-10">
                    <div className="flex flex-col justify-start items-center gap-1">
                        frontend
                        <Badge variant="outline">TypeScript</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Next.js</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-1">
                        backend
                        <Badge variant="outline">Node.js</Badge>
                        <Badge variant="outline">Express.js</Badge>
                        <Badge variant="outline">Python</Badge>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-1">
                        cloud & database
                        <Badge variant="outline">Microsoft Azure</Badge>
                        <Badge variant="outline">Apache Kafka</Badge>
                        <Badge variant="outline">SQLite3</Badge>
                    </div>

                    <div className="flex flex-col justify-start items-center gap-1">
                        misc
                        <Badge variant="outline">REST API</Badge>
                        <Badge variant="outline">Gen AI</Badge>
                        <Badge variant="outline">GitHub</Badge>
                        <Badge variant="outline">Grafana</Badge>
                    </div>
                </div>
            </div>
        </>
    );
}
