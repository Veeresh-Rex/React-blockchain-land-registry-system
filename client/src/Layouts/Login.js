import Login_img from '../assets/Images/auth.svg';
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { loadContract } from '../Utils/load-contract';

export default function Login() {
     const navigate = useNavigate();
     const location = useLocation();
     const [account, setAccount] = useState(null);

     const [web3Api, setWeb3Api] = useState({
          provider: null,
          web3: null,
          contract: null,
     });

     useEffect(() => {
          if (location.state === null) navigate('/');
     }, [navigate, location.state]);
     // const [balance, setBalance] = useState(null);
     const setAccountListener = (provider) => {
          provider.on('accountsChanged', (accounts) => {
               console.log(accounts);
          });
          setAccount(provider.selectedAddress);
     };

     const LoginRedirect = useCallback(async () => {
          switch (location.state.loginAs) {
               case 'Owner':
                    await web3Api.contract
                         .isContractOwner(account)
                         .then((isOwner) => {
                              if (isOwner) {
                                   navigate('/owner', {
                                        state: {
                                             account,
                                        },
                                   });
                              } else {
                                   console.log('This is not an owner');
                              }
                         });
                    break;
               case 'Inspector':
                    await web3Api.contract
                         .isLandInspector(account)
                         .then((isInspector) => {
                              if (isInspector) {
                                   navigate('/inspector', {
                                        state: {
                                             account: account,
                                        },
                                   });
                              } else {
                                   console.log('This is not an inspector');
                              }
                         })
                         .catch((err) => {
                              console.log(err);
                         });
                    break;
               case 'User':
                    await web3Api.contract
                         .isUserRegistered(account)
                         .then((isUser) => {
                              if (isUser) {
                                   navigate('/user', {
                                        state: {
                                             account: account,
                                        },
                                   });
                              } else {
                                   navigate('/register');
                              }
                         });
                    break;
               default:
                    navigate('/');
                    break;
          }
     }, [web3Api, location.state.loginAs, account, navigate]);

     const onLoign = async () => {
          const provider = await detectEthereumProvider();
          const contract = await loadContract('Land', provider);
          if (provider) {
               console.log('Metamask successfully detected!');
               setAccountListener(provider);
               provider.request({
                    method: 'eth_requestAccounts',
               });
               setWeb3Api({
                    web3: new Web3(provider),
                    provider,
                    contract,
               });

               // const balance = await web3Api.web3.eth.getBalance(account);
               // setBalance(web3Api.web3.utils.fromWei(balance, 'ether'));
          } else {
               console.error('Please install MetaMask!');
          }
     };

     useEffect(() => {
          if (web3Api.contract && account) {
               LoginRedirect();
          }
     }, [LoginRedirect, account, web3Api.contract]);

     return (
          <>
               <div className="container">
                    <div className="columns is-centered">
                         <div className="column is-half">
                              <div className="image is-5by3">
                                   <img src={Login_img} alt="Login" />
                              </div>
                              {account}
                              <div>
                                   <input
                                        className="input is-link mt-3"
                                        type="password"
                                        placeholder="Private Key"
                                   />
                              </div>
                              <div className="columns is-centered mt-5">
                                   <button class="button is-warning">
                                        Login
                                   </button>
                              </div>
                              <div className="columns is-centered mt-3 has-text-centered">
                                   Or <br />
                                   Connect with metamask
                              </div>
                              <div className="columns is-centered mt-4">
                                   <button
                                        class="button is-warning"
                                        onClick={onLoign}>
                                        Connect
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
