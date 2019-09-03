import React, {createContext, useState} from 'react';

import List from '../List';
import SwitchData from '../SwitchData';
import {StyledAppContainer} from './styled';

export const AppContext = createContext({});

const App = () => {
    const [isJSONData, switchDataGettingWay] = useState(false);


    return (
    <AppContext.Provider value={{
        isJSONData, switchDataGettingWay
    }}>
        <StyledAppContainer>
        <SwitchData/>
        <List/>
        </StyledAppContainer>
    </AppContext.Provider>

    )
};

export default App;