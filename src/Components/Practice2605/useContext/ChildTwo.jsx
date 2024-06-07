import React, { useContext } from 'react';
import { context } from './ParentContext';
import ChildThree from './ChildThree';

const ChildTwo = () => {
    let parentContext = useContext(context);
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'>
                    <p>This is Child 2.</p>
                    <ol className='list-styled'>
                        {Object.keys(parentContext).map(item =>
                            typeof parentContext[item] === 'object' ?
                                Object.keys(parentContext[item]).map(value => <li key={value}>{parentContext[item][value]}</li>) :
                                <li key={item} > {parentContext[item]}</li>)}
                    </ol>
                </div>

                <div className='col-8'>
                        <ChildThree />
                </div>
            </div>
        </div>
    )
}

export default ChildTwo