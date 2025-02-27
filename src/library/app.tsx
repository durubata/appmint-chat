import { Routes, Route } from 'react-router-dom';
import { HelpPage } from 'pages/help';
import { SettingPage } from 'pages/setting';
import { WelcomePage } from 'pages/welcome';
import { ChatPage } from 'pages/chat';
import { ChatRegistrationPage } from 'pages/registration';
import 'styles/global.css';
import { IconBack } from 'components/icons';
import { useNavigate } from 'react-router-dom';
import { useChatStore } from 'chat-store';
import { useEffect } from 'react';

export const ChatApp = ({ orgId, chatId, token, theme, language }) => {
  const navigate = useNavigate();
  const { setStateItem } = useChatStore()

  useEffect(() => {
    setStateItem({ orgId: 'demo', chatId: 'askgpt', token, theme, language })
  }, [orgId, chatId, token, theme, language])

  return (
    <div className='w-[400px] h-[800px] fixed bottom-10 right-10 border-[1px] rounded shadow-md' >
      <header className="App-header"></header>
      <button onClick={() => { navigate('/'); }} className='absolute -top-8 shadow rounded-full w-6 h-6 flex items-center justify-center border-gray-100 border hover:scale-150 duration-100' >
        <IconBack size={12} />
      </button>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<ChatRegistrationPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </div>
  );
};