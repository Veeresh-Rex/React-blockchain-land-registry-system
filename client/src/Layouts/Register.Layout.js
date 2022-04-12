import RegisterPage from './Register';
import '../assets/Css/Layouts/Register.css';
function RegisterLayout() {
     return (
          <>
               <div className="bgimgRegister">
                    <div className="columns">
                         <div className="column is-7"></div>
                         <div className="column is-5 mr-4">
                              <div class="card">
                                   <header class="card-header">
                                        <p class="card-header-title is-size-3">
                                             Register User
                                        </p>
                                   </header>
                                   <div class="card-content">
                                        <RegisterPage />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
export default RegisterLayout;
