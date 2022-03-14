import {useState} from 'react';
import SpecRow from './SpecRow';
import {ANCIENTSPECS} from '../dummydata/specs';

function AncientCalculator(props) {
    const [selectedSpec, setSelectedSpec] = useState(ANCIENTSPECS[0]);
    const changeSpec = (newSpecName) => {
        if (newSpecName !== selectedSpec.name) {
            let targetSpec = selectedSpec;
            for (let i = 0; i < ANCIENTSPECS.length; i++) {
                if (ANCIENTSPECS[i].name === newSpecName) {
                    targetSpec = ANCIENTSPECS[i];
                    break;
                }   
            }
            if (targetSpec !== selectedSpec) {
                //Clear selected spells/talents.
                setSelectedSpec(targetSpec);
            }   
        }
    }
    return (
        <div>
            <div className='spec-selection'>
                <SpecRow specs={ANCIENTSPECS.map((spec) => {return {name: spec.name, color: spec.color}})} selected={selectedSpec.name} changeSpec={changeSpec}/>
            </div>
            <div className='ancient-talent-window'>

            </div>
        </div>
    )
}

export default AncientCalculator;