import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from "./Auth";
import DumplingList from "./DumplingList";
import DumplingDetail from "./DumplingDetail";
// import EditDumplingForm from "./EditDumplingForm";
import NewDumplingForm from "./NewDumplingForm";
import { getDumplings, getDumplingById } from '../api-helper';

interface DumplingList {
  name: string;
  id: number;
  origin: number;
}


const DumplingControl = () => {
  // const [error, setError] = useState(null);
  const [dumplings, setDumplings] = useState<DumplingList[]>([]);
  const [selectedDumpling, setSelectedDumpling] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDumplings = async () => {
      try {
        const response = await getDumplings();
        setDumplings(response);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchDumplings();
  }, []);

  const handleDetailClick = async (id: number) => {
    try {
      const dumpling = await getDumplingById(id);
      setSelectedDumpling(dumpling);
      navigate(`/dumplings/${id}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  // useEffect(() => {
  //   console.log('selDeump', selectedDumpling);
  // }, [selectedDumpling]);
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Auth />}/>
      <Route 
        path='/create-dumpling'
        element={<NewDumplingForm />}/>
      <Route path="/dumplings/:id"
          element={selectedDumpling ? <DumplingDetail dumpling={selectedDumpling} />: null} />
      <Route path="/dumplings" 
            element={<DumplingList dumplings={dumplings} onDumplingClick={handleDetailClick} />} />
    </Routes>
      {/* {dumplings === null && (
        <div><h3>No dumplings have been created yet..</h3></div>
      )}
      {!selectedDumpling && dumplings != null && (
        <div>
          <h2>Dumplings</h2>
          <hr />
          <DumplingList
            dumplings={dumplings}
            onDumplingClick={handleDetailClick}
          />
        </div>
      )}

      {selectedDumpling && <DumplingDetail dumpling={selectedDumpling} />}  

 */}

    </>
  );
}
export default DumplingControl;