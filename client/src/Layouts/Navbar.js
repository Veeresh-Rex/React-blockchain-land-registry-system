import React from 'react';

export const Navbar = () => {
     return (
          <nav class="navbar" role="navigation" aria-label="main navigation">
               <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                         Blockchain Land registry
                    </a>

                    <a
                         role="button"
                         class="navbar-burger"
                         aria-label="menu"
                         aria-expanded="false"
                         data-target="navbarBasicExample">
                         <span aria-hidden="true"></span>
                         <span aria-hidden="true"></span>
                         <span aria-hidden="true"></span>
                    </a>
               </div>

               <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                         <a class="navbar-item">Home</a>
                    </div>
               </div>
          </nav>
     );
};
