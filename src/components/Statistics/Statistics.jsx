import React from "react";
import css from "components/Statistics/Statistics.module.css"
const Statistics = ({
    state: { good, neutral, bad },
    countTotalFeedback,
    countPositiveFeedback }) => {
    return (
        <div className={css.statistics}>
            <p className={css.item}>Good: {good}</p>
            <p className={css.item}>Neutral: {neutral}</p>
            <p className={css.item}>Bad: {bad}</p>
            <p className={css.item}>Total: {countTotalFeedback}</p>
            <p className={css.item}>Positive feedback: {countPositiveFeedback}%</p>
       </div>
    )
    }

export default Statistics;