import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Sidebar } from '../Components/Shared';
import { FaExchangeAlt } from 'react-icons/fa';
import { LoadContracts } from '../services/LoadContract';
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
import { contractAddress } from '../Utils/constant';

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
     const [contract, setContract] = useState(null);
     // const [isloading, setIsloading] = useState(true);
     const [provider, setProvider] = useState(null);
     const [screen, setScreen] = useState('Dashboard');

     useEffect(() => {
          LoadContracts().then((web3Api) => {
               setProvider(web3Api.provider);
               if (web3Api.web3) {
                    const contractList = new web3Api.web3.eth.Contract(
                         web3Api.contracts.abi,
                         contractAddress
                    );
                    setContract(contractList);
                    // contractList && setIsloading(false);
               }
          });

          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const loadscreen = () => {
          switch (screen) {
               case 'Dashboard':
                    return <Dashboard account={account} />;
               case 'Verify user':
                    return (
                         <VerifyUser
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'Verify Land':
                    return (
                         <VerifyLand
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'Transfer Ownership':
                    return (
                         <TransferOwner
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'logout':
                    return <Logout />;
               default:
                    return <Dashboard account={account} />;
          }
     };
     return (
          <>
               {contract && (
                    <Sidebar
                         children={loadscreen()}
                         routes={routes}
                         setScreen={setScreen}
                    />
               )}
          </>
     );
}
