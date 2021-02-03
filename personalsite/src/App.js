import './App.css';
import penguin from './images/penguin.gif'; 
import Navbar from './components/navbar/Navbar';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Megan Liu</h1>

        <h3 className="italicize">~about me~</h3>
        <div>
          <ul>
            <li>
              studying
                <ul>
                <li>cs</li>
                <li>neurobiology</li>
              </ul>
            </li>
            <li>
              sports/outdoors
                <ul>
                <li id="coolest-thing">soccer</li>
                <li>lifting</li>
                <li>paddling/Ledyard</li>
                <li>snowsports</li>
              </ul>
            </li>
            <li>
              other random things
                <ul>
                <li>eating chinese food</li>
                <li>productivity</li>
                <li>youtube</li>
                <li>juggling</li>
              </ul>

            </li>
          </ul>
        </div> 
        <img src={penguin} alt="penguin"/>
        <a rel="noreferrer" target="_blank" href="https://theuselessweb.com/">the useless web</a>
      </header>
    </div>
  );
}

export default App;
