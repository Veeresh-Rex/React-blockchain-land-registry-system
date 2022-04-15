import Table from '../Shared/Table';
import { useCallback, useEffect, useState } from 'react';
export default function AllInspector(props) {
     const { contract } = props;
     const [allInspectors, setAllInspectors] = useState([]);
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
                    await contract.InspectorMapping(inspector).then((res) => {
                         const a = {
                              sno: index + 1,
                              address: res._addr,
                              age: res.age.words[0],
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
          await contract.ReturnAllLandIncpectorList().then((result) => {
               mapAllInspectors(result);
          });
     }, [contract, mapAllInspectors]);

     useEffect(() => {
          getAllInspectorList();
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     return (
          <>
               <div className="title"> All Inspectors</div>
               <Table tableHead={tableHead} tableBody={allInspectors} />
          </>
     );
}
