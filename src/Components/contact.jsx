import React, { useState ,useEffect} from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import myimg from '../Assets/h1.jpg';
import myimg2 from '../Assets/h2.jpg';
import myimg3 from '../Assets/h3.jpg';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth"; 
import Navigationbar from './Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token); 
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            // Save token to local storage
            saveTokenToLocalStorage(token);
            setIsLoggedIn(token !== null);
            window.location.reload();
            console.log('User signed in:', user);
            return user;
        } catch (error) {
            console.error('Error signing in with Google:', error);
            throw error;
        }
    }; 

    const saveTokenToLocalStorage = (token) => {
        localStorage.setItem('userToken', token);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('userToken');
        if(token==null){
            signInWithGoogle();
        }
        else{
        console.log(formData);
        try {
            await addDoc(collection(firestore, "Hms/Contact/ContactTable"), formData);
            console.log("Data sent successfully!");
        } catch (error) {
            console.error("Error sending data: ", error);
        }}
    };

    

    return (
        <>
        <Navigationbar isLoggedIn={isLoggedIn} />
            <Carousel>
                <Carousel.Item>
                    <img src={myimg} style={{ width: '100vw', height: '100vh' }} alt="Nature" />
                    <Carousel.Caption>
                        <h3>Discover Your Perfect Getaway</h3>
                        <p>Explore a World of Luxurious Accommodations and Breathtaking Views.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={myimg2} style={{ width: '100vw', height: '100vh' }} alt="Nature" />
                    <Carousel.Caption>
                        <h3>Where Every Moment Counts</h3>
                        <p>Experience Unmatched Comfort and Adventure in Every Carousel Slide.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={myimg3} style={{ width: '100vw', height: '100vh' }} alt="Nature" />
                    <Carousel.Caption>
                        <h3>Ride the Waves of Hospitality</h3>
                        <p>Embark on a Journey of Tranquility and Excitement with Each Carousel Spin.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="containerpara">
                <p id='intropara'>Welcome to HarmonyHaven! Our hotel combines luxury and peace in beautiful natural surroundings. Tucked away in nature, it's a perfect escape from busy city life. As soon as you arrive, you'll feel surrounded by calm and elegance. We've paid close attention to every little thing to make sure your stay is unforgettable.</p>
            </div>
            <div className="containerpara">
                <p id='intropara' style={{ fontWeight: 'bold', fontSize: '25px' }}>Contact Us</p>
            </div>
            <div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                                <iframe
                                    className="position-relative rounded w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameBorder="0"
                                    style={{ minHeight: '350px', border: '0' }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                ></iframe>
                            </div>
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.2s">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Your Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Leave a message here"
                                                        id="message"
                                                        name="message"
                                                        style={{ height: '150px' }}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                    ></textarea>
                                                    <label htmlFor="message">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='backgroundimagecrousel' style={{ position: 'relative' }}>
                <img src={myimg2} style={{ width: '100vw', height: '350px', opacity: '65%' }} alt="ImageNotFound" />
                <Container style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '1' }}>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Carousel>
                                <Carousel.Item>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Text>
                                                "I had an amazing experience staying at this hotel. The staff was incredibly friendly and helpful, the rooms were clean and comfortable, and the location was perfect for exploring the city. I would highly recommend it to anyone visiting!"
                                            </Card.Text>
                                            <Card.Title>- John Doe</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Text>
                                                "This hotel exceeded all my expectations. The amenities were top-notch, the service was impeccable, and the views from my room were breathtaking. I can't wait to come back!"
                                            </Card.Text>
                                            <Card.Title>- Jane Smith</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Text>
                                                "I've traveled to many places, but this hotel stands out as one of the best. From the moment I arrived, I felt welcomed and cared for. The attention to detail and the warmth of the staff made my stay truly memorable."
                                            </Card.Text>
                                            <Card.Title>- Michael Johnson</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ height: '50px' }}></div>
            <footer className="bg-dark text-white py-4">
                <Container>
                    <Row>
                        <Col md={4}>
                            <h5 className="mb-3">HarmonyHaven</h5>
                            <p className="mb-0">A hotel is a place that offers temporary accommodation and services to travelers. From cozy bed and breakfasts to luxurious resorts, hotels provide a range of amenities such as comfortable rooms, dining options, and recreational facilities.</p>
                        </Col>
                        <Col md={4}>
                            <h5 className="mb-3">Links</h5>
                            <ul className="list-styled">
                                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="/About" className="text-white text-decoration-none">About</a></li>
                                <li><a href="/Services" className="text-white text-decoration-none">Services</a></li>
                                <li><a href="/Contact" className="text-white text-decoration-none">Contact</a></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h5 className="mb-3">Contact Us</h5>
                            <p className="mb-1">123 Street Name, Lahore, Pakistan</p>
                            <p className="mb-1">Email: info@example.com</p>
                            <p className="mb-0">Phone: +1234567890</p>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={12}>
                            <p className="text-center mb-0">© 2024 Your Company. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Contact;
