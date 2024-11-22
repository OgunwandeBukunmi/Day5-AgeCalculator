import React, { useEffect, useState } from "react";
const Calendar = ({ calculate }) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    calculate(date);
  }, [date]);
  return (
    <section>
      {" "}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      ></input>
    </section>
  );
};

export default Calendar;
