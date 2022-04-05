import Selectable from "../UI/Selectable";
import {useState} from 'react';
import SelectionRow from '../UI/SelectionRow';
import {MODERNSPECS} from '../../dummydata/specs';
import styles from './ModernBuildEditor.module.css';

const ModernBuildEditor = (props) => {

    const {build, setBuild} = props;
    const [slot, setSlot] = useState(3);
    const [poolSpec, setPoolSpec] = useState(MODERNSPECS[0]);

    const chooseSlot = (newSlot) => {
        if (newSlot - 1 > build.selections.length || newSlot === 0) {
            return;
        }
        if (build.selections[newSlot].specLock) {
            return;
        }
        setSlot(newSlot);
    }

    const selectAbility = (ability, slot) => {
        if (!build || !build.selections) {
            return;
        }
        if (!build.selections[slot] || build.selections[slot].name !== ability.name) {
            const newBuild = {...build};
            newBuild.selections.forEach((selection, index) => {
                if (selection.name === ability.name) {
                    newBuild.selections[index] = {};
                }
            });
            newBuild.selections[slot] = ability;
            setBuild(newBuild);
        }
        else if (build.selections[slot].name === ability.name) {
            const newBuild = {...build};
            newBuild.selections[slot] = {};
            setBuild(newBuild);
        }
    }

    return (
        <> {build && 
        <div className={styles['build-editor']}>
            <SelectionRow>
                {build.selections.map((ability, index) => {
                    return (
                        <Selectable key={index} 
                            select={() => chooseSlot(index)} 
                            selected={slot === index}
                            customBorder={'yellow'}
                        >
                            {ability.name}
                        </Selectable>
                    )
                })}
            </SelectionRow>
            <div className={styles['ability-selection-window']}>
                <SelectionRow className={styles['pool-spec-selector']}>
                        {MODERNSPECS.map(spec => {
                            return (
                                <Selectable key={spec.name}
                                    select={() => setPoolSpec(spec)}
                                    selected={poolSpec.name === spec.name}
                                    customBorder={'yellow'}
                                >
                                    {spec.name}
                                </Selectable>
                            )
                        })}
                </SelectionRow>
                <SelectionRow className={styles['pool-container']}>
                    {poolSpec.abilities.map(ability => {
                        return ( !ability.specLock &&
                            <Selectable key={ability.id}
                                select={() => selectAbility(ability, slot)}
                                selected={build && build.selections.find(selection => selection.name === ability.name) !== undefined}
                                customBorder={'yellow'}
                            >
                                {ability.name}
                            </Selectable>
                        )
                    })}
                </SelectionRow>
            </div>
        </div>}
        </>
    )
}

export default ModernBuildEditor;