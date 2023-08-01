import React from 'react'
import ui from "assets/images/ui.svg";
import project from "assets/images/project.svg";
import content from "assets/images/content.svg";
import market from "assets/images/market.svg";



const Card = ({number, title1, title2, image}) => {
    return (
       <div className='flex flex-col w-[246px] mx-auto mb-[59px] p-8 gap-10 border border-mayhaven-brown'>
           <h2 
             className="text-violet-900 text-[86.55845642089844px] font-extralight leading-7 mb-1">
             {number}
            </h2>
            <h3 className="text-violet-900 text-[28px] font-[400] ">
                {title1}<br/>{title2}
            </h3>

            <img 
             className="w-[190.25px] h-[191.15px]" 
             src={image} 
             alt='programs-images'
             />

       </div>
    )
}

const ProgramsCards = () => {
  return (
    <div className='max-w-[1200px] flex flex-col xl:flex-row mx-auto justify-between mt-[100px] xl:mt-[30px] '>
      <Card number={1} title1={"UI/UX"} title2={"Design"} image={ui}/>
      <Card number={2} title1={"Project"} title2={"Management"} image={project}/>
      <Card number={3} title1={"Content"} title2={"Writing"} image={content}/>
      <Card number={4} title1={"Digital"} title2={"Marketing"} image={market}/>

    </div>
  )
}

export default ProgramsCards