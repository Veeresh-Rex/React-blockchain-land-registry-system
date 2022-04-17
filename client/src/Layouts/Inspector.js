import { useLocation } from 'react-router-dom';
import { Sidebar } from '../Components/Shared';
import { FaExchangeAlt } from 'react-icons/fa';
import { useState } from 'react';
import {
     MdLogout,
     MdSpaceDashboard,
     MdVerifiedUser,
     MdDomainVerification,
} from 'react-icons/md';

import {
     Dashboard,
     VerifyUser,
     VerifyLand,
     TransferOwner,
} from '../Components/Inspector';
import { Logout } from '../Components/Shared';

const routes = [
     {
          name: 'Dashboard',
          icon: <MdSpaceDashboard />,
     },
     {
          name: 'Verify user',
          icon: <MdVerifiedUser />,
     },
     {
          name: 'Verify Land',
          icon: <MdDomainVerification />,
     },
     {
          name: 'Transfer Ownership',
          icon: <FaExchangeAlt />,
     },
     {
          name: 'logout',
          icon: <MdLogout />,
     },
];

export default function Inspector() {
     const history = useLocation();
     const { account } = history.state;
     const [screen, setScreen] = useState('Dashboard');

     const loadscreen = () => {
          switch (screen) {
               case 'Dashboard':
                    return <Dashboard account={account} />;
               case 'Verify user':
                    return <VerifyUser account={account} />;
               case 'Verify Land':
                    return <VerifyLand account={account} />;
               case 'Transfer Ownership':
                    return <TransferOwner account={account} />;
               case 'logout':
                    return <Logout />;
               default:
                    return <Dashboard account={account} />;
          }
     };
     return (
          <>
               <Sidebar
                    children={loadscreen()}
                    routes={routes}
                    setScreen={setScreen}
               />
          </>
     );
}
