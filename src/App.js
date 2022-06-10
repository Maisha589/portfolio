import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Nav from './Components/Home/Nav';
import WebDetails from './Components/Home/WebDetails';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about' element={<AboutMe></AboutMe>}></Route>
        <Route path='details/:id' element={<WebDetails></WebDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
