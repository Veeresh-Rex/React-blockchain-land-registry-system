import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import { contractAddress } from '../../Utils/constant';

export function AddInspector(props) {
     //    fetch contract abi from public contract land folder

     const { account, contract, provider } = props;
     const [formValues, setFormValues] = useState({
          address: '',
          name: '',
          age: '',
          city: '',
          designation: '',
     });
     const handleFormSubmit = async (e) => {
          e.preventDefault();
          const { address, name, age, city, designation } = formValues;

          contract &&
               (await provider
                    .request({
                         method: 'eth_sendTransaction',
                         params: [
                              {
                                   from: account,
                                   to: contractAddress,
                                   data: contract.methods
                                        .addLandInspector(
                                             address,
                                             name,
                                             age,
                                             designation,
                                             city
                                        )
                                        .encodeABI(),
                              },
                         ],
                    })
                    .then((txHash) => {
                         console.log(txHash);
                    }));
     };

     const handleOnChange = (e) => {
          const { name, value } = e.target;
          setFormValues({ ...formValues, [name]: value });
     };

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
                                        class="input"
                                        type="email"
                                        placeholder="e.g. 0x8392d8f9c8f9c8f9c8f9c8f9c8f9c8f9c8f9c8f"
                                        required
                                        name="address"
                                        value={formValues.address}
                                        onChange={handleOnChange}
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">Full Name</label>
                              <div class="control">
                                   <input
                                        class="input"
                                        type="text"
                                        placeholder="e.g. John Doe"
                                        required
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleOnChange}
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">Age </label>
                              <div class="control">
                                   <input
                                        class="input"
                                        type="number"
                                        placeholder="e.g. 30"
                                        required
                                        name="age"
                                        value={formValues.age}
                                        onChange={handleOnChange}
                                   />
                              </div>
                         </div>
                         <div class="field">
                              <label class="label">Designation</label>
                              <div class="control">
                                   <input
                                        class="input"
                                        type="text"
                                        placeholder="e.g. Land Inspector"
                                        required
                                        name="designation"
                                        value={formValues.designation}
                                        onChange={handleOnChange}
                                   />
                              </div>
                              <div class="field">
                                   <label class="label">City</label>
                                   <div class="control">
                                        <input
                                             class="input"
                                             type="text"
                                             placeholder="e.g. Mumbai"
                                             required
                                             name="city"
                                             value={formValues.city}
                                             onChange={handleOnChange}
                                        />
                                   </div>
                              </div>
                         </div>
                         <div className="columns is-centered mt-2 mb-2">
                              <button
                                   type="submit"
                                   class="button is-medium is-success is-outlined is-rounded is-responsive"
                                   onClick={handleFormSubmit}>
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
