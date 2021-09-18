import './App.scss';

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        <section><Navbar /></section>
        <section><Main /></section>
    </div>
  );
}

export default App;
