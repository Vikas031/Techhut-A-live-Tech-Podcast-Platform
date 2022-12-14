import React, { useState, useEffect } from 'react';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import styles from './StepAvatar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http';
import { setAuth } from '../../../store/authSlice';
import Loader from '../../../components/shared/Loader/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StepAvatar = ({ onNext }) => {
    const notify = () => {
        toast.error('Please Upload Profile Pic!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const dispatch = useDispatch();
    const { name, avatar } = useSelector((state) => state.activate);
    const [image, setImage] = useState('/images/monkey-avatar.png');
    const [loading, setLoading] = useState(false);
    const [unMounted, setUnMounted] = useState(false);

    function captureImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        };
    }
    async function submit() {
        if(!avatar){
            notify();
            return;
        }
        if (!name || !avatar) return;
        setLoading(true);
        try {
            const { data } = await activate({ name, avatar });
            if (data.auth) {
                    if(!unMounted)
                    dispatch(setAuth(data));
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => {
            setUnMounted(true);
        };
    }, []);

    if (loading) return <Loader message="Activation in progress..." />;
    return (
        <>
            <Card title={`Okay, ${name}`} logo="monkey-emoji.png">
            <ToastContainer autoClose={1000} hideProgressBar={true}></ToastContainer>
                <p className={styles.subHeading}>How???s this photo?</p>
                <div className={styles.avatarWrapper}>
                    <img
                        className={styles.avatarImage}
                        src={image}
                        alt="avatar"
                    />
                </div>
                <div>
                    <input
                        onChange={captureImage}
                        id="avatarInput"
                        type="file"
                        className={styles.avatarInput}
                    />
                    <label className={styles.avatarLabel} htmlFor="avatarInput">
                        Choose a different photo
                    </label>
                </div>
                <div>
                    <Button onclick={submit} text="Next" />
                </div>
            </Card>
        </>
    );
};

export default StepAvatar;
