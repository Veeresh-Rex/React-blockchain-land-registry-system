import { FiCheck } from 'react-icons/fi';


export default function AddInspector(props) {
     return (
          <>

               <div className="container">
                    <div className="is-size-3 has-text-centered is-capitalized has-text-weight-bold">
                         Add Land Inspector
                    </div>
                    <form className="box column is-two-thirds mx-auto mt-4">
                         <div class="field">
                              <label class="label">Address</label>
                              <div class="control">
                                   <input
                                        class="input "
                                        type="email"
                                        placeholder="e.g. 0x8392d8f9c8f9c8f9c8f9c8f9c8f9c8f9c8f9c8f"
                                        required
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">Full Name</label>
                              <div class="control">
                                   <input
                                        class="input "
                                        type="text"
                                        placeholder="e.g. John Doe"
                                        required
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">Age </label>
                              <div class="control">
                                   <input
                                        class="input "
                                        type="text"
                                        placeholder="e.g. 30"
                                        required
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">Designation</label>
                              <div class="control">
                                   <input
                                        class="input "
                                        type="text"
                                        placeholder="e.g. Land Inspector"
                                        required
                                   />
                              </div>
                              <div class="field">
                                   <label class="label">City</label>
                                   <div class="control">
                                        <input
                                             class="input "
                                             type="text"
                                             placeholder="e.g. Mumbai"
                                             required
                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="columns is-centered mt-2 mb-2">
                              <button class="button is-medium is-success is-outlined is-rounded is-responsive">
                                   <span>
                                        <FiCheck
                                             size={30}
                                             className="mt-3 ml-2"
                                        />
                                   </span>
                                   <span>Add Inspector</span>
                              </button>
                         </div>
                    </form>
               </div>
          </>
     );
}
