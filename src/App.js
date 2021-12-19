import React from 'react';
import './App.css';
import CreateForm from './components/CreateForm/CreateForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { formReducer } from './Reducers/formReducer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DynamicForm from './components/DynamicForm/DynamicForm';

const App = () => {
  const store = createStore(formReducer);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateForm />} />
          <Route exact path="/form/:id" element={<DynamicForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
