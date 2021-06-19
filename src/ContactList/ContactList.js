import React from "react";
import s from "./ContactList.module.css";

const ContactList = ({contacts, handlerDel}) => {
    return <div>
        <ul>
            {contacts.map(({ name, number, id }) => (
                <li key={id}>{name}: {number}
                    <button onClick={handlerDel} type="submit" id={id} className={s.btn_delete}>delete</button>
                
                </li>
            ))}
        </ul>
    </div>
}

export default ContactList