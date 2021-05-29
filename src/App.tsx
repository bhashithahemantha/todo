import './App.css';

import { Todos } from "../src/components/Todos/Todos";

function App() {
  return (
    <div
      className="App h-screen flex justify-center items-center bg-gray-100"
    >
      <Todos />
    </div>
  );
}

export default App;
