import { FaDiscord, FaLinkedin, FaRegCreditCard } from "react-icons/fa";
import { FiArrowUp, FiChevronRight, FiLink, FiLogOut, FiSettings } from "react-icons/fi";
import PromptBox from "./PromptBox";
import { ChatsContext } from "../context/ChatsContext";
import { useContext } from "react";
import LoadingDots from './LoadingDots'

const HistorySide = () => {
  const obj = ["fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs",
    "fsdfsd", "FSDfsdfsdfds", "DFsfsdfsdfs"
  ]
  return (
    <div className="h-full bg-spider-900 text-gray-200">

      <div className="mx-3 px-3 p-2 cursor-pointer flex gap-2 hover:bg-hover-100 hover:bg-[#313130] rounded-lg">
        <div className="w-7 h-7 rounded text-2xl bg-purple-500 flex items-center justify-center font-bold">
          <p className="text-white font-semibold text-lg">+</p>
        </div>
        <div className="font-semibold">New Chat</div>
      </div>
      <h3 className="px-6 p-1 text-[13px] font-semibold text-gray-300 border-b border-[#323235]">Your Chats</h3>
      <div className="flex px-3 flex-col">
        <div className="flex-1 custom-scrollbox overflow-y-scroll min-h-[calc(100vh-350px)] max-h-[calc(100vh-350px)]">
          {obj.map((obj) => <div className="hover:bg-spider-hover rounded-lg hover:bg-[#313130] px-3 py-2 cursor-pointer max-w-4xl truncate">{obj}</div>)}
        </div>
        <div className="py-2 border-t border-[#323235]">
          <div className="flex items-center gap-2 font-semibold hover:bg-[#313130] cursor-pointer p-2 px-3 rounded-lg"> <FaRegCreditCard /> My Subscription</div>
          <div className="flex items-center gap-2 font-semibold hover:bg-[#313130] cursor-pointer p-2 px-3 rounded-lg"> <FiSettings /> Settings</div>
          <div className="flex items-center gap-2 font-semibold hover:bg-[#313130] cursor-pointer p-2 px-3 rounded-lg pb-4"> <FiLogOut /> sign out</div>
          <div className=" items-center gap-2 font-semibold cursor-pointer p-2 px-3 rounded-lg border-t border-[#54639b]">
            <div className="flex gap-2 items-center ">
              <span className="w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-lg text-center rounded-full flex items-center justify-center">
                C
              </span>
              <div className="flex flex-col">
                <span className="font-semibold">Chintan</span>
                <span className="text-sm font-normal">Personal Plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


type ChatSideProp = {
    prompt : string;
    setPrompt : Function;
    HandlePromptSubmit : Function;
}

const ChatSide = ({ prompt,setPrompt, HandlePromptSubmit } : ChatSideProp) => {
    const { chatsData } : any = useContext(ChatsContext);
  
  return (
    <div className="h-full bg-spider-900 rounded-b text-gray-200">
      <div className="flex px-3 flex-col border-t border-[#323235]">
        <div className="flex-1 custom-scrollbox overflow-y-scroll min-h-[calc(100vh-265px)] max-h-[calc(100vh-365px)]">
          { chatsData.prompt !== '' && <div className="w-[calc(100%-20px)] bg-[#2a2929] mt-6 rounded-lg">
            <div className="pl-4 pt-4 text-gray-400 font-semibold flex gap-2 items-center">
              Prompt
              <div className="text-lg font-bold"><FiChevronRight /></div>
            </div>
            <div className="break-words text-justify px-4 pt-2 pb-6">
              {chatsData.prompt}
            </div>
          </div> 
}
          { chatsData.prompt !== '' && <div className="w-[calc(100%-20px)] bg-[#2a2929] mt-6 rounded-lg">
            <div className="pl-4 pt-4 text-gray-400 font-semibold flex gap-2 items-center">
              Thoughts
              <div className="text-lg font-bold"><FiChevronRight /></div>
            </div>
            { chatsData.llmThoughts == '' ?
            <div className="p-8 text-gray-300"><LoadingDots /></div>  
             : 
            <div className="break-words text-justify px-4 pt-2 pb-6">
              {chatsData.llmThoughts.replace(/\*\*/g, '').replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/"/g, '').replace(/\\+/g, '') }
            </div>
           } 
          </div>}
        </div>
        <PromptBox prompt={prompt} setPrompt={setPrompt} HandlePromptSubmit={HandlePromptSubmit} />
        {/* <div className=" p-4 border-t border-[#323235]">
            <div className="bg-gradient-to-r to-purple-600 from-indigo-600 rounded-lg p-[0.8px]">
              <div className="bg-[#2a2929] items-center gap-2 font-semibold cursor-pointer p-2 px-3 rounded-lg ">
                <div className="min-h-[100px] max-h-[200px] flex">
                  <textarea className="w-full grow custom-scrollbox focus:ring-0 focus:outline-none mr-4" placeholder="create 2D animation with AI"></textarea>
                  <div className="pt-2 pr-2">
                    <div className="font-semibold text-gray-500 bg-gray-200 text-lg p-2 hover:bg-[#777777] rounded hover:text-white">
                      <FiArrowUp />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="font-semibold text-gray-500 text-lg p-2 hover:bg-[#3b3b3a] rounded hover:text-white">
                    <FiLink />
                  </span>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  )
}



export { HistorySide, ChatSide }