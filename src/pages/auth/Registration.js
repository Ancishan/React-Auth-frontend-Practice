import React, { useState } from "react";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showToast, setShowToast] = useState(false); // For Bootstrap Toast
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "🎉 Registration successful!");
        
        // For Bootstrap Toast
        setToastMessage(result.message || "Registration successful!");
        setToastVariant("success");
        setShowToast(true);

        setFormData({
          name: "",
          email: "",
          password: "",
        });

        // Redirect after short delay
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(result.message || "❌ Registration failed!");
        
        // For Bootstrap Toast
        setToastMessage(result.message || "Registration failed!");
        setToastVariant("danger");
        setShowToast(true);
      }
    } catch (error) {
      console.error(error);
      toast.error(`⚠️ Something went wrong: ${error.message}`);

      // For Bootstrap Toast
      setToastMessage(`Something went wrong: ${error.message}`);
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Please Register</h1>
      
      {/* Bootstrap Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={toastVariant}
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Registration
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
