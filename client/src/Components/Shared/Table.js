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
                         {tableBody.map((body, index) => {
                              return (
                                   <tr key={index}>
                                        <th>{body.sno}</th>
                                        <td>{body.address}</td>
                                        <td>{body.name}</td>
                                        <td>{body.age}</td>
                                        <td>{body.designation}</td>
                                        <td>{body.city}</td>
                                        <td>
                                             <button
                                                  className="button is-small is-responsive is-outlined is-danger"
                                                  onClick={() => {
                                                       props.setDeleteIns(
                                                            body.address
                                                       );
                                                  }}>
                                                  remove
                                             </button>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
          </>
     );
}
