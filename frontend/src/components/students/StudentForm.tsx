import type{ ChangeEvent } from "react";

interface Props {
  name: string;
  email: string;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

export default function StudentForm({
  name,
  email,
  onNameChange,
  onEmailChange,
}: Props) {
  return (
    <div className="space-y-6">

      <div>
        <label className="mb-2 block text-white font-semibold">
          Full Name
        </label>

        <input
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onNameChange(e.target.value)
          }
          className="w-full rounded-xl border border-[#232129] bg-[#1A181F] p-4 text-white focus:border-[#93CD0C]"
          placeholder="John Smith"
        />
      </div>

      <div>
        <label className="mb-2 block text-white font-semibold">
          Email Address
        </label>

        <input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onEmailChange(e.target.value)
          }
          className="w-full rounded-xl border border-[#232129] bg-[#1A181F] p-4 text-white focus:border-[#93CD0C]"
          placeholder="john@email.com"
        />
      </div>

    </div>
  );
}