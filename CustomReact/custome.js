

function customRender(reactelement, mainContainer) {

    let createElement = document.createElement(reactelement.type);
    createElement.innerHTML = reactelement.childern;

    for (const prop in reactelement.props) {
        createElement.setAttribute(prop, reactelement.props[prop])
    }
    mainContainer.appendChild(createElement);

}



let reactelement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        traget: '_blank'
    },
    childern: 'click me '
}

let mainContainer = document.querySelector("#root")

customRender(reactelement, mainContainer)