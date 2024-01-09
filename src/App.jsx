import { useState } from 'react'
import './App.css'

function App() {
  
  const [value , setValue] = useState("");

  const [results , setResulte] = useState([]);


  const fetchImage = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=4f7g-9Xo9HjOmVRUTDg3wYn9zejp4Cz_9tabFw5BXi8&query=${value}`)
    .then(res => res.json())
    .then(data => setResulte(data.results));

    console.log(results)
  }


  return (
    <>
      <div className="header">
        <span>جست و جو</span>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={fetchImage}>ارسال</button>
      </div>
      <div className='gallery'>
        {
          results && 
            results.map((img) =>  <img key={img.id} src={img.urls.regular} alt='' />)
        }
      </div>
    </>
  )
}

export default App
