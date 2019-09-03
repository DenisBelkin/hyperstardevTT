import React, {useContext} from 'react';
import Switch from 'antd/lib/switch';

import {AppContext} from '../App';

import {StyledSwitchLayout, StyledSwitchContainer} from './styled';

const SwitchData = (props) => {

    const {isJSONData, switchDataGettingWay} = useContext(AppContext);

    const onClick = (value) => switchDataGettingWay(value);

    return (
        <StyledSwitchLayout>
            <h4>Toggle data getting way</h4>
            <StyledSwitchContainer>
                <Switch value={isJSONData} onClick={onClick}/>
            </StyledSwitchContainer>
            <p><i><small>Graphql - JSON file</small></i></p>

        </StyledSwitchLayout>
    )
};
export default SwitchData
