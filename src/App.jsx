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
      fullmonth = 12 - TOBMonth + NowMonth;
      fullyears--;
    } else {
      fullmonth = NowMonth - TOBMonth;
    }
    const TOBDays = TOB.getDate();
    const NowDays = NOWDate.getDate();

    let fullDays;
    if (TOBDays > NowDays) {
      fullDays = NowDays + (30 - TOBDays);
      fullmonth--;
    } else if (NowDays > TOBDays) {
      fullDays = NowDays - TOBDays;
    } else if (NowDays == TOBDays) {
      fullDays = 0;
    }

    if (!date) {
      SetAge("Input your Date of Birth");
    } else if (fullyears < 0 || fullmonth < 0) {
      SetAge("Error , You Are Looking Into The Future 😄");
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
