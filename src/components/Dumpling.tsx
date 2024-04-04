interface DumplingProps {
  id: number;
  name: string;
  //description: string;
  origin: number;
  //tags: string; 
  //owner: string;
  whenDumplingClicked: (id: number) => void;
}

const Dumpling: React.FC<DumplingProps> = ({name, origin, id, whenDumplingClicked}) => {
  
  return(
    <>
    <div onClick={() => whenDumplingClicked(id)}>
    <h3>{name}</h3>
    <p>Origin id: {origin}</p>
    {/* <p>Tags: {tags.join(', ')}</p> */}
    {/* <p>Added by: {owner}</p> */}
     <hr />
      </div>
    </>
  );
}
export default Dumpling;