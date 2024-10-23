import React from "react";
import "./Task.css";

const Task = ({ task, index, completeTask, deleteTask }) => {
  return (
    <div className={`task ${task.isCompleted ? "completed" : ""}`}>
      <span
        className="task-text"
        style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <div className="task-actions">
        <button onClick={() => completeTask(index)} className="complete-btn">
          {task.isCompleted ? "Undo" : "Complete"}
        </button>
        <button onClick={() => deleteTask(index)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
