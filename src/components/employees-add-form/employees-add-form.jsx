import { useState } from "react";
import "./employees-add-form.css";

const EmployeesAddForm = ({ addItem, isEmpty }) => {
  const [salary, setSalary] = useState("");
  const [name, setName] = useState("");

  const onChangeValue = (e) => {
    if (e.target.name === "salary") {
      setSalary(e.target.value);
    } else if (e.target.name === "name") {
      setName(e.target.value);
    }
  };

  const clearForm = () => {
    if (name && salary) {
      setSalary("");
      setName("");
    } else {
      return;
    }
  };

  return (
    <div className='app-add-form'>
      <h3>Добавьте нового сотрудника</h3>
      <form className='add-form d-flex'>
        <input
          type='text'
          className='form-control new-post-label'
          placeholder='Имя сотрудника?'
          name='name'
          value={name}
          onChange={onChangeValue}
        />
        <input
          type='number'
          className='form-control new-post-label'
          placeholder='З/П в $?'
          name='salary'
          value={salary}
          onChange={onChangeValue}
        />

        <button
          onClick={(e) => {
            addItem(e, name, salary);
            clearForm();
          }}
          className='btn btn-outline-light'
        >
          Добавить
        </button>
      </form>
      <div
        className={
          isEmpty ? "alert alert-danger" : "alert alert-danger visually-hidden"
        }
        role='alert'
      >
        Не оставляйте поля пустыми
      </div>
    </div>
  );
};

export default EmployeesAddForm;
