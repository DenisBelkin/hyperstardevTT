import React, {createContext, useContext, useState} from 'react';

import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';
import {Centralizer, StyledSpin} from '../../styled';
import {ListContext} from '../../index';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GraphqlListContext = createContext({});

const GET_ALL = gql`
                         query all{
	children: continents {
    name
    children: countries {
			name
      code
      children: languages {
        name
      }
    }
  }  
}`;

const GraphqlList = () => {
    const {loading: isLoading, error: fetchError, data} = useQuery(GET_ALL, []);
    const [parentKeysCollection, updateParentKeysCollection] = useState([]);
    const {addDepth, renderElements} = useContext(ListContext);

    if (!isUndefined(fetchError)) {
        console.error('GRAPHQL Fetch error!!!:\n', fetchError)
    }
    if (!isEmpty(data) && isEmpty(parentKeysCollection)) {
        updateParentKeysCollection(data.children.map((item, index) => ((index + 1) * 100000)))
    }

    if (!isLoading && (!isUndefined(data) && !isEmpty(data))) {
        const treeData = [...addDepth(data.children)];

        return (
            <GraphqlListContext.Provider value={{
                parentKeysCollection, updateParentKeysCollection,
                treeData,
            }}>
                {renderElements(treeData, parentKeysCollection)}
            </GraphqlListContext.Provider>
        )
    } else return (
        <Centralizer>
            <StyledSpin size={'large'}/>
        </Centralizer>
    )
};

export default GraphqlList;
