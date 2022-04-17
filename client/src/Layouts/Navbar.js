import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
     return (
          <nav class="navbar" role="navigation" aria-label="main navigation">
               <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                         Blockchain Land registry
                    </a>

                    <Link
                         role="button"
                         class="navbar-burger"
                         aria-label="menu"
                         aria-expanded="false"
                         data-target="navbarBasicExample">
                         <span aria-hidden="true"></span>
                         <span aria-hidden="true"></span>
                         <span aria-hidden="true"></span>
                    </Link>
               </div>

               <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                         <Link class="navbar-item">Home</Link>
                    </div>
               </div>
          </nav>
     );
};
