import React from 'react'
import styles from './Textinput.module.css';
const Textinput = (props) => {
  return (
    <div>
        <input className={styles.input} type="text" {...props}/>
    </div>
  )
}

export default Textinput