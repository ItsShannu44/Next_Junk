// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// export default function Home() {
//   const students: Student[] = [
//     {
//       id: 1,
//       name: "Shanmukha",
//       marks: 85,
//     },
//     {
//       id: 2,
//       name: "Rahul",
//       marks: 78,
//     },
//     {
//       id: 3,
//       name: "Priya",
//       marks: 92,
//     },
//     {
//       id: 4,
//       name: "Kiran",
//       marks: 74,
//     },
//     {
//       id: 5,
//       name: "Ananya",
//       marks: 88,
//     },
//   ];

//   return (
//     <div>
//       <h1>Student Details</h1>

//       {students.map((student) => (
//         <div key={student.id}>
//           <p>Student ID: {student.id}</p>
//           <p>Student Name: {student.name}</p>
//           <p>Marks: {student.marks}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// import StudentList from "../StudentList";

// export default function Home() {
//   const students = [
//     { id: 101, name: "Ravi", marks: 85 },
//     { id: 102, name: "Priya", marks: 92 },
//     { id: 103, name: "Kumar", marks: 76 },
//   ];

//   return (
//     <main>
//       <StudentList students={students} />
//     </main>
//   );
// }

// interface Student {
//   id: number;
//   name: string;
//   marks: number;
//   result: string;
// }

// export default function Home() {
//   const student: Student = {
//     id: 101,
//     name: "Ravi",
//     marks: 85,
//     result: "Pass",
//   };

//   return (
//     <main>
//       <h1>Student Result</h1>

//       <p>Name: {student.name}</p>
//       <p>ID: {student.id}</p>
//       <p>Marks: {student.marks}</p>
//       <p>Result: {student.result}</p>
//     </main>
//   );
// }


// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// export default function Home() {
//   const student: Student = {
//     id: 101,
//     name: "Ravi",
//     marks: 85,
//   };

//   return (
//     <main>
//       <h1>Student Details</h1>

//       <p>Student ID: {student.id}</p>
//       <p>Student Name: {student.name}</p>
//       <p>Marks: {student.marks}</p>
//     </main>
//   );
// }
import StudentList from "./StudentList";

export default function Home() {
  const students = [
    {
      id: 101,
      name: "Ravi",
      marks: 85,
      result: "Pass",
    },
    {
      id: 102,
      name: "Priya",
      marks: 92,
      result: "Pass",
    },
    {
      id: 103,
      name: "Kumar",
      marks: 35,
      result: "Pass",
    },
    {
      id: 104,
      name: "Anitha",
      marks: 28,
      result: "Fail",
    },
  ];

  return (
    <main>
      <h1>Student Management System</h1>

      <StudentList students={students} />
    </main>
  );
}

