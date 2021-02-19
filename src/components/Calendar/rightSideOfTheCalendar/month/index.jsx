import { Component } from "react";
import * as calendar from "./month";
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
          .map((
            weeksOfTheMonth) => <Week weeksOfTheMonth={weeksOfTheMonth} currentDate={currentDate} />
          )
        }
      </tbody>
    );
  }
}
