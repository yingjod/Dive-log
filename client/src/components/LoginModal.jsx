import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const LoginModal = ({ show, handleClose }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    handleClose(); // Close the modal after login logic
  };

  return (
    <>
      {/* Your login component content */}
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>

      {/* Button to open the login modal */}
      <button onClick={handleClose}>Close Modal</button>
    </>
  );
};

export default LoginModal;