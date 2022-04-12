import { FaHome, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { MdMessage } from 'react-icons/md';
import { BiAnalyse } from 'react-icons/bi';
const routes = [
     {
          path: '/owner/dashboard',
          name: 'Dashboard',
          icon: <FaHome />,
     },
     {
          path: '/owner/add-inspector',
          name: 'Add Inspector',
          icon: <FaUser />,
     },
     {
          path: '/owner/change-owner',
          name: 'Change Owner',
          icon: <MdMessage />,
     },
     {
          path: '/logout',
          name: 'logout',
          icon: <BiAnalyse />,
     },
];

const Sidebar = ({ children, setScreen }) => {
     const [active, setActive] = useState(routes[0].name);
     return (
          <>
               <div className="main-container">
                    <div className="sidebar">
                         <div className="top_section">
                              <div>
                                   <div className="logo">
                                        Blockchain Land Registry System
                                   </div>
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

                    <main>{children}</main>
               </div>
          </>
     );
};

export default Sidebar;
