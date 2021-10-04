import TextInput from '../UI/TextInput.js';
const StepThree = (props) => {
  return (
    <div>
    <h2>
        Etat civil :
      </h2>
      <TextInput placeholder="Date de naissance" type="text" label="Date de naissance"></TextInput>
      <TextInput placeholder="Pays de naissance" type="text" label="Pays de naissance"></TextInput>
      <TextInput placeholder="Commune de naissance" type="text" label="commune de naissance"></TextInput>
      <TextInput placeholder="Nationalité" type="email" label="Nationalité"></TextInput>
      <TextInput placeholder="Seconde nationalité" type="text" label="Seconde nationalité"></TextInput>
  
      </div>
  )
}
export default StepThree;