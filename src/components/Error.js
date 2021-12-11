import LoadingSpinner from "./LoadingSpinner"
import { useContext } from "react"
import  { FinesContext } from "../context/context"
import classes from './Error.module.css'
import SearchIcon from "./SearchIcon"

const Error =(props)=>{
    const error = useContext(FinesContext).error
    const loading = useContext(FinesContext).loading
    const enteredValue = useContext(FinesContext).enteredValue
console.log(enteredValue)
    return(
      <div className={classes.error}>
       {error && !loading && <div className={classes.icon}><SearchIcon/></div> }
       {error && !loading && <div className={classes.fine}>Штраф {enteredValue} не найден</div>}
       {!error && loading && <LoadingSpinner/>}
       </div>
    )
}

export default Error