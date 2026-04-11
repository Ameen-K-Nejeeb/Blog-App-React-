import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Demo from './components/Demo/Demo.jsx';
import HomeHeader from './components/Home/Header/HomeHeader.jsx';
import DemoHeader from './components/Demo/DemoHeader.jsx'; // Added .jsx
import { Blog } from './Context/Context.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  // In a real project, this will eventually come from Firebase Auth
  // const currentUser = false; 
  const {currentUser} = Blog()

  return (
    <BrowserRouter>
      {currentUser ? <HomeHeader /> : <DemoHeader />}
      <ToastContainer/>
        <Routes>

          {currentUser &&<Route path='/' element={ <Home />} />}
          {!currentUser &&<Route path='/demo' element={ <Demo />} />}

          <Route path="*" element={<Navigate to={currentUser ? "/" : "/demo"} />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;