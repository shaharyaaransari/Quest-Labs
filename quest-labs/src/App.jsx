

import { useEffect, useState } from 'react';
import './App.css'

import { Navbar } from './components/Navbar'
import { Profile } from './pages/Profile'
import API from "./shared/axios"
import Footer from './components/Footer';


function App() {
  const [data,setData]=useState({});
  const [pointsData,setPointsData]=useState({});
  const [rankData,setRankData]=useState({});
  const [pointsHistory,setPointsHistory]=useState([]);
  const [badge,setBadge]=useState([]);

  useEffect(()=>{
    API.get('/users/u-a2399489-9cd0-4c94-ad12-568379202b08').then((res)=>{
      setData(res?.data);
    }).catch((error)=>{
      console.log(error);
    })

    API.get('/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp').then((res)=>{
      setPointsData(res?.data);
    }).catch((error)=>{
      console.log(error);
    })

    API.get('entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank').then((res)=>{
      setRankData(res?.data?.data);
    }).catch((error)=>{
      console.log(error);
    })
    API.get('entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-history').then((res)=>{
      setPointsHistory(res?.data);
    }).catch((error)=>{
      console.log(error);
    })

    API.get('entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges').then((res)=>{
    
      setBadge(res?.data);
    }).catch((error)=>{
      console.log(error);
    })



  },[])
  return (
  <div>
  <Navbar/>
   <Profile data={data} pointsData={pointsData} rankData={rankData} badge={badge} pointsHistory={pointsHistory}/>
   <Footer/>
   
  </div>
  )
}

export default App
