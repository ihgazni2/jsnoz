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

function calc_units(...units) {
    let q = units[units.length-1]
    let nunits = [q]
    for(let i=units.length-2;i>-1;i--) {
        q = q * units[i]
        nunits.unshift(q)
    }
    return(nunits)
}

function get_qr(lefted,...units) {
    let q,r;
    units = calc_units(...units)
    let rslts = [];
    for(let i=0;i<units.length;i++) {
        let unit = units[i]
        r = lefted % unit
        q = (lefted - r) / unit
        lefted = r
        rslts.push(q)
    }
    rslts.push(r)
    return(rslts)
}

function get_unit_dict(lefted,units,names) {
    //get_unit_dict(-76327,[24,60,60,1000],['d','h','min','s','ms'])
    let rslts = get_qr(lefted,...units)
    rslts = rslts.slice(rslts.length-names.length)
    let entries = Array.from({length:names.length}).map((r,i)=>[names[i],rslts[i]])
    return(Object.fromEntries(entries))
}


module.exports =  {
    append,
    prepend,
    calc_units,
    get_qr,
    get_unit_dict,
}
