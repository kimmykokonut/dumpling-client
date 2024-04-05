import { useEffect, useState } from "react";
import { getOrigins, getTags } from "../api-helper";
import './css/Form.css';


interface OriginProps {
  id: number;
  country: string;
}
interface TagProps {
  id: number;
  name: string;
}
interface ReusableFormProps {
  formHandler: (data: any) => void;
  buttonText: string;
}

const ReusableForm: React.FC<ReusableFormProps> = ({ formHandler, buttonText }) => {
  const [countries, setCountries] = useState<OriginProps[]>([]);
  const [tags, setTags] = useState<TagProps[]>([]);

  const fetchCountries = async () => {
    setCountries(await getOrigins());
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchTags = async () => {
    setTags(await getTags());
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div>
      <form onSubmit={formHandler}>
        <fieldset className="centered-inputs">
          <legend>Enter dumpling data</legend>
          <input type="text" name="dName" placeholder="Name" id="dName" />
          <br />
          <textarea name="description" id="description" placeholder="Description" />
        </fieldset>
        <fieldset>
          <legend>Country</legend>
          <select name="origin" id="origin">
            {countries.map((origin) => (
              <option value={origin.id} key={origin.id}>{origin.country}</option>
            ))}
          </select>
        </fieldset>
        <fieldset>
          <legend>Choose at least 1 tag</legend>
          {tags.map((tag) => (
            <div key={tag.id}>

              <label htmlFor={`tag-${tag.id}`}><input type="checkbox" id={`tag-${tag.id}`} name="tags" value={tag.id} />{tag.name}</label>
            </div>
          ))}
        </fieldset>
        <button type="submit">{buttonText}</button>
      </form>




    </div>
  );
}
export default ReusableForm;


// {
//   "name": "Suet Dumplings",
//     "description": "British classic, cooked on top of a gravy-based stew",
//       "origin": 4
// }
// createDumpling()