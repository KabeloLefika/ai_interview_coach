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
          flex
          flex-col
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          p-6
          sm:p-8
          md:p-10
          lg:p-12
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
            size={48}
            className="mx-auto text-gray-500 sm:w-16 sm:h-16"
          />
        ) : (
          <UploadCloud
            size={48}
            className="mx-auto text-[#93CD0C] sm:w-16 sm:h-16"
          />
        )}

        <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white text-center">
          {disabled
            ? "Resume Upload Locked"
            : "Drag & Drop your Resume"}
        </h3>

        <p className="mt-2 text-center text-gray-400 text-sm sm:text-base">
          {disabled
            ? "This interview has already been completed."
            : "or click to browse"}
        </p>

        {!disabled && (
          <p className="mt-5 text-center text-xs sm:text-sm text-gray-400">
            PDF only • Maximum 5MB
          </p>
        )}
      </div>

      {file && (
        <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-[#93CD0C] bg-[#1A181F] p-4 sm:flex-row sm:items-center">
          <FileText
            className="mr-3 text-[#93CD0C]"
            size={24}
          />

          <div className="min-w-0">
            <p className="font-semibold text-white">
              Resume Selected
            </p>

            <p className="w-full truncate text-sm text-gray-400">
              {file.name}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}