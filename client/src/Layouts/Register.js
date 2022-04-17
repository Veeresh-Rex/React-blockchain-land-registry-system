import RegisterPage from './RegisterForm';
import '../assets/Css/Layouts/Register.css';
function Register() {
     return (
          <>
               <div className="bgimgRegister">
                    <div className="columns is-centered">
                         <div className="column is-6">
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
export default Register;
