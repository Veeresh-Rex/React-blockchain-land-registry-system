import { useLocation } from 'react-router-dom';
import { Logout, Sidebar } from '../Components/Shared';
import { useState } from 'react';
import { MdLogout, MdSpaceDashboard, MdPostAdd, MdSend } from 'react-icons/md';
import { SiBitcoinsv } from 'react-icons/si';
import { TiImage } from 'react-icons/ti';
import { RiLandscapeFill } from 'react-icons/ri';
import {
     SentLandRequest,
     RecievedLandRequest,
     MyLands,
     AllLands,
     AddLands,
     Dashboard,
} from '../Components/User';

const routes = [
     {
          name: 'Dashboard',
          icon: <MdSpaceDashboard />,
     },
     {
          name: 'Add Land',
          icon: <MdPostAdd />,
     },
     {
          name: 'My Lands',
          icon: <TiImage />,
     },
     {
          name: 'All Lands',
          icon: <RiLandscapeFill />,
     },
     {
          name: 'Recieved Land Request',
          icon: <SiBitcoinsv />,
     },
     {
          name: 'Sent Land Request',
          icon: <MdSend />,
     },
     {
          name: 'logout',
          icon: <MdLogout />,
     },
];

export default function User() {
     const history = useLocation();
     const { account } = history.state;
     const [Screen, setScreen] = useState('Dashboard');

     const loadScreen = () => {
          switch (Screen) {
               case 'Dashboard':
                    return <Dashboard account={account} />;
               case 'Add Land':
                    return <AddLands account={account} />;
               case 'My Lands':
                    return <MyLands account={account} />;
               case 'All Lands':
                    return <AllLands account={account} />;
               case 'Recieved Land Request':
                    return <RecievedLandRequest account={account} />;
               case 'Sent Land Request':
                    return <SentLandRequest account={account} />;
               case 'logout':
                    return <Logout />;
               default:
                    return <Dashboard account={account} />;
          }
     };

     return (
          <>
               <Sidebar
                    children={loadScreen()}
                    setScreen={setScreen}
                    routes={routes}
               />
          </>
     );
}
