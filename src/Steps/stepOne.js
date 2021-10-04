
import TextInput from '../UI/TextInput.js';
import {useState} from 'react';

const StepOne = (props) => {
  const [isClientBiat, setIsClientBiat] = useState(false);
  const showAdditionalForm = () =>{
    setIsClientBiat(!isClientBiat);

  }
  return (
    <div>
      <h2>
        Informations générales :
      </h2>
      <TextInput placeholder="civilité" type="text" label="civilité"></TextInput>
      <TextInput placeholder="Nom" type="text" label="Nom"></TextInput>
      <TextInput placeholder="Prénom" type="text" label="Prénom"></TextInput>
      <TextInput placeholder="Saissez votre Email" type="email" label="Email"></TextInput>
      <TextInput placeholder="Confirmer votre Email" type="text" label="Confirmer votre Email"></TextInput>
      <TextInput placeholder="Cocher si vous etes un client BIAT" type="checkbox" label="Cocher si vous etes un client BIAT" onClick={showAdditionalForm}></TextInput>
      {isClientBiat && <div><TextInput placeholder="Code Client" type="text" label="Code Client"></TextInput>
     </div>}
      </div>
  )
}
export default StepOne;
