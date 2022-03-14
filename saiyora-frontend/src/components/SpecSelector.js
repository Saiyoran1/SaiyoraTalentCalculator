import '../styles/SpecSelector.css';

function SpecSelector(props) {
    return (
        <button className={`spec-selector ${props.selected ? 'spec-selected' : ''}`}
        style={props.selected ? {backgroundColor: props.spec.color} : {}}
        onClick={props.changeSpec}>
            {props.spec.name}
        </button>
    )
}

export default SpecSelector;