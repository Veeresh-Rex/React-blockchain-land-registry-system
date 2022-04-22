import RegisterPage from './RegisterForm';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { create } from 'ipfs-http-client';
import { LoadContracts } from '../services/LoadContract';
import { contractAddress } from '../Utils/constant';
import '../assets/Css/Layouts/Register.css';

const client = create('https://ipfs.infura.io:5001/api/v0');

function Register() {
     const history = useLocation();
     const navigate = useNavigate();
     const { account } = history.state;
     const [formValues, setFormValues] = useState({
          name: '',
          age: '',
          email: '',
          location: '',
          aadhar: '',
          pan: '',
          document: '',
     });

     const [fileData, setFileData] = useState(null);
     const [contract, setContract] = useState(null);
     const [isloading, setIsloading] = useState(false);
     const [isDisable, setIsDisable] = useState(false);
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
                    // contractList && setIsloading(false);
               }
          });
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const handleSubmit = async (e) => {
          setIsloading(true);
          setIsDisable(true);
          console.log('submit');
          e.preventDefault();
          const added = await client.add(fileData);
          const url = `https://ipfs.infura.io/ipfs/${added.path}`;
          setFormValues({ ...formValues, document: url });
          const { name, age, email, location, aadhar, pan } = formValues;
          contract &&
               (await provider
                    .request({
                         method: 'eth_sendTransaction',
                         params: [
                              {
                                   from: account,
                                   to: contractAddress,
                                   data: contract.methods
                                        .registerUser(
                                             name,
                                             age,
                                             location,
                                             aadhar,
                                             pan,
                                             document,
                                             email
                                        )
                                        .encodeABI(),
                              },
                         ],
                    })
                    .then((txHash) => {
                         setIsloading(false);
                         setIsDisable(false);
                         navigate('/user', {
                              state: {
                                   account: account,
                              },
                         });
                    })
                    .catch((error) => {
                         console.log(error);
                    }));
     };

     return (
          <>
               <div className="bgimgRegister">
                    <div className="columns is-centered">
                         <div className="column is-6">
                              <div class="card">
                                   <header class="card-header">
                                        <p class="card-header-title is-size-3">
                                             Register User
                                        </p>
                                   </header>
                                   <div class="card-content">
                                        <RegisterPage
                                             formValues={formValues}
                                             setFormValues={setFormValues}
                                             setFileData={setFileData}
                                             handleSubmit={handleSubmit}
                                             fileData={fileData}
                                             isloading={isloading}
                                             isDisable={isDisable}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
export default Register;
