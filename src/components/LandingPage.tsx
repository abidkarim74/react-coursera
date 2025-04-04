import React from 'react';
import { Link } from 'react-router-dom';
import '../LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>
        <h2>Where green meets serenity!</h2>
        
        <div className="landing-text">
          <p>
            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide 
            a wide range of high-quality plants that not only enhance the beauty of your surroundings but also 
            contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic 
            fragrant ones, we have something for every plant enthusiast.
          </p>
          
          <p>
            Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality 
            and care. Whether you're a seasoned gardener or just starting your green journey, we're here to 
            support you every step of the way.
          </p>
          
          <p>
            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and 
            experience the beauty of nature right at your doorstep.
          </p>
        </div>
        
        <Link to="/products" className="shop-button">Explore Our Plants</Link>
      </div>
    </div>
  );
};

export default LandingPage;