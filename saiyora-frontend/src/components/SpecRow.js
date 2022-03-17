import SpecSelector from './SpecSelector';
import '../styles/SpecRow.css';

function SpecRow(props) {
    const {specs, selectedSpecName, changeSpec} = props;
    return (
        <div className='spec-row'>
            {specs.map((spec) => {
                return <SpecSelector 
                        key={spec.name} 
                        spec={spec} 
                        changeSpec={() => changeSpec(spec)}
                        selected={selectedSpecName === spec.name} />
            })}
        </div>
    )
}

export default SpecRow;