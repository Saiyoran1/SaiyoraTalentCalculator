import '../styles/ActionBar.css';

function ActionBarSlot(props) {
    const {icon, selected, select} = props;
    return (
        <div className={`action-bar-slot ${selected ? 'action-bar-slot-selected' : ''}`}>
            <button onClick={select} className='ability-icon'>{icon}</button>
        </div>
    )
}

export default ActionBarSlot;