import "./App.css";
import React, { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

function App() {
  const [user, setUser] = useState({
    userName: "",
    age: "",
  });

  const [display, setDisplay] = useState([]);
  const [isError, setIsError] = useState(false);
  const [modal, setModal] = useState(false);

  const { userName, age } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCancel = (e) => {
    setModal(false);
  };

  const handleClick = (e) => {
    
    if (userName < 1 || age < 1) {
      setIsError(true);
      setModal(true);
    } else {
      setDisplay((prev) => [...prev, user]);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-label">
          <h4>
            <label>Username</label>
          </h4>
        </div>
        <div className="form-control">
          <input
            type="text"
            name="userName"
            defaultValue={userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-label">
          <h4>
            <label>Age</label>
          </h4>
        </div>
        <div className="form-control">
          <input
            type="number"
            name="age"
            defaultValue={age}
            onChange={handleChange}
          />
        </div>
        <br />
        <button onClick={handleClick}>Add User</button>
        <br />
        <br />
        {JSON.stringify(user)}
      </form>
      <div className="form-display">
        <h4>{JSON.stringify(display)}</h4>
        {display.map((item) => {
          return (
            <p>
              {item.userName} ({item.age} years old)
            </p>
          );
        })}
      </div>
      <div className="form-error">
        {isError && <h2> Please Enter a Valid Input</h2>}
      </div>
      <div className="modal">
        <PureModal
          header="Your header"
          footer={
            <div>
              <button onClick={handleCancel}>Cancel</button>
              <button>Save</button>
            </div>
          }
          isOpen={modal}
          // closeButton="Close"
          // closeButton={
          //   <div>
          //     <button>Close</button>
          //   </div>
          // }
          closeButtonPosition="header"
          onClose={() => {
            setModal(false);
            return true;
          }}
        >
          <p>Your content</p>
        </PureModal>
      </div>
      ;
    </div>
  );
}

export default App;
