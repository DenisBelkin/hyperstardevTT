import React, {useContext, useState} from 'react';
import random from 'lodash/random';

import generateData from '../../../../common/generateData';
import {ListContext} from '../../../List';
import {JSONListContext} from '../../../List/components/JSONList';

import {StyledElementContent} from '../../styled';

const JSONListElement = (props) => {

    const [children, setChildren] = useState([]);
    const [showChildren, setChildrenDisplay] = useState(false);
    const {renderElements} = useContext(ListContext);
    const {parentKeysCollection} = useContext(JSONListContext);

    const {areChildrenExist, name, depth, order} = props;

    const handleOnClick = () => {
        if (areChildrenExist) {
            setChildrenDisplay(!showChildren);
        } else {
            const generatedChildren = generateData([], random(2, 10), 'child', {
                order,
                depth
            });

            setChildren(generatedChildren);
            setChildrenDisplay(true);
        }

    };

    return (
        <div>
            <StyledElementContent depth={depth} areChildrenExist={areChildrenExist} onClick={() => handleOnClick()}>
                {name}
            </StyledElementContent>
            {showChildren && renderElements(children, parentKeysCollection)}
        </div>

    );
    
    
};


export default JSONListElement;
