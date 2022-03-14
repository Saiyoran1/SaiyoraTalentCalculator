import './App.css';
import CalculatorWindow from './components/CalculatorWindow';
import AncientCalculator from './components/AncientCalculator';
import {useState} from 'react';
import {ANCIENTSPECS} from './dummydata/specs';
import TabButton from './components/TabButton';

function App() {

  const getDefaultAncientBuild = (spec) => {
    const newBuild = [];
    spec.abilities.forEach((ability) => {
        newBuild.push({
            base: ability.base,
            selected: ability.base
        });
    });
    return newBuild;
  }

  const [ancientBuild, setAncientBuild] = useState(getDefaultAncientBuild(ANCIENTSPECS[0]));

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
              setAncientBuild(getDefaultAncientBuild(targetSpec));
          }   
      }
  }

  const selectTalent = (baseName, talentName) => {
    const newBuild = [];
    ancientBuild.forEach((talent) => {
        if (talent.base === baseName) {
            newBuild.push({
                base: baseName,
                selected: talentName
            });
        } else {
            newBuild.push(talent);
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
          {/* display strengths/weaknesses of the build or sources of each talent/ability */}  
        </CalculatorWindow>
      </div>  
    </div>
  );
}

export default App;
