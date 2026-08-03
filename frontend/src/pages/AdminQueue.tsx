import { useEffect, useState } from "react";
import axios from "axios";

interface Student {
    id: string;
    name: string;
    email: string;
    filename: string;
    status: string;
    queue_position: number;
}

interface QueueStats {
    waiting: number;
    called: number;
    interviewing: number;
    completed: number;
    total: number;
}

export default function AdminQueue() {

    const [queue, setQueue] = useState<Student[]>([]);

    const [stats, setStats] = useState<QueueStats>({
        waiting: 0,
        called: 0,
        interviewing: 0,
        completed: 0,
        total: 0,
    });

    const loadData = async () => {

        try {

            const [queueRes, statsRes] = await Promise.all([
                axios.get("http://localhost:8000/queue"),
                axios.get("http://localhost:8000/queue-stats"),
            ]);

            setQueue(queueRes.data.queue || []);
            setStats(statsRes.data);

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadData();

        const interval = setInterval(loadData, 3000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="min-h-screen bg-[#08070A] text-white p-10">

            <h1 className="text-4xl font-bold mb-10">
                AI Interview Dashboard
            </h1>

            {/* Statistics */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-12">

                <div className="rounded-2xl border border-yellow-500 bg-[#131118] p-6">

                    <p className="text-gray-400">
                        Waiting
                    </p>

                    <h2 className="text-5xl font-bold text-yellow-400 mt-3">
                        {stats.waiting}
                    </h2>

                </div>

                <div className="rounded-2xl border border-blue-500 bg-[#131118] p-6">

                    <p className="text-gray-400">
                        Called
                    </p>

                    <h2 className="text-5xl font-bold text-blue-400 mt-3">
                        {stats.called}
                    </h2>

                </div>

                <div className="rounded-2xl border border-[#93CD0C] bg-[#131118] p-6">

                    <p className="text-gray-400">
                        Interviewing
                    </p>

                    <h2 className="text-5xl font-bold text-[#93CD0C] mt-3">
                        {stats.interviewing}
                    </h2>

                </div>

                <div className="rounded-2xl border border-purple-500 bg-[#131118] p-6">

                    <p className="text-gray-400">
                        Completed
                    </p>

                    <h2 className="text-5xl font-bold text-purple-400 mt-3">
                        {stats.completed}
                    </h2>

                </div>

                <div className="rounded-2xl border border-white bg-[#131118] p-6">

                    <p className="text-gray-400">
                        Total Students
                    </p>

                    <h2 className="text-5xl font-bold mt-3">
                        {stats.total}
                    </h2>

                </div>

            </div>

            {/* Queue */}

            <div className="space-y-5">

                {queue.map((student) => (

                    <div
                        key={student.id}
                        className="border border-[#232129] rounded-2xl bg-[#131118] p-6 flex justify-between items-center"
                    >

                        <div>

                            <h2 className="font-bold text-2xl">

                                {student.status === "waiting"
                                    ? `#${student.queue_position}`
                                    : ""}

                                {" "}
                                {student.name}

                            </h2>

                            <p className="text-gray-300 mt-2">
                                {student.email}
                            </p>

                            <p className="text-sm text-gray-500">
                                {student.filename}
                            </p>

                            <div className="mt-4">

                                <span
                                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                                        student.status === "waiting"
                                            ? "bg-yellow-500/20 text-yellow-400"

                                            : student.status === "called"
                                            ? "bg-blue-500/20 text-blue-400"

                                            : student.status === "interviewing"
                                            ? "bg-[#93CD0C]/20 text-[#93CD0C]"

                                            : "bg-purple-500/20 text-purple-400"
                                    }`}
                                >

                                    {student.status.toUpperCase()}

                                </span>

                            </div>

                        </div>

                        <button

                            disabled={student.status !== "waiting"}

                            onClick={async () => {

                                try {

                                    await axios.post(
                                        `http://localhost:8000/call-student/${student.id}`
                                    );

                                    loadData();

                                } catch (error) {

                                    console.error(error);

                                    alert("Unable to call student.");

                                }

                            }}

                            className={`rounded-lg px-6 py-3 font-bold transition ${
                                student.status === "waiting"
                                    ? "bg-[#93CD0C] text-black hover:bg-[#A6E312]"
                                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                            }`}

                        >

                            Start Interview

                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}