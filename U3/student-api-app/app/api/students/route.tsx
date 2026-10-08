import { NextResponse } from "next/server";
import { students, Student } from "@/lib/students";

// GET all students
export async function GET() {
  return NextResponse.json(students);
}

// CREATE a student
export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || body.marks === undefined) {
      return NextResponse.json(
        { message: "Name and marks are required" },
        { status: 400 }
      );
    }

    const newStudent: Student = {
      id: Date.now(),
      name: body.name,
      marks: Number(body.marks),
    };

    students.push(newStudent);

    return NextResponse.json(
      {
        message: "Student created successfully",
        student: newStudent,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request" },
      { status: 400 }
    );
  }
}
