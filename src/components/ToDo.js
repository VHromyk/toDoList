import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import * as actions from "../redux/todo/todo-actions";

const ToDo = ({
  task,
  toggleTodo,
  removeTodo,
  getTaskByClick,
  addEditTodoButton,
}) => {
  const { isChecked, text, startDate } = task;

  const getCreateDate = moment(startDate).format("DD/ MM/ YYYY - hh:mm");

  return (
    <>
      <li className={isChecked ? "checked" : "unchecked"}>
        <input
          className="input-checkbox"
          type="checkbox"
          value="Done"
          defaultChecked={isChecked}
          onChange={() => toggleTodo(task)}
        />
        <div className="content-wrapper">
          <p className={"date"}>{getCreateDate}</p>
          <p className={isChecked ? "text-cnt" : "text-cnt-no"}>{text}</p>
        </div>
        <div className="button-wrapper">
          <button
            className="edit-btn"
            type="button"
            onClick={() => {
              addEditTodoButton(true);
              getTaskByClick(task.id, text);
            }}
          >
            E
          </button>
          <button
            className="delete-btn"
            type="button"
            onClick={() => {
              removeTodo(task);
            }}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(actions.removeTodo(todo)),
  toggleTodo: (todo) => dispatch(actions.toggleTodo(todo)),
});

export default connect(null, mapDispatchToProps)(ToDo);
