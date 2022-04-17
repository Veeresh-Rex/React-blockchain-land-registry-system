import React from 'react';

export function Table(props) {
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
                                   <React.Fragment key={index}>
                                        {body}
                                   </React.Fragment>
                              );
                         })}
                    </tbody>
               </table>
          </>
     );
}
