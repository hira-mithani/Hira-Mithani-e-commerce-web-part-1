import React from 'react';
import ErrorImg from '../../assets/error.svg';
import FreshCartImg from '../../assets/freshcart-logo.svg';

const ErrorPage = () => {
  return (
    <div 
      className="container d-flex flex-column flex-lg-row justify-content-center align-items-center text-center mt-5" 
      style={{ height: '90vh' }}
    >
     
      <div className="order-1 order-lg-2 mb-4 mb-lg-0 me-lg-5">
        <img 
          className="img-fluid" 
          src={ErrorImg} 
          alt="404 Error" 
          style={{ maxWidth: '100%', width: '500px' }}
        />
      </div>
     
      <div className="order-2 order-lg-1">
        <img
          src={FreshCartImg} 
          alt="FreshCart Logo" 
          className="img-fluid mb-5 me-5" 
          style={{ maxWidth: '200px' }} 
        />
        <h1 
          style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '15px' }}
        >
          Something’s wrong here...
        </h1>
        <p 
          style={{ fontSize: '1rem', color: '#6b7575', maxWidth: '500px', margin: '0 auto 30px' }}
        >
          We can’t find the page you’re looking for. <br />
          Check out our help center or head back to home.
        </p>
        
    
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <button 
            className="btn btn-outline-dark"
            style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '5px' }}
          >
            Help Center →
          </button>
          <button 
            className="btn btn-success"
            style={{ padding: '10px 20px', fontSize: '1rem', borderRadius: '5px' }}
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
