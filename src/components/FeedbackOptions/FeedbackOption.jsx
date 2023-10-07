import React from "react";
import css from "components/FeedbackOptions/FeedbackOption.module.css"

const FeedbackOption = ({ options, handleFeedback }) => {

   return ( <div className={css.feedbackOptions}>
        {options.map(item => ( 
            <button key={item} onClick={()=>handleFeedback(item)} className={css.button}>
                {item}
            </button>
        ))}
 </div>   )
}

export default FeedbackOption;