import React from 'react';
import s from "./InputForm.module.css";


const InputForm = ({state: {name, number}, handleChange, addContact}) => {

    return <div className={s.contactFormContainer}>
        <h3>Name</h3>
        <form onSubmit={addContact}
        >
            <input onChange={handleChange}
                   type="text"
                   name="name"
                   value={name}
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
                   required
            />
            <h3>Number</h3>
            <input onChange={handleChange}
                   type="tel"
                   name="number"
                   value={number}
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="The phone number must be numbers and can contain spaces, dashes, parentheses and can begin with is '+'"
                   required
            />
            <div>
                <button type="submit"
                        className={s.btn}>Add contact</button>
            </div>
        </form>
    </div>
}

export default InputForm