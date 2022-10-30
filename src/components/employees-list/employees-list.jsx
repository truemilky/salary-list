import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onInputSalaryChange }) => {
  const elements = data.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemsProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
        onInputSalaryChange={(e) => onInputSalaryChange(e.target.value, id)}
      />
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
