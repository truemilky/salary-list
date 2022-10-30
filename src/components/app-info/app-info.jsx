import "./app-info.css";

const AppInfo = ({ data }) => {
  const employeesIncreasedQuantity = data.filter((item) => item.increase).length || 0;
  const employeesQuantity = data.length;
  return (
    <div className='app-info'>
      <h1>Учёт сотрудников</h1>
      <h2>Общее число сотрудников: {employeesQuantity}</h2>
      <h2>Премию получат: {employeesIncreasedQuantity}</h2>
    </div>
  );
};

export default AppInfo;
