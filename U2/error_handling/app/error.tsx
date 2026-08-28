async function getStudents(){
    const response = await fetch(
        "https://example.com/api/students"
    );
    if(!response.ok)
    {
        throw new Error("Failed to fetch students")
    }
    return response.json();
}
 export default  async function StudentsPage() {
    const students= await getStudents();
    return(
        <div>
            <h1>Students</h1>
            {students.map((student: any)=>(
             <p key={student.id}>{student.name}</p>
            ))}
        </div>
    )
 }