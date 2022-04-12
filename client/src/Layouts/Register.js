function Register() {
     return (
          <>
               {/* <div class="columns">
        <div class="column is-two-fifths mx-auto"> */}
               <form>
                    <div class="field">
                         <label class="label">Full Name</label>
                         <div class="control">
                              <input
                                   class="input"
                                   type="text"
                                   placeholder="Alex Smith"
                              />
                         </div>
                    </div>
                    <div class="field">
                         <label class="label">Email</label>
                         <div class="control">
                              <input
                                   class="input"
                                   type="email"
                                   placeholder="e.g. alexsmith@gmail.com"
                              />
                         </div>
                    </div>
                    <div class="field">
                         <label class="label">Phone No.</label>

                         <div class="field has-addons">
                              <p class="control">
                                   <button class="button is-static">+91</button>
                              </p>
                              <p class="control is-expanded">
                                   <input
                                        class="input"
                                        type="tel"
                                        placeholder="Your 10 digit  phone number"
                                   />
                              </p>
                         </div>
                         <p class="help">Don't enter +91 with phone no.</p>
                    </div>
                    <div class="field">
                         <label class="label">Date-Of-Birth</label>
                         <div class="control">
                              <input
                                   class="input"
                                   type="text"
                                   placeholder="e.g. 01/01/2000"
                              />
                         </div>
                    </div>
                    <div class="field">
                         <label class="label">Full Address </label>
                         <div class="control">
                              <input
                                   class="input"
                                   type="text"
                                   placeholder="e.g. Mahatma Gandhi Road, Lucknow,Uttar Pradesh"
                              />
                         </div>
                    </div>
                    <div class="field">
                         <label class="label">PIN CODE</label>
                         <div class="control">
                              <input
                                   class="input"
                                   type="tel"
                                   placeholder="e.g. 220000"
                                   required
                              />
                         </div>
                         <div class="field">
                              <label class="label">Aadhar No.</label>
                              <div class="control">
                                   <input
                                        class="input"
                                        type="tel"
                                        placeholder="e.g. 123456789000"
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">PAN No.</label>
                              <div class="control">
                                   <input
                                        class="input"
                                        type="text"
                                        placeholder="e.g. PAN1234567"
                                   />
                              </div>
                              <div class="field">
                                   <label class="label">
                                        Upload Aadhar(.pdf)
                                   </label>
                                   <div class="file has-name">
                                        <label class="file-label">
                                             <input
                                                  class="file-input"
                                                  type="file"
                                                  name="resume"
                                             />
                                             <span class="file-cta">
                                                  <span class="file-icon">
                                                       <i class="fas fa-upload"></i>
                                                  </span>
                                                  <span class="file-label">
                                                       Choose a file…
                                                  </span>
                                             </span>
                                             <span class="file-name"></span>
                                        </label>
                                   </div>
                              </div>
                              <p class="control">
                                   <button className="button is-success">
                                        Submit
                                   </button>
                              </p>
                         </div>
                    </div>
               </form>
               {/* </div>
      </div> */}
          </>
     );
}
export default Register;
