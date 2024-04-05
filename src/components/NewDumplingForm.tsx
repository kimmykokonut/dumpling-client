import ReusableForm from "./ReusableForm";
import { createDumpling } from "../api-helper";
import { useNavigate } from "react-router-dom";

// interface NewDumplingProps {
//   onNewDumplingCreation: //function
// }

const NewDumplingForm = () => {
  const navigate = useNavigate();

  const handleNewDumplingForm = async(e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    console.log(form);
    const formData = new FormData(form);
    const name = formData.get('dName') as string;
    const description =  formData.get('description') as string;
    const origin = Number(formData.get('origin'));
    const tags = formData.getAll('tags') as string[];

    const dumpling = { name, description, origin, tags };

    try{
      const token = localStorage.getItem('token') as string;
      await createDumpling(dumpling, token);
      console.log(dumpling);
      navigate('/dumplings/');
    } catch(error) {
      console.error('Failed to create dumpling:', error);
    }
  }
  return (
    <div>
      <ReusableForm
      formHandler={handleNewDumplingForm}
      buttonText="Create" />
    </div>
  );
}
export default NewDumplingForm;