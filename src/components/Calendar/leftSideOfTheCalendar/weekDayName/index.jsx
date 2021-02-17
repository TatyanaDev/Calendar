import style from "./weekDay.module.css";

export <h1 className={style.dayOfWeek}>
  {fullNameOfTheDayOfTheWeek[new Date().getDay()]}
</h1>;

export default