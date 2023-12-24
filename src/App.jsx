import Projects from "./components/Projects";
import About from "./components/About";
import Controller from "./components/Controller";
import { BrowserRouter  , Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import ChatBot from "chit-chat-react"

function App() {

  return (
    <>
    <BrowserRouter>
    <ChatBot 
    apiKey= "$2b$10$lcpkCkYgoRBJ7i29fggWG.452SeGuR2ZDbuUqI7U/UOsRHRmerulm"
    chatbotTitle= "Chat bot"
    initialMessage= "Hello! How Can I Assist You ?"
    brandImage ="https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle-thumbnail.png"
    suggestions ={["who is apurv", "show some of his projects", "his work experiences"]}
    rateLimitDuration = {1000} />
      <Routes>
        <Route path="/" element={<Controller/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
