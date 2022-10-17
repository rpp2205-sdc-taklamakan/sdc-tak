import React, { useState } from 'react';
import './modal.scss';

 const AddQuestion = (props) => {

  const [body, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const questionChange = (e) => {
    setQuestion(e.target.value);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  const emailChange = (e) => {
    setEmail(e.target.value);
  }

  const submit = () => {
    props.closeModal();
    props.handleAddQuestion({ body, name, email, product_id: props.product.id });
  }

  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
        <div className="title"> Ask Your Question </div>
        <div className="subTitle"> About the:  {props.product.name} </div>
        <div className="add-q-entry add-entry"> Your Question <input className="modal-entry" type="text" placeholder="your question here" onChange={questionChange}/> </div>
        <div className="add-q-entry add-entry"> Nick Name <input className="modal-entry" type="text" placeholder="Example: jackson11!" onChange={nameChange}/> </div>
        <div className="add-q-entry"> For privacy reasons, do not use your full name or email address </div>
        <div className="add-q-entry add-entry"> Your Email <input className="modal-entry" type="email" placeholder="xxx@gmail.com" onChange={emailChange}/> </div>
        <div className="add-q-entry"> For authentication reasons, you will not be emailed </div>
        <input className="btn" type="submit" value="Submit" onClick={submit}/>
      </div>
    </div>
  )
};

export default AddQuestion;