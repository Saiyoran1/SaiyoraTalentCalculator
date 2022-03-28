import styles from './Selectable.module.css';

const Selectable = (props) => {
    const {select, selected, customBorder} = props;
    return (
        <button className={`${styles.selectable} ${selected ? styles.selected : ''}`}
            style={customBorder && selected ? {borderColor: customBorder} : {}}
            onClick={select}>
            {props.children}
        </button>
    )
}

export default Selectable;