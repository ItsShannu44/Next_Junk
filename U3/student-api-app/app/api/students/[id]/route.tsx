import { NextResponse } from "next/server";
import { students } from "@/lib/students";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

// GET one student
export async function GET(
  request: Request,
  { params }: Context
) {
  const { id } = await params;

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(student);
}


// UPDATE a student
export async function PUT(
  request: Request,
  { params }: Context
) {
  const { id } = await params;

  const index = students.findIndex(
    (student) => student.id === Number(id)
  );

  if (index === -1) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  const body = await request.json();

  students[index] = {
    ...students[index],
    name: body.name ?? students[index].name,
    marks:
      body.marks !== undefined
        ? Number(body.marks)
        : students[index].marks,
  };

  return NextResponse.json({
    message: "Student updated successfully",
    student: students[index],
  });
}


// DELETE a student
export async function DELETE(
  request: Request,
  { params }: Context
) {
  const { id } = await params;

  const index = students.findIndex(
    (student) => student.id === Number(id)
  );

  if (index === -1) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  const deletedStudent = students.splice(index, 1)[0];

  return NextResponse.json({
    message: "Student deleted successfully",
    student: deletedStudent,
  });
}
