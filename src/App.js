// Import data
import Searchbar from './Searchbar';
import Gallery from './Gallery';
import Sidebar from './Sidebar';
import Help from './Help';
// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Gallery />
        <Sidebar />
        <Help />
      </div>
    </div>
  );
}

export default App;
