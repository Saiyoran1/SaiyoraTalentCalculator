import TalentRow from './TalentRow';

function AncientBuildEditor(props) {

    const {build, changeBuild} = props;

    const changeSelection = (baseName, selection) => {
        for (let i = 0; i < build.abilities.length; i++) {
            if (build.abilities[i].base.name === baseName) {
                const newBuild = {...build};
                newBuild.abilities[i].selection = selection;
                changeBuild(newBuild);
            }
        }
    }

    return (
        <>
            {build.abilities.map((ability) => {
                return <TalentRow ability={ability} select={(selection) => changeSelection(ability.base.name, selection)} />
            })} 
        </>    
    )
}

export default AncientBuildEditor;