"use client";
import Footer from '@/components/Footer';
import { GithubButton } from '@/components/GithubButton';
import Navbar from '@/components/Navbar';
import SpaceParticles from '@/components/SpaceParticles';
import TicketEmpty from '@/components/TicketEmpty';
import { SessionProvider } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';

export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 900px)");
    
        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);
    
        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean); }) => {
            setIsMobile(event.matches);
        };
    
        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);
    
        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
    <div className='bg-black'>
    <div className="fixed absolute top-0 left-0" style={{ height: '100vh', width: '100vw' }}>
        <Canvas>
            <SpaceParticles />
        </Canvas>
    </div>
    <div className='sticky'>
        <Navbar baseurl={process.env.NEXTAUTH_URL ?? ''}/>
    </div>
    <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex pb-10">
                <Image
                src="/title1.png"
                alt="Title"
                width={1000}
                height={100}
                />
        </div>
        <SessionProvider>
        <GithubButton/>
            <TicketEmpty/>
        </SessionProvider>
    </div>
    <Footer/>
    </div>
    );
}
