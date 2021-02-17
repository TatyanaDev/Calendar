import { Component } from "react";
import style from "./leftSideOfTheCalendar.module.css";

export default class LeftSideOfTheCalendar extends Component {
  render() {
    const {
      fullNameOfTheDayOfTheWeek,
    } = this.props;
    return (
        <article className={style.dayOfWeekAndDayOfMonth}>
          <h1 className={style.dayOfWeek}>
            {fullNameOfTheDayOfTheWeek[new Date().getDay()]}
          </h1>
          <p className={style.dayOfTheMonth}>{this.day}</p>
        </article>
    );
  }
}
