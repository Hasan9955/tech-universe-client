import { AiOutlinePhone } from 'react-icons/ai';
import { FaLocationDot } from 'react-icons/fa6';
import { BsFillClockFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';

const About = () => {
    return (
        <div className='p-5 mt-10 text-center flex flex-col justify-center items-center'>
            <h3 className=" text-5xl font-bold text-amber-600">About Us</h3>
            <h4 className="text-3xl my-2">Unveiling the Tech Universe Story</h4>
            <p className='text-lg'>As we move forward, our dedication to innovation and customer satisfaction remains unwavering. Thank you for being a part of the Tech Universe community, where the future of technology is a reality.</p>
            <div>
                <div className='grid md:grid-cols-2 gap-5 mt-10'>
                    <div className='flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><FaLocationDot></FaLocationDot></div>
                        <div>
                            <p className="text-2xl">Postal Address</p>
                            <p>Tech Universe</p>
                            <p>2nd floor, Abdullah Mansion, <br />Mirpur, Dhaka</p>
                        </div>

                    </div >
                    <div className='flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><BsFillClockFill></BsFillClockFill></div>
                        <div>
                            <p className="text-2x">Open Hours</p>
                            <p>Monday-Friday</p>
                            <p>8.00 am - 5.00 pm</p>
                            <p>Weekends Close</p>
                        </div>
                    </div>
                    <div className='flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><AiOutlinePhone></AiOutlinePhone></div>
                        <div>
                            <p className="text-2xl">Phone & Email</p>
                            <p>Phone: <span className="text-blue-500 underline">(456) 789-1234</span></p>
                            <p>Fax: <span className="text-blue-500 underline"> (123) 456-7890</span></p>
                            <p>Email: <span className="text-blue-500 underline">hasan@gmail.com</span></p>
                        </div>

                    </div>
                    <div className=' flex gap-3 border-2 rounded-xl p-3 shadow-xl'>
                        <div className='text-4xl'><TfiWrite></TfiWrite></div>
                        <div>
                            <p className="text-2xl">Sessions</p>
                            <p>Mornings: 8 am - 12 am</p>
                            <p>Afternoons: 1 pm - 5 pm</p>
                            <p>Full Day: 8 am - 5 pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;