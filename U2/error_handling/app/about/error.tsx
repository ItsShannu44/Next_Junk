// "use client";

// export  default function Error({
//     error, reset,
// }:{
//     error: Error& {digest?: string};
//     reset: ()=>void;
// }){
//     return(
//         <div>
//             <h2>Something went wrong!</h2>

//             <button onClick={() => reset()}>Try Again</button>
//         </div>
//     )
// }

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