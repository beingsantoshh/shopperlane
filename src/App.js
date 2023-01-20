//import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Product from './components/Product';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <Content/>
    </div>
  );
}

export default App;
