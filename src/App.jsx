import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Demo from './components/Demo/Demo.jsx';
import HomeHeader from './components/Home/HomeHeader.jsx';
import DemoHeader from './components/Demo/DemoHeader.jsx'; // Added .jsx

function App() {
  // In a real project, this will eventually come from Firebase Auth
  const auth = false; 

  return (
    <BrowserRouter>

      {auth ? <HomeHeader /> : <DemoHeader />}
      

        <Routes>

          <Route 
            path='/' 
            element={auth ? <Home /> : <Navigate to="/demo" />} 
          />
          <Route path='/demo' element={<Demo />} />
          

          <Route path="*" element={<Navigate to={auth ? "/" : "/demo"} />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;