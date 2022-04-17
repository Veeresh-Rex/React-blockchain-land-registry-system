import { Table } from '../Shared';
export function VerifyLand(props) {
     const tableHead = [
          'S.No',
          'Seller Address',
          'Location',
          'Price',
          'PID',
          'Servey No.',
          'Document',
          'Status',
     ];

     // This is dummy data
     // TODO: change data when user screen completed
     const tableBody = [
          <tr>
               <th>1</th>
               <td>0xe00e23fb58b22ef68087715a809651f57acaf08f</td>
               <td>Kannupur Jalalpur</td>
               <td>1500000</td>
               <td>123</td>
               <td>398455</td>
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
               <div className="title"> Verify Land</div>
               <Table tableHead={tableHead} tableBody={tableBody} />
          </>
     );
}
