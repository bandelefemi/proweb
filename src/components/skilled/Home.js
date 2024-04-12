'use client'
import React from 'react'
import Header from './Header'
import FeaturedJob from './FeaturedJob'
import Earn from '../footer/Earn'
import Footer from '../footer/Footer'
import { FiSearch } from 'react-icons/fi'
import Sidebar from './Sidebar'
import { useSession } from 'next-auth/react'
import HeaderTwo from './HeaderTwo'

const Landing = () => {

    const {status, data: session} = useSession()

    // console.log(session)
  return (
    <div className=' bg-neutral-100'>
        <div>
            <HeaderTwo />
        </div>

        {/* featured jobs */}
        <div className=' px-5 md: flex gap-5'>
            <div className=' mt-6 bg-white py-5 px-4 rounded-lg'>
                <p className=' text-center text-xl font-light'>
                    Featured jobs
                </p>
                <div className=' mt-5'>
                    <FeaturedJob />
                </div>
            </div>

            <div>
                <Sidebar />
                <div className=' hidden md:flex mt-10'>
                    <Earn />
                </div>
            </div>


        </div>
        
        <div className=' mt-10 md:hidden'>
            <Earn />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Landing