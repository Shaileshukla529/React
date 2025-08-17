import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const cardData = [
    { title: "Card 1", content: "This is the content of Card 1" },
    { title: "Card 2", content: "This is the content of Card 2" },
    { title: "Card 3", content: "This is the content of Card 3" },
  ];

  return (
    <>
     <h1 className='text-3xl font-bold underline'>Tailwind Test</h1>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {cardData.map((card, index) => (
         <Card key={index} title={card.title} content={card.content} />
       ))}
     </div>
    </>
  )
}

export default App


