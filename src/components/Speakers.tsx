import { motion } from 'framer-motion';
import Link from 'next/link';
import Speaker from './Speaker';

const Speakers = () => {
    const speakers = [
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. Jane Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. Jane Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' },
        { name: 'Dr. John Doe', profileUrl: 'https://www.dabadoc.com/ma' }
    ];

    return (     <div>
        <div className='flex flex-col items-center p-6'>
        <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
            }}}
            viewport={{ once: true, amount: 1 }}
            >
        <h1 className='text-4xl font-bold text-center mb-4'>
            <code>Speakers</code>
        </h1></motion.div>
        <motion.div
            className="card-container"
            initial={{y:100, opacity:0}}
            whileInView={{
                y: 0,
                opacity:100,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.5
                }}}
            viewport={{ once: true, amount: 1 }}
            >
        <h3 className='text-lg text-center py-6'> Double check with a Doctor</h3>
        </motion.div>
        </div>
    <div className='snap-mandatory snap-x flex overflow-x-auto gap-10 px-4 py-6'>
        {speakers?.map((doctor, index) => (

        <div className="snap-center">
            <Link href={doctor.profileUrl? doctor.profileUrl: "https://www.dabadoc.com/ma"}>
            <Speaker  index={index} title={doctor.name} />
            </Link>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Speakers;
