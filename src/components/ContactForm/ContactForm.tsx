import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import TextFrame from "../TextFrame/TextFrame";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const { handleSubmit, register, formState } = useForm<FormData>();
    const { isSubmitSuccessful, isSubmitting } = formState;
    const onSubmit: SubmitHandler<FormData> = (data) => {
        fetch(`/api/form`, {
            method: `POST`,
            body: JSON.stringify(data),
            headers: {
                "content-type": `application/json`,
            },
        });
    };
    const showForm = (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={isSubmitting}>
                <Form.Group className="mb-3" controlId="contact_name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        as="input"
                        {...register("name", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact_email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        as="input"
                        {...register("email", {
                            required: true,
                            maxLength: 100,
                        })}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact_message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        {...register("message", { required: true })}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    {/* <input type="text" name="_gotcha" className="d-none" /> */}
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </fieldset>
        </Form>
    );
    return (
        <Row className="mb-2 mb-md-3 mb-xl-5">
            <Col>
                {isSubmitSuccessful ? (
                    <TextFrame className="p-5 text-center">
                        <h2>Thank you!</h2>
                        <p>
                            We appreciate your interest! We'll get back to you
                            as soon as we can!
                        </p>
                    </TextFrame>
                ) : (
                    <TextFrame className="p-5">{showForm}</TextFrame>
                )}
            </Col>
        </Row>
    );
}
