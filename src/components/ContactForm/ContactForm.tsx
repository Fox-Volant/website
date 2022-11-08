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
    const [validated, setValidated] = React.useState(false);
    const { handleSubmit, register, formState } = useForm<FormData>({
        mode: "onBlur",
        reValidateMode: "onSubmit",
    });
    const { isSubmitSuccessful, isSubmitting, isValid } = formState;
    const onSubmit: SubmitHandler<FormData> = (data) => {
        fetch(`/api/form`, {
            method: `POST`,
            body: JSON.stringify(data),
            headers: {
                "content-type": `application/json`,
            },
        });
    };

    // const handleSubmit = (event) => {
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }

    //   setValidated(true);
    // };
    const showForm = (
        <Form onSubmit={handleSubmit(onSubmit)} id="contact_form" noValidate>
            <fieldset disabled={isSubmitting}>
                <Form.Group className="mb-3 required" controlId="contact_name">
                    <Form.Label>
                        Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        as="input"
                        {...register("name", {
                            required: "Please provide your name.",
                            maxLength: 100,
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide your name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3 required" controlId="contact_email">
                    <Form.Label>
                        Email <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        as="input"
                        {...register("email", {
                            required: "Please provide a contact email address.",
                            maxLength: 100,
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a contact email address.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    className="mb-3 required"
                    controlId="contact_message">
                    <Form.Label>
                        Message <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        {...register("message", {
                            required: "Please provide a message for us.",
                        })}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a message for us.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Text>*All fields are required</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </fieldset>
        </Form>
    );
    return (
        <Row className="mb-2 mb-md-3 mb-xl-5">
            <Col>
                {isSubmitSuccessful ? (
                    <TextFrame className="text-center">
                        <h2>Thank you!</h2>
                        <p>
                            We appreciate your interest! We'll get back to you
                            as soon as we can!
                        </p>
                    </TextFrame>
                ) : (
                    <TextFrame>{showForm}</TextFrame>
                )}
            </Col>
        </Row>
    );
}
