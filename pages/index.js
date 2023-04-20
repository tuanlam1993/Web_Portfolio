import AnimatedText from '@/components/AnimatedText';
import HireMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";


export default function Home() {
  return (
    <>
      <Head>
      <title>The Outsourcing Lab</title>
        <meta
          name="description"
          content="3D Vehicle Outsourcing"
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-1/2 md:w-full'>
                <Image src={profilePic} alt="OutsourcingLab" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
                 
              
                
              
                
               </div>
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="Your Vision | Our Mission" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Introducing our experienced 3D outsourcing studio specializing in making 3D vehicles. 
                Our team members have been in this industry for nearly 10 years and capable of delivering high-quality models for diverse platforms, from mobile to console and PC. Our skilled team uses the latest technologies to create stunning and photorealistic projects, ensuring exceptional service and exceeding client expectations. 
                Welcome to The Outsourcing Lab.
                </p>
                
                
               </div>
           </div>
        </Layout>

        <HireMe />
        <div className='absolute right-4 bottom-1 inline-block w-48 md:hidden'>
          <Image src={lightBulb} alt="OutsourcingLab" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
