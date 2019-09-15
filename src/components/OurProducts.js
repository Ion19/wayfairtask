import React from 'react' ;
import product1 from '../utlites/images/product1.png';
import product2 from '../utlites/images/product2.png';
import product3 from '../utlites/images/product3.png';
import product4 from '../utlites/images/product4.png';
import product5 from '../utlites/images/product5.png';
import product6 from '../utlites/images/product6.png';
import product7 from '../utlites/images/product7.png';
import product8 from '../utlites/images/product8.png';

import ProductItem from './ProductItem';
import OurProductsMenue from './OurProductsMenue';

const OurProducts = () => {
  return (
    <div className="our-products">
        <div className="container">

                <div className="row">
                    <div className="col-md-4">
                        <h4 className="text-captalize">
                            Our Products
                        </h4>
                        <p className="main-color">Browse throught our Categories </p>
                    </div>
                    <div className="col-md-8">
                        <div className="container text-center my-4">
                        <OurProductsMenue/>
                        </div>
                    </div>
                </div>

                <div className="show products mt-2">
                    <div className="row">

                        <div className=" col-md-6 col-lg col-sm-12">
                          <ProductItem imageSrc={product1} />
                        </div>
                        <div className="col-md-6 col-lg col-sm-12">
                          <ProductItem imageSrc={product2}/>
                        </div>
                        <div className="col-md-6 col-lg col-sm-12">
                          <ProductItem imageSrc={product3}/>
                        </div>
                        <div className="col-md-6 col-lg col-sm-12">
                          <ProductItem imageSrc={product4} unavialabe={true}/>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-md-6 col-lg col-sm-12">
                        <ProductItem imageSrc={product5}/>
                        </div>
                        <div className="col-md-6 col-lg col-sm-12">
                        <ProductItem imageSrc={product6}/>
                        </div>
                        <div className="col-md-6 col-lg col-sm-12">
                        <ProductItem imageSrc={product7}/>
                        </div>
                        <div className="col-md-6 col-lg col-sm-12">
                        <ProductItem imageSrc={product8}/>
                        </div>
                    </div>


                </div>

                <div className="products-nav">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination d-flex justify-content-between">
                           
                            <li className="page-item text-left">
                            <a className="page-link" href="#" tabIndex="-1">Previous Page</a>
                            </li>
                           
                            
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                          
                            <li className="page-item text-right">
                            <a className="page-link  " href="#">Next Page</a>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
        </div>
      
    </div>
  )
}

export default OurProducts;
