"use server";

export async function addNumbers(previousState: number | null, formData: FormData) {
    const num1 = Number(formData.get("num1"));
    const num2 = Number(formData.get("num2"));

    const result = num1 + num2;

    console.log("Result:", result);

    return result;
}