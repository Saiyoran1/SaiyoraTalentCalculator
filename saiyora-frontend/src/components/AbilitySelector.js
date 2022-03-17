import '../styles/AbilitySelector.css';

function AbilitySelector(props) {
    const {name, select, selected} = props;
    return (
        <button onClick={select} className={`ability-selector ${selected ? 'ability-selected' : ''}`}>{name}</button>
    )
}

export default AbilitySelector;