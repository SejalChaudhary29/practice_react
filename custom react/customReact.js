/*  Approach 1 - Here the custom react working as here is problem from setattribute href and all so there is another approach. 

function customRender( reactElemet, container){

    const domElement = document.createElement(reactElemet.type)
    domElement.innerHTML = reactElemet.children
    domElement.setAttribute('href' , reactElemet.props.href)
    domElement.setAttribute('target', reactElemet.props.target)
    container.appendChild(domElement)
}

*/ 
// Approach 2 - right approach is here  
function customRender( reactElement, container){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if(prop === 'children') continue ;
    domElement.setAttribute(prop , reactElement.props[prop])
}
container.appendChild(domElement)
    
}




const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit a google'

}

const mainContainer = document.querySelector('#root')
customRender(reactElement , mainContainer)