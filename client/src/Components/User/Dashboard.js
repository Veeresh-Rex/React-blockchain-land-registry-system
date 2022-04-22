import { FaUserTie, FaAddressCard } from 'react-icons/fa';
import { IoIdCard } from 'react-icons/io5';
import {
     MdEmail,
     MdLocationOn,
     MdVerified,
     MdAccountBalanceWallet,
     GoUnverified, // TODO: GoUnverified icon for user not verified
} from 'react-icons/md';
import { RiUserSettingsFill } from 'react-icons/ri';

export function Dashboard() {
     return (
          <>
               <div className="columns is-centered">
                    <div className="column is-8">
                         <div class="box">
                              {/* TODO: Change when user register page is completed
                               these are dummy data
                              */}

                              <div className="columns is-centered">
                                   <MdVerified
                                        className="icon is-medium "
                                        style={{ color: 'green' }}
                                   />
                              </div>

                              <div class="field">
                                   <label class="label">Wallet Address</label>
                                   <div class="control has-icons-left ">
                                        <input
                                             class="input "
                                             type="text"
                                             readonly
                                             value="0x50a8acFaC7CB27b133746F4d6E25CB5F8894c675"
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
                                             readonly
                                             value="Alex Smith"
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
                                             readonly
                                             value={22}
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
                                             readonly
                                             value="alexsmith@gmail.com"
                                        />
                                        <span class="icon is-small is-left">
                                             <MdEmail />
                                        </span>
                                   </div>
                              </div>

                              <div class="field">
                                   <label class="label">Full Location </label>
                                   <div class="control has-icons-left">
                                        <input
                                             class="input"
                                             type="text"
                                             readonly
                                             value="Mahatma Gandhi Road, Lucknow,Uttar Pradesh"
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
                                             readonly
                                             value="123456789000"
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
                                             value="PAN1234567"
                                        />
                                        <span class="icon is-small is-left">
                                             <IoIdCard />
                                        </span>
                                   </div>
                              </div>
                              <div class="field mt-1 columns is-centered mb-1">
                                   <button class="button is-link is-light ">
                                        View Document
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
