import { Component } from "react";
import style from "./rightSideOfTheCalendar.module.css";
import MonthNameAndYear from "./monthNameAndYear";
import DayOfWeek from "./dayOfWeek";
import classnames from "classnames";
import * as calendar from "../calendar";
import Month from "./month";

export default class RightSideOfTheCalendar extends Component {
  static defaultProps = {
    date: new Date(),
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
  render() {
    const { abbreviationNameOfTheDayOfTheWeek } = this.props;
    const { currentDate } = this.state;
    return (
      <article className={style.contentCalendar}>
        <MonthNameAndYear />
        <table className={style.borderSpacing}>
          <thead>
            <DayOfWeek
              abbreviationNameOfTheDayOfTheWeek={
                abbreviationNameOfTheDayOfTheWeek
              }
            />
          </thead>
          {/* <Month currentDate={currentDate}/> */}
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
    );
  }
}
