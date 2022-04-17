import { Table } from '../Shared';
export function TransferOwner(props) {
     const tableHead = [
          'S.No',
          'Land ID',
          'Seller Address',
          'Buyer Address',
          'Status',
          'Transfer Ownership',
     ];

     // This is dummy data
     // TODO: change data when user screen completed
     const tableBody = [
          <tr>
               <th>1</th>
               <td>12</td>
               <td>0xe00e23fb58b22ef68087715a809651f57acaf08f</td>
               <td>0xe00e23fb58b22ef68087715a809651f57acaf08f</td>
               <td>Completed</td>

               <td>
                    <button className="button is-small is-responsive is-outlined is-danger">
                         Verify
                    </button>
               </td>
          </tr>,
     ];
     return (
          <>
               <div className="title"> Transfer Ownership</div>
               <Table tableHead={tableHead} tableBody={tableBody} />
          </>
     );
}
