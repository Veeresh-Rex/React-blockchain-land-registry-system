import { FaUserTie, FaAddressCard } from 'react-icons/fa';
import { IoIdCard } from 'react-icons/io5';
import {
     MdEmail,
     MdLocationOn,
     MdVerified,
     MdAccountBalanceWallet,
} from 'react-icons/md';
// TODO: GoUnverified icon for user not verified
import { GoUnverified } from 'react-icons/go';
import { RiUserSettingsFill } from 'react-icons/ri';
import { useEffect, useState, useCallback } from 'react';

export function Dashboard(props) {
     const { account, contract } = props;
     const [userData, setUserData] = useState('');

     const fetchUserDetails = useCallback(async () => {
          if (account) {
               await contract.methods
                    .UserMapping(account)
                    .call()
                    .then((res) => {
                         setUserData(res);
                    });
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [account, contract]);

     useEffect(() => {
          fetchUserDetails();
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     return (
          <>
               {userData && (
                    <div className="columns is-centered">
                         <div className="column is-8">
                              <div class="box">
                                   <div className="columns is-centered">
                                        {userData.isUserVerified ? (
                                             <MdVerified
                                                  className="icon is-medium"
                                                  style={{ color: 'blue' }}
                                             />
                                        ) : (
                                             <GoUnverified
                                                  className="icon is-medium"
                                                  style={{ color: 'red' }}
                                             />
                                        )}
                                   </div>

                                   <div class="field">
                                        <label class="label">
                                             Wallet Address
                                        </label>
                                        <div class="control has-icons-left ">
                                             <input
                                                  class="input "
                                                  type="text"
                                                  readOnly
                                                  value={userData.id}
                                             />
                                             <span class="icon is-small is-left">
                                                  <MdAccountBalanceWallet />
                                             </span>
                                        </div>
                                   </div>

                                   <div class="field">
                                        <label class="label">Full Name</label>
                                        <div class="control has-icons-left ">
                                             <input
                                                  class="input "
                                                  type="text"
                                                  readOnly
                                                  value={userData.name}
                                             />
                                             <span class="icon is-small is-left">
                                                  <FaUserTie />
                                             </span>
                                        </div>
                                   </div>
                                   <div class="field">
                                        <label class="label">Age</label>
                                        <div class="control has-icons-left ">
                                             <input
                                                  class="input"
                                                  type="text"
                                                  readOnly
                                                  value={userData.age}
                                             />
                                             <span class="icon is-small is-left">
                                                  <RiUserSettingsFill />
                                             </span>
                                        </div>
                                   </div>
                                   <div class="field">
                                        <label class="label">Email</label>
                                        <div class="control has-icons-left">
                                             <input
                                                  class="input"
                                                  type="email"
                                                  readOnly
                                                  value={userData.email}
                                             />
                                             <span class="icon is-small is-left">
                                                  <MdEmail />
                                             </span>
                                        </div>
                                   </div>

                                   <div class="field">
                                        <label class="label">
                                             Full Location
                                        </label>
                                        <div class="control has-icons-left">
                                             <input
                                                  class="input"
                                                  type="text"
                                                  readOnly
                                                  value={userData.city}
                                             />
                                             <span class="icon is-small is-left">
                                                  <MdLocationOn />
                                             </span>
                                        </div>
                                   </div>
                                   <div class="field">
                                        <label class="label ">Aadhar No.</label>
                                        <div class="control has-icons-left">
                                             <input
                                                  class="input"
                                                  type="tel"
                                                  readOnly
                                                  value={userData.aadharNumber}
                                             />
                                             <span class="icon is-small is-left">
                                                  <FaAddressCard />
                                             </span>
                                        </div>
                                   </div>
                                   <div class="field">
                                        <label class="label">PAN No.</label>
                                        <div class="control has-icons-left">
                                             <input
                                                  class="input"
                                                  type="text"
                                                  readOnly
                                                  value={userData.panNumber}
                                             />
                                             <span class="icon is-small is-left">
                                                  <IoIdCard />
                                             </span>
                                        </div>
                                   </div>
                                   <div class="field mt-1 columns is-centered mb-1">
                                        <button
                                             class="button is-link is-light"
                                             onClick={() => {
                                                  window.open(
                                                       userData.document,
                                                       '_blank'
                                                  );
                                             }}>
                                             View Document
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               )}
          </>
     );
}
