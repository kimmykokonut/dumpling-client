import { useEffect, useState } from "react";
import { getOriginById } from "../api-helper";

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
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    getOriginById(dumpling.origin)
      .then(setOrigin)
      .catch(console.error);
  }, [dumpling.origin]);

  return (
    <div>
      <h2>{dumpling.name}</h2>
      <p>Description: {dumpling.description}</p>
      <p>Country: {origin ? origin : 'Loading..'}</p>
      {/* <p>Tags: {dumpling.tags.join(', ')}</p> */}
      <p>Added by: {dumpling.owner.username}</p>
      {/* only show if logged in is creator */}
      <button>Edit details</button>
      <button>Delete this dumpling</button>
    </div>
  );
}
export default DumplingDetail;


// { "id": 9, "name": "Pierogi", "description": "farmers cheese wrapped in dough and fried. served with applesauce", "origin": 4, "tags": [], "owner": { "username": "kimNew" } }