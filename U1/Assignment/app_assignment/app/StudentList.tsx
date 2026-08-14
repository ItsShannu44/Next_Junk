
// interface Student {
//   id: number;
//   name: string;
//   marks: number;
// }

// interface StudentListProps {
//   students: Student[];
// }

// export default function StudentList({ students }: StudentListProps) {
//   return (
//     <div>
//       <h1>Student List</h1>

//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             ID: {student.id} | Name: {student.name} | Marks: {student.marks}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


interface Student {
  id: number;
  name: string;
  marks: number;
  result: string;
}

interface StudentListProps {
  students: Student[];
}

export default function StudentList({
  students,
}: StudentListProps) {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.marks}</td>
            <td>{student.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}