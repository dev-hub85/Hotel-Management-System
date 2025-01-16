
import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import myimg from '../Assets/h1.jpg';
import myimg2 from '../Assets/h2.jpg';
import myimg3 from '../Assets/h3.jpg';
import hotel1  from '../Assets/hotel (1).jpg';
import hotel2 from '../Assets/hotel (2).jpg';
import hotel3 from '../Assets/hotel (3).jpg';
import food from '../Assets/f.jpg';
import {Container, Card, Row, Col} from 'react-bootstrap';
import myimg4 from '../Assets/about-1.jpg';
import myimg5 from '../Assets/about-2.jpg';
import myimg6 from '../Assets/about-3.jpg';
import myimg7 from '../Assets/about-4.jpg';
import myimg8 from '../Assets/team-1.jpg';
import myimg9 from '../Assets/team-2.jpg';
import myimg10 from '../Assets/team-3.jpg';
import myimg11 from '../Assets/team-4.jpg';

const About = () => {

  return (
    <>
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
    <p id='intropara' style={{fontWeight : 'bold' , fontSize: '25px'}}>About Us</p>
  </div>
  <div>
  <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">HarmonyHaven</span></h1>
            <p className="mb-4">Welcome to Harmony Heaven Hotel, where tranquility meets luxury in every detail.
Experience a sanctuary of serenity at Harmony Heaven Hotel, where exceptional service and exquisite comfort await.</p>
            <div className="row g-3 pb-4">
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="border rounded p-1">
                  <div className="border rounded text-center p-4">
                    <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                    <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                    <p className="mb-0">Rooms</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="border rounded p-1">
                  <div className="border rounded text-center p-4">
                    <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                    <h2 className="mb-1" data-toggle="counter-up">986</h2>
                    <p className="mb-0">Staffs</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="border rounded p-1">
                  <div className="border rounded text-center p-4">
                    <i className="fa fa-users fa-2x text-primary mb-2"></i>
                    <h2 className="mb-1" data-toggle="counter-up">5432</h2>
                    <p className="mb-0">Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src={myimg4} alt="notfound" style={{marginTop: '25%'}} />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src={myimg5} alt="notfound" />
              </div>
              <div className="col-6 text-end">
                <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src={myimg6} alt="notfound" />
              </div>
              <div className="col-6 text-start">
                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src={myimg7} alt="notfound" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="containerpara">
                <p id='intropara' style={{fontWeight : 'bold' , fontSize: '25px'}}>Our Team</p>
                </div>
                    <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={myimg8} alt="notfound"/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">James Thompson</h5>
                                <small>Director of Operations</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                            <img className="img-fluid" src={myimg9} alt="notfound"/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Benjamin Carter</h5>
                                <small>General Manager</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                            <img className="img-fluid" src={myimg10} alt="notfound"/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Matthew White</h5>
                                <small>Executive Chef</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="rounded shadow overflow-hidden">
                            <div className="position-relative">
                            <img className="img-fluid" src={myimg11} alt="notfound"/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Michael Harris</h5>
                                <small>Director of Sales and Marketing</small>
                            </div>
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
    </>
  );
}

export default About;
