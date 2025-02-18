import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserPlus, FaSearch, FaHandshake } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-5 bg-gradient-to-r from-green-100 to-blue-900 text-center mb-5">
      <Container>
        <h2 className="mb-4 font-bold italic text-black">----How It Works----</h2>
        <p className="mb-5 text-balance">
          Follow these three simple steps to find your perfect match.
        </p>
        <Row>
          <Col md={4} className="mb-4">
            <div className="h-100 d-flex flex-column align-items-center shadow-lg p-4 rounded-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-indigo-50">
              <FaUserPlus size={50} className="text-primary mb-3" />
              <h4 className="mb-2 text-lg font-semibold">1. Register</h4>
              <p className="text-gray-600">
                Create your profile and join our vibrant community.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="h-100 d-flex flex-column align-items-center shadow-lg p-4 rounded-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-green-50">
              <FaSearch size={50} className="text-success mb-3" />
              <h4 className="mb-2 text-lg font-semibold">2. Explore</h4>
              <p className="text-gray-600">
                Browse profiles and filter your preferences effortlessly.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="h-100 d-flex flex-column align-items-center shadow-lg p-4 rounded-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-50">
              <FaHandshake size={50} className="text-warning mb-3" />
              <h4 className="mb-2 text-lg font-semibold">3. Connect</h4>
              <p className="text-gray-600">
                Reach out to potential matches and start meaningful relationships.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorks;
