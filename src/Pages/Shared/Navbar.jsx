import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, userSignOut } = useContext(AuthContext);
    console.log(user);

    const location = useLocation()
    const path = location.pathname;
    const loginPage = path.includes('login')
    const registerPage = path.includes('register')
    const navigate = useNavigate()

    const handleUserSignOut = () => {
        userSignOut()
        .then()
        .catch(err => console.error(err.message))
        navigate('/auth/login')
    }

    return (
        <Container className='d-flex my-4'>
            <div className='d-flex align-items-center gap-4' id='nav-links'>
                <NavLink
                    to='/'
                    className={({ isActive, isPending }) => `${isPending ? 'pending' : isActive ? 'active' : 'pending'} text-dark text-decoration-none fw-semibold text-black-50 fs-5`
                    }
                >Home</NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive, isPending }) => `${isPending ? 'pending' : isActive ? 'active' : 'pending'} text-dark text-decoration-none fw-semibold text-black-50 fs-5`
                    }
                >About</NavLink>
                <NavLink
                    to='/career'
                    className={({ isActive, isPending }) => `${isPending ? 'pending' : isActive ? 'active' : 'pending'} text-dark text-decoration-none fw-semibold text-black-50 fs-5`
                    }
                >Career</NavLink>
            </div>

            <div className='d-flex justify-content-end align-items-center flex-grow-1'>

                {user ? 
                   <div className='d-flex gap-3'>
                   <p className='fw-semibold fs-5'>{user.displayName}</p>
                   <img src={user.photoURL} alt="usr photo" className='rounded-circle' style={{ height: '40px' }}/>
                    <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6' onClick={handleUserSignOut}>Sign Out</Button>
                   </div>

                    : loginPage ?
                        <Link to='/auth/register'>
                            <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6'>SignUp</Button>
                        </Link>
                        : registerPage ?
                            <Link to='/auth/login'>
                                <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6 me-2'>Login</Button>
                            </Link>
                            : <>
                                <Link to='/auth/login'>
                                    <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6 me-2'>Login</Button>
                                </Link>
                                <Link to='/auth/register'>
                                    <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6'>SignUp</Button>
                                </Link>
                            </>
                }


            </div>
        </Container>

    );
};

export default Navbar;