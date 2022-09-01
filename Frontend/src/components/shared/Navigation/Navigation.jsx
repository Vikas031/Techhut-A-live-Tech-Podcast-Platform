import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../http';
import { setAuth } from '../../../store/authSlice';
import styles from './Navigation.module.css';

const Navigation = () => {
    const dispatch=useDispatch();
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };

    const {isAuth,user}=useSelector((state)=>state.auth)
    async function logoutUser(){
       
        //
        try{
            const data=await logout();
            dispatch(setAuth(data));
        }catch(err){
            console.log(err);
        }
    }
    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>Tech-Hut</span>
            </Link>
            
            {isAuth&&(<div className={styles.navRight}>
                <h3>{user.name}</h3>
                {user.avatar&&(
                <Link to="/">
                        <img className={styles.avatar} src={user.avatar?user.avatar:'/images/monkey-avatar.png'} width="40" height="40" alt="avatar" />
                    </Link>)}

                    <button className={styles.logoutbtn} onClick={logoutUser}>
                        <img src="/images/logout.png" alt="" />
                    </button>
            </div>)}
           
        </nav>
    );
};

export default Navigation;
