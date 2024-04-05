import { useEffect, useState } from "react";
import { getOriginById, getTagById } from "../api-helper";

interface DumplingDetailProps {
  dumpling: {
    id: number;
    name: string;
    description: string;
    origin: number;
    tags: number[];
    owner: { username: string }
  };
}

const DumplingDetail: React.FC<DumplingDetailProps> = ({dumpling}) => {
  const [origin, setOrigin] = useState('');
  const [tags, setTags] = useState<string[] | null>(null);

  useEffect(() => {
    getOriginById(dumpling.origin)
      .then(setOrigin)
      .catch(console.error);
  }, [dumpling.origin]);

  useEffect(() => {
    const fetchTags = async() => {
      const tagPromises = dumpling.tags.map(tagId => getTagById(tagId));
      const tagData = await Promise.all(tagPromises);
      setTags(tagData.map(tag => tag.name));
      console.log(tagData, tags);
    }
    fetchTags();
  }, [dumpling.tags]);

  return (
    <div>
      <h2>{dumpling.name}</h2>
      <p>Description: {dumpling.description}</p>
      <p>Country: {origin ? origin : 'Loading..'}</p>
      <p>Tags: {tags && tags.length > 0 ? tags.join(', ') : 'Loading...'}</p>
      <p>Added by: {dumpling.owner.username}</p>
      {/* only show if logged in is creator */}
      <button>Edit details</button>
      <button>Delete this dumpling</button>
    </div>
  );
}
export default DumplingDetail;