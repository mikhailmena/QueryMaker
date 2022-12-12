
import './App.css';
import Choose from './components/Choose';
import Ptable from './components/Ptable';
import Translator from './components/Translator';


function App() {
  return (
    <div className="App">
      
      <div id="headerdiv"></div>
       <Choose/>
      <Ptable/>
     
      <Translator/>
      
      
    </div>
  );
}

export default App;
