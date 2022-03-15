import './App.css';
import CalculatorWindow from './components/CalculatorWindow';
import AncientCalculator from './components/AncientCalculator';
import {useState} from 'react';
import {ANCIENTSPECS} from './dummydata/specs';
import TabButton from './components/TabButton';

function App() {

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

  const [ancientBuild, setAncientBuild] = useState(getDefaultAncientBuild(ANCIENTSPECS[0]));
  const [otherAncientBuilds, setOtherAncientBuilds] = useState([]);
  const [selectedSpec, setSelectedSpec] = useState(ANCIENTSPECS[0]);

  const changeSpec = (newSpec) => {
    if (newSpec.name === selectedSpec.name) {
      return;
    }
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
    setSelectedSpec(newSpec);
    setAncientBuild(targetBuild);
  }

  const selectTalent = (baseName, talentChoice) => {
    const newBuild = {specName: ancientBuild.specName, selections: []};
    ancientBuild.selections.forEach((selection) => {
      if (selection.ability.base.name !== baseName) {
        newBuild.selections.push(selection);
      } else {
        newBuild.selections.push({ability: selection.ability, selected: talentChoice});
      }
    });
    setAncientBuild(newBuild);
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
            <AncientCalculator specs={ANCIENTSPECS} selectedSpec={selectedSpec} build={ancientBuild} changeSpec={changeSpec} changeTalent={selectTalent} />
            : /*<ModernCalculator/>*/ <div></div>
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
