import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IconProvider } from '../../../utils/common.utils';
import { FaBookReader } from "react-icons/fa";

import { FiClock } from "react-icons/fi"
export default function CouseList() {


    const Card = React.memo(() => {
        return (
            <React.Fragment>
                <div className=' card cursor-pointer rounded-2xl  border border-[#e7e7ec]  ' style={{ boxShadow: " rgba(149, 157, 165, 0.15) 0px 3px 6px 0px" }}>
                    <div className='p-2 rounded-2xl overflow-hidden '>
                        <div className='overflow-hidden transition-all   rounded-2xl'>
                            <img className='rounded-2xl  w-full h-auto' src='https://www.izaanschool.com/assets/img/products/izaan-qa-img-350X220.jpg' alt='loading...' />
                        </div>
                    </div>
                    <div className='py-3 px-6 '>
                        <div className=' text-[#77838f] '>
                            Data Analytics
                        </div>
                        <div className=' text-primarybg inline text-lg font-semibold w-[70%] mb-3 mt-2 '>
                            Software QA Automation Engineering
                        </div>

                        <div className='mt-2 pb-2 '>
                            <div className='grid grid-cols-12 mt-2'>
                                <div className='col-span-6'>
                                    <div className='flex justify text-[#77838f] text-sm'>
                                        <div className='mt-[1.5px] mr-2'>
                                            <IconProvider className={'text-base text-[#77838f]'}>
                                                <FaBookReader />
                                            </IconProvider>
                                        </div>
                                        <div className=''> 72 Lessons</div>
                                    </div>
                                </div>
                                <div className='col-span-6'>
                                    <div className='flex justify text-[#77838f] text-sm'>
                                        <div className='mt-[1.5px] mr-2'>
                                            <IconProvider className={'text-base text-[#77838f]'}>
                                                <FiClock />
                                            </IconProvider>
                                        </div>
                                        <div className=''> 3 days </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className=' bg-white py-12'>
                <div className='lg:px-36 '>
                    <div className='grid grid-cols-12 gap-5 '>
                        <div className='col-span-4 my-2 lg:px-3  '>
                            <AnimationOnScroll  animateIn="animate__zoomIn ">
                                <Card />
                            </AnimationOnScroll >
                        </div>
                        <div className='col-span-4 my-2 lg:px-3  '>
                            <AnimationOnScroll  animateIn="animate__zoomIn ">
                                <Card />
                            </AnimationOnScroll >
                        </div>
                        <div className='col-span-4 my-2 lg:px-3  '>
                            <AnimationOnScroll  animateIn="animate__zoomIn ">
                                <Card />
                            </AnimationOnScroll >
                        </div>
                        <div className='col-span-4 my-2 lg:px-3  '>
                            <AnimationOnScroll  animateIn="animate__zoomIn ">
                                <Card />
                            </AnimationOnScroll >
                        </div>
                        <div className='col-span-4 my-2 lg:px-3  '>
                            <AnimationOnScroll  animateIn="animate__zoomIn ">
                                <Card />
                            </AnimationOnScroll >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
