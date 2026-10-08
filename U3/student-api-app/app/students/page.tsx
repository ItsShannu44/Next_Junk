"use client";

import { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  marks: number;
};

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  async function loadStudents() {
    const response = await fetch("/api/students");
    const data = await response.json();

    setStudents(data);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function addStudent() {
    await fetch("/api/students", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        marks: Number(marks),
      }),
    });

    setName("");
    setMarks("");

    loadStudents();
  }

  async function deleteStudent(id: number) {
    await fetch(`/api/students/${id}`, {
      method: "DELETE",
    });

    loadStudents();
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>Student Management</h1>

      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addStudent}>
        Add Student
      </button>

      <hr />

      <h2>Students</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>
            <strong>{student.name}</strong>
            {" - "}
            Marks: {student.marks}

            {" "}

            <button
              onClick={() => deleteStudent(student.id)}
            >
              Delete
            </button>
          </p>
        </div>
      ))}
    </main>
  );
}
