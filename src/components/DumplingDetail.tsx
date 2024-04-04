interface DumplingDetailProps {
  dumpling: {
    id: number;
    name: string;
    description: string;
    origin: number;
    //tags: string[];
    owner: { username: string }
  };
}

const DumplingDetail: React.FC<DumplingDetailProps> = ({dumpling}) => {
  return (
    <div>
      <h2>{dumpling.name}</h2>
      <p>Description: {dumpling.description}</p>
      <p>Country: {dumpling.origin}</p>
      {/* <p>Tags: {dumpling.tags.join(', ')}</p> */}
      <p>Added by: {dumpling.owner.username}</p>
    </div>
  );
}
export default DumplingDetail;


// { "id": 9, "name": "Pierogi", "description": "farmers cheese wrapped in dough and fried. served with applesauce", "origin": 4, "tags": [], "owner": { "username": "kimNew" } }