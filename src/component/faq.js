import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Faq(props) {

    return(
        <>
        <Navbar/>
        <div className="py-12 md:py-24 h-max w-auto bg-gradient-to-b from-red-900 to-red-950">
        <div className="flex flex-col items-center">
        {props.items.map((item, index) => (
          <div key={index} className="w-full lg:w-1/2 border-2 border-red-500">
            <button className="w-full py-3 text-left text-white backdrop-blur-xl hover:bg-gray-300 focus:bg-gray-300 focus:outline-none">
              {item.question}
            </button>
            <div className="border border-red-500 p-4 text-white backdrop-blur-sm">{item.answer}</div>
          </div>
        ))}
      </div>
        </div>   
        <Footer/>
        </>
    );
}