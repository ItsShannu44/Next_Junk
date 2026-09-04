"use client";

export default function Num(){
    function checkNumber(){
        try{
            let number=10;

            if(number>5){
                throw new Error("Number is too big");
            }
            alert ("Number is valid")
        }catch(error)
        {
            alert("Error: Number is too big!");
        }
    }
    return(
        <div>
            <h1>Number Example</h1> <br /> <br />

            <button onClick={checkNumber} style={{ backgroundColor:"green",padding:"10px 20px", fontSize: "16px", cursor: "pointer", border: "1px solid black", borderRadius:"5px"}}>
            Check Number
            </button>
        </div>
    )
}