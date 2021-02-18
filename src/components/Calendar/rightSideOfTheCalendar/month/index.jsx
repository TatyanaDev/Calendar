import { Component } from "react";
import style from "./month.module.css";
import * as calendar from "./month";
import classnames from "classnames";
import Week from "./week";

export default class Month extends Component {
  get year() {
    return this.props.currentDate.getFullYear();
  }
  get month() {
    return this.props.currentDate.getMonth();
  }
  render() {
    const { currentDate } = this.props;
    return (
      <tbody>
        {calendar
          .getMonthData(this.year, this.month)
          .map((arrayOfWeek) => <Week arrayOfWeek={arrayOfWeek} currentDate={currentDate} />
          )

        }
      </tbody>
    );
  }
}
