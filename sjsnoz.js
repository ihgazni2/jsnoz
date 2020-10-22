const cmmn = require('./cmmn.js')
const {
    DICT_KL,
    DATE_FMT_MD,
    NAME_TO_FMT_DICT,
    FMT_TO_NAME_DICT,
    UNITS
} = require('./consts.js')


/*
    #y            year                  年
    #m            month                                月
    #d            day                                  日
    #h            hour                                 小时
    #min          minute                               分
    #s            second                               秒
    #ms           microsecond                          毫秒
    #ts           timestamp                            整数到秒
    #mts          timestamp                            整数到毫秒
    #tz           timezone                             时区名字
    #soffset       timezone-seconds-offset             时区偏移    utc + offset = local
    #msoffset       timezone-microseconds-offset       时区偏移    utc + offset = local
    #yq           quarter-of-year                      每年第几季
    #yw           week-of-year                         每年第几周
    #yd           day-of-year                          每年第几天
    #qm           month-of-quarter                     每季第几月
    #qw           week-of-quarter                      每季第几周
    #qd           day-of-quarter                       每季第几天
    #mt           ten-of-month                         每月第几旬
    #mw           week-of-month                        每月第几周
    #wd           isoweekday                           星期几  星期日是7
    #dt           daytime
 */



function get_yq_via_m(m) {
    m = m - 1
    return((m - m % 3)/3 + 1)
}

function is_leap_year(y) {
    if( (y%4===0 && y%100!==0 )|| (y%400===0)){
        return(true)
    } else {
        return(false)
    }
}

function get_days_num_of_year(y) {
    let cond = is_leap_year(y)
    let num = cond?366:365
    return(num)
}


function year2str(y) {
    return(cmmn.prepend(y,4,0))
}

function month2str(m) {
    return(cmmn.prepend(m,2,0))
}

function day2str(d) {
    return(cmmn.prepend(d,2,0))
}

function ym2str(y,m) {
    y = year2str(y)
    m = month2str(m)
    return(y+'-'+m)
}

function ymd2str(y,m,d) {
    y = year2str(y)
    m = month2str(m)
    d = day2str(d)
    return(y+'-'+m+'-'+d)
}

function hour2str(h) {
    return(cmmn.prepend(h,2,0))
}

function min2str(min) {
    return(cmmn.prepend(min,2,0))
}

function sec2str(sec) {
    return(cmmn.prepend(sec,2,0))
}

function hms2str(h,min,sec) {
    let hstr = hour2str(h)
    let mstr = min2str(min)
    let sstr = sec2str(sec)
    return(hstr+':'+mstr+':'+sstr)
}

function get_dt(o) {
    let dt;
    try {
        if(o === undefined) {
            dt = getDate()
        } else {
            dt = getDate(o)
        }
    } catch (e) {
        if(o === undefined) {
            dt = new Date()
        } else {    
            dt = new Date(o)
        }
    }
    return(dt)
}


function get_local_wd(y,m,d) {
    let s = ymd2str(y,m,d)
    let dt = get_dt(s)
    let wd = dt.getDay()
    wd = (wd === 0)? 7:wd;
    return(wd)
}

function get_utc_wd(y,m,d) {
    let s = ymd2str(y,m,d)
    let dt = get_dt(s)
    let wd = dt.getUTCDay()
    wd = (wd === 0)? 7:wd;
    return(wd)
}



function get_days_num_of_month(y,m) {
    let s = ym2str(y,m)
    const dict = {
        1:31,3:31,4:30,5:31,
        6:30,7:31,8:31,9:30,
        10:31,11:30,12:31
    }
    let leap = is_leap_year(y)
    if(m === 2) {
        return(leap?29:28)
    } else {
        return(dict[m])
    }
}

function get_yd(y,m,d) {
    yd = 0
    for(let i=1;i<m;i++) {
        yd = yd + get_days_num_of_month(y,i)
    }
    yd = yd + d
    return(yd)
}

function get_local_yw(y,m,d) {
    let fst_yd = get_yd(y,1,1) 
    let fst_wd = get_local_wd(y,1,1)
    let head = 7 - fst_wd + 1
    let yd = get_yd(y,m,d) 
    let wd = get_local_wd(y,m,d)
    let tail = wd 
    let d_diff = yd - fst_yd + 1 - head - tail
    let yw = d_diff / 7 
    yw = yw + 2
    return(yw)
}


function get_utc_yw(y,m,d) {
    let fst_yd = get_yd(y,1,1)
    let fst_wd = get_utc_wd(y,1,1)
    let head = 7 - fst_wd + 1
    let yd = get_yd(y,m,d)
    let wd = get_utc_wd(y,m,d)
    let tail = wd
    let d_diff = yd - fst_yd + 1 - head - tail
    let yw = d_diff / 7
    yw = yw + 2
    return(yw)
}


function get_qm(m) {
    let r = m%3
    qm = r?r:3
    return(qm)
}


function get_fst_date_of_q(y,q) {
    let m = 1;
    let d = 1;
    if(q ==1) {
        
    } else if(q==2) {
        m = 4
    } else if(q==3) {
        m = 7
    } else {
        m = 10
    }
    let s = ymd2str(y,m,d)
    return(get_dt(s))
}

function get_local_qw(y,q,m,d) {
    let fst_date = get_fst_date_of_q(y,q)
    let fst_yw = get_local_yw(y,fst_date.getMonth()+1,fst_date.getDate())
    let yw = get_local_yw(y,m,d)
    qw = 1 + (yw - fst_yw)
    return(qw)
}

function get_utc_qw(y,q,m,d) {
    let fst_date = get_fst_date_of_q(y,q)
    let fst_yw = get_utc_yw(y,fst_date.getUTCMonth()+1,fst_date.getUTCDate())
    let yw = get_utc_yw(y,m,d)
    qw = 1 + (yw - fst_yw)
    return(qw)
}



function get_local_qd(y,q,m,d) {
    let fst_date = get_fst_date_of_q(y,q)
    let fst_yd = get_yd(y,fst_date.getMonth()+1,fst_date.getDate())
    let yd = get_yd(y,m,d)
    let qd = 1 + (yd - fst_yd)
    return(qd)
}


function get_utc_qd(y,q,m,d) {
    let fst_date = get_fst_date_of_q(y,q)
    let fst_yd = get_yd(y,fst_date.getUTCMonth()+1,fst_date.getUTCDate())
    let yd = get_yd(y,m,d)
    let qd = 1 + (yd - fst_yd)
    return(qd)
}



function get_mt(m,d) {
    if((d>=1) && (d<=10)) {
        return(1)
    } else if((d>=10) && (d<=20)) {
        return(2)
    } else {
        return(3)
    }
}

function get_fst_date_of_m(y,m) {
    let d = 1;
    let s = ymd2str(y,m,d)
    return(get_dt(s))
}


function get_local_mw(y,m,d) {
    let fst_date = get_fst_date_of_m(y,m)
    let fst_yw = get_local_yw(y,fst_date.getMonth()+1,fst_date.getDate())
    let yw = get_local_yw(y,m,d)
    let mw = 1 + (yw - fst_yw)
    return(mw)
}

function get_utc_mw(y,m,d) {
    let fst_date = get_fst_date_of_m(y,m)
    let fst_yw = get_utc_yw(y,fst_date.getUTCMonth()+1,fst_date.getUTCDate())
    let yw = get_utc_yw(y,m,d)
    let mw = 1 + (yw - fst_yw)
    return(mw)
}




function get_td(y,m,d) {
    let t = get_mt(m,d)
    if(t == 1){
        return(d)
    } else if(t ==2) {
        return(d-10)
    } else {
        return(d-20)
    }
}

function moffset2z(moffset) {
    let min = moffset % 60
    let h = (moffset - min) / 60
    min = cmmn.prepend(min,2,0)
    h = cmmn.prepend(h,2,0)
    let s = (moffset>0)?'+':'-'
    return(s+h+min)
}

function z2moffset(z) {
    let s = z[0]
    let h = parseInt(z.slice(1,3))
    let m = parseInt(z.slice(3,5))
    m = h * 60 + m
    m = (s==='+')?m:-m
    return(m)
}

function get_z(dt) {
    let moffset = - dt.getTimezoneOffset()
    let z = moffset2z(moffset)
    return(z)
}



function dt2local_dict(dt) {
    let z = get_z(dt) 
    return(dt2dict(dt,z))
}

function dt2utc_dict(dt) {
    return(dt2dict(dt,'+0000'))
}

function dt2dict(dt,z) {
    const moffset = z2moffset(z)
    const tzname = z;
    const zone = z;
    const soffset = moffset * 60;
    const msoffset = soffset * 1000;
    ////////////////////////////////////////
    const mts =   dt.getTime();
    const ts =        mts /1000;
    //////////////////////////////////
    const dummy_mts = mts + msoffset
    const dummy_dt = get_dt(dummy_mts)
    const y =     dummy_dt.getUTCFullYear();
    const m =     dummy_dt.getUTCMonth() + 1;
    const d =     dummy_dt.getUTCDate();
    const h =     dummy_dt.getUTCHours();
    const min =   dummy_dt.getUTCMinutes();
    const s =     dummy_dt.getUTCSeconds();
    const ms =    dummy_dt.getUTCMilliseconds();
    //////////////////////////////////
    const yq = get_yq_via_m(m);
    const yw = get_utc_yw(y,m,d);   //
    const yd = get_yd(y,m,d);   //
    const qm = get_qm(m);       //
    const qw = get_utc_qw(y,yq,m,d); //
    const qd = get_utc_qd(y,yq,m,d);
    const mt = get_mt(m,d);
    const mw = get_utc_mw(y,m,d);
    const td = get_td(y,m,d);
    let wd = get_utc_wd(y,m,d);
    let dict = {
        y,m,d,
        h,min,s,ms,
        ts,mts,
        z,zone,tzname,soffset,msoffset,
        yq,yw,yd,
        qm,qw,qd,
        mt,mw,
        td,wd
    }
    return(dict)
}



function dt2ts(dt){
    return(dt.getTime()/1000)
}

function dt2local_str(dt) {
    //fmt='YYYY-MM-DD HH:mm:ss Z'
    let z = get_z(dt) 
    return(dt2str(dt,z))
}

function dt2utc_str(dt) {
    //fmt='YYYY-MM-DD HH:mm:ss Z'
    return(dt2str(dt,'+0000'))
}


function dt2str(dt,z) {
    //fmt='YYYY-MM-DD HH:mm:ss Z'
    let dict = dt2dict(dt,z)
    let ymd_str = ymd2str(dict.y,dict.m,dict.d)
    let hms_str = hms2str(dict.h,dict.min,dict.s)
    z = dict.z
    return(ymd_str+' '+hms_str+' '+z)
}


/*
 *
> get_dt('2020-06-29T04:52:37.000Z')
> Mon Jun 29 2020 12:52:37 GMT+0800 (中国标准时间)

*/
function is_date(o) {
    let cond = (o instanceof Date)
    return(cond)
}


function obj2local_dict(o) {
    if(is_date(o)){return(dt2local_dict(o))}
    else if(typeof(o) === 'number') { return(dt2local_dict(new Date(o)))}
    else if(typeof(o) === 'string') { return(dt2local_dict(new Date(o)))}
    else if (typeof(o) === 'object') { return(o)}
    else {
        throw(new Error("only can be string date dict"))
    }
}


function sub(o0,o1) {
    let mts0 = obj2local_dict(o0).mts
    let mts1 = obj2local_dict(o1).mts
    let diff = mts0 - mts1
    let d = cmmn.get_unit_dict(diff,[24,60,60,1000],['d','h','min','s','ms'])
    return(d)
}


function dhmsms_dict_to_mts(d) {
    return(d.d*UNITS.DAY_MS + d.h * UNITS.HOUR_MS + d.min * UNITS.MIN_MS + d.s*UNITS.S_MS  + d.ms)
}
function dhmsms_dict_to_ts(d) {
    return(d.d*UNITS.DAY_S + d.h * UNITS.HOUR_S + d.min * UNITS.MIN_S + d.s  + d.ms/UNITS.S_MS)
}
function dhmsms_dict_to_min(d) {
    return(d.d*UNITS.DAY_MIN + d.h * UNITS.HOUR_MIN + d.min  + d.s/UNITS.MIN_S  + d.ms/UNITS.MIN_MS)
}
function dhmsms_dict_to_hour(d) {
    return(d.d*UNITS.DAY_HOUR + d.h + d.min/UNITS.HOUR_MIN  + d.s/UNITS.HOUR_S  + d.ms/UNITS.HOUR_MS)
}
function dhmsms_dict_to_day(d) {
    return(d.d + d.h/UNITS.DAY_HOUR + d.min/UNITS.DAY_MIN  + d.s/UNITS.DAY_S  + d.ms/UNITS.DAY_MS)
}


module.exports = {
    get_yq_via_m,
    is_leap_year,
    get_days_num_of_year,
    year2str,
    month2str,
    day2str,
    ym2str,
    ymd2str,
    hour2str,
    min2str,
    sec2str,
    hms2str,
    get_dt,
    get_local_wd,
    get_utc_wd,
    get_days_num_of_month,
    get_yd,
    get_local_yw,
    get_utc_yw,
    get_qm,
    get_fst_date_of_q,
    get_local_qw,
    get_utc_qw,
    get_local_qd,
    get_utc_qd,
    get_mt,
    get_fst_date_of_m,
    get_local_mw,
    get_utc_mw,
    get_td,
    moffset2z,
    z2moffset,
    get_z,
    dt2local_dict,
    dt2utc_dict,
    dt2dict,
    dt2ts,
    dt2local_str,
    dt2utc_str,
    dt2str,
    obj2local_dict,
    sub,
    dhmsms_dict_to_mts,
    dhmsms_dict_to_ts,
    dhmsms_dict_to_min,
    dhmsms_dict_to_hour,
    dhmsms_dict_to_day,
}



