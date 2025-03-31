import React from "react";
import styles from "./CalendarDay.module.css";

const CalendarDay = ({ day, phase, isToday, onClick }) => {
  const phaseClass = styles[`phase-${phase}`] || "";
  return (
    <div className={`${styles.calendarDay} ${isToday ? styles.today : ""} ${phaseClass}`} onClick={() => onClick(day)}>
      <span className={styles.dayNumber}>{day}</span>
    </div>
  );
};

export default CalendarDay;
