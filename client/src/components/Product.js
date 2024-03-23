import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
    const [details,setDetails]=useState({})
    const location=useLocation()
    useEffect(()=>{
        setDetails(location.state.item)

    })
  return (
    <div>
    
    </div>
  )
}

export default Product
