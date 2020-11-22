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

function unslct_md(y,already_slcted,choosed) {
    //choosed 1-31
    //从已选择的过滤掉
    //符合当前年份的
    already_slcted = already_slcted.filter(
        d=>  !choosed.includes(d.d) && (y === d.y)
    )
    return(already_slcted)
}

function slct_md(y,already_slcted,choosed) {
    let all_yds = Array.from(yd(y))
    all_yds = all_yds.filter(d=>choosed.includes(d.d))
    already_slcted = already_slcted.filter(
        d=>  !(y === d.y)
    )      
    already_slcted = already_slcted.concat(all_yds)
    return(already_slcted)
}


module.exports =  {
    fst_yd,
    lst_yd,
    yd,
    yd_from_lst,
    fst_md,
    lst_md,
    md,
    md_from_lst,
    unslct_md,
    slct_md
}
