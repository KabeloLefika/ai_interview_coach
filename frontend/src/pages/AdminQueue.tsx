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

    const [filter, setFilter] = useState<
        "all" | "waiting" | "called" | "interviewing" | "completed"
    >("all");

    const [search, setSearch] = useState("");

    const loadData = async () => {

        try {

            const [queueRes, statsRes] = await Promise.all([

                axios.get("http://localhost:8000/queue"),

                axios.get("http://localhost:8000/queue-stats"),

            ]);

            setQueue(queueRes.data.queue || []);

            setStats(statsRes.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        loadData();

        const interval = setInterval(loadData, 3000);

        return () => clearInterval(interval);

    }, []);

    const filteredQueue = queue.filter((student) => {

        const matchesFilter =
            filter === "all"
                ? true
                : student.status === filter;

        const matchesSearch =
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.email.toLowerCase().includes(search.toLowerCase());

        return matchesFilter && matchesSearch;

    });

    return (

        <div className="min-h-screen bg-[#08070A] text-white p-10">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">

                <div>

                    <h1 className="text-5xl font-bold">

                        AI Career Coach

                    </h1>

                    <p className="mt-3 text-lg text-gray-400">

                        Live Interview Management Dashboard

                    </p>

                </div>

                <div className="mt-6 lg:mt-0 flex items-center gap-3 rounded-full border border-[#93CD0C] bg-[#131118] px-6 py-3">

                    <div className="h-3 w-3 rounded-full bg-[#93CD0C] animate-pulse"></div>

                    <span className="font-semibold text-[#93CD0C]">

                        Live Updates

                    </span>

                </div>

            </div>

            {/* Statistics */}

            <div className="grid grid-cols-2 xl:grid-cols-5 gap-6 mb-10">

                <button
                    onClick={() => setFilter("all")}
                    className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-105 ${
                        filter === "all"
                            ? "border-[#93CD0C] bg-[#15121B] shadow-[0_0_25px_rgba(147,205,12,0.25)]"
                            : "border-[#232129] bg-[#131118]"
                    }`}
                >

                    <p className="text-gray-400">

                        Total Students

                    </p>

                    <h2 className="mt-3 text-5xl font-bold">

                        {stats.total}

                    </h2>

                </button>

                <button
                    onClick={() => setFilter("waiting")}
                    className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-105 ${
                        filter === "waiting"
                            ? "border-yellow-400 bg-[#15121B]"
                            : "border-[#232129] bg-[#131118]"
                    }`}
                >

                    <p className="text-gray-400">

                        Waiting

                    </p>

                    <h2 className="mt-3 text-5xl font-bold text-yellow-400">

                        {stats.waiting}

                    </h2>

                </button>

                <button
                    onClick={() => setFilter("called")}
                    className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-105 ${
                        filter === "called"
                            ? "border-blue-400 bg-[#15121B]"
                            : "border-[#232129] bg-[#131118]"
                    }`}
                >

                    <p className="text-gray-400">

                        Called

                    </p>

                    <h2 className="mt-3 text-5xl font-bold text-blue-400">

                        {stats.called}

                    </h2>

                </button>

                <button
                    onClick={() => setFilter("interviewing")}
                    className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-105 ${
                        filter === "interviewing"
                            ? "border-[#93CD0C] bg-[#15121B]"
                            : "border-[#232129] bg-[#131118]"
                    }`}
                >

                    <p className="text-gray-400">

                        Interviewing

                    </p>

                    <h2 className="mt-3 text-5xl font-bold text-[#93CD0C]">

                        {stats.interviewing}

                    </h2>

                </button>

                <button
                    onClick={() => setFilter("completed")}
                    className={`rounded-2xl border p-6 text-left transition-all duration-300 hover:scale-105 ${
                        filter === "completed"
                            ? "border-purple-500 bg-[#15121B]"
                            : "border-[#232129] bg-[#131118]"
                    }`}
                >

                    <p className="text-gray-400">

                        Completed

                    </p>

                    <h2 className="mt-3 text-5xl font-bold text-purple-400">

                        {stats.completed}

                    </h2>

                </button>

            </div>

            {/* Search */}

            <div className="mb-10">

                <input

                    type="text"

                    placeholder=" Search by candidate name or email..."

                    value={search}

                    onChange={(e) => setSearch(e.target.value)}

                    className="w-full rounded-xl border border-[#232129] bg-[#131118] px-5 py-4 text-white placeholder-gray-500 outline-none transition-all focus:border-[#93CD0C]"

                />

            </div>

                        {/* Overview */}

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold">

                    {filter === "all"
                        ? "All Candidates"
                        : `${filter.charAt(0).toUpperCase()}${filter.slice(1)} Candidates`}

                </h2>

                <span className="text-gray-400">

                    {filteredQueue.length} Candidate{filteredQueue.length !== 1 ? "s" : ""}

                </span>

            </div>

            {/* Candidate List */}

            <div className="space-y-5">

                {filteredQueue.length === 0 ? (

                    <div className="rounded-2xl border border-dashed border-[#232129] bg-[#131118] py-24 text-center">

                        <div className="text-6xl mb-6">
                            📭
                        </div>

                        <h2 className="text-3xl font-bold text-gray-300">

                            No Candidates Found

                        </h2>

                        <p className="mt-4 text-gray-500">

                            There are currently no candidates matching this filter.

                        </p>

                    </div>

                ) : (

                    filteredQueue.map((student) => (

                        <div

                            key={student.id}

                            className="rounded-2xl border border-[#232129] bg-[#131118] p-6 transition-all duration-300 hover:border-[#93CD0C] hover:shadow-[0_0_25px_rgba(147,205,12,0.15)] hover:-translate-y-1"

                        >

                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                                {/* Candidate */}

                                <div className="flex items-center gap-5">

                                    <div className="h-16 w-16 rounded-full bg-[#93CD0C] flex items-center justify-center text-2xl font-bold text-black">

                                        {student.name.charAt(0).toUpperCase()}

                                    </div>

                                    <div>

                                        <h2 className="text-2xl font-bold">

                                            {student.status === "waiting" && (

                                                <span className="text-[#93CD0C] mr-2">

                                                    #{student.queue_position}

                                                </span>

                                            )}

                                            {student.name}

                                        </h2>

                                        <p className="mt-2 text-gray-300">

                                            {student.email}

                                        </p>

                                        <p className="text-sm text-gray-500">

                                            {student.filename}

                                        </p>

                                    </div>

                                </div>

                                {/* Status + Actions */}

                                <div className="flex flex-col lg:items-end gap-4">

                                    <span

                                        className={`rounded-full px-5 py-2 text-sm font-bold ${
                                            student.status === "waiting"

                                                ? "bg-yellow-500/20 text-yellow-300"

                                                : student.status === "called"

                                                ? "bg-blue-500/20 text-blue-300"

                                                : student.status === "interviewing"

                                                ? "bg-[#93CD0C]/20 text-[#93CD0C]"

                                                : "bg-purple-500/20 text-purple-300"
                                        }`}

                                    >

                                        {student.status === "waiting" && " Waiting"}

                                        {student.status === "called" && " Called"}

                                        {student.status === "interviewing" && " Interviewing"}

                                        {student.status === "completed" && " Completed"}

                                    </span>

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

                                        className={`rounded-xl px-8 py-3 font-bold transition-all duration-300 ${
                                            student.status === "waiting"

                                                ? "bg-[#93CD0C] text-black hover:bg-[#A6E312] hover:scale-105"

                                                : student.status === "called"

                                                ? "bg-blue-500 text-white cursor-default"

                                                : student.status === "interviewing"

                                                ? "bg-orange-500 text-white cursor-default"

                                                : "bg-purple-500 text-white cursor-default"
                                        }`}

                                    >

                                        {student.status === "waiting"

                                            ? " Start Interview"

                                            : student.status === "called"

                                            ? " Called"

                                            : student.status === "interviewing"

                                            ? " Live"

                                            : " Completed"}

                                    </button>

                                </div>

                            </div>

                        </div>

                    ))

                )}

            </div>
        </div>

    );

}