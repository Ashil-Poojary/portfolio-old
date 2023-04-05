import React from 'react';

function MyProfile(props) {

    function resumeDownload() {
        const urls="/Resume.pdf"
        const filename=urls.split("/").pop();
        console.log(filename)
        const aTag=document.createElement("a");
        aTag.href=urls;
        aTag.setAttribute("download",filename);
        aTag.click();
        aTag.remove();
    }

    return (
        <div>
            <div className="flex justify-center">
                <img className="w-/3 md:w-2/2 lg:w-1/2 rounded-full  p-2" src="image/ashil.jpg" alt="profile pic" />
            </div>
            <div className="text-center  mt-4">
                <h1 className="text-3xl md:text-4xl font-bold text-orange-700">Ashil Poojary</h1>
                <h4 className="mt-1 md:text-xl font-semibold text-gray-500 font-mono">Web Developer | MERN</h4>
                <p className="mt-2 text-gray-500 font-mono font-semibold ">I am a full stack developer with expertise in MERN stack and Android Development.</p>
                <button className='hover:bg-orange-500 font-bold font-mono bg-blue-600 text-black rounded-3xl px-2 py-2 mt-2'
                onClick={resumeDownload}>Download CV</button>
            </div>
        </div>
    );
}

export default MyProfile;