import Table from '../Shared/Table';
import { useCallback, useEffect, useState } from 'react';
export default function AllInspector(props) {
     const { contract } = props;
     const [allInspectors, setAllInspectors] = useState([]);
     const tableHead = [
          'S.No.',
          ' Address',
          'Name',
          'Age',
          'Designation',
          'City',
          'Action',
     ];

     const getAllInspectorList = useCallback(async () => {
          await contract.ReturnAllLandIncpectorList().then((result) => {
               setAllInspectors(result);
          });
     }, [contract]);

     useEffect(() => {
          getAllInspectorList();
     }, [getAllInspectorList]);

     return (
          <>
               <div className="title"> All Inspectors</div>
               <Table tableHead={tableHead} tableBody={allInspectors} />
          </>
     );
}
