import { useState } from "react";
import styles from './TextInput.css';

const TextInput = (props) => {
    const [TextInputName, setTextInputName] = useState('');
    return (<div className={styles['row']}>
    <div className={styles['six columns']}>
      <label>{props.label}</label>
      <input
        className={styles['u-full-width']}
        placeholder={props.placeholder}
        type={props.type}
        onChange={e => setTextInputName(e.target.value)}
        value={TextInputName}
        onClick={props.onClick}
        autoFocus
      />
    </div>
  </div>);
}

export default TextInput;