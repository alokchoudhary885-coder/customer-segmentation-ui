import React from 'react';
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'
const App = () => {
  const user = [
    {
      img:"https://i.pinimg.com/1200x/f1/9f/dc/f19fdcc70955d2e5ef028527cb424595.jpg ",
      color:"#ec4899",
      intro: "Stay focused and productive\nEverything is running smoothly\nNo major issues or gaps",
      tag:"Average "
    },
    {
      img:"https://i.pinimg.com/736x/61/19/e4/6119e4fe3f8591f2da262715aa6feb39.jpg",
      color:"#3b82f6",
       intro:"Opportunities are being missed\nNeeds are not fully addressed\nTime to improve support",
       tag:"concise"
    },
    {
      img:"https://i.pinimg.com/736x/2a/75/9b/2a759b8474a674b4771c6f82eff8b52a.jpg",
      color:"#f97316",
      intro:"Limited access to financial tools\nPotential is still untapped\nBridge the gap smartly",
      tag:"Analyze"
    },
    {
      img:"https://i.pinimg.com/1200x/d9/69/3e/d9693e6028acdbba0e14cd842219bed2.jpg",
      color:"#6366f1",
      intro:"Stay focused and productive\nEverything is running smoothly\nNo major issues or gaps",
      tag:"badge"
    },
   {
    img: "https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    color:"6b7280",
    intro: "Stay focused and productive\nEverything is running smoothly\nNo major issues or gaps ",
    tag: " satisfied "
   },
   {
    
    img: "https://i.pinimg.com/736x/e6/46/b3/e646b3f5fe8fc27a2f6a9c65add77916.jpg",
    color:"#22c55e",
    intro: "Opportunities are being missed\nNeeds are not fully addressed\nTime to improve support",
    tag:"Underserved"
   },
   {
    
    img: "https://i.pinimg.com/736x/a8/d1/ed/a8d1ed2ca28bb767ecf815e29602374f.jpg ",
    color:"#14b8a6",
    intro: "Limited access to financial tools\nPotential is still untapped\nBridge the gap smartly",
    tag: "UnderBanked"
   }
 
  ]
  return (
    <div >
      <Section1 users={user} />
      <Section2 />
    </div>
   
      
    
  )
}

export default App;
