import ReusableForm from "./ReusableForm";
import { createDumpling } from "../api-helper";

// interface NewDumplingProps {
//   onNewDumplingCreation: //function
// }

const NewDumplingForm = () => {

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
      alert('Dumpling created successfully');
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