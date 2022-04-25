import { useEffect, useState } from 'react';

export function Dashboard(props) {
     const { account, contract } = props;
     const [inspectorDeatils, setInspectorDetails] = useState(null);
     const [allUser, setAllUser] = useState(0);
     const [allRegisteredUser, setAllRegisteredUser] = useState(0);
     const [allLands, setAllLands] = useState(0);

     useEffect(() => {
          contract.methods
               .InspectorMapping(account)
               .call()
               .then((result) => {
                    setInspectorDetails(result);
               });
          contract.methods
               .ReturnAllUserList()
               .call()
               .then((res) => {
                    res.map((user) => {
                         return contract.methods
                              .UserMapping(user)
                              .call()
                              .then((result) => {
                                   if (result.isUserVerified) {
                                        setAllRegisteredUser(
                                             allRegisteredUser + 1
                                        );
                                   }
                              });
                    });
                    setAllUser(res.length);
               });
          contract.methods
               .landsCount()
               .call()
               .then((res) => {
                    setAllLands(res);
               });
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [account, contract]);

     return (
          <>
               <div className="title">
                    Dashboard: {inspectorDeatils && inspectorDeatils.name}
               </div>
               <div className="section">
                    <div className="columns is-variable is-4">
                         <div class="column is-3 notification is-info mx-auto notification-height">
                              <strong>Total user Registered</strong>
                              <p class="subtitle">{allUser}</p>
                         </div>
                         <div class="column is-3 notification is-success mx-auto notification-height">
                              <strong>Total user Verified</strong>
                              <p class="subtitle">{allRegisteredUser}</p>
                         </div>
                         <div class="column is-3 notification is-warning mx-auto notification-height">
                              <strong>Total lands</strong>
                              <p class="subtitle">{allLands}</p>
                         </div>
                    </div>
               </div>
          </>
     );
}
