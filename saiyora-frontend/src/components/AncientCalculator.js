import SpecRow from './SpecRow';
import ActionBar from './ActionBar';
import '../styles/AncientCalculator.css';
import {ANCIENTSPECS} from '../dummydata/specs';
import {useState} from 'react';

function AncientCalculator(props) {

    const getDefaultBuild = (spec) => {
        const buildSelections = spec.abilities.map((ability) => {
            return {base: ability.base, talent1: ability.talent1, talent2: ability.talent2, selection: 'base'};
        });
        return {
            name: spec.name,
            description: spec.description,
            color: spec.color,
            abilities: buildSelections
        }
    }

    const [spec, setSpec] = useState(ANCIENTSPECS[0]);
    const [build, setBuild] = useState(getDefaultBuild(spec));
    const [savedBuilds, setSavedBuilds] = useState([]);
    
    const changeSpec = (newSpec) => {
        const newSavedBuilds = [];
        let foundBuildForNewSpec = false;
        let foundBuildForCurrentSpec = false;
        savedBuilds.forEach((savedBuild) => {
            if (savedBuild.name === newSpec.name) {
                newSavedBuilds.push(savedBuild);
                foundBuildForNewSpec = true;
                setBuild(savedBuild);
            } else if (savedBuild.name === build.name) {
                newSavedBuilds.push(build);
                foundBuildForCurrentSpec = true;
            } else {
                newSavedBuilds.push(savedBuild);
            }
        });
        if (!foundBuildForCurrentSpec) {
            newSavedBuilds.push(build);
        }
        if (!foundBuildForNewSpec) {
            setBuild(getDefaultBuild(newSpec));
        }
        setSavedBuilds(newSavedBuilds);
        setSpec(newSpec);
    }

    const [selectedAbility, setSelectedAbility] = useState(build.abilities[0]);

    return (
        <div className='calculator'>
            <div className='calculator-top'>
                <h2 className='choose-spec-text'>Choose an Ancient Specialization</h2>
                <SpecRow specs={ANCIENTSPECS} 
                    selectedSpecName={spec.name} 
                    changeSpec={changeSpec}/>
            </div>
            <div className='calculator-main'>
                <ActionBar abilities={build.abilities} selectedAbility={selectedAbility} selectAbility={setSelectedAbility}/>
                <div className='talent-selection-window'>
                    This is a test.
                </div>
            </div>
            <div className='calculator-bottom'>

            </div>
        </div>
    )
}

export default AncientCalculator;