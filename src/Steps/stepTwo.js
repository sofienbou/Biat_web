
import TextInput from '../UI/TextInput.js';
const StepTwo = (props) => {
 

  return (
    <div>
       <h2>
        Coordonnées :
      </h2>
    <TextInput placeholder="Pays de résidence" type="text" label="Pays de résidence"></TextInput>
    <TextInput placeholder="Adresse" type="text" label="Adresse:"></TextInput>
    <TextInput placeholder="Gouvernorat" type="text" label="Gouvernorat"></TextInput>
    <TextInput placeholder="Téléphone mobile" type="email" label="Téléphone mobile"></TextInput>
    <TextInput placeholder="Téléphone domicile" type="text" label="Téléphone domicile"></TextInput>
    <br>
    </br>
    <select class="choisir" size="mb5">
    
  <option selected>Etes-vous :</option>
  <option value="1">Propriétaire</option>
  <option value="2">Locataire</option>
  <option value="3">Logement de fonction</option>
  <option value="4">Hébergé(e) par un tiers</option>
</select>
    </div>
  )
}

export default StepTwo;
