import ActionBar from './ActionBar';
import TalentRow from './TalentRow';
import {useEffect, useState} from 'react';

function AncientBuildEditor(props) {
    const {build, changeBuild} = props;

    const [selectedAbility, setSelectedAbility] = useState(build.abilities[0]);

    //useEffect here just sets the selected ability to the first ability in the bar if we change specs.
    useEffect(() => {
        setSelectedAbility(build.abilities[0]);
    }, [build.name]);

    const changeSelection = (selection) => {
        for (let i = 0; i < build.abilities.length; i++) {
            if (build.abilities[i].base.name === selectedAbility.base.name) {
                const newBuild = {...build};
                newBuild.abilities[i] = {...build.abilities[i], selection};
                changeBuild(newBuild);
                //Make sure to update selected ability as well, otherwise it will always reflect the "base" selection.
                setSelectedAbility(newBuild.abilities[i]);
                break;
            }
        }
    }

    return (
        <div className='calculator-main'>
            <ActionBar abilities={build.abilities} selectedAbility={selectedAbility} selectAbility={setSelectedAbility}/>
            <TalentRow ability={selectedAbility} select={changeSelection}/>
        </div>
    )
}

export default AncientBuildEditor;