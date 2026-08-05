

// export default function Home() {
//   return (
//     <div style={{ textAlign:"center",padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1 style={{fontSize: '100px'}}>Hello User</h1>
//       <p style={{color: 'yellow', textWrap:'wrap', textAlign:'center', width: '1000px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque optio autem atque eveniet dolor, esse dolores perferendis excepturi reiciendis aspernatur voluptas quos in quisquam harum nulla repellat impedit dolore.</p>
//     </div>
//   );
// }

export default function Home()
{
  // const student={
  //   name: "Bob",
  //   age: 26,
  //   course: "MCA"
  // };
  
  // return(
  //   <div style={{textAlign:'center', marginTop:'20vh', justifyContent:'center', backgroundColor:'grey', width:'max-content', color:'black', padding:'50px'}}>
  //     <h2 style={{color:'blue', fontSize:'2em'}}>Student Details</h2>
  //     <p>Name: {student.name}</p>
  //     <p>Age: {student.age}</p>
  //     <p>course: {student.course}</p>
  //   </div>
  // );
    const number=25;



    return(
    <div style={{textAlign:'center', marginTop:'20vh', justifyContent:'center', backgroundColor:'grey', width:'max-content', color:'black', padding:'50px'}}>
      <h2 style={{color:'blue', fontSize:'2em'}}>Even Or Odd</h2>
      {
        number%2===0?<p>{number} is Even</p>: <p>{number} is Odd</p>
      }
    </div>
  );
}