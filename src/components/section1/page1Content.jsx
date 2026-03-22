import React from 'react'
import LeftContent from './leftContent'
import RightContent from './rightContent'

const Page1Content = (props) => {

  return (
    <div className=" pb-10 flex justify-center items-center gap-12 px-24 h-[80vh]">

      {/* Left side */}
      <LeftContent />

      {/* Right side (IMPORTANT: props pass ho raha hai) */}
      <RightContent users={props.users} />

    </div>
  )
}

export default Page1Content