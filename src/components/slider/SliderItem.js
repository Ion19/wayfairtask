import React from 'react'; 
import slidermain1 from '../../utlites/images/slidermain1.png';
import ProductSlider from './ProducSlider';


const SliderItem = () => {
  return (
    <div className='slider-item mt-4 mx-4' style={{maxWidth:'1000px'}}>
  
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4 slider-image">
                <img src={slidermain1} className="card-img img-fulid" alt="main slider image"/>
                <i className="fa fa-shopping-cart " aria-hidden="true"></i>
                </div>
                
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Everyday Exotic: Safari Bedroom Decor</h5>
                    <span className="card-text">
                    <strong className="main-color">1950$</strong>&nbsp;&nbsp;&nbsp;<small><del>2500$</del></small>  
                    </span>
                    <p className="card-text">
                        Global travelers, animal lovers, and luxe enthusia take note - this look's for you. Sumptuous textures, set a safari mood. 
                    </p>

                    <p className="card-text"><small className="text-muted">Global travelers, animal lovers, and luxe enthusia take note - this look's for you. Sumptuous textures, set a safari mood.  </small></p>

                    <span className="second-color card-text"> <a>Shop the look</a> </span>

                    <hr/>

                    <h5 className="card-text">50 Products</h5>
                    <div className="mt-4">
                    <ProductSlider/>
                    </div>

                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default SliderItem; 
