import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import BloodBankList from "./Bloodbanklist";

export default function Prompt() {
    const location = useLocation();
    const data1 = location.state?.data;
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://www.eraktkosh.in/BLDAHIMS/bloodbank/nearbyBB.cnt?hmode=GETNEARBYSTOCKDETAILS&stateCode=" + data1 + "&districtCode=-1&bloodGroup=all&bloodComponent=11&lang=0&_=1633202320971");
        const jsonData = await response.json();
        setData(jsonData.data);
      };
      fetchData();
    }, []);
    return (
        <>
        <Navbar/>
        <div className="py-12 md:py-24 h-max w-auto bg-gradient-to-b from-red-900 to-red-950">
        <div className="grid max-w-screen-xl px-6 mx-auto lg:px-8 xl:px-4 md:grid-cols-2 xl:grid-cols-2 gap-x-12 lg:gap-x-20">

        <BloodBankList data={data} />

        </div>
        </div>         
        <Footer/>
        </>
    );
}