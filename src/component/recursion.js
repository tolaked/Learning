let categories = [
    {id:'animals', parent: null},
    {id:'mammals', parent: 'animals'},
    {id:'cats', parent: 'mammals'},
    {id:'dogs', parent: 'mammals'},
    {id:'chihuahua', parent: 'dogs'},
    {id:'labrador', parent: 'dogs'},
    {id:'persian', parent: 'cats'},
    {id:'siamese', parent: 'cats'}
]

const makeTree =(categories,parent)=>{
    let node={}
    categories.filter(category=>category.parent === parent)
    .forEach(category=>
        node[category.id] = makeTree(categories,category.id))
        return node
}
console.log(makeTree(categories,null))