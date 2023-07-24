import React from "react";
import Body from "./body";
import Footer from "./Footer";
import Header from "./Header";

const Index = (props) => {
    console.log(props.header)
  console.log(props.children);
  return (
    <div>
      <Header data={props.header} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Index;
