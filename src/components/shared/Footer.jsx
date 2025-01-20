import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-900 to-black text-white py-4">
            <div className="container">
                <div className="row">
                    {/* About Us Section */}
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>
                            Welcome to our Matrimony platform! We connect individuals with their ideal life partners in a secure and intuitive environment.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                            <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
                            <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>Email: support@matrimonyplatform.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Matrimony Lane, Love City</p>
                    </div>
                </div>
                <div className="divider"></div>


                <div className="text-center mt-3">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Matrimony Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
