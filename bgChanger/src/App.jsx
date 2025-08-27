import { useState } from 'react';
import Button from './components/button';  
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('bg-gray-100');
  // eslint-disable-next-line no-unused-vars
  const [buttonStyle, setButtonStyle] = useState('mx-4 my-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50bg-gradient-to-g from-black-500 to-pink-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:from-pink-500 hover:to-purple-500 transition duration-300mx-4 my-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 hover:border-gray-500 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50');

  return (
    <>
       <div className={`flex justify-center items-start pt-8 h-screen ${bgColor}`}>
      <Button className={buttonStyle} onClick={() => setBgColor('bg-blue-100')}>Blue</Button>
      <Button className="mx-4 my-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50" onClick={() => setBgColor('bg-green-500')}>Green</Button>
      <Button className="mx-4 my-2 px-8 py-3 bg-transparent hover:bg-purple-600 text-purple-400 hover:text-white font-semibold rounded-lg border-2 border-purple-600 hover:border-purple-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50" onClick={() => setBgColor('bg-yellow-400')}>Yellow</Button>
      <Button className={buttonStyle} onClick={() => setBgColor('bg-black')}>Black</Button>
      <Button className={buttonStyle} onClick={() => setBgColor('bg-red-600')}>Red</Button>
    </div>

    </>
  );
}

export default App;
