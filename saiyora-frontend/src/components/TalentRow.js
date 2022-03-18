import AbilitySelector from './AbilitySelector';
import '../styles/TalentRow.css';

function TalentRow(props) {
    const {base, talent1, talent2, selection} = props.ability;
    return (
        <div className='talent-row'>
            <AbilitySelector name={base.name} selected={selection === 'base'} select={() => {}}/>
            <AbilitySelector name={talent1.name} selected={selection === 'talent1'} select={() => {}}/>
            <AbilitySelector name={talent2.name} selected={selection === 'talent2'} select={() => {}}/>
        </div>
    )
}

export default TalentRow;