import './App.css';
import CalculatorWindow from './components/CalculatorWindow';
import AncientCalculator from './components/AncientCalculator';
import ModernCalculator from './components/ModernCalculator';
import {useState} from 'react';
import {ANCIENTSPECS} from './dummydata/specs';
import TabButton from './components/TabButton';

function App() {

  /*Build: {
    specName:,
    selections: [
      {
        ability: {
          base:{
            id:, name:, description:, attributes:
          }, 
          talent1:{
            id:, name:, description:, attributes:
          }, 
          talent2:{
            id:, name:, description:, attributes:
          }
        },
        selected: 'base/talent1/talent2'
      }
    ]
  }
  Access selected ability by using build[index].ability[selected] and base with build[index].ability.base*/

  const getDefaultAncientBuild = (spec) => {
    const newBuild = {specName: spec.name, selections: []};
    spec.abilities.forEach((ability) => {
        newBuild.selections.push({
            ability,
            selected: 'base'
        });
    });
    return newBuild;
  }
  //TODO: Move logic for saving other spec builds to inside the calculator. 
  //Overall app component should just update/reflect the current build regardless of spec.
  //Probably don't even need to know about ancient specs at all here (no import).
  const [ancientBuild, setAncientBuild] = useState(getDefaultAncientBuild(ANCIENTSPECS[0]));
  const [otherAncientBuilds, setOtherAncientBuilds] = useState([]);
  const [selectedAncientSpec, setSelectedAncientSpec] = useState(ANCIENTSPECS[0]);

  const changeAncientSpec = (newSpec) => {
    //Don't do anything if trying to change to current spec.
    if (newSpec.name === selectedAncientSpec.name) {
      return;
    }
    //Save this build before moving to the new spec.
    //Also see if there is a saved build for the new spec already.
    const savedBuilds = [];
    let targetBuild = getDefaultAncientBuild(newSpec);
    otherAncientBuilds.forEach((build) => {
      if (build.specName !== ancientBuild.specName) {
        savedBuilds.push(build);
      }
      if (build.specName === newSpec.name) {
        targetBuild = build;
      }
    });
    savedBuilds.push(ancientBuild);
    setOtherAncientBuilds(savedBuilds);
    setSelectedAncientSpec(newSpec);
    setAncientBuild(targetBuild);
  }

  const selectAncientTalent = (baseName, talentChoice) => {
    const newBuild = {specName: ancientBuild.specName, selections: []};
    //Use the current build but replace the ability we changed talents for.
    ancientBuild.selections.forEach((selection) => {
      if (selection.ability.base.name !== baseName) {
        newBuild.selections.push(selection);
      } else {
        newBuild.selections.push({ability: selection.ability, selected: talentChoice});
      }
    });
    setAncientBuild(newBuild);
  }

  const [modernBuild, setModernBuild] = useState([]);

  const updateModernBuild = (newBuild) => {
    setModernBuild(newBuild);
  }

  const [specTab, setSpecTab] = useState('ancient');
  const [displayTab, setDisplayTab] = useState('evaluation');

  return (
    <div className='app'>
      <div className='main-window'>
        <div className='tab-selector-row'>
          <TabButton name={'Ancient'} selected={specTab === 'ancient'} onClick={() => setSpecTab('ancient')}/>
          <TabButton name={'Modern'} selected={specTab !== 'ancient'} onClick={() => setSpecTab('modern')}/>
        </div>
        <CalculatorWindow>
          { specTab === 'ancient' ? 
            <AncientCalculator specs={ANCIENTSPECS} selectedSpec={selectedAncientSpec} build={ancientBuild} changeSpec={changeAncientSpec} changeTalent={selectAncientTalent} />
            : <ModernCalculator build={modernBuild} updateBuild={updateModernBuild}/>
          }
        </CalculatorWindow>
      </div>
      <div className='main-window'>
        <div className='tab-selector-row'>
          <TabButton name={'Evaluation'} selected={displayTab === 'evaluation'} onClick={() => setDisplayTab('evaluation')}/>
          <TabButton name={'Sources'} selected={displayTab !== 'evaluation'} onClick={() => setDisplayTab('sources')}/>
        </div>
        <CalculatorWindow>
          
        </CalculatorWindow>
      </div>  
    </div>
  );
}

export default App;
