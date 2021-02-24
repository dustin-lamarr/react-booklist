import logo from './logo.svg';
import './App.css';
import TestingTailwind from './Demo/TailwindTest'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Scroll down to see example Tailwind styling.
          </p>
        </header>
      </div>
      <TestingTailwind />
    </>
  );
}

export default App;
