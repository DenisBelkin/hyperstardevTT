import React from 'react';
import ApolloClient from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';

import App from '../App';


const httpLink = createHttpLink({
    uri:'https://countries.trevorblades.com'
});

const client = new ApolloClient({
    link:httpLink,
    cache: new InMemoryCache()
});

const ApolloProviderContainer = () => (
    <ApolloProvider
        client={client}
    >

        <App/>
    </ApolloProvider>
);


export default ApolloProviderContainer;