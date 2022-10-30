import "./employees-list-item.css";

const EmployeesListItem = ({
  name,
  salary,
  onDelete,
  onToggleProp,
  increase,
  raise,
}) => {
  let listItemClassName = "list-group-item d-flex justify-content-between";

  if (increase) {
    listItemClassName += " increase";
  }

  if (raise) {
    listItemClassName += " like";
  }

  return (
    <li className={listItemClassName}>
      <span
        onClick={onToggleProp}
        className='list-group-item-label'
        data-toggle='raise'
      >
        {name}
      </span>
      <input
        type='text'
        className='list-group-item-input'
        defaultValue={salary + "$"}
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          data-toggle='increase'
          onClick={onToggleProp}
          type='button'
          className='btn-cookie btn-sm'
        >
          <i className='fas fa-cookie'></i>
        </button>

        <button onClick={onDelete} type='button' className='btn-trash btn-sm'>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
