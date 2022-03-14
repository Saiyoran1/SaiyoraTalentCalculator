import {useState} from 'react';
import SpecRow from './SpecRow';
import TalentRow from './TalentRow';
import {ANCIENTSPECS} from '../dummydata/specs';
import '../styles/AncientCalculator.css';

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
                setSelectedSpec(targetSpec);
                setBuild(getDefaultBuild(targetSpec));
            }   
        }
    }

    const getDefaultBuild = (spec) => {
        const newBuild = [];
        spec.abilities.forEach((ability) => {
            newBuild.push({
                base: ability.base,
                selected: ability.base
            });
        });
        return newBuild;
    }

    const [build, setBuild] = useState(getDefaultBuild(ANCIENTSPECS[0]));

    const getSelectedTalent = (baseName) => {
        for (let i = 0; i < build.length; i++) {
            if (build[i].base === baseName) {
                return build[i].selected;
            }
        }
        return baseName;
    }

    const selectTalent = (baseName, talentName) => {
        const newBuild = [];
        build.forEach((talent) => {
            if (talent.base === baseName) {
                newBuild.push({
                    base: baseName,
                    selected: talentName
                });
            } else {
                newBuild.push(talent);
            }
        });
        setBuild(newBuild);
    }

    return (
        <>
            <div>
                <SpecRow specs={ANCIENTSPECS.map((spec) => {
                        return {name: spec.name, color: spec.color}
                    })} 
                    selected={selectedSpec.name} 
                    changeSpec={changeSpec}/>
            </div>
            <div className='ancient-talent-window'>
                {selectedSpec.abilities.map((ability) => {
                    return <TalentRow key={ability.base} 
                        ability={ability} 
                        selected={getSelectedTalent(ability.base)} 
                        select={(talentName) => selectTalent(ability.base, talentName)}/>
                })}
            </div>
        </>
    )
}

export default AncientCalculator;