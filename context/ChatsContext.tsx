import { createContext, useState } from 'react';

interface ChatsText {
  prompt: string;
  llmThoughts: string;
  videoUrl: string;
  videoGernerationError: string,
}

interface ChatsTextContextType {
  chatsData: ChatsText;
  setChatsData: React.Dispatch<React.SetStateAction<ChatsText>>;
}

export const ChatsContext = createContext<ChatsTextContextType | undefined>(undefined);

export const ChatsProvider = ({ children } : any) => {
  const [chatsData, setChatsData] = useState<ChatsText>({
    prompt: '',
    llmThoughts: '',
    videoUrl: '',
    videoGernerationError: ''
  });

  return (
    <ChatsContext.Provider value={{ chatsData, setChatsData }}>
      {children}
    </ChatsContext.Provider>
  );
};