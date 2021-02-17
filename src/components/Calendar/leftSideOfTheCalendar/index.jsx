import { Component } from "react";
import "./leftSideOFTheCalendar.module.css";
import style from "./leftSideOfTheCalendr.module.css";

export default class leftSideOfTheCalendar extends Component {
  render() {
    const {
      abbreviationNameOfTheDayOfTheWeek,
      fullNameOfTheDayOfTheWeek,
    } = this.props;
    const { currentDate } = this.state;
    const { currentDate: date } = this.props;
    return (
      <>
        <article className={style.dayOfWeekAndDayOfMonth}>
          <h1 className={style.dayOfWeek}>
            {fullNameOfTheDayOfTheWeek[new Date().getDay()]}
          </h1>
          <p className={style.dayOfTheMonth}>{this.day}</p>
        </article>
      </>
    );
  }
}
