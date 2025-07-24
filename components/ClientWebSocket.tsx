import { useContext, useEffect, useRef } from 'react';
import { ChatsContext } from '../context/ChatsContext';

function  ClientWebSocket() {
  const socketRef = useRef<WebSocket | null>(null);
  const { setChatsData } : any = useContext(ChatsContext);

  useEffect(() => {    
    socketRef.current = new WebSocket(import.meta.env.VITE_SOCKET_URL || 'ws://localhost:5000');

    socketRef.current.onopen = () => {
      // console.log('WebSocket connected');
    };

    socketRef.current.onmessage = (event) => {
      setChatsData((prevChatsData : any) => ({...prevChatsData, llmThoughts : prevChatsData.llmThoughts + event.data}))
      // console.log('Message from server:', event.data);
    };

    socketRef.current.onclose = () => {
      // console.log('WebSocket closed');
    };

    socketRef.current.onerror = () => {
      // console.error('WebSocket error:', error);
    };

    return () => {
      socketRef.current?.close();
    };
  }, []);

  return <></>;
}

export default ClientWebSocket;