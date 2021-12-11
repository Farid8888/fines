import {Route} from 'react-router-dom'
import Layout from "./components/Layout";
import Fines from "./components/Fines";
import { Fragment, useState} from "react";
import Error from './components/Error';


const  App=()=> {

  const [fines, setFines] = useState({});
  const addHandler = (f) => {
    setFines(f);
  };
  return (
      <Fragment>
    <Route path='/'>
      <Layout addHandler={addHandler}>
      </Layout>
      </Route>
       <Route path='/fines/:q'>
        <Fines fines={fines} />
      </Route> 
      <Error fines={fines}/>
      </Fragment>
  );
}

export default App;
