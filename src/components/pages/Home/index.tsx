import { useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    const location = useLocation();
  
    useEffect(() => {
      if(location.pathname === "/home") {
        history.push({pathname: "/home/highlights"});
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
  return (
null
  );
}

export default Home;
