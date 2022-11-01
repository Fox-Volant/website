import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactForm({ handleSubmit, register }) {
    // if () {
    //     return <p>Thank you! We'll be in touch.</p>;
    // }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contact_name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" as="input" {...register("name", { required: true, maxLength: 100 })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact_email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" as="input" {...register("email", { required: true, maxLength: 100 })} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact_message">
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} {...register("message", { required: true})}/>
            </Form.Group>
            <Form.Group className="mb-3">
                {/* <input type="text" name="_gotcha" className="d-none" /> */}
                <Button type="submit">Submit</Button>
            </Form.Group>
        </Form>
    );
}
