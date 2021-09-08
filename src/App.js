import logo from './logo.svg';
import './App.css';
import Index from './components/Index' ;
import Header from './components/Shared/Header' ;
import Footer from './components/Shared/Footer' ;
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div >
      <header >
        <Index/>
      </header>
    </div>
    </Router>
  );
}

export default App;