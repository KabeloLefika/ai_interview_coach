import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileText, Lock } from "lucide-react";

interface UploadZoneProps {
  file: File | null;
  disabled?: boolean;
  onFileSelected: (file: File) => void;
}

export default function UploadZone({
  file,
  disabled = false,
  onFileSelected,
}: UploadZoneProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (disabled) return;

      if (acceptedFiles.length > 0) {
        onFileSelected(acceptedFiles[0]);
      }
    },
    [disabled, onFileSelected]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    disabled,
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
          rounded-3xl
          border-2
          border-dashed
          p-12
          transition-all
          duration-300

          ${
            disabled
              ? "cursor-not-allowed border-gray-700 bg-[#1A181F] opacity-60"
              : "cursor-pointer border-[#93CD0C] bg-[#131118] hover:bg-[#18151F] hover:border-[#A6E312]"
          }
        `}
      >
        <input {...getInputProps()} />

        {disabled ? (
          <Lock
            size={72}
            className="mx-auto text-gray-500"
          />
        ) : (
          <UploadCloud
            size={72}
            className="mx-auto text-[#93CD0C]"
          />
        )}

        <h3 className="mt-6 text-2xl font-bold text-white">
          {disabled
            ? "Resume Upload Locked"
            : "Drag & Drop your Resume"}
        </h3>

        <p className="mt-2 text-gray-400">
          {disabled
            ? "This interview has already been completed."
            : "or click to browse"}
        </p>

        {!disabled && (
          <p className="mt-6 text-sm text-gray-400">
            PDF only • Maximum 5MB
          </p>
        )}
      </div>

      {file && (
        <div className="mt-6 flex items-center rounded-xl border border-[#93CD0C] bg-[#1A181F] p-4">
          <FileText
            className="mr-3 text-[#93CD0C]"
            size={28}
          />

          <div>
            <p className="font-semibold text-white">
              Resume Selected
            </p>

            <p className="text-sm text-gray-400">
              {file.name}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}