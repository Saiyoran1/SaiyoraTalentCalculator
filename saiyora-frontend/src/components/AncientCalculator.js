import SpecRow from './SpecRow';
import TalentRow from './TalentRow';
import '../styles/AncientCalculator.css';

function AncientCalculator(props) {

    const {specs, selectedSpec, build, changeSpec, changeTalent} = props;

    const getSelectedTalent = (baseName) => {
        for (let i = 0; i < build.length; i++) {
            if (build[i].base === baseName) {
                return build[i].selected;
            }
        }
        return baseName;
    }

    return (
        <>
            <div>
                <SpecRow specs={specs.map((spec) => {
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
                        select={(talentName) => changeTalent(ability.base, talentName)}/>
                })}
            </div>
        </>
    )
}

export default AncientCalculator;