import AbilitySelector from './AbilitySelector';
import '../styles/TalentRow.css';

function TalentRow(props) {
    const {base, talent1, talent2} = props.ability;
    return (
        <div className='talent-row'>
            <AbilitySelector name={base} selected={props.selected === base} select={() => props.select(base)}/>
            <div className='talent-row-break' />
            <AbilitySelector name={talent1} selected={props.selected === talent1} select={() => props.select(talent1)}/>
            <AbilitySelector name={talent2} selected={props.selected === talent2} select={() => props.select(talent2)}/>
        </div>
    )
}

export default TalentRow;