import React from "react";
import "./media.css";

function Media({ media, onUpdate }) {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Label</th>
          <th>is_attached</th>
          <th>name</th>
          <th>description</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {media.map((state, i) => {
          console.log(state.is_attached);
          return (
            <tr key={i}>
              <td>{state.label}</td>
              <td>{state.is_attached.toString()}</td>
              <td>{state.name}</td>
              <td>{state.description}</td>
              <td>
                <button onClick={() => onUpdate(state.name, !state.is_attached)}>
                  Toggle Attachment
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Media;
