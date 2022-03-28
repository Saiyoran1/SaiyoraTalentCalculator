import Selectable from '../UI/Selectable';

function AbilitySelector(props) {
    const {name, select, selected} = props;
    return (
        <Selectable selected={selected} customBorder={'yellow'} select={select}>
            {name}
        </Selectable>
        
    )
}

export default AbilitySelector;