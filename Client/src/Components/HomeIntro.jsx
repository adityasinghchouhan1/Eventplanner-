import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)
const HomeIntro = () => {
    const comp = useRef(null)
    useEffect(()=>{
const ctx = gsap.context(()=>{
    const t1 = gsap.timeline(
        {
        ScrollTrigger:{
            trigger:comp.current,
            start:'top top',
            end:'+=2000',
            scrub:1,
            pin:true,
            markers: false, // Set to true for debugging
        }
    }
)
t1.from('#intro',{
        xPercent:'-100',
        duration:1.3,   
        delay:0.3,
    }).from(['#T-1','#T-2','#T-3'],{
        opacity:0,
        y:'+=30',
        stagger:0.5,
    }).to(['#T-1','#T-2','#T-3'],{
        opacity:0,
        y:'-=30',
        delay:0.3,
        stagger:0.5,
    }).to('#intro',{
        xPercent:'-100',
        duration:1.3,   
    })


},comp)
return () => ctx.revert()
    },[])
  return (
    <>
      <div className=' relative h-[300vh]' ref={comp}
      >
        <div className='tracking-tight absolute z-10 h-screen w-full top-0 gap-10  left-0 flex flex-col justify-start bg-gray-600'  id='intro'>
            <h2 className='sm:text-8xl text-4xl font-Yellowtail2 font-semibold text-black' id='T-1'></h2>
            <h2 className='sm:text-8xl text-4xl font-Yellowtail2 font-semibold text-black' id='T-2'></h2>
            <h2 className='sm:text-8xl text-4xl font-Yellowtail2 font-semibold text-black' id='T-3'></h2>
        </div>
        <div className='h-screen w-full flex justify-center place-items-center p-5'>
            <h1 className='font-semibold font-Roboto text-8xl'>WELCOME...</h1>
        </div>
      </div>
    </>
  )
}

export default HomeIntro
