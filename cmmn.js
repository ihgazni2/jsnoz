function prepend(n,width,padding) {
    let s = n.toString()
    padding = padding.toString()
    let lngth = s.length
    s = padding.repeat(width-lngth) + s
    return(s.substring(0,width))
}

function append(n,width,padding) {
    let s = n.toString()
    padding = padding.toString()
    let lngth = s.length
    s = s + padding.repeat(width-lngth) 
    return(s.substring(0,width))
}

module.exports =  {
    append,
    prepend,
}
