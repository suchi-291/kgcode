function AppToDo() {
  return (
    <div>
      <div className="container apptodo">
        <div className="row td-row">
          <div className="col-5 ">
            <input type="text" placeholder="Enter To Do here" />
          </div>
          <div className="col-4 ">
            <input type="date" />
          </div>
          <div className="col-2 ">
            <button className="btn btn-success td-button">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppToDo;
