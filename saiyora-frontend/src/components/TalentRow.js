import AbilitySelector from './AbilitySelector';
import '../styles/TalentRow.css';

function TalentRow(props) {
    const {base, talent1, talent2} = props.ability;
    return (
        <>
            <AbilitySelector name={base.name} selected={props.selected === 'base'} select={() => props.select('base')}/>
            <AbilitySelector name={talent1.name} selected={props.selected === 'talent1'} select={() => props.select('talent1')}/>
            <AbilitySelector name={talent2.name} selected={props.selected === 'talent2'} select={() => props.select('talent2')}/>
        </>
    )
}

export default TalentRow;