import React from 'react'

function ProductItem({item}: any) {
  return (
    <div>
           <div key={item.title} className="mx-auto w-sm h-screen">
          <img src={item.imageUrl} alt={item.title} className="w-full mx-auto max-h-screen" />
          <div className="text-center mt-2 font-medium">{item.title}</div>
        </div>
        </div>
  )
}

export default ProductItem