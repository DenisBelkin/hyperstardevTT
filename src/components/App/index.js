import React, {createContext, useState} from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import isUndefined from 'lodash/isUndefined';
import Switch from 'antd/lib/switch';

import TreeRender from '../TreeRender';

import {StyledAppContainer, Centralizer, StyledSpin, StyledSwitchContainer, StyledSwitchLayout} from './styled';

export const AppContext = createContext({});

const GET_ALL = gql`
                         query getAll{
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

const App = () => {
    const {loading: isLoading, error: fetchError, data} = useQuery(GET_ALL, []);

    const [isInfiniteNodesMode, switchDataGettingWay] = useState(false);
    if (!isUndefined(fetchError)) {
        console.error('FETCH ERROR!!!:\n', fetchError)
    }


///////
    const onSwitchClick = (value) => {
        switchDataGettingWay(value);
    };


    let treeData;
    if (!isLoading) {
        if (!isInfiniteNodesMode) {
            treeData = data.children;
        } else {
            const infinityElement = {name: 'Node', depth: 0, children: []};
            for(let i = 0; i<4; i++){
                infinityElement.children[i] = infinityElement;
            }
            treeData = [infinityElement]
        }

        return (

                <StyledAppContainer>
                    <StyledSwitchLayout>
                        <h4>Toggle data mode</h4>
                        <StyledSwitchContainer>
                            <Switch value={isInfiniteNodesMode} onClick={onSwitchClick}/>
                        </StyledSwitchContainer>
                        <p><i><small>Graphql mode <b>{`<--->`}</b> Infinite nodes mode</small></i></p>

                    </StyledSwitchLayout>
                    <TreeRender treeData={treeData}/>
                </StyledAppContainer>

        )

    } else {
        return (
            <Centralizer>
                <StyledSpin size={'large'}/>
            </Centralizer>

        )
    }

};

export default App;