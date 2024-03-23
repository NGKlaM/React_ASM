import React from 'react'

type Props = {}

const Baner = (props: Props) => {
  return (
    <>
    <div className="banner my-20 flex justify-center items-center">
  <img
    className="border w-11/12 border-gray-300 rounded-lg"
    src="https://png.pngtree.com/background/20231030/original/pngtree-contemporary-lounge-with-sleek-grey-sofa-against-blank-white-backdrop-picture-image_5792449.jpg"
    alt=""
  />
</div>
    {/* <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
      <img
        src="https:https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHGVaGM5QAsez9JgK9edeQKZbIkNjnjXOMA&usqp=CAU"
        alt="Banner"
        className="max-w-full max-h-full"
      />
    </div> */}
    </>
  )
}

export default Baner