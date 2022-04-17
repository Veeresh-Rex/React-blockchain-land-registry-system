import { useState } from 'react';

const Sidebar = ({ children, setScreen, routes }) => {
     const [active, setActive] = useState(routes[0].name);
     return (
          <>
               <div className="main-container">
                    <div className="sidebar">
                         <div className="top_section">
                              <div className="logo_text is-size-5 has-text-centered">
                                   <div>Blockchain</div>
                                   <div>land registry system</div>
                              </div>
                         </div>
                         <section className="routes">
                              {routes.map((route, index) => {
                                   return (
                                        <nav
                                             key={index}
                                             className={
                                                  'link' +
                                                  (active === route.name
                                                       ? ' active'
                                                       : '')
                                             }
                                             onClick={() => {
                                                  setActive(route.name);
                                                  setScreen(route.name);
                                             }}>
                                             <div className="icon">
                                                  {route.icon}
                                             </div>

                                             <div className="link_text">
                                                  {route.name}
                                             </div>
                                        </nav>
                                   );
                              })}
                         </section>
                    </div>

                    <main className="sidebar_main">{children}</main>
               </div>
          </>
     );
};

export { Sidebar };
