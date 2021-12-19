import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from '../Modal/Modal';
import './CreateForm.css';
import { setFormName } from '../../Actions/formAction';
import FormList from '../FormList/FormList';
import AddFormDetails from '../AddFormDetail/AddFormDetails';

const CreateForm = ({ formName, setFormNameAction }) => {
  const [isPopup, setIsPopup] = React.useState(false);

  return (
    <div className="create-form">
      <h1>Create Forms</h1>
      <label className="form-label">Form name</label>
      <input
        className="form-control"
        style={{ maxWidth: '400px' }}
        type="text"
        value={formName}
        placeholder="Form Name"
        onChange={(e) => {
          setFormNameAction(e.target.value);
        }}
      />
      <button
        className="btn btn-info add-ques-btn"
        type="button"
        onClick={() => setIsPopup(true)}
      >
        Add Question
      </button>

      <FormList />

      <Modal show={isPopup} setClose={() => setIsPopup(false)}>
        <AddFormDetails setIsPopup={setIsPopup} />
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formName: state.formName,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setFormNameAction: setFormName,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
