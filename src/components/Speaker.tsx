import { Tilt } from "react-tilt";

const Speaker = ({ index, title }:
    {
        index:number;
        title:string;
    }) => {

        const direction="right";
        const type="spring";
        const delay=index*0.5
        const duration=0.75;
    return (
        <Tilt className='xs:w-[250px] w-full' options={{
            max: 45,
            scale: 1,
            speed: 300,
        }}>
                <div className='min-w-[250px] w-full rounded-xl shadow-card' >  
                <div className='rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-gradient-radial bg-gradient-to-br from-[#00ff41]/5 via-transparent to-[#00ff41]/5 '
                >
                    <div className=" scale-110">
                <img
                    src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                    alt='Speaker'
                    className='w-24 h-24 rounded-full ring-2 ring-[#00ff41]'
                /></div>
        
                <h3 className='text-lg font-bold text-center'>
                    <code>
                    {title}</code>
                </h3>
                <p className="text-sm">
                    <code>Speaker</code>
                </p>
                </div>
                </div>
        </Tilt>);
    };

export default Speaker;

