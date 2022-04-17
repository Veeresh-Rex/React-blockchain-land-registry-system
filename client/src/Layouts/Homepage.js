import '../assets/Css/Layouts/Homepage.css';
import { Card } from '../Components/Shared/Card';
import { Link } from 'react-router-dom';
import contract_owner from '../assets/Images/contract.svg';
import inspector from '../assets/Images/inspector.png';
import user_img from '../assets/Images/User.png';

function Homepage() {
     return (
          <>
               <div className="bgimg">
                    <div class="container">
                         <div class="columns is-centered">
                              <div class="column is-half mt-6">
                                   <h1 className="is-size-1 is-captalize has-text-white has-text-weight-bold">
                                        Blockchain Based Land Registry System!
                                   </h1>
                                   <p className="is-size-5">
                                        Sell your property in a new way with
                                        100% secure System.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="container">
                    <div class="columns is-centered mt-6 mb-6">
                         <div class="column is-one-quarter">
                              <Link to="/login" state={{ loginAs: 'Owner' }}>
                                   <Card
                                        src={contract_owner}
                                        name="contract owner"
                                   />
                              </Link>
                         </div>
                         <div class="column is-one-quarter">
                              <Link
                                   to="/login"
                                   state={{ loginAs: 'Inspector' }}>
                                   <Card src={inspector} name="Inspector" />
                              </Link>
                         </div>
                         <div class="column is-one-quarter">
                              <Link to="/login" state={{ loginAs: 'User' }}>
                                   <Card src={user_img} name="User" />
                              </Link>
                         </div>
                    </div>
               </div>
          </>
     );
}
export default Homepage;
