import SpecRow from './SpecRow';
import TalentRow from './TalentRow';
import '../styles/AncientCalculator.css';

function AncientCalculator(props) {

    const {specs, selectedSpec, build, changeSpec, changeTalent} = props;

    const getSelectedTalent = (baseName) => {
        for (let i = 0; i < build.selections.length; i++) {
            if (build.selections[i].ability.base.name === baseName) {
                return build.selections[i].selected;
            }
        }
        return 'base';
    }

    return (
        <>
            <div>
                <SpecRow specs={specs} 
                    selected={selectedSpec.name} 
                    changeSpec={changeSpec}/>
            </div>
            <div className='ancient-talent-window'>
                {selectedSpec.abilities.map((ability) => {
                    return <TalentRow key={ability.base.name} 
                        ability={ability} 
                        selected={getSelectedTalent(ability.base.name)} 
                        select={(selection) => changeTalent(ability.base.name, selection)}/>
                })}
            </div>
        </>
    )
}

export default AncientCalculator;