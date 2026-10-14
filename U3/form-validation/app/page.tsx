"use client";

import {submitForm} from "./action";
import {useState} from "react";

export default function Home() {

  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData= new FormData(event.currentTarget);
    const name= formData.get("name") as string;
    const email= formData.get("email") as string;
    const age= Number(formData.get("age"));

    if(!name.trim())
    {
      setMessage("Name is required");
      return;
    }
    if(!email.trim())
    {
      setMessage("Email  is required");
      return;
    }
    if(!age)
    {
      setMessage("Age is required");
      return;
    }
    
  }
  return (

  );
}
