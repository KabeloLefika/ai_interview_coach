import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText } from "lucide-react";

interface UploadZoneProps {
  file: File | null;
  onFileSelected: (file: File) => void;
}

export default function UploadZone({
  file,
  onFileSelected,
}: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileSelected(acceptedFiles[0]);
      }
    },
    [onFileSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  return (
    <div className="w-full">
      <div
        {...getRootProps()}
        className={`
          cursor-pointer
          rounded-3xl
          border-2
          border-dashed
          p-12
          transition-all
          duration-300
          text-center

          ${
            isDragActive
              ? "border-blue-600 bg-blue-50 scale-[1.02]"
              : "border-slate-300 hover:border-blue-500 hover:bg-slate-50"
          }
        `}
      >
        <input {...getInputProps()} />

        <UploadCloud
          size={72}
          className="mx-auto text-blue-600"
        />

        <h3 className="mt-6 text-2xl font-bold text-slate-800">
          Drag & Drop your Resume
        </h3>

        <p className="mt-2 text-slate-500">
          or click to browse
        </p>

        <p className="mt-6 text-sm text-slate-400">
          PDF only • Maximum 5MB
        </p>
      </div>

      {file && (
        <div className="mt-6 flex items-center rounded-xl border border-green-200 bg-green-50 p-4">
          <FileText
            className="mr-3 text-green-600"
            size={28}
          />

          <div>
            <p className="font-semibold text-green-700">
              Resume Selected
            </p>

            <p className="text-sm text-slate-600">
              {file.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}