import React,{useState} from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import style from './StepPhoneEmail.module.css';
const phoneEmailMap={
    phone:Phone,
    email:Email,
};
const StepPhoneEmail = ({gotoNext}) => {
    const [option,setoption]=useState('phone')
    const Option=phoneEmailMap[option];

    return (
      <>
      <div className={style.cardWrapper}>
          <div>
          <div className={style.buttonWrapper}>
            
            <button className={`${style.tabButton} ${option==='phone'?style.active:''}`} onClick={()=>{setoption('phone')}}>
                <img src="/images/phone-white.png" alt="phone" />
            </button>
      <button className={`${style.tabButton} ${option==='email '?style.active:''}`} onClick={()=>{setoption('email')}}><img src="/images/mail-white.png" alt="email" /></button>
          </div>
          <Option onClick={gotoNext}/>
          </div>
         
      </div>
    </>
  )
}

export default StepPhoneEmail