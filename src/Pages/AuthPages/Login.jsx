import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { userSignIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        userSignIn(email, password)
            .then(userCredential => {
                setUser(userCredential.user)
                navigate(from, {replace: true});
                console.log('User Logged In');
            })
            .catch(err => setError(err.message))
    }


    return (<Container className='w-50 mx-auto my-5'>

        <div className="pb-3 border-bottom border-opacity-25 border-danger text-center">
            <h3 className="fs-4 text-danger fw-bold">Log in to your account</h3>
        </div>

        <Form onSubmit={handleFormSubmit} className='my-4'>

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

            {/* show error */}
            {
                error
                &&
                <Form.Text >
                    <p className="text-error text-center w-100">{error}</p>
                </Form.Text>
            }

            <Button variant="primary" type="submit" className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6 w-100'>
                Sign in
            </Button>

        </Form>
    </Container>
    );

};

export default Login;