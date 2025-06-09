import { FaDiscord, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const ChatsNavbar = () => {
  return (
    <div className="px-8 p-4 flex justify-between bg-[#1e1e1e]">
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
  )
}

export default ChatsNavbar
