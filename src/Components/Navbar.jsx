import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";

const Navigationbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(token !== null);
  }, []);

  const handleSignUp = async () => {
    try {
      const user = await signUpWithGoogle();
      console.log('Signed up user:', user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  const handleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('Signed in user:', user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      removeTokenFromLocalStorage();
      setIsLoggedIn(false);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      saveTokenToLocalStorage(token);
      const user = result.user;
      console.log('User signed up:', user);
      return user;
    } catch (error) {
      console.error('Error signing up with Google:', error);
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        
        // Save token to local storage
        saveTokenToLocalStorage(token);

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

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('userToken');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">HarmonyHaven</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Room">Rooms</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link>
              <Nav.Link href="/Food">Food</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Attraction">Attractions</Nav.Link>
              {!isLoggedIn && <Nav.Link onClick={handleSignIn} id='show'>Login</Nav.Link>}
              {isLoggedIn && <Nav.Link onClick={handleSignOut} id='show'>Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;
