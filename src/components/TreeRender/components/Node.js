import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';

import {TreeRenderContext} from './Container';

import {StyledNodeButton} from '../styled';


const Node = (props) => {
    const {resetTree} = useContext(TreeRenderContext);

    const {name, depth, children} = props;

    const [showChildren, setChildrenDisplay] = useState(false);

    const renderNodes = (collection, depth) =>  {
        const nodes =  collection.map((item, key) => {
            if(isNull(item.name)) return;
            item.depth = depth;

            return <Node key={key+item.name} {...item}/>
        });
        const emptyNodeIndex = nodes.indexOf(undefined);
        if(emptyNodeIndex !== -1){
            nodes.slice(emptyNodeIndex)
        }

        return nodes

        };

    const handleOnClick = () => {
        //works only if infinity mode OFF
        if (isUndefined(children) || isEmpty(children)) {
            resetTree();
        }

        setChildrenDisplay(!showChildren);
    };
    return (
        <div>
            <StyledNodeButton depth={depth} onClick={() => handleOnClick()}>
                {name}
            </StyledNodeButton>
            {showChildren && renderNodes(children, (depth+1))}
        </div>

    );
};

Node.defaultProps = {
    depth:0
};

Node.propTypes = {
    name:PropTypes.string.isRequired,
    depth:PropTypes.number,
    children: PropTypes.array,
};

export default Node;
