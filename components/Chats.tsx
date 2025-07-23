import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import ChatsNavbar from './ChatsNavbar';
import { HistorySide, ChatSide } from './Side';
import VideoDisplayer from './VideoDisplayer';
import LoadingScreen from './LoadingScreen';
import ClientWebSocket from './ClientWebSocket';
import { ChatsContext, ChatsProvider } from '../context/ChatsContext';

const ChatsInner = () => {
  const [isSideBar] = useState(true);
  const [isSideHistory] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { chatsData, setChatsData }: any = useContext(ChatsContext);

  
  const gridCols = isSideBar
    ? isSideHistory
      ? 'grid-cols-[25%_1fr]'
      : 'grid-cols-[35%_1fr]'
    : 'grid-cols-1';

  useEffect(() => {
    const promptFromState = location.state?.prompt || "";
    if (promptFromState) {
      setPrompt(promptFromState);
      handlePromptSubmit(promptFromState);
    }
  }, [location.state]);

  const handlePromptSubmit = async (currentPrompt: string) => {
    setIsLoading(true);
    setChatsData({ ...chatsData, prompt: currentPrompt, videoUrl: '', llmThoughts: '' });
    setPrompt("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND}/animation`,
        { prompt: currentPrompt },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const { videoUrl, videoGernerationError } = response.data;

      if (videoUrl) {
        setChatsData((prev: any) => ({ ...prev, videoUrl }));
      }

      if (videoGernerationError) {
        setChatsData((prev: any) => ({ ...prev, videoGernerationError }));
      }
    } catch (error) {
      console.error('Error generating video:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-w-full">
      <ClientWebSocket />
      <ChatsNavbar />
      <div className={`grid ${gridCols} h-[calc(100vh-80px)]`}>
        {isSideBar && (
          isSideHistory ? <HistorySide /> : (
            <ChatSide
              prompt={prompt}
              setPrompt={setPrompt}
              HandlePromptSubmit={() => handlePromptSubmit(prompt)}
            />
          )
        )}
        {isLoading ? <LoadingScreen /> : <VideoDisplayer />}
      </div>
    </div>
  );
};

const ChatsPage = () => (
  <ChatsProvider>
    <ChatsInner />
  </ChatsProvider>
);

export default ChatsPage;
