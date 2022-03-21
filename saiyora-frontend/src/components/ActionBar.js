import ActionBarSlot from './ActionBarSlot';
import '../styles/ActionBar.css';

function ActionBar(props) {
    const {abilities, selectedAbility, selectAbility} = props;

    return (
        <div className='action-bar'>
            {abilities.map((ability) => {
                return <ActionBarSlot key={ability.base.name} icon={ability.base.name} select={() => selectAbility(ability)} selected={ability.base.name === selectedAbility.base.name}/>
            })}
        </div>
    )
}

export default ActionBar;