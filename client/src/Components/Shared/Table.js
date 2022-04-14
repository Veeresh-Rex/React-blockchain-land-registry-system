export default function Table(props) {
     const { tableHead, tableBody } = props;
     return (
          <>
               <table class="table is-fullwidth is-bordered has-text-centered is-hoverable">
                    <thead>
                         <tr>
                              {tableHead.map((head, index) => {
                                   return <th key={index}>{head}</th>;
                              })}
                              
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <th>1</th>
                              <td>
                                   0x98fcdc8c4498e68ed77a7e49e67b5cb32c7a74dd
                              </td>
                              <td>38</td>
                              <td>23</td>
                              <td>12</td>
                              <td>3</td>
                              <td>
                                   <button className="button is-small is-responsive is-outlined is-danger">
                                        remove
                                   </button>
                              </td>
                         </tr>
                         <tr>
                              <th>2</th>
                              <td>
                                   0x98fcdc8c4498e68ed77a7e49e67b5cb32c7a74dd
                              </td>
                              <td>38</td>
                              <td>23</td>
                              <td>12</td>
                              <td>3</td>
                              <td>
                                   <button className="button is-small is-responsive is-outlined is-danger">
                                        remove
                                   </button>
                              </td>
                         </tr>
                         <tr>
                              <th>3</th>
                              <td>
                                   0x98fcdc8c4498e68ed77a7e49e67b5cb32c7a74dd
                              </td>
                              <td>38</td>
                              <td>23</td>
                              <td>12</td>
                              <td>3</td>
                              <td>
                                   <button className="button is-small is-responsive is-outlined is-danger">
                                        remove
                                   </button>
                              </td>
                         </tr>
                         <tr>
                              <th>4</th>
                              <td>
                                   0x98fcdc8c4498e68ed77a7e49e67b5cb32c7a74dd
                              </td>
                              <td>38</td>
                              <td>23</td>
                              <td>12</td>
                              <td>3</td>
                              <td>
                                   <button className="button is-small is-responsive is-outlined is-danger">
                                        remove
                                   </button>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </>
     );
}
