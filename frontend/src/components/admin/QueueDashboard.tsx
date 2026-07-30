import { useEffect, useState } from "react";
import api from "../../services/api";

interface Student {
    id: string;
    name: string;
    email: string;
    filename: string;
    status: string;
}

export default function QueueDashboard() {
    const [students, setStudents] = useState<Student[]>([]);

    const loadQueue = async () => {
        try {
            const res = await api.get("/queue");
            setStudents(res.data.queue);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadQueue();

        const interval = setInterval(loadQueue, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="max-w-5xl mx-auto">

            <h1 className="text-4xl font-bold text-white mb-8">
                Interview Queue
            </h1>

            <div className="space-y-4">

                {students.map((student, index) => (

                    <div
                        key={student.id}
                        className="bg-[#1B1A24] border border-[#93CD0C] rounded-xl p-5 flex justify-between"
                    >

                        <div>

                            <div className="text-[#93CD0C] text-xl font-semibold">
                                #{index + 1}
                            </div>

                            <div className="text-white text-lg">
                                {student.name}
                            </div>

                            <div className="text-gray-400">
                                {student.email}
                            </div>

                            <div className="text-sm text-gray-500">
                                {student.filename}
                            </div>

                        </div>

                        <div className="text-white font-semibold">
                            {student.status}
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}