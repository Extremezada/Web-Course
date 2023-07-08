const colors = {
    p:'#00FFFF',
    div:'#8A2BE2',
    span:'#D2691E',
    section:'#006400',
    ul:'#8B008B',
    ol:'#FF1493',
    header:'#BDB76B',
    nav:'#CD5C5C',
    main:'#483D8B',
    footer:'#7CFC00',
    form:'#ADD8E6',
    body:'#FFD700',
    padrao:'#808080',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) 
    }
})