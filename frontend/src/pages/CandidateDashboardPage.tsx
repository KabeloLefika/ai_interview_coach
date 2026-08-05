import AdminLayout from "../components/layouts/AdminLayout";
import CandidateDashboard from "../components/analysis/CandidateDashboard";

export default function CandidateDashboardPage() {

    return (

        <AdminLayout>

            <div className="px-6 py-10">

                <div className="mx-auto max-w-7xl">

                    <CandidateDashboard />

                </div>

            </div>

        </AdminLayout>

    );

}