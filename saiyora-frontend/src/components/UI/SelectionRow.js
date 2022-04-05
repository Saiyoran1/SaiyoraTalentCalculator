import styles from './SelectionRow.module.css';

const SelectionRow = (props) => {
    return (
        <div className={`${styles['selection-row']} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default SelectionRow;