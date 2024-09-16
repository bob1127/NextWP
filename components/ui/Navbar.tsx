"use client";
import React from "react";
import Marquee from "react-fast-marquee";
// import SliderNav from "../../components/SliderTabs/index.tsx";
// import Navslider from "../../components/SliderTabs/index";

// import oooo from "../../components/SliderTabs/index";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="top text-white">
          <Marquee>
            <div className="bg-black text-white py-3 text-normal">
              <p className="text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate tempora eaque tenetur cumque quasi dicta impedit
                accusamus perspiciatis officia itaque voluptate natus soluta
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate tempora eaque tenetur cumque quasi dicta impedit
                accusamus perspiciatis officia itaque voluptate natus soluta
              </p>
            </div>
          </Marquee>
        </div>
        <div className="bottom">{/* <SliderNav /> */}</div>
      </div>
    </>
  );
};

export default Nav;
