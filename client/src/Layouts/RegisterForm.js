import { FaUserTie, FaAddressCard } from 'react-icons/fa';
import { IoIdCard } from 'react-icons/io5';
import { MdEmail, MdLocationOn, MdUploadFile } from 'react-icons/md';
import { RiUserSettingsFill } from 'react-icons/ri';

function Register({
     formValues,
     setFormValues,
     setFileData,
     handleSubmit,
     fileData,
     isloading,
     isDisable,
}) {
     const handleOnChange = (e) => {
          const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
          if (e.target?.files) {
               setFileData(e.target?.files[0]);
          }
     };

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
                                   name="name"
                                   onChange={handleOnChange}
                                   value={formValues.name}
                                   disabled={isDisable}
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
                                   name="age"
                                   onChange={handleOnChange}
                                   disabled={isDisable}
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
                                   name="email"
                                   onChange={handleOnChange}
                                   disabled={isDisable}
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
                                   name="location"
                                   onChange={handleOnChange}
                                   disabled={isDisable}
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
                                   name="aadhar"
                                   onChange={handleOnChange}
                                   disabled={isDisable}
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
                                   name="pan"
                                   onChange={handleOnChange}
                                   disabled={isDisable}
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
                                        onChange={handleOnChange}
                                        required
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
                                        {fileData?.name}
                                   </span>
                              </label>
                         </div>
                    </div>
                    <p class="control">
                         <button
                              className={`button is-success`+ (isloading ? ' is-loading' : '')}
                              onClick={handleSubmit}>
                              Submit
                         </button>
                    </p>
               </form>
          </>
     );
}
export default Register;
