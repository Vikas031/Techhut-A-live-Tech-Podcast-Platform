import React, { useState } from 'react'
import RoomCard from '../../components/RoomCard/RoomCard';
import styles from './Rooms.module.css';
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal';
 const rooms = [
     {
         id: 1,
         topic: 'Which framework best for frontend ?',
         speakers: [
             {
                 id: 1,
                 name: 'John Doe',
                 avatar: '/images/monkey-avatar.png',
             },
             {
                 id: 2,
                 name: 'Jane Doe',
                 avatar: '/images/monkey-avatar.png',
             },
         ],
         totalPeople: 40,
     },
     {
         id: 3,
         topic: 'What’s new in machine learning?',
         speakers: [
             {
                 id: 1,
                 name: 'John Doe',
                 avatar: '/images/monkey-avatar.png',
             },
             {
                 id: 2,
                 name: 'Jane Doe',
                 avatar: '/images/monkey-avatar.png',
             },
         ],
         totalPeople: 40     },
          {
              id:4,
                 topic: 'Why people use stack overflow?',
                 speakers: [
             {
                 id: 1,
                 name: 'John Doe',
                 avatar: '/images/monkey-avatar.png',
             },
             {
                 id: 2,
                 name: 'Jane Doe',
                 avatar: '/images/monkey-avatar.png',
             },
         ],
         totalPeople: 40,
     },
     {
         id: 5,
         topic: 'Artificial inteligence is the future?',
         speakers: [
             {
                 id: 1,
                 name: 'John Doe',
                 avatar: '/images/monkey-avatar.png',
             },
             {
                 id: 2,
                 name: 'Jane Doe',
                 avatar: '/images/monkey-avatar.png',
             },
         ],
         totalPeople: 40,
     },
 ];
const Rooms = () => {
    const [showModal,setShowModal]=useState(false);
    function openModal(){
        setShowModal(true);
    }

  return (
    <>
    <div className="container">
      <div className={styles.roomsHeader}>
        
        <div className={styles.left}>
          <span className={styles.heading}> All Voice Rooms</span>
          <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="" />
              <input type="text" className={styles.searchInput}/>
          </div>
        </div>
        
        <div className={styles.right}>
          <button onClick={openModal} className={styles.startRoombtn}>
            <img src="/images/add-room-icon.png" alt="add-room" />
            <span>
                Start a Room
            </span>
          </button>
        </div>
      </div>

      <div className={styles.roomList}>
            {
              rooms.map((room)=>(<RoomCard key={room._id} room={room}/>))
            }
      </div>
    </div>
    {showModal&&<AddRoomModal onClose={()=>setShowModal(false)}/>}
    </>
  )
}

export default Rooms