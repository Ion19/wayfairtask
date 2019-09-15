import React from 'react'

const Features = () => {
  return (
    <div className="features">
        <div className='container'>
        <div className='row'>
            <div className='col-lg-3 col-md-12'>
                    <span className='main-color'>Wayfair</span>
                    <h4>online home store</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='col-lg-9 '>
                <div className='row'>
                    <div className='col-lg col-sm-12 feat text-center'>
                    <i className="fa fa-tag mr-2 main-color fa-3x mb-4" aria-hidden="true"></i>
                        <h5>Online Payment</h5>
                        <p>Save big on updates of all sizes</p>
                    </div>
                    <div className='col-lg col-sm-12 feat text-center'>
                    <i className="fa fa-sun-o mr-2 main-color fa-3x mb-4" style={{position:'relative'}} aria-hidden="true"><span className="percent">%</span></i>
                    
                        <h5>Save 70% upto</h5>
                        <p>Save big on updates of all sizes</p>
                    </div>
                    <div className='col-lg col-sm-12 feat text-center'>
                    <i className="fa fa-truck mr-2 main-color fa-3x mb-4" aria-hidden="true"></i>
                        <h5>Free shipping</h5>
                        <p>Save big on updates of all sizes</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>
  );
}

export default Features;
