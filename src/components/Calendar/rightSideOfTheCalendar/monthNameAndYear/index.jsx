import { Component } from "react";
import style from "./monthNameAndYear.module.scss";

export default class MonthNameAndYear extends Component {
  static defaultProps = {
    date: new Date(),
  };
  state = {
    date: this.props.date,
  };
  get year() {
    return this.state.date.getFullYear();
  }
  render() {
    return (
      <h1 className={style.monthAndYear}>
        {new Date().toLocaleString("ru", { month: "long" })}
        {this.year}
      </h1>
    );
  }
}
