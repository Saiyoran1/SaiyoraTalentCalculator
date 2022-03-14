import '../styles/AbilitySelector.css';

function AbilitySelector(props) {
    return (
        <button onClick={props.select} className={`ability-selector ${props.selected ? 'ability-selected' : ''}`}>{props.name}</button>
    )
}

export default AbilitySelector;