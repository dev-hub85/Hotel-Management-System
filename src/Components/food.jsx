import React, { useEffect, useState } from 'react';
import Isotope from 'isotope-layout';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import myimg from '../Assets/h1.jpg';
import myimg2 from '../Assets/h2.jpg';
import myimg3 from '../Assets/h3.jpg';
import myimg4 from '../Assets/img-01.jpg';
import myimg5 from '../Assets/img-02.jpg';
import myimg6 from '../Assets/img-03.jpg';
import myimg7 from '../Assets/img-04.jpg';
import myimg8 from '../Assets/img-05.jpg';
import myimg9 from '../Assets/img-06.jpg';
import myimg10 from '../Assets/img-07.jpg';
import myimg11 from '../Assets/img-08.jpg';
import myimg12 from '../Assets/img-09.jpg';
import {Container, Card, Row, Col} from 'react-bootstrap';
import $ from 'jquery';
import { Modal, Button, Form } from 'react-bootstrap';
import { firestore } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth"; 
import Navigationbar from './Navbar';

const Food = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        setIsLoggedIn(!!token); 
    }, []);

    useEffect(() => {
        const iso = new Isotope('.special-list', {
          itemSelector: '.special-grid',
          layoutMode: 'fitRows'
        });
    
        const filterButtons = document.querySelectorAll('.filter-button-group button');
    
        filterButtons.forEach(button => {
          button.addEventListener('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
            const filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
          });
        });
        const allButton = document.querySelector('.filter-button-group button[data-filter="*"]');
        allButton.click();
      }, []);

      const [show, setShow] = useState(false);
      const [roomQuality, setRoomQuality] = useState('');
      const [formData, setFormData] = useState({
        name: '',
        roomno: '',
        fooditem :'',
        foodquantity:'',
        description:''
      });
    
      const handleClose = () => setShow(false);
      const handleShow = (roomQuality) => {
        const token = localStorage.getItem('userToken');
        if(token==null){
            signInWithGoogle();
        }else {
        setRoomQuality(roomQuality);
        setShow(true);}
      };
    
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

    
      const handleSubmit =async () => {
        console.log(formData);
        try {
            await addDoc(collection(firestore, "Hms/Food/FoodTable"), formData);
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
    <div className="containerpara">
    <p id='intropara'>Welcome to HarmonyHaven! Our hotel combines luxury and peace in beautiful natural surroundings. Tucked away in nature, it's a perfect escape from busy city life. As soon as you arrive, you'll feel surrounded by calm and elegance. We've paid close attention to every little thing to make sure your stay is unforgettable.</p>
  </div>
  <div className="containerpara">
    <p id='intropara' style={{fontWeight : 'bold' , fontSize: '25px'}}>Our Meals</p>
  </div>
  <div>
  <div className="menu-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="special-menu text-center">
						<div className="button-group filter-button-group">
							<button className="active" data-filter="*">All</button>
							<button data-filter=".drinks">Drinks</button>
							<button data-filter=".lunch">Lunch</button>
							<button data-filter=".dinner">Dinner</button>
						</div>
					</div>
				</div>
			</div>
				
			<div className="row special-list">
				<div className="col-lg-4 col-md-6 special-grid drinks">
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Drink 1')}>
                        <img src={myimg4} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p style={{fontSize:'15px'}}>Indulge in our signature drink, crafted with the finest ingredients to tantalize your taste buds.</p>
							<h5> $7.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid drinks" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Drink 2')}>
						<img src={myimg5} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Drinks 2</h4>
							<p style={{fontSize:'15px'}}>Savor the essence of luxury with our exclusive drink, perfectly blended for a delightful experience..</p>
							<h5> $9.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid drinks" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Drink 3')}>
						<img src={myimg6} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Drinks 3</h4>
							<p style={{fontSize:'15px'}}>Experience refreshment like never before with our exotic drink, infused with unique flavors for a memorable sip.</p>
							<h5> $10.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid lunch" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Lunch 1')}>
						<img src={myimg7} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Lunch 1</h4>
							<p style={{fontSize:'15px'}}>Delight in a culinary masterpiece with our special lunch, prepared with passion and expertise to satisfy your hunger.</p>
							<h5> $15.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid lunch" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Lunch 2')}>
						<img src={myimg8} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Lunch 2</h4>
							<p style={{fontSize:'15px'}}>Treat yourself to a flavorful journey with our exquisite lunch, featuring a harmonious blend of ingredients and spices.</p>
							<h5> $18.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid lunch" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Lunch 3')}>
						<img src={myimg9} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Lunch 3</h4>
							<p style={{fontSize:'15px'}}>Enjoy a gastronomic adventure with our lunch special, curated to please discerning palates and leave you craving for more.</p>
							<h5> $20.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid dinner" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Dinner 1')}>
						<img src={myimg10} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Dinner 1</h4>
							<p style={{fontSize:'15px'}}>Indulge in a culinary extravaganza with our special dinner, offering a symphony of flavors and textures to tantalize your senses.</p>
							<h5> $25.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid dinner" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Dinner 2')}>
						<img src={myimg11} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Dinner 2</h4>
							<p style={{fontSize:'15px'}}>Elevate your dining experience with our dinner special, crafted with care and creativity to ignite your taste sensations.</p>
							<h5> $22.79</h5>
						</div>
                        </a>
					</div>
				</div>
				
				<div className="col-lg-4 col-md-6 special-grid dinner" >
					<div className="gallery-single fix">
                        <a onClick={() => handleShow('Special Dinner 3')}>
						<img src={myimg12} className="img-fluid" alt="Image"/>
						<div className="why-text">
							<h4>Special Dinner 3</h4>
							<p style={{fontSize:'15px'}}>Embark on a culinary voyage with our special dinner, where every bite is a celebration of culinary artistry and gastronomic pleasure.</p>
							<h5> $24.79</h5>
						</div>
                        </a>
					</div>
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
                <Modal.Body>
                    <Form>
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
                        <Form.Group controlId="formRoomNumber">
                            <Form.Label>Room Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your room number"
                                name="roomNumber"
                                value={formData.roomNumber}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formFoodtype">
        <Form.Label>Food Item</Form.Label>
        <Form.Control
          type="text"
          readOnly
          value={roomQuality}
          className="bg-primary text-white"
        />
      </Form.Group>
                        <Form.Group controlId="formQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formSpecialInstructions">
                            <Form.Label>Special Instructions</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter any special instructions (optional)"
                                name="specialInstructions"
                                value={formData.specialInstructions}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit Order
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  );
}

export default Food;
