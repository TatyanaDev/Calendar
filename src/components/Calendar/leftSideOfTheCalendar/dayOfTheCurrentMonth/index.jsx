import { Component } from "react";
import style from "./dayOfTheCurrentMonth.module.scss";

export default class WeekDayName extends Component {
  static defaultProps = {
    date: new Date(),
  };
  state = {
    date: this.props.date,
  };
  get day() {
    return this.state.date.getDate();
  }
  render() {
    return <p className={style.dayOfTheMonth}>{this.day}</p>;
  }
}