import React,{useState} from 'react'
import styles from './AddRoomModal.module.css';
import Textinput from '../../components/shared/Textinput/Textinput';
import { createRoom as create } from '../../http';
import {useNavigate} from 'react-router-dom';

const AddRoomModal = ({onClose}) => {
    const navigate=useNavigate();
    const [roomType,setroomType]=useState('open')
    const [Topic,setTopic]=useState('');
    async function createRoom(){
        //server call
        try{
            if(!Topic)
            return;
            const {data}=await create({Topic,roomType});
            navigate(`/rooms/${data.id}`)
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <div className={styles.modalMask}>
        <div className={styles.modalBody}>
           
            <button className={styles.closeButton} onClick={onClose}>
                <img src="/images/close.png" alt="close" />
            </button>

                <div className={styles.modalHeader}>
                    <h3 className={styles.heading}> Enter the topic to be discussed</h3>
                    <Textinput fullwidth="true" 
                    value={Topic} onChange={(e)=>setTopic(e.target.value)}/>
                    <h2 className={styles.subheading}>Room Types</h2>
                   
                    <div 
                    className={styles.roomTypes}>
                        <div
                         onClick={()=>setroomType('open')} 
                        className={`${styles.typeBox} ${roomType==='open'?styles.active:''}`}>
                            <img src="/images/globe.png" alt="globe" />
                            <span>Open</span>
                        </div>

                        <div 
                         onClick={()=>setroomType('social')} 
                        className={`${styles.typeBox} ${roomType==='social'?styles.active:''}`}>
                            <img src="/images/social.png" alt="social" />
                            <span>Social</span>
                        </div>
                        <div 
                         onClick={()=>setroomType('private')}
                        className={`${styles.typeBox} ${roomType==='private'?styles.active:''}`}>
                            <img src="/images/lock.png" alt="Private" />
                            <span>Private</span>
                        </div>
                    </div>
                </div>

                <div className={styles.modalFooter}>
                    <h2 >
                        Start a Room , open to everyone
                    </h2>
                    <button onClick={createRoom}>
                        <img src="/images/celebration.png" alt="celebration" />
                        <span>Let's Go</span>
                        
                    </button>
                </div>
            </div>    
    </div>
  )
}

export default AddRoomModal