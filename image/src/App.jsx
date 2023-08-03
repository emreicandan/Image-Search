import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './SearchImages'
import ImagesList from './ImagesList'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) =>{
  const result = await searchImages(term);
  setImages(result)
  }

  return (
<div className='App' >
  <SearchHeader search={handleSubmit} />
  <ImagesList imagesPlaceHodler={images} />
</div>
  )
}

export default App
