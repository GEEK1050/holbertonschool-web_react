import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

import holberton_logo from "./holberton_logo.jpg";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={holberton_logo} alt="holberton" height={200} width={"200"} />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}

export default App;
