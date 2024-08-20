import "./Body.css"
function Header({handlingFunction, defaultValue, handleSubmit }) {
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your task....."
              value={defaultValue}
              onChange={handlingFunction}
              className="task-input"
            ></input>
            <button type="submit" className="submit-button" >Add</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header;
