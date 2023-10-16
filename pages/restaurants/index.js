import React from "react";
import Leftsidebar from "../../components/Clientrestaurants/leftsidebar";
import Rightsidebar from "../../components/Clientrestaurants/rightsidebar";
import Rightdetail from './../../components/Clientrestaurants/rightdetail';

const index = () => {
  return (
    <div className="flex gap-9 flex-wrap">
      <Leftsidebar />
      <Rightdetail />
      <Rightsidebar />
     
      
    </div>
  );
};

export default index;
