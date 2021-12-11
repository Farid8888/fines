import classes from './Layout.module.css'
import FinesForm from './FinesForm'

const Layout =(props)=>{
    return(
     <div className={classes.layout}>
         <div className={classes.control}>
         <h2><span className={classes.color}>Ш</span>ШТРАФОВ <span className={classes.ligth}>НЕТ</span></h2>
         <FinesForm addHandler={props.addHandler}/>
         {props.children}
         </div>
     </div>
    )
}

export default Layout