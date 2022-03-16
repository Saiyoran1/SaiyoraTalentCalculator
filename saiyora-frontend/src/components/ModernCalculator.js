import SpecRow from './SpecRow';
import AbilitySelector from './AbilitySelector';
import {MODERNSPECS, MAXMODERNSPELLS} from '../dummydata/specs';
import {useState} from 'react';

function ModernCalculator(props) {

    const {build, updateBuild} = props;
    const [selectedSpec, setSelectedSpec] = useState(MODERNSPECS[0]);

    const changeSpec = (newSpec) => {
        if (newSpec.name === selectedSpec.name) {
            return;
        }
        setSelectedSpec(newSpec);
    }

    const selectModernAbility = (ability) => {
        if (build.length === MAXMODERNSPELLS) {
          //Alert too many spells selected?
          return;
        }
        const newBuild = [];
        for (let i = 0; i < build.length; i++) {
          if (build[i].name === ability.name) {
            return;
          } else {
            newBuild.push(build[i]);
          }
        }
        newBuild.push(ability);
        updateBuild(newBuild);
    }
    
    const unselectModernAbility = (ability) => {
        if (build.length === 0) {
            return;
        }
        updateBuild(build.filter((item) => ability.name !== item.name));
    }

    return (
        <>
            <div>
                <SpecRow specs={MODERNSPECS} 
                    selected={selectedSpec.name} 
                    changeSpec={changeSpec}/>
            </div>
            <div className='modern-talent-window'>
                {selectedSpec.abilities.map((ability) => {
                    return <AbilitySelector key={ability.id}
                        select={build.includes(ability) ? () => unselectModernAbility(ability) : () => selectModernAbility(ability)} 
                        selected={build.includes(ability)}
                        name={ability.name}/>
                })}
            </div>
        </>
    )
}

export default ModernCalculator;