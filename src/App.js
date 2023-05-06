import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './component/home';
import Prompt from './component/prompt';
import FAQ from './component/faq';
import MyForm from './component/Myform';

function App() {
  const items = [
    {
      question: "How does age affects my ability to donate blood?",
      answer: "Minimum age for whole blood donation is 18 years in India. The maximum age for blood donation depends on the kind of donation.",
    },
    {
      question: "I am taking antibiotics. Can I donate blood?",
      answer: "It depends on why you are taking the antibiotics and it may also depend after doctor counselling.",
    },
    {
      question: "Are there any side effects of Blood donations?",
      answer: "There are no side effects of blood donation. The blood bank staff ensures that your blood donation is a good experience so as to make you a regular blood donor. There are a number of people who have donated more than 25-100 times in their entire lifetime.",
    },
    {
      question: "How often can I donate Blood ?",
      answer: "After every three-four months you can donate blood.",
    },
    {
      question: "What should I eat before blood-donation ?",
      answer: "Anything that you normally eat at home. Eating a light snacks and having a soft drink before blood donation is sufficient.",
    },
  ];
  
  return (
    <>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/prompt' element={<Prompt/>}/>
          <Route path='/myform' element={<MyForm/>}/>
          <Route path='/faq' element={<FAQ items={items}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
