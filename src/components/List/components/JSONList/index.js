import React, {createContext, useContext, useState} from 'react';


import {ListContext} from '../../index';
import JSONFileData from '../../../../common/data';
import generateData from '../../../../common/generateData';

export const JSONListContext = createContext({});

const JSONList = () => {
    const [parentKeysCollection, updateParentKeysCollection] = useState(JSONFileData.data.map((item, index) => (index + 100)));

    const {addDepth, renderElements} = useContext(ListContext);
    const treeData = generateData([], 3, 'parent',{
        order: 0,
        depth: 0
    });

    return (
        <JSONListContext.Provider value={{
            treeData,
            parentKeysCollection,
            updateParentKeysCollection
        }}>
            {renderElements(treeData, parentKeysCollection)}
        </JSONListContext.Provider>
    )
};

export default JSONList;