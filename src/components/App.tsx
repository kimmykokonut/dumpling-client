import Header from './Header';
import DumplingControl from './DumplingControl';
import '../App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Header />
        <DumplingControl/>
      </Router>
    </>
  );
}

export default App