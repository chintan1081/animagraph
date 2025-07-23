import { useState } from "react";
import PromptBox from "./PromptBox"
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LandingChats = () => {
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState("");

    const HandlePromptSubmit = () => {
        navigate("/chats", { state: { prompt, HandlePromptSubmit : true } });
    }

    return (
        <div>
            <div className="bg-hero max-h-screen min-h-screen w-full">
                <div className="px-8 pt-8 flex justify-between">
                    <h1 className="text-2xl font-semibold text-white flex gap-3 items-center cursor-pointer">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-md flex items-center justify-center">
                            <div className="text-white font-bold text-lg">2D</div>
                        </div>
                        AnimaGraph
                    </h1>
                    <div className="text-white text-lg flex items-center justify-end">
                        <div className="p-2 hover:bg-[#656565] rounded cursor-pointer"><FaLinkedin /></div>
                        <div className="p-2 hover:bg-[#656565] rounded cursor-pointer"><FaSquareXTwitter /></div>
                        <div className="p-2 hover:bg-[#656565] rounded cursor-pointer"><FaDiscord /></div>
                    </div>
                </div>
                <div className='flex flex-col items-center pt-30 justify-center h-full w-full'>
                    <div>
                        <div className=' p-4 w-[700px] text-white text-center font-medium text-5xl pb-8 flex flex-col gap-2'>
                            Build something 2D  Animated
                            <div className='text-lg font-normal text-gray-300'>Idea to 2D animation in seconds, with your personal animator</div>
                        </div>
                        <PromptBox prompt={prompt} setPrompt={setPrompt} HandlePromptSubmit={HandlePromptSubmit} />
                    </div>
                    <div>
                        <div className='flex gap-2 items-center justify-center text-gray-300 font-medium text-sm w-[700px]'>
                            <div className='p-2  hover:bg-gray-700 border border-gray-700 rounded text-center'>Make a Rectangle Appear and Move   </div>
                            <div className='p-2 hover:bg-gray-700 border border-gray-700  rounded text-center'>Draw a Circle with a Rotating Dot </div>
                            <div className='p-2 hover:bg-gray-700 border border-gray-700  rounded text-center'>Spin a Polygon</div>
                        </div>
                        <div className='flex justify-center items-center text-gray-300 gap-2 font-medium text-sm w-[700px] pt-4'>
                            <div className='p-2 hover:bg-gray-700 border border-gray-700  rounded text-center'>Create a Triangle That Bounces</div>
                            <div className='p-2 hover:bg-gray-700 border border-gray-700  rounded text-center'>Morph a Square into a Circle </div>
                        </div>
                        <div className='text-center pt-4 text-gray-300'>or start a blank animation with your imagination</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingChats;