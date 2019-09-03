

const elementTemplate = (order, depth, index) => ({
    name: `Item#${order}.${depth}.${index}`,
    order,
    depth,
    index,
    children: [],
});


const generateData = (
    data,
    elementsInsideEach,
    type,
    elementParams ,
) => {

    if(type === 'child'){
        elementParams.depth+=1;
    }

    for (let j = 0; j < elementsInsideEach; j++) {

        if (type === 'parent') {
            elementParams.order += 1;
        }
        const element = elementTemplate(elementParams.order, elementParams.depth, j);

        data.push(element);
    }

    return data;
};

export default generateData;