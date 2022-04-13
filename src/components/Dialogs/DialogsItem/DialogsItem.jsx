import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog__user}>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;