import css from './statistic.module.css'
import PropTypes from "prop-types";

export const TitleStatics = ({ title }) => {
    
    return title.length >0? <h2 className={css.title} >{title}</h2> : ("")
       
    
};

export function CreateMarkup(events) {
    const markup = (
        <ul className={css.list}>
   { events.events.map(({ id, label, percentage }) =>( 
         
             <li className={`${css.item} ${css.card}`} key={id}>
                <span className={css.label}>.{label }</span>
                <span className={css.percentage}>%{percentage }</span>
             </li>
        
   ))}
   
    </ul>)
       return markup
};



TitleStatics.propTypes = {
    title: PropTypes.string
};

CreateMarkup.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};