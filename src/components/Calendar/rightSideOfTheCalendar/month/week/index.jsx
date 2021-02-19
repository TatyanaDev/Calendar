import { Component } from "react";
import style from "./week.module.css";
import Day from "./day";

export default class Week extends Component {
  render() {
    const { currentDate, weeksOfTheMonth } = this.props;
    return (
      <tr className={style.todaysDate}>
        {weeksOfTheMonth.map((date, index) => {
          return <Day currentDate={currentDate} date={date} key={index} />
        })}</tr>
    );
  }
}
