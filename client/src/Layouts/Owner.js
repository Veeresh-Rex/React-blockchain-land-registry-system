import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LoadContracts } from '../services/LoadContract';

import '../assets/Css/Layouts/Owner.css';
import AddInspector from '../Components/Owner/AddInspector';
import ChangeOwner from '../Components/Owner/ChangeOwner';
import Sidebar from '../Components/Owner/Sidebar';
import Dashboard from '../Components/Owner/Dashboard';

export default function Inspector(props) {
     const history = useLocation();
     const { account } = history.state;
     const [web3, setWeb3] = useState(null);
     const [contract, setContract] = useState(null);

     useEffect(() => {
          LoadContracts().then((web3Api) => {
               setWeb3(web3Api.web3);
               setContract(web3Api.contracts);
          });
     }, []);
     const [screen, setScreen] = useState('Add Inspector');

     const loadScreen = () => {
          if (screen === 'Add Inspector') {
               return (
                    <Dashboard
                         account={account}
                         contract={contract}
                         web3={web3}
                    />
               );
          } else if (screen === 'All Inspector') {
               return (
                    <AddInspector
                         account={account}
                         contracts={contract}
                         web3={web3}
                    />
               );
          } else if (screen === 'Change Owner') {
               return (
                    <ChangeOwner
                         account={account}
                         contracts={contract}
                         web3={web3}
                    />
               );
          }
     };

     return (
          <>
               <Sidebar children={loadScreen()} setScreen={setScreen} />
          </>
     );
}
