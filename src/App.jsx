import React, { useState } from "react";
import Calendar from "./components/Calendar.jsx";
const App = () => {
  const [Age, SetAge] = useState("");
  function calculate(date) {
    let TOB = new Date(date);
    let NOWDate = new Date();
    const fullyears = NOWDate.getFullYear() - TOB.getFullYear();
    const TOBMonth = TOB.getMonth();
    const NowMonth = NOWDate.getMonth();
    let fullmonth;
    if (TOBMonth > NowMonth) {
      fullmonth = NowMonth - TOBMonth + 12;
    } else {
      fullmonth = NowMonth - TOBMonth;
    }
    const TOBDays = TOB.getDate();
    const NowDays = NOWDate.getDate();

    let fullDays;
    if (TOBDays > NowDays) {
      fullDays = NowDays;
    } else {
      fullDays = NowDays - TOBDays;
    }
    if (!fullyears) {
      SetAge("Input your Date of Birth");
    } else {
      SetAge(
        ` YOU are ${fullyears} years,${fullmonth} months and ${fullDays}  Days Old`
      );
    }
  }

  return (
    <div id="main">
      <h2> Age Calculator</h2>
      <Calendar calculate={calculate} />
      <h3>{Age}</h3>
    </div>
  );
};

export default App;