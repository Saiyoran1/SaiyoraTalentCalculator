import styles from './CalculatorSection.module.css';

const CalculatorSection = (props) => {
    return (
        <div className={`${styles['calculator-section']} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default CalculatorSection;