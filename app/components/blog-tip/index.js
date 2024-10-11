
import React from 'react'

const BlogTip = ({ tip }) => {
  return (
    <div className="pt-7 pb-10 px-12 bg-[#f9f9f9] my-6 relative before:content-[''] before:absolute before:w-[5px] before:h-full before:left-0 before:top-0 before:bg-primary-color">
      <p className="font-medium text-primary-color mb-2 text-xl">Tip:</p>
      <p className="text-xl font-bold text-black leading-8">{tip}</p>
    </div>
  )
}

export default BlogTip