import React, { useContext} from 'react';

import {ListContext} from '../List';

import JSONListElement from './components/JSONListElement';
import GraphqlListElement from './components/GraphqlListElement';

const Element = (props) => {
    const {
        isJSONData
    } = useContext(ListContext);
    //render
    return isJSONData  ? <JSONListElement {...props} /> : <GraphqlListElement  {...props} />;

};

export default Element;
