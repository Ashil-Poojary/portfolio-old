import React from 'react';
import {ImWhatsapp} from "react-icons/im";
import {FiPhoneCall,FiTwitter} from "react-icons/fi";
import {MdEmail} from "react-icons/md";
import {BsLinkedin,BsGithub} from "react-icons/bs";

function ContactMe(props) {


    function whatsAppFunction() {
        window.open(`https://api.whatsapp.com/send?phone=+919071872917&text=${encodeURIComponent('Hello Ashil, ')}`);
    }


    function emailFunction() {
        const email="ashilpoojary22@gmail.com"
        window.open(`mailto:${email}?subject=${encodeURIComponent('Hey Ashil  ')}`)

    }
    return (
        <div className='border-t-2 md:border-t-0 md:border-l-2 border-gray-700 px-3 py-4'>
            <div className='text-cyan-600 text-2xl  font-mono'>
                Contact me:
            </div>
            <p className='mt-2 text-gray-500 font-mono  flex '><div className='text-red-600'>Email:</div> ashilpoojary@gmail.com</p>
            <p className='mt-2 text-gray-500 font-mono flex'><div className='text-red-600'>Phone:</div> +91 9071872917</p>
            <p className='mt-2 text-gray-500 font-mono flex'><div className='text-red-600'>Address:</div> Mudipu kurnad, Mangalore</p>

            <div className='flex  mt-3 '>
                <div className='px-5 grid-rows-2  justify-center cursor-pointer hover:bg-orange-500 rounded-full py-2' onClick={whatsAppFunction}>
                    <ImWhatsapp className='ml-5 text-blue-600' size={30} />
                    <p className='  text-teal-500 font-mono'>WhatsApp</p>
                </div>
                <div className=' px-5 grid-rows-2  justify-center  cursor-pointer  hover:bg-orange-500 rounded-full py-2' >
                    <a href="tel:9071872917">
                        <FiPhoneCall className='ml-5 text-blue-600' size={30} />
                        <p className=' px-4 text-teal-500 font-mono'>Call</p>
                    </a>
                </div>
                <div className=' px-5 grid-rows-2  justify-center cursor-pointer hover:bg-orange-500 rounded-full py-2' onClick={emailFunction}>
                    <MdEmail className='ml-5 text-blue-600' size={30} />
                    <p className=' px-2 text-teal-500 font-mono'>Email</p>
                </div>
            </div>
            <hr className='border-black mt-2'/>
            <div>
                <p className='text-cyan-600 font-mono'> Connect via : </p>
                <div className='flex'>
                    <div className='py-3 px-7 rounded-full  hover:bg-orange-500'
                         onClick={()=>{window.open('https://github.com/P00JARY')}}>
                        <BsGithub className='ml-3 text-blue-600' size={30}/>
                        <p className='text-teal-500'>GitHub</p>
                    </div>
                    <div className='py-3 px-5 rounded-full  hover:bg-orange-500'
                         onClick={()=>{window.open('https://www.linkedin.com/in/ashil-b-s/')}}>
                        <BsLinkedin className='ml-3 text-blue-600' size={30}/>
                        <p className='text-teal-500'>LinkedIn</p>
                    </div>

                    <div className='py-3 px-5 rounded-full  hover:bg-orange-500'
                         onClick={()=>{window.open('https://twitter.com/ashil_poojary')}}>
                        <FiTwitter className='ml-3 text-blue-600    ' size={30}/>
                        <p className='text-teal-500'>Twitter</p>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default ContactMe;