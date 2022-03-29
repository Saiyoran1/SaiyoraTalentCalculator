import styles from './BuildAnalyzer.module.css';

function BuildAnalyzer(props) {
    const {build} = props;

    const buildAttributes = build.abilities.reduce((prevAttr, ability, index) => {
        //Destructure to get the current ability's attribute object.
        const {attributes} = ability[ability.selection];
        //Since the initial value is an empty object (to allow changes to the attribute data), we need to create an initial attribute object from the first ability.
        if (index === 0) {
            return {...attributes};
        }
        const newAttr = {...prevAttr};
        for (const attribute in attributes) {
            //Using += here so watch out for potential number/string confusion in the future.
            newAttr[attribute] += attributes[attribute];
        }
        return newAttr;
    }, {});

    return (
        <div className={styles.analyzer}>
            {Object.keys(buildAttributes).map((attr) => {
                return (
                    <div key={attr} className={styles.attribute}>
                        <p>{attr}: {buildAttributes[attr]}</p>
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