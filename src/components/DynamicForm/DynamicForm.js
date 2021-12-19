import React from 'react';
import { useParams } from 'react-router-dom';
import './DynamicForm.css';

export default function DynamicForm({ history, match }) {
  const { id: formId } = useParams();
  const formList = JSON.parse(localStorage.getItem('formList'));
  const formDetails = formList.find((item) => item.id === formId);

  console.log(formDetails, 'dsfjsdhjfh');

  const getAnswerUI = () => {
    if (formDetails.formDetails.answerType === 'text') {
      return (
        <input className="form-control" type="text" placeholder="Form Name" />
      );
    } else if (formDetails.formDetails.answerType === 'checkbox') {
      const options = formDetails.formDetails.multipleChoices.split('\n');
      return (
        <>
          {options.map((opt) => {
            return (
              <div
                key={`${opt.substring(0, 3)}-${Math.random() * 100}`}
                className="form-check"
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {opt}
                </label>
              </div>
            );
          })}
        </>
      );
    } else if (formDetails.formDetails.answerType === 'radio') {
      return (
        <>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="form-radio"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="form-radio"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              No
            </label>
          </div>
        </>
      );
    }
  };

  return (
    <div
      style={{ backgroundColor: '#7180de', height: '100vh' }}
      className="row"
    >
      <div className="col"></div>
      <div className="col created-form">
        <h1 style={{ textAlign: 'center' }}>{formDetails.formName}</h1>
        <p>{formDetails.formDetails.quesOrTitle}</p>
        <div>{getAnswerUI()}</div>
        <div
          style={{ textAlign: 'center', marginTop: 20 }}
          className="form-entities"
        >
          <button
            className="btn btn-primary add-btn"
            type="button"
            //onClick={handleAdd}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="col"></div>
    </div>
  );
}
