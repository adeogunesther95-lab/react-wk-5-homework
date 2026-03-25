import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a
            href="https://github.com/adeogunesther95-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esther Adeogun
          </a>
          open-sourced on
          <a
            href="https://github.com/adeogunesther95-lab/react-wk-5-homework"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          and hosted on
          <a
            href="https://ea-react-weather-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
