import Header from './Header';
import DumplingControl from './DumplingControl';
import '../App.css';

function App() {

  return (
    <>
      <div>
        <Header/>
      </div>
      <div className="card">
        <DumplingControl/>
      </div>
    </>
  );
}

export default App