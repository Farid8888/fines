import classes from './Fines.module.css'
import  { FinesContext } from '../context/context'
import {Fragment, useContext} from 'react'


const Fines =(props)=>{
    const loading = useContext(FinesContext).loading
    const error = useContext(FinesContext).error
    console.log(loading)
    const date = new Date(props.fines.bill_at)
        const d = date.getFullYear() + '-' + date.getDate() + '-' + (date.getMonth()+1 )
    return(
        <Fragment>
         {!loading && !error && <div className={classes.fines}>
             <h2>Постановление # {props.fines.number}</h2>
             {/* <p className={classes.flex}>Свидетельство о регистрации:<span></span></p> */}
             <p className={classes.flex}>Дата постановления: <span>{d}</span></p>
             {/* <p>Нарушение:</p> */}
             <p className={classes.flex} style={{marginBottom:'20px'}}>Получатель платежа: <span>{props.fines.division_name}</span></p>
             <p className={classes.flex}>ИНН: <span>{props.fines.payee_inn}</span></p>
             <p className={classes.flex}>КПП: <span>{props.fines.payee_kpp}</span></p>
             <p className={classes.flex}>Расчетный счет: <span>{props.fines.payee_bank_account}</span></p>
             <p className={classes.flex}>Банк получателя: <span>{props.fines.payee_bank_name}</span></p>
             <p className={classes.flex}>БИК: <span>{props.fines.payee_bank_bik}</span></p>
             <p className={classes.flex}>ОКТМО(ОКАТО): <span>{props.fines.payee_oktmo}</span></p>
             <p className={classes.flex}>КБК: <span>{props.fines.kbk}</span></p>
             <p className={classes.flex}>Сумма штрафа: <span>{props.fines.amount}</span></p>
             {/* <p className={classes.flex}>Скидка: <span>{props.fines.discount_at}</span></p> */}
             <p className={classes.flex}>К оплате: <span>{props.fines.amount_to_pay}</span></p>
         </div>}
         </Fragment>
    )
}

export default Fines