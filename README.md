# react-test-project

## Task:
1. Create a reactjs application which is capable to render nested json data struture of the following format:
```js
{
  "data": [
    {
      "name": "String",
      "children": [
        {
          "name": "String",
          "children": [
            // ...
          ]
        }, {
          "name": "String",
          "children": [
            // ...
          ]
        },
        // ...
      ]
    }, {
      "name": "String",
      "children": [
        // ...
      ]
    },
    // ...
  ]
}
```
This component should show each node's name and indicate relation to it's children nodes. Example:
![Component example](http://static.webdeveloperplus.com/uploads/2009/07/css-amazing-techniques/tree-like-navigation.png)

2. Make each node open/close by click on it's name.

3. Make collapsible component logic reusable by using higher order component pattern.

4. Using react context make it so when you click on any leaf node it will close all nodes in the tree.

5. Make a generator of the mock data(nested json data structures) to test your component. Names for each node can be non-uniq.

6. Connect [this countries graphql API](https://countries.trevorblades.com) to your components to display nesting of `Continent`, `Country` and `Language` types