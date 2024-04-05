import Dumpling from "./Dumpling";

interface DumplingListProps {
  dumplings: {
    id: number;
    name: string;
    origin: number;
    //tags: string[];
  }[];
  onDumplingClick: (id: number) => void;
}

const DumplingList: React.FC<DumplingListProps> = ({ dumplings, onDumplingClick }) => {
  return(
    <div>
    <hr />
      {dumplings.map((dumpling) => (
          <Dumpling
            key={dumpling.id}
            name={dumpling.name}
            origin={dumpling.origin}
            //tags={dumpling.tags.join(', ')}
            whenDumplingClicked={() => onDumplingClick(dumpling.id)}
            id={dumpling.id}
          //origin&tag will be a LIST
          // origin={dumpling.origin}
          // tag={dumpling.tag}
          />
      ))}
      <hr />
    </div>
    
  );
}
export default DumplingList;