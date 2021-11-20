import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'reactstrap'
import { ReactstrapInput } from 'reactstrap-formik'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/actions/LoginActions'

const Register = () => {

    const dispatch = useDispatch()

    return (

        <Formik
            initialValues={{ username: "", password1: "", password2: "" }}

            validationSchema={Yup.object({
                username: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                password1: Yup.string().required('Required'),
                password2: Yup.string()
                    .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                // email: Yup.string().email('Invalid email address').required('Required'),
            })}


            onSubmit={(values, { setSubmitting }) => {
                // console.log(values)
                const newValues = {
                    username: values.username,
                    password: values.password1
                }

                axios.post("https://react-dj-flight-app.herokuapp.com/user/register/", newValues)
                    .then((response) => {
                        console.log(response);
                        dispatch(LoginAction(response.data.token));
                    })
                    .catch((error) => {
                        console.log(error.data.username);
                    })

            }}


            render={({ submitForm, isSubmitting, values }) => (
                <Form>
                    <Container style={{ paddingTop: "5px", margin: '50px auto' }}>
                        <Row>
                            <Col md="8" style={{ paddingTop: "5px", margin: 'auto' }}>
                                <Field
                                    //  style={{ paddingTop: "5px",margin:'auto' }}
                                    type="text"
                                    label="User Name"
                                    name="username"
                                    id="username"
                                    component={ReactstrapInput}
                                />
                            </Col>
                            <Col md="8" style={{ paddingTop: "5px", margin: 'auto' }}>
                                <Field
                                    type="password"
                                    label="Password"
                                    name="password1"
                                    id="password1"
                                    component={ReactstrapInput}
                                />
                            </Col>
                            <Col md="8" style={{ paddingTop: "5px", margin: 'auto' }}>
                                <Field
                                    type="password"
                                    label="Password Again"
                                    name="password2"
                                    id="password2"
                                    component={ReactstrapInput}
                                />
                            </Col>
                            <Col md="8" style={{ paddingTop: "5px", margin: 'auto' }}>
                                <button className="btn btn-primary w-100 mt-2" type="submit">Submit</button>
                            </Col>
                        </Row>
                        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
                    </Container>
                </Form>
            )}
        />

    );
};

export default Register
