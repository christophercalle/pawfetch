import {useState} from 'react'

function App() {
  const [dogImage, setDogImage] = useState('')

    function fetchDog() {
    console.log('clicked')
  }

  return (
    <div>
        <h1>PawFetch</h1>
      <button onClick={fetchDog}>Fetch a dog</button>    
    </div>
  )
}

export default App

