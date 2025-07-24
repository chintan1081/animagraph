import { FaRegCreditCard } from "react-icons/fa";
import { FiChevronRight, FiLogOut, FiSettings } from "react-icons/fi";
import PromptBox from "./PromptBox";
import { ChatsContext } from "../context/ChatsContext";
import { useContext, useRef } from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

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

const ChatSide = ({ prompt, setPrompt, HandlePromptSubmit } : ChatSideProp) => {
  const { chatsData }: any = useContext(ChatsContext);
  const [history, setHistory] = useState<Array<{
    prompt: string;
    llmChat: string;
    videoUrl: string;
  }>>([]);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND}/animation/history`,{
        headers: {
          'ngrok-skip-browser-warning': '1',
        }});
        
        if (Array.isArray(res.data.history)) {
          setHistory(res.data.history);
        } else {
          console.error('Expected array but got:', res.data);
          setHistory([]);
        }
      } catch (err) {
        console.error('Error fetching history:', err);
        setHistory([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  // Append new chat to history when chatsData changes
  useEffect(() => {
    if (chatsData?.prompt && chatsData?.llmThoughts && chatsData?.videoUrl) {
      setHistory(prev => [
        ...prev,
        {
          prompt: chatsData.prompt,
          llmChat: chatsData.llmThoughts,
          videoUrl: chatsData.videoUrl
        },
      ]);
    }
  }, [chatsData]);

  // Auto scroll to bottom when history or chatsData changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, chatsData]);

  const renderPromptBlock = (prompt : any, thoughts : any, index : number) => (
    <div key={index} className="w-[calc(100%-20px)] mt-6 rounded-lg">
      <div className="pl-4 pt-4 bg-[#2a2929] text-gray-400 font-semibold flex gap-2 items-center">
        Prompt <FiChevronRight />
      </div>
      <div className="break-words pb-4 bg-[#2a2929] text-justify px-4 pt-2 text-white">{prompt}</div>
      {thoughts && (
        <>
          <div className="pl-4 pt-4 bg-[#2a2929] mt-4 text-gray-400 font-semibold flex gap-2 items-center">
            Thoughts <FiChevronRight />
          </div>
          <div className="break-words bg-[#2a2929] text-justify px-4 pt-2 pb-4 text-gray-300 whitespace-pre-wrap">
            {thoughts.replace(/\*\*/g, '').replace(/\\"/g, '"').replace(/\\n/g, '\n')}
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="h-full bg-spider-900 rounded-b text-gray-200">
      <div className="flex px-3 flex-col border-t border-[#323235]">
        <div
          ref={scrollRef}
          className="flex-1 custom-scrollbox overflow-y-scroll min-h-[calc(100vh-265px)] max-h-[calc(100vh-365px)]"
        >
          {loading ? (
            <div className="text-center text-gray-400 mt-10 animate-pulse">
              Loading chat history...
            </div>
          ) : (
            <>
              {history.map((item, idx) =>
                renderPromptBlock(item.prompt, item.llmChat, idx)
              )}
              {chatsData?.prompt && !chatsData?.videoUrl &&
                renderPromptBlock(chatsData.prompt, chatsData.llmThoughts, 'context')}
            </>
          )}
        </div>

        <PromptBox
          prompt={prompt}
          setPrompt={setPrompt}
          HandlePromptSubmit={HandlePromptSubmit}
        />
      </div>
    </div>
  );
};



export { HistorySide, ChatSide }