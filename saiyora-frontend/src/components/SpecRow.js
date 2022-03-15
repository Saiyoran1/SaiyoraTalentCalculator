import SpecSelector from './SpecSelector';
import '../styles/SpecRow.css';

function SpecRow(props) {

    return (
        <div className='spec-row'>
            {props.specs.map((spec) => {
                return <SpecSelector 
                        key={spec.name} 
                        spec={spec} 
                        changeSpec={() => props.changeSpec(spec)}
                        selected={spec.name === props.selected} />
            })}
        </div>
    )
}

export default SpecRow;