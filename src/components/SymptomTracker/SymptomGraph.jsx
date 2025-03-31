import React from "react";
import styles from "./SymptomGraph.module.css";

const SymptomGraph = ({ data }) => {
  if (data.length === 0) {
    return <div className={styles.noData}>No data available</div>;
  }
  return (
    <div className={styles.graphContainer}>
      <table className={styles.graphTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Pain Level</th>
            <th>Mood</th>
            <th>Bloating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.painLevel}</td>
              <td>{entry.mood}</td>
              <td>{entry.bloating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SymptomGraph;
