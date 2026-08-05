import AdminLayout from "../components/layouts/AdminLayout";
import InterviewStation from "../components/interview/InterviewStation";

export default function InterviewStationPage() {

    return (

        <AdminLayout>

            <div className="flex min-h-screen items-center justify-center px-6 py-10">

                <InterviewStation />

            </div>

        </AdminLayout>

    );

}