const sjsnoz = require("./sjsnoz")

function fst_yd(y) {
    let d = sjsnoz.obj2local_dict(y+"-01-01 00:00:00")
    return(d)
}

function lst_yd(y) {
    let d = sjsnoz.obj2local_dict(y+"-12-31 00:00:00")
    return(d)    
}


function * yd(y) {
    let fst = fst_yd(y)
    let lst = lst_yd(y)
    yield(fst)
    mts = fst.mts
    while(mts < lst.mts) {
        mts = mts + 24*60*60 * 1000
        let d = sjsnoz.obj2local_dict(mts)
        yield(d)
    }
}

function * yd_from_lst(y) {
    let fst = fst_yd(y)
    let lst = lst_yd(y)
    yield(lst)
    mts = lst.mts
    while(mts > fst.mts) {
        mts = mts - 24*60*60 * 1000
        let d = sjsnoz.obj2local_dict(mts)
        yield(d)
    }
}



function fst_md(y,m) {
    let d = sjsnoz.obj2local_dict(y+"-"+sjsnoz.month2str(m) +"-01 00:00:00")
    return(d)
}

function lst_md(y,m) {
    let lst = sjsnoz.day2str(sjsnoz.get_days_num_of_month(y,m))
    let d = sjsnoz.obj2local_dict(y+"-"+sjsnoz.month2str(m) +"-"+lst+" 00:00:00")
    return(d)    
}


function * md(y,m) {
    let fst = fst_md(y,m)
    let lst = lst_md(y,m)
    yield(lst)
    mts = lst.mts
    while(mts > fst.mts) {
        mts = mts - 24*60*60 * 1000
        let d = sjsnoz.obj2local_dict(mts)
        yield(d)
    }
}

function * md_from_lst(y,m) {
    let fst = fst_md(y,m)
    let lst = lst_md(y,m)
    yield(fst)
    mts = fst.mts
    while(mts < lst.mts) {
        mts = mts + 24*60*60 * 1000
        let d = sjsnoz.obj2local_dict(mts)
        yield(d)
    }
}


module.exports =  {
    fst_yd,
    lst_yd,
    yd,
    yd_from_lst,
    fst_md,
    lst_md,
    md,
    md_from_lst
}
