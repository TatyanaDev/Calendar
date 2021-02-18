import React, { Component } from "react";
import style from "./calendar.module.css";
import LeftSideOfTheCalendar from "./leftSideOfTheCalendar";
import RightSideOfTheCalendar from "./rightSideOfTheCalendar";

export default class Calendar extends Component {
  static defaultProps = {
    abbreviationNameOfTheDayOfTheWeek: [
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб",
      "Вс",
    ],
    fullNameOfTheDayOfTheWeek: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  };
  state = {
    currentDate: new Date(),
  };
  render() {
    const {
      abbreviationNameOfTheDayOfTheWeek,
      fullNameOfTheDayOfTheWeek,
    } = this.props;
    const { currentDate } = this.state;
    return (
      <section className={style.calendar}>
        <LeftSideOfTheCalendar
          fullNameOfTheDayOfTheWeek={fullNameOfTheDayOfTheWeek}
        />
        <RightSideOfTheCalendar
          abbreviationNameOfTheDayOfTheWeek={abbreviationNameOfTheDayOfTheWeek}
          currentDate={currentDate}
        />
      </section>
    );
  }
}
