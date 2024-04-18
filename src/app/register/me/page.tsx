"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ShareActions } from '@/components/Share';
import SpaceParticles from '@/components/SpaceParticles';
import Ticket from '@/components/Ticket';
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

    const baseurl = process.env.NEXTAUTH_URL;
    const url = `${baseurl}/register/me/`;
    //get username from url
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Get the current URL
        const currentUrl = window.location.href;

        // Split the URL by '/' to get the segments
        const urlSegments = currentUrl.split('/');

        // Find the segment containing the username
        const usernameSegmentIndex = urlSegments.indexOf('register') + 1;

        // Extract the username from the URL segment
        const usernameFromUrl = urlSegments[usernameSegmentIndex];

        // Set the username state variable
        setUsername(usernameFromUrl);
    }, []);
    
    return (
    <div className='bg-black'>
    <div className="fixed absolute top-0 left-0" style={{ height: '100vh', width: '100vw' }}>
        <Canvas>
            <SpaceParticles />
        </Canvas>
    </div>
    <div className='sticky'>
        <Navbar baseurl={process.env.NEXTAUTH_URL ?? 'localhost:3000'}/>
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
        <ShareActions baseurl={process.env.NEXTAUTH_URL ?? 'localhost:3000'}/>
        <Ticket />
        </SessionProvider>
    </div>
    <Footer/>
    </div>
    );
}
