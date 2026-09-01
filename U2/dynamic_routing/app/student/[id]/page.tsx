// export default async function ProductPage({ 
//     params,
// }:{
//     params: Promise<{id: string}>
// }){
//     const {id} = await params;
//     return <h1>Product ID: {id}</h1>;
// }

interface StudentPageProps{
    params: Promise<{id:string;}>;
}

export default async function StudentPage({
    params,
}:StudentPageProps){
    const {id}=await params;
    return(
        <div>
            <h1>Student Details</h1>
            <p>Student ID: {id}</p>
        </div>
    )
}