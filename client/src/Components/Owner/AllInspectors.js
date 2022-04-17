import { Table } from '../Shared';
import { useCallback, useEffect, useState } from 'react';
export function AllInspectors(props) {
     const { contract } = props;
     const [allInspectors, setAllInspectors] = useState([]);
     const [deleteIns, setDeleteIns] = useState(null);
     const tableHead = [
          'S.No.',
          'Address',
          'Name',
          'Age',
          'Designation',
          'City',
          'Action',
     ];

     const mapAllInspectors = useCallback(
          (result) => {
               result.map(async (inspector, index) => {
                    await contract.methods
                         .InspectorMapping(inspector)
                         .call()
                         .then((body) => {
                              const a = (
                                   <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{body._addr}</td>
                                        <td>{body.name}</td>
                                        <td>{body.age}</td>
                                        <td>{body.designation}</td>
                                        <td>{body.city}</td>
                                        <td>
                                             <button
                                                  className="button is-small is-responsive is-outlined is-danger"
                                                  onClick={() => {
                                                       setDeleteIns(body._addr);
                                                  }}>
                                                  remove
                                             </button>
                                        </td>
                                   </tr>
                              );
                              setAllInspectors((allInspectors) => [
                                   ...allInspectors,
                                   a,
                              ]);
                         });
               });
          },
          [contract.methods]
     );

     const getAllInspectorList = useCallback(async () => {
          await contract.methods
               .ReturnAllLandIncpectorList()
               .call()
               .then((result) => {
                    mapAllInspectors(result);
               });
     }, [contract, mapAllInspectors]);

     useEffect(() => {
          !deleteIns && getAllInspectorList();

          if (deleteIns) {
               contract.methods
                    .removeLandInspector(deleteIns)
                    .send({ from: props.account })
                    .then((res) => {
                         console.log(res);
                         setDeleteIns(null);
                         getAllInspectorList();
                    });
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [deleteIns]);

     return (
          <>
               <div className="title"> All Inspectors</div>
               <Table
                    tableHead={tableHead}
                    tableBody={allInspectors}
                    setDeleteIns={setDeleteIns}
               />
          </>
     );
}
