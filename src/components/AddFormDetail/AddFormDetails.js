import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  resetForm,
  setFormDetails,
  setFormName,
} from '../../Actions/formAction';
import './AddFormDetails.css';

const AddFormDetails = ({
  formName,
  formDetails,
  setFormDetailsAction,
  resetFormAction,
  setIsPopup,
}) => {
  const handleChange = (e) => {
    if (e.target.name === 'answerType' && e.target.value === 'checkbox') {
      setFormDetailsAction({
        ...formDetails,
        [e.target.name]: e.target.value,
        multipleChoices: '',
      });
    } else {
      setFormDetailsAction({
        ...formDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleAdd = () => {
    const id = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const formItem = {
      id,
      formName,
      formDetails,
      createdAt: new Date().toISOString(),
      formUrl: `${window.location.href}form/${id}`,
    };

    const localFormList = JSON.parse(localStorage.getItem('formList'));

    if (localFormList !== null) {
      console.log(localFormList);
      localFormList.push(formItem);
      localStorage.setItem('formList', JSON.stringify(localFormList));
    } else {
      localStorage.setItem('formList', JSON.stringify([formItem]));
    }
    resetFormAction();
    setIsPopup(false);
  };
  return (
    <div className="form-container-div">
      <h3 style={{ textAlign: 'center' }}>{formName}</h3>
      <div className="form-entities">
        <label className="form-label">Question/Title</label>
        <input
          name="quesOrTitle"
          className="form-control"
          type="text"
          value={formDetails.quesOrTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form-entities">
        <label className="form-label">Answer Type</label>
        <select
          name="answerType"
          className="form-select"
          onChange={handleChange}
          value={formDetails.answerType}
        >
          <option value="">Select</option>
          <option value="text">Text</option>
          <option value="checkbox">Multichoice Checkbox</option>
          <option value="radio">Single Select Radio</option>
        </select>
      </div>
      {formDetails.answerType === 'checkbox' && (
        <div className="form-entities">
          <label className="form-label">Multiple choices</label>
          <textarea
            name="multipleChoices"
            className="form-control"
            type="text"
            onChange={handleChange}
            value={formDetails.multipleChoices}
          />
        </div>
      )}
      <div
        style={{ textAlign: 'center', marginTop: 20 }}
        className="form-entities"
      >
        <button
          className="btn btn-primary add-btn"
          type="button"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formName: state.formName,
  formDetails: state.formDetails,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setFormNameAction: setFormName,
      setFormDetailsAction: setFormDetails,
      resetFormAction: resetForm,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(AddFormDetails);
