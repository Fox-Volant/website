import React from "react";
import { useForm } from "react-hook-form";
import ContactForm from "../components/ContactForm/ContactForm";
import TextFrame from "../components/TextFrame/TextFrame";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default function Contact() {
    const props = useForm();
    const {
        formState: { isSubmitSuccessful },
    } = { ...props };

    const showForm = (
        <Row className="mb-2 mb-md-3 mb-xl-5">
            <Col>
                <ContactForm formProps={props} />
            </Col>
        </Row>
    );

    return isSubmitSuccessful ? (
        <TextFrame>
            Thank you for contacting us! We'll get back to you as soon as we
            can!
        </TextFrame>
    ) : (
        showForm
    );
}
