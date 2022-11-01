import React from "react"
import { useForm } from "react-hook-form"
import ContactForm from "../components/ContactForm/ContactForm"

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    fetch(`/api/form`, {
      method: `POST`,
      body: JSON.stringify(data),
      headers: {
        "content-type": `application/json`,
      },
    })
      .then(res => res.json())
      .then(body => {
        console.log(`response from API:`, body)
      })
  }

  console.log({ errors })

  return (
    <ContactForm handleSubmit={handleSubmit(onSubmit)} register={register}/>
  )
}