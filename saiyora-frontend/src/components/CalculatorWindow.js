import '../styles/CalculatorWindow.css';

function CalculatorWindow(props) {
    return (
        <div className='calculator-window'>
            {props.children}
        </div>
    )
}

export default CalculatorWindow;