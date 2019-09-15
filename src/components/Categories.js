import React from 'react'; 

import item1 from '../utlites/images/item-1.png'; 
import item2 from '../utlites/images/item-2.png';
import item3 from '../utlites/images/item-3.png'; 
import item4 from '../utlites/images/item-4.png';


const Categories = () => {
  return (
    <div className="categories my-4"> 
    <div className="container text-center">
        <div className="row">

        <div className="col-md-3 col-sm-6 ">
            <div className="item ">   
                <h4>Out Door</h4>
                <img className="img-fluid" src={item1} alt="outdoor" width="200" height="200"/>
                <div className="list text-capitalize">
                <ul className="list-unstyled ">
                    <li><a href="/patiofurniture/">patio furniture </a></li>
                    <li><a href="/outdoordecor/">outdoor decor </a></li>
                    <li><a href="/outdoorshades/">outdoor shades </a></li>
                    <li><a href="/lawngarden/">lawn&amp;garden </a></li>
                    <li><a href="/outdoorrugs/">outdoor rugs </a></li>
                    <li><a href="/viewmore/" className="second-color">
                        view more
                        <i className="fa fa-chevron-down ml-2  main-color " aria-hidden="true"></i>
                    </a></li>
                    
                    </ul>
                </div>
            </div>
            </div> 

            
            <div className="col-md-3 col-sm-6 ">
            <div className="item ">   
                <h4> bed&amp;bath  </h4>
                <img className="img-fluid" src={item2} alt="outdoor" width="200" height="200"/>
                <div className="list text-capitalize">
                <ul className="list-unstyled">
                <li><a href="/patiofurniture/">patio furniture </a></li>
                    <li><a href="/outdoordecor/">outdoor decor </a></li>
                    <li><a href="/outdoorshades/">outdoor shades </a></li>
                    <li><a href="/lawngarden/">lawn&amp;garden </a></li>
                    <li><a href="/outdoorrugs/">outdoor rugs </a></li>
                    <li><a href="/viewmore/" className="second-color">
                        view more
                        <i className="fa fa-chevron-down ml-2  main-color " aria-hidden="true"></i>
                    </a></li>
                    
                    </ul>
                </div>
            </div>
            </div> 

            
            <div className="col-md-3 col-sm-6 ">
            <div className="item ">   
                <h4>furniature</h4>
                <img className="img-fluid" src={item3} alt="outdoor" width="200" height="200"/>
                <div className="list text-capitalize">
                <ul className="list-unstyled">
                    <li><a href="/patiofurniture/">patio furniture </a></li>
                    <li><a href="/outdoordecor/">outdoor decor </a></li>
                    <li><a href="/outdoorshades/">outdoor shades </a></li>
                    <li><a href="/lawngarden/">lawn&amp;garden </a></li>
                    <li><a href="/outdoorrugs/">outdoor rugs </a></li>
                    <li><a href="/viewmore/" className="second-color">
                        view more
                        <i className="fa fa-chevron-down ml-2  main-color " aria-hidden="true"></i>
                    </a></li>
                    
                    </ul>
                </div>
            </div>
            </div> 

            
            <div className="col-md-3 col-sm-6 ">
            <div className="item ">   
                <h4>office</h4>
                <img className="img-fluid" src={item4} alt="outdoor" width="200" height="200"/>
                <div className="list text-capitalize">
                <ul className="list-unstyled">
                    <li><a href="/patiofurniture/">patio furniture </a></li>
                    <li><a href="/outdoordecor/">outdoor decor </a></li>
                    <li><a href="/outdoorshades/">outdoor shades </a></li>
                    <li><a href="/lawngarden/">lawn&amp;garden </a></li>
                    <li><a href="/outdoorrugs/">outdoor rugs </a></li>
                    <li><a href="/viewmore/" className="second-color">
                        view more
                        <i className="fa fa-chevron-down ml-2  main-color " aria-hidden="true"></i>
                    </a></li>
                    
                    </ul>
                </div>
            </div>
            </div> 

           
            
        </div>
    </div>
      
    </div>
  );
}

export default Categories;
