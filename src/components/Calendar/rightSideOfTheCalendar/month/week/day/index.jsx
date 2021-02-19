import { Component } from "react";
import classnames from "classnames";
import style from "./day.module.scss";
import {areEqual} from "../../month";

export default class Day extends Component {
  render() {
    const { currentDate, date } = this.props;
    const classname= classnames(style.day, { [style.today]: areEqual(date, currentDate), })
    return (
      (<td className={classname}>
        {date.getDate()}</td>)

    )
  };
}

