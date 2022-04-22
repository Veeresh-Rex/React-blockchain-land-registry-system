import { useLocation } from 'react-router-dom';
import { Logout, Sidebar } from '../Components/Shared';
import { useState, useEffect } from 'react';
import { MdLogout, MdSpaceDashboard, MdPostAdd, MdSend } from 'react-icons/md';
import { SiBitcoinsv } from 'react-icons/si';
import { TiImage } from 'react-icons/ti';
import { RiLandscapeFill } from 'react-icons/ri';
import { contractAddress } from '../Utils/constant';
import { LoadContracts } from '../services/LoadContract';
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
     const [contract, setContract] = useState(null);
     const [provider, setProvider] = useState(null);

     useEffect(() => {
          LoadContracts().then((web3Api) => {
               setProvider(web3Api.provider);
               if (web3Api.web3) {
                    const contractList = new web3Api.web3.eth.Contract(
                         web3Api.contracts.abi,
                         contractAddress
                    );
                    setContract(contractList);
               }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const loadScreen = () => {
          switch (Screen) {
               case 'Dashboard':
                    return (
                         <Dashboard
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'Add Land':
                    return (
                         <AddLands
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'My Lands':
                    return (
                         <MyLands
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'All Lands':
                    return (
                         <AllLands
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'Recieved Land Request':
                    return (
                         <RecievedLandRequest
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'Sent Land Request':
                    return (
                         <SentLandRequest
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'logout':
                    return <Logout />;
               default:
                    return (
                         <Dashboard
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
          }
     };

     return (
          <>
               {contract && (
                    <Sidebar
                         children={loadScreen()}
                         setScreen={setScreen}
                         routes={routes}
                    />
               )}
          </>
     );
}
