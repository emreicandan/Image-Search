import React from 'react'
import ImageItem from './ImageItem'

function ImagesList({imagesPlaceHodler}) {
  return (
    <div className='imageList'>
      {
        imagesPlaceHodler.map((image , index)=>{
          return  <ImageItem key={index} image={image}/>
        })
      }
    </div>
  )
}

export default ImagesList
