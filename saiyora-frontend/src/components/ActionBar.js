import ActionBarSlot from './ActionBarSlot';
import '../styles/ActionBar.css';

function ActionBar(props) {
    const {abilities, selectedAbility, selectAbility} = props;

    return (
        <div className='action-bar'>
            {abilities && abilities.map((ability) => {
                return <ActionBarSlot key={ability.base.name} icon={ability[ability.selection].name} select={() => selectAbility(ability)} selected={selectedAbility.base.name === ability.base.name}/>
            })}
        </div>
    )
}

export default ActionBar;