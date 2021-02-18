import { Component } from "react";
import style from "./month.module.css";
import * as calendar from "./month";
import classnames from "classnames";

export default class Month extends Component {
  static defaultProps = {
    date: new Date(),
  };
  state = {
    date: this.props.date,
  };
  get year() {
    return this.state.date.getFullYear();
  }
  get month() {
    return this.state.date.getMonth();
  }
  render() {
    const { currentDate } = this.state;
    return (
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
    );
  }
}
