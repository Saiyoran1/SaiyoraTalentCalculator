import SelectionRow from '../UI/SelectionRow';
import Selectable from '../UI/Selectable';

function AncientBuildEditor(props) {

    const {build, setBuild} = props;

    const changeTalent = (abilityName, selection) => {
        for (let i = 0; i < build.abilities.length; i++) {
            if (build.abilities[i].base.name === abilityName) {
                const newBuild = {...build};
                newBuild.abilities[i].selection = selection;
                setBuild(newBuild);
                break;
            }
        }
    }

    return (
        <>
            {build && build.abilities && build.abilities.map((ability) => {
                    return (
                        <SelectionRow key={ability.base.name}>
                            <Selectable key={ability.base.name}
                                select={() => changeTalent(ability.base.name, 'base')}
                                selected={ability.selection === 'base'}
                                customBorder='yellow'
                            >
                                {ability.base.name}
                            </Selectable>
                            <Selectable key={ability.talent1.name}
                                select={() => changeTalent(ability.base.name, 'talent1')}
                                selected={ability.selection === 'talent1'}
                                customBorder='yellow'
                            >
                                {ability.talent1.name}
                            </Selectable>
                            <Selectable key={ability.talent2.name}
                                select={() => changeTalent(ability.base.name, 'talent2')}
                                selected={ability.selection === 'talent2'}
                                customBorder='yellow'
                            >
                                {ability.talent2.name}
                            </Selectable>
                        </SelectionRow>
                    )
                })}
        </>    
    )
}

export default AncientBuildEditor;