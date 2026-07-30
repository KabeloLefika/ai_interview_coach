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

        setQueue(res.data);
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

                        </div>

                        <button className="bg-[#93CD0C] text-black px-6 py-3 rounded-lg font-bold">

                            Start Interview

                        </button>

                    </div>

                ))}

            </div>

        </div>

    )

}