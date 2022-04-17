import Table from '../Shared/Table';
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
                         .then((res) => {
                              const a = {
                                   sno: index + 1,
                                   address: res._addr,
                                   age: res.age,
                                   city: res.city,
                                   designation: res.designation,
                                   name: res.name,
                              };
                              setAllInspectors((allInspectors) => [
                                   ...allInspectors,
                                   a,
                              ]);
                         });
               });
          },
          [contract]
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
               {allInspectors && (
                    <Table
                         tableHead={tableHead}
                         tableBody={allInspectors}
                         setDeleteIns={setDeleteIns}
                    />
               )}
          </>
     );
}
