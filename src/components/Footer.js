import React from 'react'; 
import logo from '../utlites/images/footerlogo.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="row text-center mb-4">

            <div className="col-md-6 mb-2">
            <h5>
               Stay updated on special offers, design trends, and more. 
            </h5>    
            </div>
            <div className="col-md-6 mb-2">
            <div className="input-group" style={{position:'relative',marginTop: '-5px'}}>
              
            <input className="form-control  form-control-lg mr-sm-2  flex-grow-1" type="email" placeholder="Email Address" />

              <div className="input-group-prepend">
              <span className="input-group-text mail-span" id="basic-addon1">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              </div>
            </div>

            </div>
                
            </div>

            <div className="row mt-4">
                <div className="col-lg col-md-6 mb-4 text-center ">
                <div>
                  <img src={logo} alt="logo" />
                  <div>
                  <i className="fa fa-round fa-facebook" aria-hidden="true"></i>
                  <i className="fa fa-round fa-twitter" aria-hidden="true"></i>
                  </div>


                </div>
                </div>

                <div className="col-lg mb-4 col-md-6">
                <div >
                  <ul className="list-unstyled text-capitalize">
                    
                    <li>sofas &amp; loveseats</li>
                    <li>sectionals</li>
                    <li>TV stands</li>
                    <li>coffee tables</li>
                    <li>living room sets</li>

                  </ul> 

                </div>
                </div>

                <div className="col-lg mb-4 col-md-4">
                <div >
                  <ul className="list-unstyled text-capitalize">
                    <li>dining tables</li>
                    <li>dining chairs</li>
                    <li>sideboards &amp; buffets</li>
                    <li>kitchen islands</li>
                   
                  </ul> 

                </div>
                </div>

                <div className="col-lg mb-4 col-md-4">
                <div >
                  <ul className="list-unstyled text-capitalize">
                    <li>yard fountains</li>
                    <li>outdoor fountains</li>
                    <li>outdoor rugs</li>
                    <li>outdoor pillows</li>
                    
                  </ul> 

                </div>
                </div>

                <div className="col-lg mb-4 col-md-4 btn-group-vertical">
                 
                <button className="btn btn-lg main-button text-capitalize ">
                <i className="fa fa-map-marker" aria-hidden="true"></i>  Near Me
                 
                </button>
                <button className="btn btn-lg second-button text-capitalize">
                <i className="fa fa-phone" aria-hidden="true"></i> Contact US
                </button>
                

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
