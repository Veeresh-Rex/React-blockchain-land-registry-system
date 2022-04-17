import { useLocation } from 'react-router-dom';

export default function User() {
     const history = useLocation();
     const { account, contract } = history.state;

     return (
          <>
               <div>User:-{account}</div>
               {console.log(contract)}
          </>
     );
}
