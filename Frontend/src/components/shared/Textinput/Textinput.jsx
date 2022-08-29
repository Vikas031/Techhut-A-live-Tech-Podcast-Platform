import React from 'react'
import styles from './Textinput.module.css';
const Textinput = (props) => {
  return (
    <div>
        <input className={styles.input} style={{width:props.fullwidth?'100%':'inherit'}} type="text" {...props}/>
    </div>
  )
}

export default Textinput