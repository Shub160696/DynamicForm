import React from 'react';

export default function FormList() {
  const formListData = JSON.parse(localStorage.getItem('formList'));
  return (
    <div className="form-list" style={{ marginTop: '40px' }}>
      <h4>Forms</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Form Name</th>
            <th>Form URL</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {formListData.map((form) => {
            return (
              <tr key={form.id}>
                <td>{form.formName}</td>
                <td>
                  <a href={form.formUrl}>{form.formUrl}</a>
                </td>
                <td>{`${new Date(form.createdAt).getDate()}/${
                  new Date(form.createdAt).getMonth() + 1
                }/${new Date(form.createdAt).getFullYear()}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
