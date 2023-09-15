function getParent(element, selector){
    while(element.parentElement){
        if(element.parentElement.matches(selector)){
            return element.parentElement
        }else{
            element = element.parentElement
        }
    }
}

export default getParent