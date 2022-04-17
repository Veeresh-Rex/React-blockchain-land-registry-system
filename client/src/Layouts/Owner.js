import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadContracts } from '../services/LoadContract';
import { contractAddress } from '../Utils/constant';

import '../assets/Css/loading.css';
import { AddInspector, ChangeOwner, AllInspectors } from '../Components/Owner';
import { Logout, Sidebar } from '../Components/Shared';
import { FaUserTie, FaUserPlus } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';

const routes = [
     {
          name: 'Add Inspector',
          icon: <FaUserPlus />,
     },
     {
          name: 'All Inspector',
          icon: <FaUserTie />,
     },
     {
          name: 'Change Owner',
          icon: <BiAnalyse />,
     },
     {
          name: 'logout',
          icon: <MdLogout />,
     },
];

export default function Inspector(props) {
     const location = useLocation();
     const { account } = location.state;
     const [web3, setWeb3] = useState(null);
     const [contract, setContract] = useState(null);
     const [isloading, setIsloading] = useState(true);
     const [provider, setProvider] = useState(null);
     const [screen, setScreen] = useState('Add Inspector');

     useEffect(() => {
          LoadContracts().then((web3Api) => {
               setWeb3(web3Api.web3);
               setProvider(web3Api.provider);
               if (web3Api.web3) {
                    const contractList = new web3Api.web3.eth.Contract(
                         web3Api.contracts.abi,
                         contractAddress
                    );
                    setContract(contractList);
                    contractList && setIsloading(false);
               }
          });

          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const loadScreen = () => {
          switch (screen) {
               case 'Add Inspector':
                    return (
                         <AddInspector
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
               case 'All Inspector':
                    return (
                         <AllInspectors
                              account={account}
                              contract={contract}
                              web3={web3}
                         />
                    );
               case 'Change Owner':
                    return (
                         <ChangeOwner
                              account={account}
                              contract={contract}
                              web3={web3}
                              provider={provider}
                         />
                    );
               case 'logout':
                    return <Logout />;
               default:
                    return (
                         <AddInspector
                              account={account}
                              contract={contract}
                              provider={provider}
                         />
                    );
          }
     };

     return (
          <>
               {isloading && contract ? (
                    <div className="container">
                         <div className="columns is-centered is-vcentered">
                              <div class="lds-spinner">
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                                   <div></div>
                              </div>
                         </div>
                    </div>
               ) : (
                    <Sidebar setScreen={setScreen}>
                         {loadScreen()} routes={routes}
                    </Sidebar>
               )}
          </>
     );
}
