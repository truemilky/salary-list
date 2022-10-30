import "./app-filter.css";

const AppFilter = ({ onFilter, allFilter, raiseFilter, minSalaryFilter }) => {
  return (
    <div className='btn-group'>
      <button
        onClick={(e) => onFilter(e.currentTarget.getAttribute("data-filter"))}
        className={allFilter ? "btn btn-light" : "btn btn-outline-light"}
        type='button'
        data-filter='all'
      >
        Все сотрудники
      </button>

      <button
        onClick={(e) => onFilter(e.currentTarget.getAttribute("data-filter"))}
        className={raiseFilter ? "btn btn-light" : "btn btn-outline-light"}
        type='button'
        data-filter='raised'
      >
        Сотрудники на повышение
      </button>

      <button
        onClick={(e) => onFilter(e.currentTarget.getAttribute("data-filter"))}
        className={minSalaryFilter ? "btn btn-light" : "btn btn-outline-light"}
        type='button'
        data-filter='>1000'
      >
        З/П больше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
