// Make sure to run npm install @formspree/react;
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
    const [state, handleSubmit] = useForm("mpznwybd");
    if (state.succeeded) {
        return <p>Thank you! We'll be in touch.</p>;
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contact_name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" as="input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact_email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" as="input" />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact_message">
                <Form.Label>Project Details</Form.Label>
                <Form.Control name="message" as="textarea" rows={3} />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <div className="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
                <input type="text" name="_gotcha" className="d-none" />
                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}

export default ContactForm;