const reactElement = {
    type: 'a',
    props:{
        href : 'https://googlr.com',
        target:'_blank'
    },children:"Click me to visit google"
}

const root = document.getElementById("root");
// function render(reactElement,root) {
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.targetcon)
//     root.appendChild(domElement)
// }

function customRender(reactElement,root){
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for (const prop in reactElement.props) {
    if (prop === 'children') continue; // Skip children as it's already set
    domElement.setAttribute(prop, reactElement.props[prop]);
}
root.appendChild(domElement)
}

customRender(reactElement,root);
