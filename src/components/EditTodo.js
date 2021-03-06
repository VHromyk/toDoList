import { useState } from 'react';
import axios from 'axios';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const editTodo = async (e) => {
        e.preventDefault()
        try {
            const body = { description };

            console.log(body);

            // eslint-disable-next-line no-unused-vars
            const response = await axios.put(
                `http://localhost:5000/todos/${todo.todo_id}`, body
            );

        } catch (error) {
            console.error(error)
        }

    }

  return (
      <>
          <button
              type="button"
              class=""
              data-toggle="modal"
              data-target={`#id${todo.todo_id}`}
          >
              Edit
          </button>

          <div class="modal" id={`id${todo.todo_id}`}>
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h4 class="modal-title">Edit Todo</h4>
                          <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                          >
                              &times;
                          </button>
                      </div>

                      <div class="modal-body">
                          <input type="text" className="form-control"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)} />
                      </div>

                      <div class="modal-footer">
                          <button
                              type="button"
                              class="btn btn-warning"
                              data-dismiss="modal"
                              onClick={(e)=> editTodo(e)}
                          >
                              Edit
                          </button>
                          <button
                              type="button"
                              class="btn btn-danger"
                              data-dismiss="modal"
                          >
                              Close
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default EditTodo;