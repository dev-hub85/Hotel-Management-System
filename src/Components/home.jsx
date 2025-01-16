
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

const Home = () => {

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
    <div class="containerpara">
    <p id='intropara'>Welcome to HarmonyHaven! Our hotel combines luxury and peace in beautiful natural surroundings. Tucked away in nature, it's a perfect escape from busy city life. As soon as you arrive, you'll feel surrounded by calm and elegance. We've paid close attention to every little thing to make sure your stay is unforgettable.</p>
  </div>
  <div class="containerintro">
  <div class="flex-container">
    <div class="item1">
      <p>Hi there! We're so happy to have you here with us. Our hotel is right in the middle of Lahore. When you walk in, you'll see our big lobby. It's really fancy with pretty lights and comfy chairs. We want you to feel super special during your stay with us, whether you're here for fun or work. Our team is here to make sure you have the best time ever.</p>
      <img src={hotel1} alt="Image1"/>
    </div>
    <div class="item2">
      <p>Welcome to your home away from home! Our hotel is like a quiet, peaceful island in the middle of a busy city. We've got lots of green plants and nice views that make you feel calm. When you're in your room, you'll find everything you need to feel cozy and happy. We made sure to think of all the little things that will make your stay super comfortable. So, forget about your worries and just enjoy being here with us.</p>
      <img src={hotel2} alt="Image2"/>
    </div>
    <div class="item3">
      <p>Step into our hotel and step back in time! We're in a really old building that's been around for a long, long time. Lots of famous people have stayed here before you. But don't worry, even though our hotel has a lot of history, we've made sure it's still modern and comfy. If you want to go out and see the sights, we're right in the middle of all the action. Or if you just want to stay in and relax, we've got everything you need right here.</p>
      <img src={hotel3} alt="Image3"/>
    </div>
    <div class="item4">
      <p>Hungry? You're in for a treat! Our hotel is not just a place to sleep, it's a place to eat too! Our chefs are really amazing at making delicious food. They use all kinds of fresh ingredients to make meals that taste really, really good. Whether you're in the mood for something fancy or just want a quick bite to eat, we've got you covered. So get ready to enjoy some yummy food during your stay with us!</p>
      <img src={food} alt="Image4"/>
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

export default Home;
