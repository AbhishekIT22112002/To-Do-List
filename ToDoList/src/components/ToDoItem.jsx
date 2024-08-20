import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";
import { useState } from "react";
import "./Body.css";

function ToDoItem({ Items, handleDelete, handleClearButton, handleUpdateTasks }) {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editedValue, setEditedValue] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);

  const handleComplete = (item) => {
    if (completedTasks.includes(item)) {
      setCompletedTasks(completedTasks.filter((task) => task !== item));
    } else {
      setCompletedTasks([...completedTasks, item]);
      triggerEmoji();
    }
  };

  const handleEdit = (item) => {
    setEditingTask(item);
    setEditedValue(item);
  };

  const handleSave = (item) => {
    if (editedValue && !Items.includes(editedValue)) {
      // Update the task
      const updatedTasks = Items.map((task) =>
        task === item ? editedValue : task
      );
      handleUpdateTasks(updatedTasks); // Notify parent to update tasks
      setEditingTask(null);
      setEditedValue("");
    } else {
      alert("Duplicate or empty task");
    }
  };

  const triggerEmoji = () => {
    setShowEmoji(true);
    setTimeout(() => {
      setShowEmoji(false);
    }, 1000);
  };

  return (
    <>
      <ul>
        {Items.map((item) => {
          const isCompleted = completedTasks.includes(item);
          return (
            <li
              key={item}
              className={`task-item ${isCompleted ? "completed" : ""}`}
            >
              <div className="task-content">
                {editingTask === item ? (
                  <>
                    <input
                      type="text"
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)}
                      className="edit-input"
                    />
                    <button onClick={() => handleSave(item)} className="save-button">
                      Save
                    </button>
                  </>
                ) : (
                  item
                )}
              </div>
              <button onClick={() => handleComplete(item)}>
                <IoMdCheckmarkCircleOutline />
              </button>
              <button onClick={() => handleDelete(item)}>
                <MdDeleteSweep />
              </button>
              {!editingTask && (
                <button onClick={() => handleEdit(item)} className="edit-button">
                  Edit
                </button>
              )}
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={handleClearButton} className="clear-all">
          Clear All
        </button>
      </div>

      {showEmoji && <div className="emoji">🎉</div>}
    </>
  );
}

export default ToDoItem;
