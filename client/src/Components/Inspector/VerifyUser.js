import { Table } from '../Shared';
import { useCallback, useEffect, useState } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

export function VerifyUser(props) {
     const { contract } = props;
     const [allUsers, setAllUsers] = useState([]);
     const [verify, setVerify] = useState();
     const tableHead = [
          'S.No',
          'Address',
          'Name',
          'Aadhar Number',
          'Pan',
          'City',
          'Document',
          'Status',
     ];

     const mapAllUsers = useCallback(
          (result) => {
               result.map(async (inspector, index) => {
                    await contract.methods
                         .UserMapping(inspector)
                         .call()
                         .then((body) => {
                              const a = (
                                   <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{body.id}</td>
                                        <td>{body.name}</td>
                                        <td>{body.aadharNumber}</td>
                                        <td>{body.panNumber}</td>
                                        <td>{body.city}</td>
                                        <td>
                                             <button
                                                  class="button is-link is-light is-responsive is-small"
                                                  onClick={() => {
                                                       window.open(
                                                            body.document,
                                                            '_blank'
                                                       );
                                                  }}>
                                                  Document
                                             </button>
                                        </td>
                                        <td>
                                             <button
                                                  className={
                                                       `button is-outlined is-small ` +
                                                       (body.isUserVerified
                                                            ? `is-success`
                                                            : `is-danger`)
                                                  }
                                                  onClick={() => {
                                                       !body.isUserVerified &&
                                                            setVerify(body.id);
                                                  }}>
                                                  <span>
                                                       {body.isUserVerified
                                                            ? 'Verified'
                                                            : 'Verify'}
                                                  </span>
                                                  <span className="icon">
                                                       <BsPatchCheckFill />
                                                  </span>
                                             </button>
                                        </td>
                                   </tr>
                              );
                              setAllUsers((allUsers) => [...allUsers, a]);
                         });
               });
          },
          [contract.methods]
     );

     const getAllUsersList = useCallback(async () => {
          await contract.methods
               .ReturnAllUserList()
               .call()
               .then((result) => {
                    mapAllUsers(result);
               });
     }, [contract, mapAllUsers]);

     useEffect(() => {
          if (!verify && allUsers.length === 0) {
               getAllUsersList();
          }

          if (verify) {
               contract.methods
                    .verifyUser(verify)
                    .send({ from: props.account })
                    .then((res) => {
                         setVerify(null);
                         setAllUsers([]);
                    });
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [verify]);

     return (
          <>
               <div className="title"> Verify User</div>
               <Table tableHead={tableHead} tableBody={allUsers} />
          </>
     );
}
