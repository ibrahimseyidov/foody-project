import React from "react";
import Leftsidebar from "../../components/Clientrestaurants/leftsidebar";
import Rightsidebar from "../../components/Clientrestaurants/rightsidebar";
import ClientContainer from "../../components/common/ClientContainer/ClientContainer";
import Rightdetail from './../../components/Clientrestaurants/rightdetail';

const index = () => {
  return (
    <ClientContainer>
      <div className="flex gap-9 mt-4 mb-16">
        <Leftsidebar />

        {/* <Rightdetail /> */}
        <Rightsidebar />
      </div>
    </ClientContainer>
  );
};

export default index;
