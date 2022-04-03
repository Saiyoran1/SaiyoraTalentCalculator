import Selectable from "../UI/Selectable";
import {useState} from 'react';
import SelectionRow from '../UI/SelectionRow';

const ModernBuildEditor = (props) => {

    const {build, setBuild} = props;
    const [slot, setSlot] = useState(3);

    const chooseSlot = (newSlot) => {
        if (newSlot - 1 > build.selections.length || newSlot === 0) {
            return;
        }
        console.log(build.selections[newSlot]);
        if (build.selections[newSlot].specLock) {
            return;
        }
        setSlot(newSlot);
    }

    const selectAbility = (ability, slot) => {
        if (!build.selections[slot] || build.selections[slot].name !== ability.name) {
            const newBuild = {...build};
            newBuild.selections[slot] = ability;
            setBuild(newBuild);
        }
    }

    return (
        <SelectionRow>
        {build && build.selections.map((ability, index) => {
            return (
                <Selectable key={index} 
                select={() => chooseSlot(index)} 
                selected={slot === index}
                customBorder={'yellow'}
                >
                    {ability.name}
                </Selectable>
            )})}
        </SelectionRow>
    )
}

export default ModernBuildEditor;