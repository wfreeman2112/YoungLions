import './App.css';
import Welcome from './components/Welcome';
import { wrestlerData } from './Data/wrestlerData'
import WrestlerList from './components/wrestlerList'

function App() {
  return (
    <div className="container">
      <Welcome />
      <WrestlerList wrestlers={wrestlerData} />
    </div>
  );
}

export default App;
