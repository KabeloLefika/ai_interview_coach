import AdminLayout from "../components/layouts/AdminLayout";
import ResultCard from "../components/results/ResultCard";

export default function Results() {

    return (

        <AdminLayout>

            <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-10">

                <div className="mx-auto max-w-7xl">

                    <ResultCard />

                </div>

            </div>

        </AdminLayout>

    );

}