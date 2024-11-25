import "./styles.scss";

import Chatbox from "./components/chatbox/chat";

function App() {
  return (
    <>
      <div className="chepchat">
        <div className="sidebar">
          <h1>CHEP CHAT</h1>
        </div>
        <div className="chatbox">
          <Chatbox />
        </div>
      </div>
    </>
  );
}

export default App;
