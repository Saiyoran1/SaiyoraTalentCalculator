import AbilitySelector from './AbilitySelector';
import '../styles/TalentRow.css';

function TalentRow(props) {
    const {ability, select} = props;
    const {base, talent1, talent2, selection} = ability;
    return (
        <div className='talent-row'>
            <AbilitySelector name={base.name} selected={selection === 'base'} select={() => select('base')}/>
            <AbilitySelector name={talent1.name} selected={selection === 'talent1'} select={() => select('talent1')}/>
            <AbilitySelector name={talent2.name} selected={selection === 'talent2'} select={() => select('talent2')}/>
        </div>
    )
}

export default TalentRow;