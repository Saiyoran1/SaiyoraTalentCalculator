import styles from './BuildAnalyzer.module.css';
import Attribute from '../../dummydata/attributes';

function BuildAnalyzer(props) {

    const {abilities, passiveAttributes} = props;

    //Create the initial attributes object by adding a field for each attribute's display name.
    const buildAttributes = Object.keys(Attribute).reduce((prev, attr) => {
        return {...prev, [Attribute[attr]]: 0};
    }, {});

    //For each ability, add attribute values to the already created object.
    abilities.forEach(ability => {
        for (const attr in ability.attributes) {
            buildAttributes[attr] += ability.attributes[attr];
        }
    })

    //Passive granted by the other spec is also added in.
    if (passiveAttributes) {
        for (const attr in passiveAttributes) {
            buildAttributes[attr] += passiveAttributes[attr];
        }
    }

    return (
        <div className={styles.analyzer}>
            {Object.keys(buildAttributes).map((attr) => {
                return (
                    <div key={attr} className={styles.attribute}>
                        <p>{attr}</p>
                        <div className={styles['progress-outer']}>
                            <div className={styles['progress-inner']} 
                                style={{
                                    width: `${buildAttributes[attr] / 15 * 100}%`, 
                                    background: buildAttributes[attr] >= 5 ? buildAttributes[attr] >= 10 ? 'green' : 'yellow' : 'red'
                                }}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BuildAnalyzer;