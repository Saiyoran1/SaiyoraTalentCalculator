import {ANCIENTSPECS} from '../../dummydata/specs';
import {useState} from 'react';
import BuildAnalyzer from '../Shared/BuildAnalyzer';
import CalculatorSection from '../UI/CalculatorSection';
import Calculator from '../UI/Calculator';
import SelectionRow from '../UI/SelectionRow';
import Selectable from '../UI/Selectable';
import AncientBuildEditor from './AncientBuildEditor';
import styles from '../Shared/SpecSelectionRow.module.css';

function AncientCalculator(props) {

    const {passiveAttributes, setPassiveAttributes} = props;

    const [spec, setSpec] = useState();

    const getDefaultBuild = (spec) => {
        //Default build is just the spec data with a "selection" field appended to each ability.
        //Default value is "base" which means no talent. Other viable values are "talent1" and "talent2".
        return {
            ...spec, 
            abilities: spec.abilities.map((ability) => {
                return {...ability, selection: 'base'}
            })
        };
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
                <h2>Choose an Ancient Specialization</h2>
                <SelectionRow className={styles['spec-selection-row']}>
                    {ANCIENTSPECS.map((ancientSpec) => {
                        return (
                        <Selectable key={ancientSpec.name} 
                            select={() => changeSpec(ancientSpec)} 
                            selected={spec && spec.name === ancientSpec.name}
                            customBorder={ancientSpec.color}
                        >
                            {ancientSpec.name}
                        </Selectable>
                    )})}
                </SelectionRow>
            </CalculatorSection>
            <CalculatorSection>
                {<AncientBuildEditor build={build} setBuild={setBuild}/>}
            </CalculatorSection>
            <CalculatorSection>
                {<BuildAnalyzer abilities={build ? build.abilities.map(ability => ability[ability.selection]) : []} passiveAttributes={passiveAttributes}/>}
            </CalculatorSection>
        </Calculator>
    )
}

export default AncientCalculator;