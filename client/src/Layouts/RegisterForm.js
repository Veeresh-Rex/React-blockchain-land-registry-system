import { FaUserTie, FaAddressCard } from 'react-icons/fa';
import { IoIdCard } from 'react-icons/io5';
import { MdEmail, MdLocationOn, MdUploadFile } from 'react-icons/md';
import { RiUserSettingsFill } from 'react-icons/ri';
function Register() {
     return (
          <>
               <form>
                    <div class="field">
                         <label class="label">Full Name</label>
                         <div class="control has-icons-left ">
                              <input
                                   class="input"
                                   type="text"
                                   placeholder="Alex Smith"
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
                                   placeholder="e.g. 22"
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
                                   placeholder="e.g. alexsmith@gmail.com"
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
                                   placeholder="e.g. Mahatma Gandhi Road, Lucknow,Uttar Pradesh"
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
                                   placeholder="e.g. 123456789000"
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
                                   placeholder="e.g. PAN1234567"
                              />
                              <span class="icon is-small is-left">
                                   <IoIdCard />
                              </span>
                         </div>
                    </div>
                    <div class="field">
                         <label class="label">
                              Upload Aadhar(PDF,JPG,JPEG,PNG)
                         </label>
                         <div class="file has-name">
                              <label class="file-label">
                                   <input
                                        class="file-input"
                                        type="file"
                                        name="document"
                                   />
                                   <span class="file-cta">
                                        <span class="file-icon">
                                             <MdUploadFile />
                                        </span>
                                        <span class="file-label">
                                             Choose a file…
                                        </span>
                                   </span>
                                   <span class="file-name">
                                        {/* TODO: code for file name */}
                                   </span>
                              </label>
                         </div>
                    </div>
                    <p class="control">
                         <button className="button is-success">Submit</button>
                    </p>
               </form>
          </>
     );
}
export default Register;
