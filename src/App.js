import { Route, Routes } from "react-router-dom";
import MagicBox from './features/MagicBox';
import TodoListApp from './features/TodoListApp';

function App() {
  return (
    <div className="App" style={{ padding: 20 }}>
      <Routes>
        <Route path="/magicbox" element={<MagicBox />} />
        <Route path="/todos" element={<TodoListApp />} />
      </Routes>
    </div>
  );
}

export default App;
