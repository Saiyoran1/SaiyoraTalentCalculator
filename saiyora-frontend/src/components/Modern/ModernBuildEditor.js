import Selectable from "../UI/Selectable";
import {useState} from 'react';

const ModernBuildEditor = (props) => {

    const {build, setBuild} = props;
    const [slot, setSlot] = useState(3);

    const selectAbility = (ability, slot) => {
        if (!build.selections[slot] || build.selections[slot].name !== ability.name) {
            const newBuild = {...build};
            newBuild.selections[slot] = ability;
            setBuild(newBuild);
        }
    }

    const abilityNames = build && build.selections ? build.selections.map(ability => ability.name) : [];

    return (
        <div>
        {build && build.selections.map((ability) => {
            return (
                <Selectable key={ability.name} 
                select={() => selectAbility(ability, slot)} 
                selected={abilityNames.includes(ability.name)}
                customBorder={'yellow'}
                >
                    {ability.name}
                </Selectable>
            )})}
            
        </div>
    )
}

export default ModernBuildEditor;