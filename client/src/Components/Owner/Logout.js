import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
     const navigate = useNavigate();
     const [onCancel, setOnCancel] = useState(false);
     return (
          <>
               <div class={onCancel ? 'modal' : 'modal is-active'}>
                    <div class="modal-background"></div>
                    <div class="modal-card">
                         <header class="modal-card-head">
                              <p class="modal-card-title"></p>
                              <button
                                   class="delete"
                                   aria-label="close"
                                   onClick={() => {
                                        setOnCancel(true);
                                   }}></button>
                         </header>
                         <section class="modal-card-body">
                              Are you sure to logout?
                         </section>
                         <footer class="modal-card-foot">
                              <button
                                   class="button"
                                   onClick={() => {
                                        navigate('/');
                                   }}>
                                   Logout
                              </button>
                         </footer>
                    </div>
               </div>
          </>
     );
}
