import React, { useState ,useEffect} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import myimg from '../Assets/h1.jpg';
import myimg2 from '../Assets/h2.jpg';
import myimg3 from '../Assets/h3.jpg';
import {Container, Card, Row, Col} from 'react-bootstrap';
import myimg4 from '../Assets/room-1.jpg';
import myimg5 from '../Assets/room-2.jpg';
import myimg6 from '../Assets/room-3.jpg';
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth"; 
import Navigationbar from './Navbar';

const Rooms = () => {
    const [show, setShow] = useState(false);
    const [roomQuality, setRoomQuality] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        contactInfo: '',
        numberOfPeople: '',
        idCardNo: '',
        roomQuality:'',
        date: '',
        time: ''
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token); 
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (roomQuality) => {
        const token = localStorage.getItem('userToken');
        if(token==null){
            signInWithGoogle();
        }
        else{
            setRoomQuality(roomQuality);
            setShow(true);}
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit =async () => {
        console.log(formData);
        try {
            await addDoc(collection(firestore, "Hms/Booking/BookingTable"), formData);
            console.log("Data sent successfully!");
        } catch (error) {
            console.error("Error sending data: ", error);
        }
        handleClose();
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
    <div class="containerpara">
    <p id='intropara'>Welcome to HarmonyHaven! Our hotel combines luxury and peace in beautiful natural surroundings. Tucked away in nature, it's a perfect escape from busy city life. As soon as you arrive, you'll feel surrounded by calm and elegance. We've paid close attention to every little thing to make sure your stay is unforgettable.</p>
  </div>
  <div class="containerpara">
    <p id='intropara' style={{fontWeight : 'bold' , fontSize: '25px'}}>Our Rooms</p>
  </div>
  <div id='bookcontainer'>
  <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src={myimg4} alt="notfound"/>
                                <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                            </div>
                            <div class="p-4 mt-2">
                                <div class="d-flex justify-content-between mb-3">
                                    <h5 class="mb-0">Junior Suite</h5>
                                    <div class="ps-2">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>2 Bed</small>
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i>1 Bath</small>
                                    <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p class="text-body mb-3">It offer's spacious and comfortable accommodations with separate living areas, ideal for families or guests seeking extra space.</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => handleShow('Junior Suite')}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src={myimg5} alt="notfound"/>
                                <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$150/Night</small>
                            </div>
                            <div class="p-4 mt-2">
                                <div class="d-flex justify-content-between mb-3">
                                    <h5 class="mb-0">Executive Suite</h5>
                                    <div class="ps-2">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>3 Bed</small>
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i>2 Bath</small>
                                    <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p class="text-body mb-3">It provide luxurious amenities and elegant furnishings, catering to discerning travelers looking for a premium experience.</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => handleShow('Executive Suite')}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="room-item shadow rounded overflow-hidden">
                            <div class="position-relative">
                                <img class="img-fluid" src={myimg6} alt="notfound"/>
                                <small class="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$200/Night</small>
                            </div>
                            <div class="p-4 mt-2">
                                <div class="d-flex justify-content-between mb-3">
                                    <h5 class="mb-0">Super Deluxe</h5>
                                    <div class="ps-2">
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                        <small class="fa fa-star text-primary"></small>
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bed text-primary me-2"></i>4 Bed</small>
                                    <small class="border-end me-3 pe-3"><i class="fa fa-bath text-primary me-2"></i>3 Bath</small>
                                    <small><i class="fa fa-wifi text-primary me-2"></i>Wifi</small>
                                </div>
                                <p class="text-body mb-3">It offer's unparalleled luxury and indulgence, featuring lavish amenities and stunning views for the ultimate in relaxation and comfort.</p>
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-sm btn-dark rounded py-2 px-4" onClick={() => handleShow('Super Delux')}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
  </div>
  <div style={{ height: '50px' }}>
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
      <Form.Group controlId="formContactInfo">
        <Form.Label>Contact Info</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact info"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formNumberOfPeople">
        <Form.Label>Number of People</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number of people"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formIdCardNo">
        <Form.Label>ID Card No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter ID card no"
          name="idCardNo"
          value={formData.idCardNo}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRoomQuality">
        <Form.Label>Room Quality</Form.Label>
        <Form.Control
          type="text"
          readOnly
          value={roomQuality}
          className="bg-primary text-white"
        />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDay">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="Time"
          placeholder="Enter Time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={handleSubmit}>Book</Button>
  </Modal.Footer>
</Modal>
    </>
  );
}

export default Rooms;
