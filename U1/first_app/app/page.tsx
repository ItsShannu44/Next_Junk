

// export default function Home() {
//   return (
//     <div style={{ textAlign:"center",padding: '2rem', fontFamily: 'sans-serif' }}>
//       <h1 style={{fontSize: '100px'}}>Hello User</h1>
//       <p style={{color: 'yellow', textWrap:'wrap', textAlign:'center', width: '1000px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque optio autem atque eveniet dolor, esse dolores perferendis excepturi reiciendis aspernatur voluptas quos in quisquam harum nulla repellat impedit dolore.</p>
//     </div>
//   );
// }

// export default function Home()
// {
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
    // const number=25;
// export default function Home()
// {
// function fact(n: number): number {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * fact(n - 1);
// }

//     return(
//     <center>
//     <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'grey', width:'max-content', color:'black', padding:'50px'}}>
//       <h2 style={{color:'blue', fontSize:'2em', fontWeight:'Bolder'}}>Factorial</h2>
//       {/* {
//         number%2===0?<p>{number} is Even</p>: <p>{number} is Odd</p>
//       } */}
//       <p>Factorial: {fact(5)}</p>
//     </div>
//     </center>
//   );
// }

// export default function Home()
// {
//   const beforeA =10;
//   const beforeB= 20;

//   let a=beforeA;
//   let b=beforeB;

//   let temp= a;
//   a=b;
//   b=temp;

//     return(
//     <center>
//     <div >
//       <h2>Before Swapping</h2>
//       <p > a= {beforeA} </p>
//       <p > b= {beforeB} </p>

//       <h2>After Swapping</h2> 
//       <p > a= {a} </p>
//       <p > b= {b} </p>
//     </div>
//     </center>
//   );
// }

// export default function Home()
// {
//   const beforeA =10;
//   const beforeB= 20;

//   let a=beforeA;
//   let b=beforeB;

//   let temp= a;
//   a=b;
//   b=temp;

//     return(
//     <center>
//     <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//       <h2 style={{color:'darkgreen', fontSize:'2em', fontWeight:'Bolder'}}>Before Swapping</h2>
//       <p style={{color:'white'}}> a= {beforeA} </p>
//       <p style={{color:'white'}}> b= {beforeB} </p>

//       <h2 style={{color:'darkgreen', fontSize:'2em', fontWeight:'Bolder'}}>After Swapping</h2> 
//       <p style={{color:'white'}}> a= {a} </p>
//       <p style={{color:'white'}}> b= {b} </p>
//     </div>
//     </center>
//   );
// }



// export default function Home() {
//   const marks = 85;
//   let grade = "";

//   if (marks >= 90) {
//     grade = "A+";
//   } else if (marks >= 80) {
//     grade = "A";
//   } else if (marks >= 70) {
//     grade = "B";
//   } else if (marks >= 60) {
//     grade = "C";
//   } else if (marks >= 50) {
//     grade = "D";
//   } else {
//     grade = "F";
//   }

//   return (
//     <center>
//     <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",}}>Student Grade Calculator</h2>

//         <p style={{color:'white'}}>Marks: {marks}</p>
//         <p style={{color:'white'}}>Grade: {grade}</p>
//       </div>
//     </center>
//   );
// }

// export default function Home() {
//   const num = -15;
//   let result = "";

//   if (num > 0) {
//     result = "Positive Number";
//   } else if (num < 0) {
//     result = "Negative Number";
//   } else {
//     result = "Zero";
//   }

//   return (
//     <center>
//       <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",
//           }}>Positive, Negative or Zero</h2>

//         <p style={{color:'white'}}>Number: {num}</p>
//         <p style={{color:'white'}}>Result: {result}</p>
//       </div>
//     </center>
//   );
// }


// export default function Home() {

//   function square(num: number): number {
//     return num * num;
//   }

//   const number = 8;
//   const result = square(number);

//   return (
//     <center>
//       <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",
//           }}
//         >
//           Square of a Number
//         </h2>

//         <p style={{color:'white'}}>Number: {number}</p>
//         <p style={{color:'white'}}>Square: {result}</p>
//       </div>
//     </center>
//   );
// }

// export default function Home() {

//   function isPrime(num: number): boolean {
//     if (num <= 1) {
//       return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   const number = 17;

//   return (
//     <center>
//       <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",
//           }}
//         >
//           Prime Number Checker
//         </h2>

//         <p style={{color:'white'}}>Number: {number}</p>
//         <p style={{color:'white'}}>Result: {isPrime(number) ? "Prime Number" : "Not a Prime Number"}</p>
//       </div>
//     </center>
//   );
// }


// export default function Home() {

//   function reverseString(str: string): string {
//     return str.split("").reverse().join("");
//   }

//   const text = "Shanmukha";
//   const reversed = reverseString(text);

//   return (
//     <center>
//       <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",
//           }}
//         >Reverse a String</h2>

//         <p  style={{color:'white'}}>Original String: {text}</p>
//         <p  style={{color:'white'}}>Reversed String: {reversed}</p>
//       </div>
//     </center>
//   );
// }


// export default function Home() {

//   function findSmallest(arr: number[]): number {
//     let smallest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < smallest) {
//         smallest = arr[i];
//       }
//     }

//     return smallest;
//   }

//   const numbers = [12, 45, 3, 27, 8, 19];
//   const smallest = findSmallest(numbers);

//   return (
//     <center>
//       <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",
//           }}
//         >Smallest Element in an Array</h2>

//         <p style={{color:'white'}}>Array: {numbers.join(", ")}</p>
//         <p style={{color:'white'}}>Smallest Element: {smallest}</p>
//       </div>
//     </center>
//   );
// }


// export default function Home() {

//   function calculateSumAndAverage(arr: number[]) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }

//     const average = sum / arr.length;

//     return { sum, average };
//   }

//   const numbers = [10, 20, 30, 40, 50];
//   const result = calculateSumAndAverage(numbers);

//   return (
//     <center>
//       <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
//         <h2
//           style={{
//             color: "darkgreen",
//             fontSize: "2em",
//             fontWeight: "bold",
//           }}
//         >
//           Sum and Average of Array Elements
//         </h2>

//         <p style={{color:'white'}}>Array: {numbers.join(", ")}</p>
//         <p style={{color:'white'}}>Sum: {result.sum}</p>
//         <p style={{color:'white'}}>Average: {result.average}</p>
//       </div>
//     </center>
//   );
// }


export default function Home() {

  function reverseArray(arr: number[]): number[] {
    let reversed: number[] = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }

    return reversed;
  }

  const numbers = [10, 20, 30, 40, 50];
  const reversedNumbers = reverseArray(numbers);

  return (
    <center>
      <div style={{textAlign:'center',borderRadius:'10px', marginTop:'20vh', justifyContent:'center', backgroundColor:'black', width:'max-content', color:'black', padding:'50px'}}>
        <h2
          style={{
            color: "darkgreen",
            fontSize: "2em",
            fontWeight: "bold",
          }}
        >
          Reverse an Array
        </h2>

        <p style={{color:'white'}}>Original Array: {numbers.join(", ")}</p>
        <p style={{color:'white'}}>Reversed Array: {reversedNumbers.join(", ")}</p>
      </div>
    </center>
  );
}