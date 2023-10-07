import React from "react";
import css from "components/Section/Section.module.css"

 const Section = ({title, children}) => {
return    (<div className={css.section}> 
        <h2 className={css.title}>{title}</h2>
        {children}
</div>)
}

export default Section;