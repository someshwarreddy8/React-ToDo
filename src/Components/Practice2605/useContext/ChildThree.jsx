import React, { useContext } from 'react';
import { context } from './ParentContext';

const ChildThree = () => {
    let parentContext = useContext(context);
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='border border-4'>
                    <h5>Child 3.</h5>
                    <ol className='list-styled'>
                        {Object.keys(parentContext).map(item =>
                            typeof parentContext[item] === 'object' ?
                                Object.keys(parentContext[item]).map(value => <li key={value}>{parentContext[item][value]}</li>) :
                                <li key={item} > {parentContext[item]}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default ChildThree