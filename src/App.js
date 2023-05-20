import './App.css';
import Comment from './components/Comment';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/comments/:id' element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
