import React, { useState } from 'react'
import Greetings from './Greetings';

const App = () => { //componen adalah fungsi yang berisi JSX
  const [hello, setHello] = useState('Hello World')
  const handleClick = () => {
    setHello('Selamat Datang')
    // console.log('button clicked')
  }

  return (
    //JSX
    <>
    {/* ini cara membuat komentar */}
    <h2>{hello}</h2>
      <Greetings text="ini adalah props" number={10}/>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App;