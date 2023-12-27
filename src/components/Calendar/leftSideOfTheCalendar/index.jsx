import { Component } from "react";
import style from "./leftSideOfTheCalendar.module.scss";
import WeekDayName from "./weekDayName";
import DayOfTheCurrentMonth from "./dayOfTheCurrentMonth";

export default class LeftSideOfTheCalendar extends Component {
  render() {
    const { fullNameOfTheDayOfTheWeek } = this.props;
    return (
      <article className={style.dayOfWeekAndDayOfMonth}>
        <WeekDayName
          fullNameOfTheDayOfTheWeek={fullNameOfTheDayOfTheWeek}
        />
        <DayOfTheCurrentMonth />
      </article>
    );
  }
}
