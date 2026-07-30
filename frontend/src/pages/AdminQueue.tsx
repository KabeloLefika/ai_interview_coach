import { useEffect, useState } from "react";
import axios from "axios";

interface Student {
    id: string;
    name: string;
    email: string;
    filename: string;
    status: string;
}

export default function AdminQueue() {

    const [queue,setQueue] = useState<Student[]>([]);

    const loadQueue = async ()=>{

        const res = await axios.get("http://localhost:8000/queue");

        setQueue(res.data.queue || []);
    }

    useEffect(()=>{

        loadQueue();

        const interval = setInterval(loadQueue,3000);

        return ()=>clearInterval(interval);

    },[]);

    return(

        <div className="min-h-screen bg-[#08070A] text-white p-10">

            <h1 className="text-4xl font-bold mb-8">
                Interview Queue
            </h1>

            <div className="space-y-5">

                {queue.map((student,index)=>(

                    <div
                        key={student.id}
                        className="border border-[#93CD0C] rounded-xl p-5 flex justify-between items-center"
                    >

                        <div>

                            <h2 className="font-bold text-xl">
                                #{index+1} {student.name}
                            </h2>

                            <p>{student.email}</p>

                            <p className="text-sm text-gray-400">
                                {student.filename}
                            </p>

                            <p className="mt-2 text-sm">
                                Status:
                                <span
                                    className={`ml-2 font-semibold ${
                                        student.status === "waiting"
                                            ? "text-yellow-400"
                                            : student.status === "called"
                                            ? "text-green-400"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {student.status}
                                </span>
                            </p>

                        </div>

                        <button
                            onClick={async () => {

                                try {

                                    await axios.post(
                                        `http://localhost:8000/call-student/${student.id}`
                                    );

                                    loadQueue();

                                } catch (error) {

                                    console.error(error);
                                    alert("Unable to call student.");

                                }

                            }}
                            className="rounded-lg bg-[#93CD0C] px-6 py-3 font-bold text-black transition hover:bg-[#A6E312]"
                        >

                            Start Interview

                        </button>

                    </div>

                ))}

            </div>

        </div>

    )

}