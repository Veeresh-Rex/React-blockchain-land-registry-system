import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadContracts } from '../services/LoadContract';

import '../assets/Css/Layouts/Owner.css';
import AllInspector from '../Components/Owner/AllInspector';
import ChangeOwner from '../Components/Owner/ChangeOwner';
import Sidebar from '../Components/Owner/Sidebar';
import AddInspector from '../Components/Owner/AddInspector';

export default function Inspector(props) {
     const history = useLocation();
     const { account } = history.state;
     const [web3, setWeb3] = useState(null);
     const [contract, setContract] = useState(null);
     const [provider, setProvider] = useState(null);

     useEffect(() => {
          LoadContracts().then((web3Api) => {
               setWeb3(web3Api.web3);
               setProvider(web3Api.provider);
               setContract(web3Api.contracts);
          });
     }, []);
     const [screen, setScreen] = useState('Add Inspector');

     const loadScreen = () => {
          if (screen === 'Add Inspector') {
               return (
                    <AddInspector
                         account={account}
                         contract={contract}
                         web3={web3}
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
          }
     };

     return (
          <>
               {web3 && (
                    <Sidebar children={loadScreen()} setScreen={setScreen} />
               )}
          </>
     );
}
