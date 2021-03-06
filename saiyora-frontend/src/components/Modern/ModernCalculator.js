import {MODERNSPECS} from '../../dummydata/specs';
import {useState} from 'react';
import BuildAnalyzer from '../Shared/BuildAnalyzer';
import CalculatorSection from '../UI/CalculatorSection';
import Calculator from '../UI/Calculator';
import SelectionRow from '../UI/SelectionRow';
import Selectable from '../UI/Selectable';
import ModernBuildEditor from './ModernBuildEditor';
import styles from '../Shared/SpecSelectionRow.module.css';

function ModernCalculator(props) {

    const {passiveAttributes, setPassiveAttributes} = props;

    const [spec, setSpec] = useState();

    const getDefaultBuild = (spec) => {
        //Default build is just the spec with a Selections array that contains the selected abilities.
        //Slot 0 is dedicated to the spec's weapon, and two further slots are dedicated to "locked" abilities only this spec can access.
        const newBuild = {...spec};
        newBuild.selections = Array(8).fill({});
        newBuild.selections[0] = spec.weapon;
        let lockedAbilities = 0;
        for (let i = 0; i < spec.abilities.length; i++) {
            if (spec.abilities[i].specLock) {
                lockedAbilities++;
                newBuild.selections[lockedAbilities] = spec.abilities[i];
                if (lockedAbilities === 2) {
                    break;
                }
            } 
        }
        return newBuild;
    }

    const [build, setBuild] = useState();
    
    const changeSpec = (newSpec) => {
        setSpec(newSpec);
        if (newSpec.passive) {
            setPassiveAttributes(newSpec.passive.attributes);
        } else {
            setPassiveAttributes({});
        }
        //TODO: Implement caching of builds between spec swaps so that everything isn't just wiped between swaps.
        //useState with a saved build array should handle this, but will need to figure out when to update the saved builds array.
        setBuild(getDefaultBuild(newSpec));
    }

    return (
        <Calculator>
            <CalculatorSection>
                <h2>Choose a Modern Specialization</h2>
                <SelectionRow className={styles['spec-selection-row']}>
                    {MODERNSPECS.map((modernSpec) => {
                        return (
                        <Selectable key={modernSpec.name} 
                            select={() => changeSpec(modernSpec)} 
                            selected={spec && spec.name === modernSpec.name}
                            customBorder={modernSpec.color}
                        >
                            {modernSpec.name}
                        </Selectable>
                    )})}
                </SelectionRow>
            </CalculatorSection>
            <CalculatorSection>
                {<ModernBuildEditor build={build} setBuild={setBuild}/>}
            </CalculatorSection>
            <CalculatorSection>
                {<BuildAnalyzer abilities={build ? build.selections : []} passiveAttributes={passiveAttributes}/>}
            </CalculatorSection>
        </Calculator>
    )
}

export default ModernCalculator;