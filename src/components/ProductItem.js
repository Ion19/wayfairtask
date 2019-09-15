import React from 'react';




const ProductItem = (props) => {
    

  return (
    <div className="card product-item" style={{border:'0px'}}>
        <div style={{position:'relative'}}>
        <img className="img-fluid" src={props.imageSrc} className="card-img-top" alt="product 1 "/>
        {props.unavialabe ? <div className="overlay"> <p>OUT OF STOCK</p> <button className="btn">Notify me when restocked</button> </div>  : null }
        </div>
        
        {props.unavialabe ? null :<> <i className="fa fa-shopping-cart " aria-hidden="true"></i> <button className="btn">Quick View</button></>}
        <div className="card-body text-center">
           
            <p className="card-text">
                Stoughton Panel Configurable<br/>Bedroom Set
            </p>
            <p className="card-text">
                <span className="main-color"><strong>900$</strong></span> <del><small>1200$</small></del>
            </p>
        </div>
    </div>
    
  );
}

export default ProductItem;
