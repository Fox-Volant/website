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
                <Form.Control required type="text" name="name" as="input" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact_email">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" name="email" as="input" />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contact_message">
                <Form.Label>Message</Form.Label>
                <Form.Control required name="message" as="textarea" rows={3} />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                {/* TODO: Recaptcha key for test only - needs replacing for prod */}
                {/* <div className="g-recaptcha mt-3" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div> */}
                <div className="g-recaptcha mt-3" data-sitekey="6LcOn7khAAAAAA_ae7oZpxAzAqPLUQppJ4_jRr-F"></div>
            </Form.Group>
            <Form.Group className="mb-3">
                <input type="text" name="_gotcha" className="d-none" />
                <Button type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}

export default ContactForm;
