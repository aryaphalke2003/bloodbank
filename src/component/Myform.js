import React, {useState} from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyForm(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyCpS-ol34cBpgfIwqf3et1PkXKCUkEu-b0",
    authDomain: "blood-donation-49d4e.firebaseapp.com",
    projectId: "blood-donation-49d4e",
    storageBucket: "blood-donation-49d4e.appspot.com",
    messagingSenderId: "681293016519",
    appId: "1:681293016519:web:ce6f201993418643edbde2",
    measurementId: "G-75L2KS88CW"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const [username, setUsername] = useState('');
  const [age, setage] = useState('');
  const [blood, setblood] = useState('');
  const [remarks, setremarks] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document with the form data
      await addDoc(collection(db, 'users'), {
        username,
        age,
        blood,
        remarks
      });
      toast.success('Data submitted successfully!');
      console.log('Form data submitted successfully!');
      
      // Clear the form inputs
      setUsername('');
      setage('');
      setblood('');
      setremarks('');
    } catch (error) {
        toast.error('An error occurred while submitting data.');
      console.error('Error submitting form data:', error);
    }
  };
    return(
        <>
        <Navbar/>
        <ToastContainer/>
        <div className="py-12 md:py-24 h-max w-auto bg-gradient-to-b from-red-900 to-red-950">
        <div className="flex flex-col items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
          Blood Type
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="blood"
          type="blood"
          placeholder="Enter your Blood Type"
          value={blood}
          onChange={(e)=>setblood(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="blood">
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="age"
          type="age"
          placeholder="Enter your Age"
          value={age}
          onChange={(e)=>setage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="blood">
          Any remarks?
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="remarks"
          type="remarks"
          placeholder="Enter Remarks"
          value={remarks}
          onChange={(e)=>setremarks(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </form>
      </div>
        </div>   
        <Footer/>
        </>
    );
}