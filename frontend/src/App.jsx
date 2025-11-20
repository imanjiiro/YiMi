  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
  // import './App.css'

  // function App() {
  //   const [count, setCount] = useState(0)

  //   return (
  //     <>
  //       <div>
  //         <a href="https://vite.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  //     </>
  //   )
  // }

  // export default App


  import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
  const [backend, setBackend] = useState("Загрузка...");
  const [user, setUser] = useState(null);

  useEffect(() => {
    WebApp.ready();

    fetch("http://localhost:3001/")
      .then(r => r.json())
      .then(d => setBackend(d.message));

    fetch("http://localhost:3001/api/user")
      .then(r => r.json())
      .then(d => setUser(d));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🎮 Game Platform</h1>

      <p>Backend: {backend}</p>

      {user && (
        <p>Пользователь: {user.userId}</p>
      )}

      <button onClick={() => alert("Создать игру")}>
        Создать игру
      </button>
    </div>
  );
}

export default App;