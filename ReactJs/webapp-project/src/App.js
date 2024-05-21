import logo from './logo.avif';
import './App.css';
import Car from './Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HOME PAGE</h1>
        <h2>FIRST WEB APP</h2>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          <span>ANANDKUMAR D SOFTWARE DEVELOPER IN INDIA.</span><br/>I WORKING JOB IS FREELENCER SO YOU MADE ANY WORK TO GIVE ME ! I WILL COMPLETE THAT...  
        </p>
        <Car carName="Alto" carModel="Maruthi Suzuki" carYear="2022" carBrand="Suzuki" carColor="red"/>
        <a
          className="App-link"
          href="http://127.0.0.1:5500/portfolio/portfolio.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
