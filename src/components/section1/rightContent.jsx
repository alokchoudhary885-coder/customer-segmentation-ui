import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props);

  return (
   <div id='right' className="h-full rounded-4xl overflow-x-auto scroll-smooth flex flex-nowrap gap-8 p-4 mt-16 w-2/3">
      
      {props.users.map((elem, index) => {
        return <RightCard key={index} color={elem.color} data={elem} index={index} />
      })}

    </div>
  )
}

export default RightContent