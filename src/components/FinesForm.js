import classes from './FinesForm.module.css'
import {useState,useEffect,useContext} from 'react'
import {useRouteMatch,useHistory} from 'react-router-dom'
import { FinesContext } from '../context/context'

const FinesForm =(props)=>{
    const [cl,setCl] = useState(true)
    const [modal,setModal] = useState('')
    const finesStatus = useContext(FinesContext)
    const match = useRouteMatch()
    const history =useHistory()
    console.log(match)
    const [item,setItem] = useState('')
    const changeHandler=(event)=>{
        setItem(event.target.value)
        if(event.target.value === '035604301011911110002300'){
            fetch('https://test-task.shtrafovnet.com/fines/0356043010119111100023005').then(response=>response.json())
            .then(data=>{
              setModal(data.number)
            })
        }
        if(event.target.value === '1881013619111100103'){
            fetch('https://test-task.shtrafovnet.com/fines/18810136191111001035').then(response=>response.json())
            .then(data=>{
              setModal(data.number)
            })
        }
    }
    const API =`https://test-task.shtrafovnet.com/fines/${item}`
    const submitHandler =(event)=>{
    event.preventDefault()
    finesStatus.setValueFn(item)
    finesStatus.loadingFn()
    fetch(API).then(response=>response.json()).then(data=>{
        console.log(data)
        props.addHandler(data)
        history.push(match.url +'fines/' + item)
        setTimeout(()=>{
            finesStatus.responseFn()
        },500)
    }).catch(error=>{
        finesStatus.errorFn()
    })
    }
   useEffect(()=>{
       history.push('/')
   },[])
   
const changeClass = ()=>{
    if(item.trim().length === 20){
        setCl(true)
    }else if(item.trim().length === 25){
      setCl(true)
    }else{
        setCl(false)
    }
}

const modalValueHandler = ()=>{
setItem(modal)
}
let inputClass =cl ? `${classes.default}` : `${classes.default} ${classes.error}`
    return(
       <form className={classes.finesform} onSubmit={submitHandler}>
           <label htmlFor='fines'>Получение информации о штрафе УИН</label>
           <div className={classes.fines}>
               <div className={classes.inputDiv}>
           <input className={inputClass} id='fines' placeholder='Введите УИН' onChange={changeHandler} value={item}/>
           </div>
               <button type='submit' onClick={changeClass}>Найти</button>
               </div>
               {item==='035604301011911110002300' && <div className={classes.modal} onClick={modalValueHandler}>
               {modal}
               </div>}
               {item==='1881013619111100103' && <div className={classes.modal} onClick={modalValueHandler}>
               {modal}
               </div>}
               {!cl && <div className={classes.message}>Количество введенных цифр должно быть 20 или 25</div>}
       </form>
    )
}

export default FinesForm