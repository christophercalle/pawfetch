import {useState} from 'react'

function App() {
  const [dogImage, setDogImage] = useState('')

  async function fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    setDogImage(data.message)
  }

  return (
    <div>
      <h1>PawFetch</h1>
      {dogImage && <img src={dogImage} height="500" />}
      <div>      
        <button onClick={fetchDog}>Fetch a dog</button>
      </div>
    </div>
  )
}

export default App
