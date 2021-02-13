import './App.css';
// import penguin from './images/penguin.gif';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Coursework from './components/coursework'
import TriviaAPI from './components/api'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/* <h1>Megan Liu</h1> */}

      
        <div>
          <h2>welcome to my crib</h2>

          <div className="classcontainer">
            <h2>about me</h2>

            <h5>academics</h5>
            <ul>
              <li>cs</li>
              <li>neurobiology</li>
            </ul>

            <h5>hobbies</h5>
            <ul>
              <li>lifting </li>
              <li>soccer </li>
              <li>paddling/ledyard </li>
              <li>snowsports </li>
            </ul>

            <h5>other</h5>
            <ul>
              <li>eating chinese food</li>
              <li>productivity </li>
              <li>youtube</li>
              <li>juggling</li>
            </ul>
          </div>
        </div>

        <Coursework />

        <TriviaAPI />

        {/* <img src={penguin} alt="penguin"/>
        <a rel="noreferrer" target="_blank" href="https://theuselessweb.com/">the useless web</a> */}
      </header>
    </div>
  );
}

export default App;
