import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadContracts } from '../services/LoadContract';
import { contractAddress } from '../Utils/constant';

import '../assets/Css/Layouts/Owner.css';
import '../assets/Css/loading.css';
import AllInspector from '../Components/Owner/AllInspector';
import ChangeOwner from '../Components/Owner/ChangeOwner';
import Sidebar from '../Components/Owner/Sidebar';
import AddInspector from '../Components/Owner/AddInspector';

export default function Inspector(props) {
     const location = useLocation();
     const navigate = useNavigate();
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
                    const contractLis = new web3Api.web3.eth.Contract(
                         web3Api.contracts.abi,
                         contractAddress
                    );
                    setContract(contractLis);
                    contractLis && setIsloading(false);
               }
          });

          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const loadScreen = () => {
          if (screen === 'Add Inspector') {
               return (
                    <AddInspector
                         account={account}
                         contract={contract}
                         provider={provider}
                    />
               );
          } else if (screen === 'All Inspector') {
               return (
                    <AllInspector
                         account={account}
                         contract={contract}
                         web3={web3}
                    />
               );
          } else if (screen === 'Change Owner') {
               return (
                    <ChangeOwner
                         account={account}
                         contract={contract}
                         web3={web3}
                    />
               );
          } else if (screen === 'logout') {
               navigate('/');
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
                    <Sidebar children={loadScreen()} setScreen={setScreen} />
               )}
          </>
     );
}
