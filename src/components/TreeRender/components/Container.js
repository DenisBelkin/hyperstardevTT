import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';

import Node from './Node';

export const TreeRenderContext = createContext({});

const Container = (props) => {
    const {treeData} = props;
    const [providerKey, setProviderKey] = useState(1);

    const resetTree = () => {
        setProviderKey(prevState=>prevState+1)
    };

    const renderTree = () =>  treeData.map((item, key) =>  <Node key={key+item.name} {...item}/>);

    return (
        <TreeRenderContext.Provider key={providerKey} value={{resetTree}}>
            {renderTree()}
        </TreeRenderContext.Provider>
    )
};

Container.propTypes = {
    treeData: PropTypes.array.isRequired
};

export default Container;
