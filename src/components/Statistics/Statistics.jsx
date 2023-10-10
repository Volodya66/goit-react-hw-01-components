import css from './Statistics.module.css'
import PropTypes from "prop-types";


export function Statistics({stats,title}) {
    // console.log("title", title)
    // console.log("status",stats)
  
    const markup = (
<div>
    {title && (<h2 className={css.title}>{title}</h2>)}
        
    <ul className={css.list}>
   { stats.map(({ id, label, percentage }) =>( 
         
        <li className={`${css.item} ${css.card}`} key={id}>
        <span className={css.label}>.{label }</span>
        <span className={css.percentage}>%{percentage }</span>
        </li>
        
   ))}
   
    </ul>
</div>)
    return markup
};





Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};