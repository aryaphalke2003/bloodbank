import React, {useState} from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import Drop from "./drop.svg"

const options = {
    '0':'select state','35':'andaman_and_nicobar_islands','28':'andhra_pradesh','12':'arunachal_pradesh','18':'assam','10':'bihar','94':'chandigarh','22':'chhattisgarh','26':'dadra_nagar_haveli','25':'daman_diu','97':'delhi','24':'gujarat','30':'goa','96':'haryana','92':'himachal','91':'jammu_and_kashmir','20':'jharkhand','29':'karnataka','32':'kerala','37':'ladakh','31':'lakshdweep','23':'madhya_pradesh','27':'maharashtra','14':'manipur','17':'meghalaya','15':'mizoram','13':'nagaland','21':'odisha','34':'puducherry','93':'punjab','98':'rajasthan','11':'sikkim','33':'tamil_nadu','36':'telangana','16':'tripura','95':'uttarakhand','99':'uttar_pradesh','19':'west_bengal'
  };

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('0');

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
    return(
        <>
        <Navbar/>
        <div className="py-12 md:py-24 h-screen w-auto bg-gradient-to-b from-red-900 to-black">
          <div className="grid mt-40 max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
            <div className="self-center order-2 col-span-2 mt-12 md:order-1 md:mt-0">
                <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl lg:text-5xl md:mb-4 lg:mb-8">Find the nearest life giving station.</h1>
                <p className="mb-6 text-lg text-gray-200 xl:text-xl lg:mb-8 xl:mb-10">Connect donors to those in need - find a blood bank near you with our locator.</p>
                <div className="flex mb-6 space-x-4">
                <select
                    className="block appearance-none w-full px-4 py-4 pr-8 leading-none border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                {Object.keys(options).map((option) => (
                    <option key={option} value={option}>
                    {options[option]}
                    </option>
                ))}
                </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                className="w-4 h-4 fill-current text-gray-400"
                viewBox="0 0 20 20"
                >
                <path
                fillRule="evenodd"
                d="M6.293 6.707a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
                />
                </svg>
            </div>
                <Link to={"/prompt"}
                    state={{data: selectedOption}}>
                    {console.log(selectedOption)}
                    <button className="px-5 py-2 font-semibold text-white rounded-lg focus:outline-none bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 ">
                    Get started
                    </button>
                </Link>
                </div>
            </div>
            <div className="order-1 col-span-2 hidden lg:block">
                <img src={Drop} className="ml-40 h-80 w-80" alt="" />
                
            </div>
          </div>
        </div>
        <Footer/>
        </>
    );
}