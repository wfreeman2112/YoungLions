import './App.css';
import Welcome from './components/Welcome';
import { wrestlerData } from './Data/wrestlerData'
import wrestlerList from './components/wrestlerList'

function App() {
  return (
    <div className="container">
      <Welcome />
      <wrestlerList wrestlers={wrestlerData} />
    </div>
  );
}

export default App;
