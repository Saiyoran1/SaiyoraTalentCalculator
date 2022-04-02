import {MODERNSPECS} from '../../dummydata/specs';
import {useState} from 'react';
import BuildAnalyzer from '../Shared/BuildAnalyzer';
import CalculatorSection from '../UI/CalculatorSection';
import Calculator from '../UI/Calculator';
import SelectionRow from '../UI/SelectionRow';
import Selectable from '../UI/Selectable';
import ModernBuildEditor from './ModernBuildEditor';

function ModernCalculator(props) {

    const {passiveAttributes, setPassiveAttributes} = props;

    const [spec, setSpec] = useState();

    const getDefaultBuild = (spec) => {
        //Default build is just the spec data with a "selection" field appended to each ability.
        //Default value is "base" which means no talent. Other viable values are "talent1" and "talent2".
        const newBuild = {...spec};
        newBuild.selections = spec.abilities.filter(ability => ability.specLock);
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
                <SelectionRow>
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