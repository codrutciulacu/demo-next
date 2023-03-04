import FormLayout from "@/components/layout";
import { TextInput } from "@/components/text-input";
import { Formik } from 'formik';
import { Button, Form } from "react-bootstrap";
import { loginRequest } from "./api/login";
import CustomButton from "../components/button";

export default function Login() {
    return <FormLayout>
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={async () => {
                let response = await loginRequest();
                alert(response.token)
            }}
        >
            {({ isSubmitting, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                    <TextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="youadress@mail.com"
                    />

                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="*************"
                    />
                    <CustomButton type="submit" text="Login" />
                </Form>
            )}
        </Formik>
    </FormLayout>
}