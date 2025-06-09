import ChatsNavbar from './ChatsNavbar';
import { HistorySide, ChatSide } from './Side';
import VideoDisplayer from './VideoDisplayer'
import { useContext, useEffect, useState } from 'react';
import Landing from './Landing';

import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import ClientWebSocket from './ClientWebSocket';
import { ChatsContext } from '../context/ChatsContext';
import { useLocation, useNavigate } from 'react-router-dom';

const Chats = () => {


  const [isSideBar, setIsSideBar] = useState(true);
  const [isSideHistory, setIsSideHistory] = useState(false);
  const [isLanding, setIsLanding] = useState(true)
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    console.log("..........................",location.pathname);
    
    if(location.pathname == '/chats'){
      setIsLanding(false)
    }
  },[location.pathname])

  const gridCols = isSideBar
    ? (isSideHistory ? 'grid-cols-[25%_1fr]' : 'grid-cols-[35%_1fr]')
    : 'grid-cols-1';

  const [prompt, setPrompt] = useState("")
  const [llmThoughts, setLlmThoughts] = useState("")
  const [isloading, setIsLoading] = useState(false);
  const { chatsData, setChatsData }: any = useContext(ChatsContext);


  const HandlePromptSubmit = async () => {
    setIsLanding(false);
    setIsLoading(true);
    setChatsData({ ...chatsData, prompt, videoUrl: '', llmThoughts: '' })
    setPrompt("")
    if(location.pathname == '/chat') navigate('/chats')
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/animation`,
        {
          prompt: prompt,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer'
          }
        }
      );
      if (response.data.videoUrl) {
        setChatsData((prevChatData: any) => ({ ...prevChatData, videoUrl: response.data.videoUrl }))
      }
      if (response.data.videoGernerationError) {
        setChatsData((prevChatData: any) => ({ ...prevChatData, videoGernerationError: response.data.videoGernerationError }))
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className="min-w-full">
      <ClientWebSocket />
      {isLanding ? (<Landing prompt={prompt} setPrompt={setPrompt} HandlePromptSubmit={HandlePromptSubmit} />)
        : (<>
          <ChatsNavbar />
          <div className={`grid ${gridCols} h-[calc(100vh-80px)]`}>
            {
              isSideBar ?
                (isSideHistory ?
                  <HistorySide />
                  : <ChatSide prompt={prompt} setPrompt={setPrompt} HandlePromptSubmit={HandlePromptSubmit} />)
                : <></>
            }
            {isloading ? <LoadingScreen /> : <VideoDisplayer />}
          </div>
        </>)
      }
    </div>
  )
}

export default Chats;