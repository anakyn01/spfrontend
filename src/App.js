import Header from './include/Header.js';
import Footer from './include/Footer.js';
import Member from './sub/Member.jsx';
import Home from './sub/Home.jsx';
import About from './sub/About.jsx';
import Contact from './sub/Contact.jsx';
//react나 vue에서 링크연결을 라우팅이라 합니다 npm install react-router-dom
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

//부트스트랩 cdn
import 'bootstrap/dist/css/bootstrap.min.css';
//sass  연결
import './scss/style.scss';//리액트 에서는 sass컴파일 없이 사용




function App() {
  return (
<>
<BrowserRouter>
  <Header/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/member" element={<Member/>}/>
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;
