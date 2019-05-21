import React from 'react'; 
import BuildControl from './BuildControl';

import styles from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'Salad'},
    { label: 'Bacon', type: 'Bacon'},
    { label: 'Cheese', type: 'Cheese'},
    { label: 'Meat', type: 'Meat'},
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
    {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
    </div>
);

export default buildControls;