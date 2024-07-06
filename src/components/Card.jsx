import React from 'react';
import rightMark from '../assets/right.png'

const Card = ({info}) => {
    
    const {banner,claims,description,plan_name,button_background,cost_per_day,tagged_as} = info;
    console.log(description.data_annual)
  return (
    <div className='w-3/12 h-[630px] px-3 border-2 border-solid border-black-700 rounded-md'>
        <div className='w-full h-2/5 '>
            <img src={banner} alt="" width='100%' height='100%' style={{objectFit:'contain'}} />
        </div>
        <div className='w-full h-[80px] px-3  ' >
            <div className='bg-slate-600  w-full h-full  rounded-xl text-white'>
                <p className='text-right text-[10px] mr-2 mt-1'>{tagged_as}</p>
                <p className='text-center text-2xl'>{plan_name}</p>
                <p className='text-center text-[10px]'>RS {cost_per_day} per day</p>
            </div>
        </div>
        <div className='w-full h-[250px] px-3'>
            <p className='text-lg font-semibold mb-3'>{claims}</p>
            
            {description.data_annual && description.data_annual.length>0 ? description.data_annual.map((list)=>(
               
                <p className='w-full flex items-center mt-1 '><span className=''><img src={rightMark} alt="" className='mr-7' /></span>{list.text}</p>
                
            )) : ''
        }
        </div>

    </div>
  )
}

export default Card