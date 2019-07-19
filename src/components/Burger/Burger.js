import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => { 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array( props.ingredients[igKey])].map(( _, i) => { 
                return <BurgerIngredient key={igKey + i} type={igKey} /> 
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformedIngredients.length === 0) { 
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    // const burger = props => {
    //     let transformedIngredients = [];  
    //     transformedIngredients = props.ingredients.map((element, index) => {
    //         let changedArr = [];
    //         for(let i=0; i<element.quantity; i++){
    //             changedArr.push(<BurgerIngredient type={element.name}/>);
    //         }
    //         return changedArr;
    //     })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;