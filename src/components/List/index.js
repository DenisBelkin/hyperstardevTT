import React, {createContext, useContext, useState} from 'react';
import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';

import Element from '../Element';
import {AppContext} from '../App';

import GraphqlList from "./components/GraphqlList";
import JSONList from "./components/JSONList";


export const ListContext = createContext({});




const List = () => {
    const {isJSONData} = useContext(AppContext);
    const [displayParentTreeNodes, setDisplayParentTreeNodes] = useState(true);

    const renderElements = (data, parentKeysCollection) => {
        if (isArray(data))
            return data.map((item, key) => {
                    item.areChildrenExist = (!isUndefined(item.children) && !isEmpty(item.children) )||  !isEmpty(item.children);
                    return <Element key={item.depth === 0 ? parentKeysCollection[key] : key}
                                    {...item}
                    />
                }
            )
    };

    const addDepth = (collection) =>
        collection.map(item => {
            const newItem = item;
            if (!isUndefined(item.children) && isUndefined(item.code)) {
                newItem.depth = 0;
            } else if (!isUndefined(item.children) && !isUndefined(item.code)) {
                newItem.depth = 1;
            } else {
                newItem.depth = 2;
            }
            let result = {};

            if (!isUndefined(item.children)) {
                result = {...result, ...newItem};
                result.children = addDepth(item.children);
            } else {
                return newItem
            }
            return result;
        });

    return (
        <ListContext.Provider value={{
            displayParentTreeNodes,
            setDisplayParentTreeNodes,
            isJSONData,
            addDepth,
            renderElements
        }}>
            {isJSONData ? <JSONList/> : <GraphqlList/>}
        </ListContext.Provider>
    )

};

export default List;


