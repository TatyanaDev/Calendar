import React, { Component } from "react";
import classnames from "classnames";
import * as calendar from "./calendar";
import style from "./calendar.module.css";
import LeftSideOfTheCalendar from "./leftSideOfTheCalendar";

export default class Calendar extends Component {
  static defaultProps = {
    date: new Date(),
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
    date: this.props.date,
    currentDate: new Date(),
  };
  get year() {
    return this.state.date.getFullYear();
  }
  get month() {
    return this.state.date.getMonth();
  }
  get day() {
    return this.state.date.getDate();
  }
  render() {
    const {
      abbreviationNameOfTheDayOfTheWeek,
      fullNameOfTheDayOfTheWeek,
    } = this.props;
    const { currentDate } = this.state;
    return (
      <section className={style.calendar}>
        <LeftSideOfTheCalendar fullNameOfTheDayOfTheWeek={fullNameOfTheDayOfTheWeek}/>
        <article className={style.contentCalendar}>
          <h1 className={style.monthAndYear}>
            {new Date().toLocaleString("ru", { month: "long" })}
            {this.year}
          </h1>
          <table className={style.borderSpacing}>
            <thead>
              <tr>
                {abbreviationNameOfTheDayOfTheWeek.map((name) => (
                  <th className={style.specificDayOfTheWeek} key={name}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendar
                .getMonthData(this.year, this.month, this.day)
                .map((week, index) => (
                  <tr key={index} className={style.todaysDate}>
                    {week.map((date, index) =>
                      date ? (
                        <td
                          key={index}
                          className={classnames(style.day, {
                            [style.today]: calendar.areEqual(date, currentDate),
                          })}
                        >
                          {date.getDate()}
                        </td>
                      ) : (
                        <td key={index} />
                      )
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </article>
      </section>
    );
  }
}
