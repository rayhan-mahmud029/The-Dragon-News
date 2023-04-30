import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)
    const { createUser, setUser } = useContext(AuthContext)
    console.log(accepted);


    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const photo_url = form.photo_url.value
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        const termsChecked = form.checkbox.checked;

        console.log(userName, email, password, confirmPassword, termsChecked);
        if (password !== confirmPassword) {
            setError('Password did not matched')
        }
        else {
            setError('')
            createUser(email, password)
                .then(result => {
                    setUser(result.user)
                    console.log(result.user)
                    updateProfile(result.user, {
                        displayName: userName, photoURL: photo_url
                    }).then(() => {
                        console.log('profile updated');
                    }).catch((error) => {
                        setError(error.message)
                        console.error(error)
                    });
                })
                .catch(err => console.error(err))
        }
    }


    return (
        <Container className='w-50 mx-auto my-5'>

            <div className="pb-3 border-bottom border-opacity-25 border-danger text-center">
                <h3 className="fs-4 text-danger fw-bold">Register your account</h3>
            </div>

            <Form onSubmit={handleFormSubmit} className='my-4'>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo_url" placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirm_password" placeholder="Confirm password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='checkbox'
                        label={<>Accept <Link to='/auth/terms-and-condition' className='text-decoration-none'>Term & Conditions</Link></>}
                        onClick={() => setAccepted(!accepted)} />
                </Form.Group>

                {/* show error */}
                {
                    error
                    &&
                    <Form.Text >
                        <p className="text-error text-center w-100">{error}</p>
                    </Form.Text>
                }

                <Button
                    variant="primary" type="submit"
                    className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6 w-100'
                    disabled={!accepted}
                >
                    SignUp
                </Button>

            </Form>
        </Container>
    );
};

export default Register;