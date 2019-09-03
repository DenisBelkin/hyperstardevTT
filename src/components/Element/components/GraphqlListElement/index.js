import React, {useContext, useState} from 'react';

import {ListContext} from '../../../List';
import {GraphqlListContext} from '../../../List/components/GraphqlList';

import {StyledElementContent} from '../../styled';

const GraphqlListElement = (props) => {
    const [showChildren, setChildrenDisplay] = useState(false);
    const {setDisplayParentTreeNodes, renderElements} = useContext(ListContext);
    const {parentKeysCollection, updateParentKeysCollection} = useContext(GraphqlListContext);

    const {areChildrenExist, name, depth, children} = props;

    const handleOnClick = () => {
        if (areChildrenExist) {
            setChildrenDisplay(!showChildren);
        } else {
                setDisplayParentTreeNodes(false);
                updateParentKeysCollection(prevState=> prevState.map((item)=> (item + 1)));
        }
    };

    return (
        <div>
            <StyledElementContent depth={depth} areChildrenExist={areChildrenExist} onClick={() => handleOnClick()}>
                {name}
            </StyledElementContent>
            {
                (showChildren) && renderElements(children, parentKeysCollection)
            }
        </div>

    );
};

export default GraphqlListElement;
