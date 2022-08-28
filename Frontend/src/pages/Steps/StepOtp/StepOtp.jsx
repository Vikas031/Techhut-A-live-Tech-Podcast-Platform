import React,{useState} from 'react'
import Card from '../../../components/shared/Card/Card';
import Textinput from '../../../components/shared/Textinput/Textinput';
import Button from '../../../components/shared/Button/Button';
import styles from "./StepOtp.module.css";
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = ({gotoNext}) => {
  const [otp,setotp]=useState('');
  const dispatch=useDispatch();
  const {phone,hash}=useSelector((state)=>state.auth.otp);
 async function submit(){
    try{
      const res=await verifyOtp({
        otp,phone:phone,hash:hash
      });
      dispatch(setAuth(res.data));
    }catch(err){
      console.log(err);
    }
 }
  return (
    <>
    <div className={styles.cardWrapper}>
    <Card title="Enter the Code we just texted you !" logo="lock-emoji.png">

  <Textinput value={otp} onChange={(e)=>setotp(e.target.value)} />

  <div className={styles.actionButtonWrap}> 
  <Button text="Next" onclick={submit} ></Button>
  </div>

  <p className={styles.bottomParagraph}>
     Enter OTP !!!
  </p>
  </Card> 
  </div>
    </>
  )
}

export default StepOtp