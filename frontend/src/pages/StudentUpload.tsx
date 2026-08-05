import StudentLayout from "../components/layouts/StudentLayout";
import StudentUploadCard from "../components/students/StudentUploadCard";

export default function StudentUpload() {

  return (

    <StudentLayout>

      <div className="flex items-center justify-center px-6 py-10">

        <StudentUploadCard />

      </div>

    </StudentLayout>

  );
}