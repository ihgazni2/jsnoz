const day = require("./day")

function validate_wd(n){
    if(n<1 || n>7) {
        return(null)
    } else {
        return(n)
    }
}

function fst_ywd(y,n){
    let g = ywd(y,n)
    for(let each of g) {
        return(each)
    }
}

function lst_ywd(y,n) {
    let g = ywd_from_lst(y,n)
    for(let each of g) {
        return(each)
    }
}

function * ywd(y,n) {
    n = validate_wd(n)
    if(n===null) {
        return(null)
    } else {
        let g = day.yd(y)
        for(let d of g) {
            if(d.wd === n){
                yield(d)
            }
        }
    }
}

function * ywd_from_lst(y,n) {
    n = validate_wd(n)
    if(n===null) {
        return(null)
    } else {
        let g = day.yd_from_lst(y)
        for(let d of g) {
            if(d.wd === n){
                yield(d)
            }
        }
    }
}

function fst_mwd(y,m,n){
    let g = mwd(y,m,n)
    for(let each of g) {
        return(each)
    }
}

function lst_mwd(y,m,n) {
    let g = mwd_from_lst(y,m,n)
    for(let each of g) {
        return(each)
    }
}

function * mwd(y,m,n) {
    n = validate_wd(n)
    if(n===null) {
        return(null)
    } else {
        let g = day.md(y,m)
        for(let d of g) {
            if(d.wd === n){
                yield(d)
            }
        }
    }
}

function * mwd_from_lst(y,m,n) {
    n = validate_wd(n)
    if(n===null) {
        return(null)
    } else {
        let g = day.md_from_lst(y,m)
        for(let d of g) {
            if(d.wd === n){
                yield(d)
            }
        }
    }
}



module.exports = {
    validate_wd,
    fst_ywd,
    lst_ywd,
    ywd,
    ywd_from_lst,
    fst_mwd,
    lst_mwd,
    mwd,
    mwd_from_lst,
}
