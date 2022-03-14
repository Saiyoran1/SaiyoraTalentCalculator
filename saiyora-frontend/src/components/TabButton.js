import '../styles/TabButton.css';

function TabButton(props) {
    return (
        <button className={`tab-selector ${props.selected ? 'tab-selected' : ''}`} onClick={props.onClick}>{props.name}</button>
    )
}

export default TabButton;