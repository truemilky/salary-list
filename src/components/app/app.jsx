import { useState } from "react";
import nextId from "react-id-generator";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

const App = () => {
  let templateData = [
    {
      name: "John T.",
      salary: 800,
      increase: true,
      raise: false,
      id: nextId(),
    },
    {
      name: "Alex Z.",
      salary: 1500,
      increase: false,
      raise: true,
      id: nextId(),
    },
    {
      name: "Trevor T.",
      salary: 900,
      increase: false,
      raise: false,
      id: nextId(),
    },
    {
      name: "Artur P.",
      salary: 2000,
      increase: false,
      raise: false,
      id: nextId(),
    },
  ];

  const addDataToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  if (localStorage.getItem("data") === null) {
    addDataToLocalStorage(templateData);
  } else {
    templateData = JSON.parse(localStorage.getItem("data"));
  }

  const [data, setData] = useState(templateData);
  const [searchValue, setSearchValue] = useState("");
  const [empty, setEmpty] = useState(false);
  const [allFilter, setAllFilter] = useState(true);
  const [raiseFilter, setRaiseFilter] = useState(false);
  const [minSalaryFilter, setMinSalaryFilter] = useState(false);

  const searchForEmployees = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.indexOf(searchValue) > -1;
    });
  };

  const onUpdateSearch = (searchValue) => {
    setSearchValue(searchValue);
  };

  let visibleData;

  if (allFilter) {
    visibleData = searchForEmployees(data, searchValue);
    /* addDataToLocalStorage(visibleData); */
  } else if (raiseFilter) {
    const newData = data.filter((item) => item.raise);
    visibleData = searchForEmployees(newData, searchValue);
    /* addDataToLocalStorage(visibleData); */
  } else if (minSalaryFilter) {
    const newData = data.filter((item) => item.salary > 1000);
    visibleData = searchForEmployees(newData, searchValue);
    /* addDataToLocalStorage(visibleData); */
  }

  const deleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    addDataToLocalStorage(newData);
  };

  const addItem = (e, name, salary) => {
    e.preventDefault();
    if (!name || !salary) {
      setEmpty(true);
    } else {
      const newItem = {
        name: name,
        salary: salary,
        increase: false,
        raise: false,
        id: nextId(),
      };
      setData([...data, newItem]);
      addDataToLocalStorage([...data, newItem]);
      setEmpty(false);
    }
  };

  const onToggleProp = (id, prop) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item[prop] = !item[prop];
      }

      return item;
    });
    setData(newData);
    addDataToLocalStorage(newData);
  };

  const onFilter = (prop) => {
    if (prop === "all") {
      setAllFilter(true);
      setRaiseFilter(false);
      setMinSalaryFilter(false);
    } else if (prop === "raised") {
      setAllFilter(false);
      setRaiseFilter(true);
      setMinSalaryFilter(false);
    } else if (prop === ">1000") {
      setAllFilter(false);
      setRaiseFilter(false);
      setMinSalaryFilter(true);
    }
  };

  return (
    <div className='app'>
      <AppInfo data={data} />

      <div className='search-panel'>
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter
          onFilter={onFilter}
          allFilter={allFilter}
          raiseFilter={raiseFilter}
          minSalaryFilter={minSalaryFilter}
        />
      </div>

      <EmployeesList
        data={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp}
      />
      <EmployeesAddForm addItem={addItem} isEmpty={empty} />
    </div>
  );
};

export default App;
