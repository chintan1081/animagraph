import Chats from '../components/Chats'
import './App.css'
import { ChatsProvider } from '../context/ChatsContext'
import LandingPage from '../components/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/chat" element={<ChatsProvider>
            <Chats />
          </ChatsProvider>} />
          <Route path="/chats" element={<ChatsProvider>
            <Chats />
          </ChatsProvider>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
