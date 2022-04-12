
import { useLocation } from 'react-router-dom';

export default function Inspector() {
     const history = useLocation();
     const { account } = history.state;

     return (
          <>
               <div>Inspector:-{account}</div>
          </>
     );
}
