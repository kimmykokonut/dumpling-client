import Header from './Header';
import DumplingControl from './DumplingControl';
import '../App.css';

function App() {

  return (
    <>
      <div>
        <Header/>
      </div>
      <h1>Dumpling Client: App</h1>
      <div className="card">
        <DumplingControl/>
      </div>
    </>
  );
}

export default App