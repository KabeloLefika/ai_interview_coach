import { useState } from "react";

import Card from "../common/Card";
import Button from "../common/Button";
import UploadZone from "../upload/UploadZone";

import StudentForm from "./StudentForm";

export default function StudentUploadCard() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [file, setFile] = useState<File | null>(null);

  const submit = () => {

    console.log({
      name,
      email,
      file,
    });

  };

  return (

    <Card className="max-w-3xl mx-auto">

      <h1 className="text-3xl font-bold text-white text-center">

        Upload Your CV

      </h1>

      <p className="mt-3 text-center text-gray-400">

        Complete the information below before joining the interview queue.

      </p>

      <div className="mt-8">

        <StudentForm

          name={name}

          email={email}

          onNameChange={setName}

          onEmailChange={setEmail}

        />

      </div>

      <div className="mt-8">

        <UploadZone

          file={file}

          onFileSelected={setFile}

        />

      </div>

      <div className="mt-8">

        <Button

          onClick={submit}

          disabled={
            !name ||
            !email ||
            !file
          }

        >

          Join Interview Queue

        </Button>

      </div>

    </Card>

  );

}