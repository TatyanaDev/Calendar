import { Component } from "react";
import style from "./weekDayName.module.css";

export default class DayOfTheCurrentMonth extends Component {
  render() {
    const { fullNameOfTheDayOfTheWeek } = this.props;
    return (
      <h1 className={style.dayOfWeek}>
        {fullNameOfTheDayOfTheWeek[new Date().getDay()]}
      </h1>
    );
  }
}