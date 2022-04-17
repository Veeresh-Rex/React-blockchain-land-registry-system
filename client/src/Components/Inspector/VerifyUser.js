import { Table } from '../Shared';
export function VerifyUser(props) {
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

     // This is dummy data
     // TODO: change data when user screen completed
     const tableBody = [
          <tr>
               <th>1</th>
               <td>0xe00e23fb58b22ef68087715a809651f57acaf08f</td>
               <td>Veeresh Maurya</td>
               <td>567812349098</td>
               <td>FPDPM4192G</td>
               <td>Jalalpur</td>
               <td>view</td>
               <td>
                    <button className="button is-small is-responsive is-outlined is-danger">
                         Verify
                    </button>
               </td>
          </tr>,
     ];
     return (
          <>
               <div className="title"> Verify User</div>
               <Table tableHead={tableHead} tableBody={tableBody} />
          </>
     );
}
