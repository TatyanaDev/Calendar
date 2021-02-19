import { Component } from "react";
import style from "./rightSideOfTheCalendar.module.scss";
import MonthNameAndYear from "./monthNameAndYear";
import DayOfWeek from "./dayOfWeek";
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
          <Month currentDate={currentDate}/>
        </table>
      </article>
    );
  }
}
