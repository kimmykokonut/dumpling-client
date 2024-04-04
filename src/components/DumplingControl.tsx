import { useState, useEffect } from "react";
import DumplingList from "./DumplingList";
// import DumplingDetail from "./DumplingDetail";
// import EditDumplingForm from "./EditDumplingForm";
// import NewDumplingForm from "./NewDumplingForm";
import { getDumplings } from '../api-helper';

interface DumplingList {
  name: string;
  id: number;
}


const DumplingControl = () => {
  // const [error, setError] = useState(null);
  const [dumplings, setDumplings] = useState<DumplingList[]>([]);
  //const [selectedDumpling, setSelectedDumpling] = useState(null);
  // if selDum == null, do nothing. else: <DumplingDetail prop-selectedDumpling/>
  //const [visibleState, setVisibleState] = useState('list');
  //bool isVis? terneary in return to render comp or render null

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


  const handleDetailClick = () => {
    //stuff
  }
  // const handleModeChange = () => {
  //   //stuff
  // }

  return (
    <>
      {dumplings === null && (
        <div><h3>No dumplings have been created yet..</h3></div>
      )}
      {dumplings != null && (
        <div>
          <h2>Dumplings</h2>
          <hr />
            <DumplingList 
              dumplings={dumplings}
              onDumplingClick={handleDetailClick}
              />
            {/* {dumplings.map((dumpling) => (
              <div
              // detail click here key={garden.gardenId} onClick={() => handleClick(garden.gardenId)}
              >
                <Dumpling
                  key={dumpling.id}
                  name={dumpling.name}
                  whenDumplingClicked={handleDetailClick}
                  id={dumpling.id} */}
                {/* //origin&tag will be a LIST
                // origin={dumpling.origin}
                // tag={dumpling.tag}
                /> */}
              </div>
      )}
    </>
  );
}
export default DumplingControl;