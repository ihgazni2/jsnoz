const moment = require('moment-timezone')
const cmmn = require('./cmmn.js')
const {
    DICT_KL,
    DATE_FMT_MD,
    NAME_TO_FMT_DICT,
    FMT_TO_NAME_DICT
} = require('./const.js')


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
    /*
     * m     month
     * yq    quater-of-year
     */
    m = m - 1
    return((m - m % 3)/3 + 1)
}

function is_leap_year(y) {
    const mom = moment(y,'YYYY')
    return(mom.isLeapYear())
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



function get_yw(y,m,d) {
    let s = ymd2str(y,m,d)
    let mom = moment(s,'YYYY-MM-DD')
    return(mom.isoWeeks())
}


function get_days_num_of_month(y,m) {
    let s = ym2str(y,m)
    let mom = moment(s,'YYYY-MM')
    return(mom.daysInMonth())
}

function get_yd(y,m,d) {
    yd = 0
    for(let i=1;i<m;i++) {
        yd = yd + get_days_num_of_month(y,i)
    }
    yd = yd + d
    return(yd)
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
    let mom = moment(s,'YYYY-MM-DDDD')
    return(mom) 
}

function get_qw(y,q,m,d) {
    let fst_date = get_fst_date_of_q(y,q)
    let fst_yw = get_yw(y,fst_date.month()+1,fst_date.date())
    let yw = get_yw(y,m,d)
    qw = 1 + (yw - fst_yw)
    return(qw)
}

function get_qd(y,q,m,d) {
    let fst_date = get_fst_date_of_q(y,q)
    let fst_yd = get_yd(y,fst_date.month()+1,fst_date.date())
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
    let mom = moment(s,'YYYY-MM-DDDD')
    return(mom)
}


function get_mw(y,m,d) {
    let fst_date = get_fst_date_of_m(y,m)
    let fst_yw = get_yw(y,fst_date.month()+1,fst_date.date())
    let yw = get_yw(y,m,d)
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


/////
function dt2dict(mom) {
    const y =     mom.year();
    const m =     mom.month() + 1;
    const d =     mom.date();
    const h =     mom.hours();
    const min =   mom.minutes();
    const s =     mom.second();
    const ms =    mom.milliseconds();
    const mts =   mom.valueOf();
    const ts =        mts /1000;
    const tzname = mom.zoneName();
    const zone = mom.tz();
    const moffset = mom.utcOffset();
    const z =      moffset2z(moffset);
    const soffset = moffset * 60;
    const msoffset = soffset * 1000;
    const yq = mom.quarters();
    const yw = get_yw(y,m,d);   //mom.weeks()
    const yd = get_yd(y,m,d);   //mom.dayOfYear()
    const qm = get_qm(m);       
    const qw = get_qw(y,yq,m,d); //
    const qd = get_qd(y,yq,m,d);
    const mt = get_mt(m,d);
    const mw = get_mw(y,m,d);
    const td = get_td(y,m,d);   
    let wd = mom.day();
    wd = (wd === 0)? 7:wd;
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


function dt2ts(mom){
    return(mom.valueOf()/1000)
}



function dt2local_str(mom,fmt='YYYY-MM-DD HH:mm:ss Z') {
    return(mom.format(fmt))
}

function dt2utc_str(mom,fmt='YYYY-MM-DD HH:mm:ss Z') {
    let ts = mom.valueOf()
    let dt = new Date(ts) 
    let utc_mom = moment(dt)
    utc_mom.tz('GMT')
    return(utc_mom.format(fmt))
}

function dt2tmzone_str(mom,tz,fmt='YYYY-MM-DD HH:mm:ss Z') {
    let ts = mom.valueOf()
    let dt = new Date(ts)
    let utc_mom = moment(dt)
    utc_mom.tz(tz)
    return(utc_mom.format(fmt))
}


/*
> moment('2020-06-29T04:52:37.000Z').format('YYYY-MM-DD HH:mm:ss Z')
'2020-06-29 12:52:37 +08:00'
>

 */


module.exports = {
    dt2dict,
    dt2ts,
    dt2local_str,
    dt2utc_str
}


