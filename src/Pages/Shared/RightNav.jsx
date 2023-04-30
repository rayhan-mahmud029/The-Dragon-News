import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../../contexts/AuthProvider';

const RightNav = () => {
    const { setUser, userSignInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        userSignInWithGoogle()
            .then(result => {
                setUser(result.user);
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            {/* login with */}
            <div>
                <h1 className="fs-4 fw-semibold mb-2">Login with</h1>
                <Button variant="outline-secondary w-100 mb-2"
                    onClick={handleGoogleSignIn}
                ><FontAwesomeIcon icon={faGoogle} /> Login with Google</Button>
                <Button variant="outline-dark w-100"><FontAwesomeIcon icon={faGithub} /> Login with GitHub</Button>
            </div>

            {/* find us on */}
            <section className='my-3'>
                <h1 className="fs-4 fw-semibold mb-2">Find Us On</h1>

                <div className="d-flex align-items-center px-2 py-3 border border-1 rounded-top border-danger  gap-3">
                    <div className='social-btn'>
                        <FontAwesomeIcon icon={faFacebookF} className='social-icon' />
                    </div>

                    <div>
                        <p className="mb-0 text-secondary align-self-center fw-semibold">Facebook</p>
                    </div>
                </div>

                <div className="d-flex align-items-center px-2 py-3 border border-1  border-danger  gap-3">
                    <div className='social-btn'>
                        <FontAwesomeIcon icon={faTwitter} className='social-icon' />
                    </div>

                    <div>
                        <p className="mb-0 text-secondary align-self-center fw-semibold">Twitter</p>
                    </div>
                </div>

                <div className="d-flex align-items-center px-2 py-3 border border-1  border-danger  gap-3">
                    <div className='social-btn'>
                        <FontAwesomeIcon icon={faInstagram} className='social-icon' />
                    </div>

                    <div>
                        <p className="mb-0 text-secondary align-self-center fw-semibold">Instagram</p>
                    </div>
                </div>

                <div className="d-flex align-items-center px-2 py-3 border border-1 rounded-bottom border-danger  gap-3">
                    <div className='social-btn'>
                        <FontAwesomeIcon icon={faLinkedin} className='social-icon' />
                    </div>

                    <div>
                        <p className="mb-0 text-custom-secondary align-self-center fw-semibold">LinkedIn</p>
                    </div>
                </div>
            </section>


            {/* kid zone section */}
            <section className='my-3 bg-custom-secondary py-2'>
                <h1 className="fs-4 fw-semibold mb-2 p-3">Q-Zone</h1>

                <div className="my-3 mx-1">
                    <img src="../../../public/assets/qZone1.png" alt="" />
                </div>

                <div className="my-3 mx-1">
                    <img src="../../../public/assets/qZone2.png" alt="" />
                </div>

                <div className="my-3 mx-1">
                    <img src="../../../public/assets/qZone3.png" alt="" />
                </div>
            </section>


            {/* add section */}
            <section className='my-3 position-relative'>
                <img src="../../../public/assets/bg.png" alt='background' />

                <div className='position-absolute top-0 mx-3 text-center text-light h-100 d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='fw-bolder'>Create an Amazing Newspaper</h1>

                    <p className="my-4 fs-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                    <Button className='btn-danger px-4 py-2 rounded-0 fw-bold fs-6'>Learn more</Button>
                </div>
            </section>


        </div>
    );
};

export default RightNav;