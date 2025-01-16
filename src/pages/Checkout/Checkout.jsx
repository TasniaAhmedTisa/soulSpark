import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const { id } = useParams(); // biodataId from the route
  const { user } = useContext(AuthContext); // Get the authenticated user's info
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestPayload = {
      biodataId: id,
      userEmail: user.email,
      cardNumber: paymentDetails.cardNumber,
      paymentAmount: 5,
    };

    try {
      const response = await fetch("http://localhost:5000/contact-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
      });
      const result = await response.json();

      if (response.ok) {
        Swal.fire({
            title:" Contact information request submitted successfully!",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
       } else {
        console.error(result.message);
        alert("Failed to submit the contact information request.");
      }
    } catch (error) {
      console.error("Error submitting the request:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Request Contact Information</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow rounded">
        <div className="mb-4">
          <label className="block font-semibold">Biodata ID:</label>
          <input
            type="text"
            value={id}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Your Email:</label>
          <input
            type="text"
            value={user.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
        >
          Submit & Pay $5
        </button>
      </form>
    </div>
  );
};

export default Checkout;
