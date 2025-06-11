import './App.css';
import Main from './components/videoBg.jsx';
import Navbar from './components/Navbar.jsx';
import Body from './components/body.jsx';
import About from './components/About.jsx';
import TouchMe from './components/TouchMe.jsx';
import Scrollup from './components/scrollup.jsx';
function App() {
  return (
    
      <div className="App">
        <div className='delayed-bodya'><Navbar /></div>
        <Main /> 
        <div className='delayed-body'><Scrollup /></div>
        <div className='delayed-body'><About /></div>
        <div className="delayed-body"><Body /></div>
        <div className="delayed-body"><TouchMe /></div>
      </div>

  );
}

export default App;
