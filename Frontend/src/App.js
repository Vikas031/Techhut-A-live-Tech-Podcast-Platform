import './App.css';
import { useState } from 'react';
import {BrowserRouter ,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/authenticate/Authenticate';
import Activate from './pages/activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import {useSelector} from 'react-redux';
import { useLoadingwithRefresh } from './hooks/useLoadingwithRefresh';
import Loader from './components/shared/Loader/Loader';
import Room from './pages/Room/Room';

function App() {
  const {loading}=useLoadingwithRefresh();
  return (
    loading?(<Loader message="Loading...! Please Wait"/>):
    (
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route exact path='/' element={<GuestRoute >
       <Home/>
    </GuestRoute>} />
    {/* <Route exact path='/register' element={<Register/>} />
    <Route exact path='/login' element={<Login/>} /> */}
    <Route path="/authenticate"element={
    <GuestRoute >
       <Authenticate />
    </GuestRoute> }/>

    {/* semi protected */}
    <Route path="/activate"element={
    <SemiProtectedRoute >
       <Activate/>
    </SemiProtectedRoute> }/>

    {/* protectedt routes */}
    <Route path="/rooms" element={
    <ProtectedRoute >
       <Rooms/>
    </ProtectedRoute> }/>

    <Route path="/rooms/:id" element={
    <ProtectedRoute >
       <Room/>
    </ProtectedRoute> }/>

    </Routes>
    </BrowserRouter>)
  );
}


const GuestRoute=(Props)=>{
  //checks can be used here
  const {isAuth}=useSelector((state)=>state.auth)
  return (
    !isAuth?(Props.children):<Navigate to="/rooms"/>
  )
}


const SemiProtectedRoute=(Props)=>{
  const {isAuth,user}=useSelector((state)=>state.auth)
  return (
    !isAuth?<Navigate to="/"/>:!user.activated?(Props.children):<Navigate to="/rooms"/>
  )
}

const ProtectedRoute=(Props)=>{
  const {isAuth,user}=useSelector((state)=>state.auth)
  return (
    !isAuth?<Navigate to="/"/>:user.activated?(Props.children):<Navigate to="/activate"/>
  )
}

export default App;
