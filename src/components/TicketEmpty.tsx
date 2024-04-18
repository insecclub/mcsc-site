import Image from 'next/image';
import { useEffect, useState } from 'react';

const Ticket = () => {

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
        <div className="shrink-0 mt-4 relative pt-8">
        <Image
            src="/ticket.png"
            alt="Ticket"
            width={isMobile? 350 : 900}//350
            height={isMobile? 250 : 150}//150
            className='drop-shadow-[0_0px_5px_rgba(0,255,65,0.3)]'
        />
        </div>
    );
};
export default Ticket;


