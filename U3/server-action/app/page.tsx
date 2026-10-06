"use client"
import { useActionState } from "react";
import { addNumbers } from "./actions ";

export default function Home() {
  const [result, formAction] = useActionState(addNumbers, null);

  return (
    <main>
      <h1>Addition of Two Numbers</h1>

      <form action={formAction}>
        <label>First Number:</label><br />
        <input type="number" id="num1" name="num1" placeholder="Enter the num1"/>
        <br />

        <label>Second Number:</label><br />
        <input type="number" id="num2" name="num2" placeholder="Enter the num2"/>
        <br />

        <input type="submit" value="Add" />
      </form>
      <div>
      {result !== null && (
        <h2>Result: {result}</h2>
      )}
      </div>
    </main>
  );
}