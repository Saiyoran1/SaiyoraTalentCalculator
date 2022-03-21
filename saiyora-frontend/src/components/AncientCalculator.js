import SpecRow from './SpecRow';
import AncientBuildEditor from './AncientBuildEditor';
import '../styles/AncientCalculator.css';
import {ANCIENTSPECS} from '../dummydata/specs';
import {useState} from 'react';
import BuildAnalyzer from './BuildAnalyzer';

function AncientCalculator(props) {

    const [spec, setSpec] = useState(ANCIENTSPECS[0]);

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

    const [build, setBuild] = useState(getDefaultBuild(spec));
    
    const changeSpec = (newSpec) => {
        if (newSpec.name === spec.name) {
            return;
        }
        setSpec(newSpec);
        //TODO: Implement caching of builds between spec swaps so that everything isn't just wiped between swaps.
        //useState with a saved build array should handle this, but will need to figure out when to update the saved builds array.
        setBuild(getDefaultBuild(newSpec));
    }

    return (
        <div className='calculator'>
            <div className='calculator-top'>
                <h2 className='choose-spec-text'>Choose an Ancient Specialization</h2>
                <SpecRow specs={ANCIENTSPECS} 
                    selectedSpecName={spec.name} 
                    changeSpec={changeSpec}/>
            </div>
            <AncientBuildEditor build={build} changeBuild={setBuild} />
            <BuildAnalyzer build={build} />
        </div>
    )
}

export default AncientCalculator;