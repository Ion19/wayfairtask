import React from 'react';
import nasnavlogo from '../utlites/images/nasnavlogo1.png'; 
import visa from '../utlites/images/visa.png';


const Copyright = () => {
  return (
    <div className="copyright text-center">
        <div className="container">
            <div className="row">

                <div className="col">
                  <h5>&copy; Wayfair City Stars Store .Inc </h5>
                </div>

                <div className="col">
                <img src={visa} alt="visa" />
                </div>

                <div className="col">
                    <img src={nasnavlogo} alt="nasnav" />
                </div>

            </div>

        </div>
      
    </div>
  );
}

export default Copyright;
