interface student{
  name:string;
  age:number;
  marks: number;
}

function displayStudent( props: studentProps): void{
    console.log("Name:", props.name);
    console.log("Age:", props.age);
    console.log("Marks:", props.marks);
}

const student= {
    name: "Zyan",
    age:25,
    marks: 97
};

displayStudent(student)