
import React, { useState ,useEffect} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import myimg from '../Assets/h1.jpg';
import myimg2 from '../Assets/h2.jpg';
import myimg3 from '../Assets/h3.jpg';
import {Container, Card, Row, Col} from 'react-bootstrap';
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth"; 
import Navigationbar from './Navbar';

const Services = () => {
    const [show, setShow] = useState(false);
    const [servicetype, setRoomQuality] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      roomno: '',
      servicetype :'',
      description:''
    });
  
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token); 
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (servicetype) => {
        const token = localStorage.getItem('userToken');
        if(token==null){
            signInWithGoogle();
        }
        else{
      setRoomQuality(servicetype);
      setShow(true);}
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async () => {
        console.log(formData);
        try {
            await addDoc(collection(firestore, "Hms/Services/ServiceTable"), formData);
            console.log("Data sent successfully!");
        } catch (error) {
            console.error("Error sending data: ", error);
        }
        handleClose();
      };
      const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
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
          <p>
          Embark on a Journey of Tranquility and Excitement with Each Carousel Spin.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="containerpara">
    <p id='intropara'>Welcome to HarmonyHaven! Our hotel combines luxury and peace in beautiful natural surroundings. Tucked away in nature, it's a perfect escape from busy city life. As soon as you arrive, you'll feel surrounded by calm and elegance. We've paid close attention to every little thing to make sure your stay is unforgettable.</p>
  </div>
  <div className="containerpara">
    <p id='intropara' style={{fontWeight : 'bold' , fontSize: '25px'}}>Our Services</p>
  </div>
  <div>
  <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a className="service-item rounded" onClick={() => handleShow('Rooms & Appartment')}>
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-hotel fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Rooms & Appartment</h5>
                            <p className="text-body mb-0">Explore our comfortable accommodations, perfect for your next stay, whether you're traveling solo or with family.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <a className="service-item rounded" onClick={() => handleShow('Food & Restaurant')}>
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-utensils fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Food & Restaurant</h5>
                            <p className="text-body mb-0"> Indulge in a culinary journey at our restaurant, where we offer a delectable selection of dishes to satisfy your cravings.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a className="service-item rounded" onClick={() => handleShow('Spa & Fitness')}>
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-spa fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Spa & Fitness</h5>
                            <p className="text-body mb-0">Relax and rejuvenate at our spa and fitness center, designed to help you unwind and stay active during your stay.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <a className="service-item rounded" onClick={() => handleShow('Sports & Gaming')}>
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-swimmer fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Sports & Gaming</h5>
                            <p className="text-body mb-0">Have fun and stay active with our array of sports and gaming facilities, ensuring an enjoyable experience for all.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a className="service-item rounded" onClick={() => handleShow('Event & Party')}>
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-glass-cheers fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">Event & Party</h5>
                            <p className="text-body mb-0">Host your next event or celebration with us, where we provide the perfect venue and services to make your occasion memorable.</p>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <a className="service-item rounded" onClick={() => handleShow('Gym and Yoga')}>
                            <div className="service-icon bg-transparent border rounded p-1">
                                <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                    <i className="fa fa-dumbbell fa-2x text-primary"></i>
                                </div>
                            </div>
                            <h5 className="mb-3">GYM & Yoga</h5>
                            <p className="text-body mb-0">Maintain your fitness routine with access to our state-of-the-art gym and yoga facilities, promoting wellness and balance.</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
  </div>
<div id='backgroundimagecrousel' style={{ position: 'relative' }}>
  <img src={myimg2} style={{ width: '100vw', height: '350px' ,opacity :'65%'}} alt="ImageNotFound" />
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
<div style={{ height: '50px' }}>
</div>
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
    <Modal show={show} onHide={handleClose} centered>
  <Modal.Body >
    <Form >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRoomNo">
        <Form.Label>Room No</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Room Number"
          name="roomno"
          value={formData.roomno}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formServicetyppe">
        <Form.Label>Service Type</Form.Label>
        <Form.Control
          type="text"
          readOnly
          value={servicetype}
          className="bg-primary text-white"
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter additional details (optional)"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
        </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={handleSubmit}>Submit Request</Button>
  </Modal.Footer>
</Modal>
    </>
  );
}

export default Services;
