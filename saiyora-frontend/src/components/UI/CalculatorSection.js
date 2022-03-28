import styles from './CalculatorSection.module.css';

const CalculatorSection = (props) => {
    return (
        <div className={styles['calculator-section']}>
            {props.children}
        </div>
    )
}

export default CalculatorSection;