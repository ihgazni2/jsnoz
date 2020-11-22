# jsnoz

- simple time,timezone util
- WITHOUT dependancy with moment
- the main file is 11.1kB dist/jsnoz.js

# Install

>__npm install jsnoz__


## Usage

- var sjsnoz = require('jsnoz').sjsnoz
- var CONSTS = require('jsnoz').const


## DEFINITONS

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


### without moment js,using require('jsnoz').sjsnoz
        var {
            get_dt,
            moffset,
            moffset2z,
            dt2str,
            dt2local_dict,
            dt2utc_dict,
            dt2dict
        } = require('jsnoz').sjsnoz
        
        var dt = get_dt("2020-06-29 07:00:00")
        //Mon Jun 29 2020 07:00:00 GMT+0800 (中国标准时间)
        var moffset = -dt.getTimezoneOffset()
        var z = moffset2z(moffset)
        //+0800
        var local_str = dt2str(dt,'+0800')
        //"2020-06-29 07:00:00 +0800"
        var utc_str = dt2str(dt,'+0000')
        //"2020-06-28 23:00:00 +0000"
        var est_str = dt2str(dt,'-0500')
        //"2020-06-28 18:00:00 -0500"
        
        
        var local_dict = dt2local_dict(dt)
        
        /*
            {y: 2020, m: 6, d: 29, h: 7, min: 0, …}
            d: 29
            h: 7
            m: 6
            min: 0
            ms: 0
            msoffset: 28800000
            mt: 3
            mts: 1593385200000
            mw: 5
            qd: 90
            qm: 3
            qw: 14
            s: 0
            soffset: 28800
            td: 9
            ts: 1593385200
            tzname: "+0800"
            wd: 1
            y: 2020
            yd: 181
            yq: 2
            yw: 27
            z: "+0800"
            zone: "+0800"
        */
        
        
        var utc_dict = dt2utc_dict(dt)
        
        /*
            {y: 2020, m: 6, d: 28, h: 23, min: 0, …}
            d: 28
            h: 23
            m: 6
            min: 0
            ms: 0
            msoffset: 0
            mt: 3
            mts: 1593385200000
            mw: 4
            qd: 89
            qm: 3
            qw: 13
            s: 0
            soffset: 0
            td: 8
            ts: 1593385200
            tzname: "+0000"
            wd: 7
            y: 2020
            yd: 180
            yq: 2
            yw: 26
            z: "+0000"
            zone: "+0000"
        */
        
        var est_dict = dt2dict(dt,'-0500')
        /*
            {y: 2020, m: 6, d: 28, h: 18, min: 0, …}
            d: 28
            h: 18
            m: 6
            min: 0
            ms: 0
            msoffset: -18000000
            mt: 3
            mts: 1593385200000
            mw: 4
            qd: 89
            qm: 3
            qw: 13
            s: 0
            soffset: -18000
            td: 8
            ts: 1593385200
            tzname: "-0500"
            wd: 7
            y: 2020
            yd: 180
            yq: 2
            yw: 26
            z: "-0500"
            zone: "-0500"
        */


## APIS

    > var CONSTS = require('./index').consts
    {
      UNITS: {
        DAY_MS: 86400000,
        DAY_S: 86400,
        DAY_MIN: 1440,
        DAY_HOUR: 24,
        HOUR_MS: 3600000,
        HOUR_S: 3600,
        HOUR_MIN: 60,
        MIN_MS: 60000,
        MIN_S: 60,
        S_MS: 1000
      },
      DICT_KL: [
        'y',      'm',       'd',
        'h',      'min',     's',
        'ms',     'ts',      'mts',
        'tzname', 'soffset', 'msoffset',
        'yq',     'yw',      'yd',
        'qm',     'qw',      'qd',
        'mt',     'mw',      'td',
        'wd'
      ],
      PY_DATE_FMT_MD: {
        '%a, %d %b %Y %H:%M:%S GMT': 'rfc1123',
        '%d %b %Y %H:%M:%S GMT': 'rfc1123_nowkday',
        '%a, %d %b %Y %H:%M:%S': 'rfc1123_notz',
        '%a, %d %b %Y %H:%M:%S %z': 'rfc1123_tzoffset',
        '%a, %d-%b-%Y %H:%M:%S GMT': 'rfc1123_hypen',
        '%A, %d-%b-%y %H:%M:%S GMT': 'rfc850',
        '%d-%b-%y %H:%M:%S GMT': 'rfc850_nowkday',
        '%a, %d-%b-%y %H:%M:%S GMT': 'rfc850_a',
        '%A, %d-%b-%Y %H:%M:%S GMT': 'rfc850_broken',
        '%d-%b-%Y %H:%M:%S GMT': 'rfc850_broken_nowkday',
        '%a, %b %d %H:%M:%S %Y': 'asctime',
        '%Y-%m-%d %H:%M:%S %z': 'iso8601',
        '%a %b %d %Y %H:%M:%S %Z%z': 'abdYHMSZz',
        '%a %b %d %Y %H:%M:%S': 'abdYHMS',
        '%Y-%m-%dT%H:%M:%S.%fZ': 'nodejs',
        '%Y-%m-%d %H:%M:%S.%f': 'YmdHMSf',
        '%Y-%m-%d %H:%M:%S.%f %Z%z': 'YmdHMSfZz',
        '%Y-%m-%d %H:%M:%S %Z %z': 'YmdHMSZz',
        rfc1123: '%a, %d %b %Y %H:%M:%S GMT',
        rfc1123_nowkday: '%d %b %Y %H:%M:%S GMT',
        rfc1123_notz: '%a, %d %b %Y %H:%M:%S',
        rfc1123_tzoffset: '%a, %d %b %Y %H:%M:%S %z',
        rfc1123_hypen: '%a, %d-%b-%Y %H:%M:%S GMT',
        rfc850: '%A, %d-%b-%y %H:%M:%S GMT',
        rfc850_nowkday: '%d-%b-%y %H:%M:%S GMT',
        rfc850_a: '%a, %d-%b-%y %H:%M:%S GMT',
        rfc850_broken: '%A, %d-%b-%Y %H:%M:%S GMT',
        rfc850_broken_nowkday: '%d-%b-%Y %H:%M:%S GMT',
        asctime: '%a, %b %d %H:%M:%S %Y',
        iso8601: '%Y-%m-%d %H:%M:%S %z',
        abdYHMSZz: '%a %b %d %Y %H:%M:%S %Z %z',
        abdYHMS: '%a %b %d %Y %H:%M:%S',
        nodejs: '%Y-%m-%dT%H:%M:%S.%fZ',
        YmdHMSf: '%Y-%m-%d %H:%M:%S.%f',
        YmdHMSfZz: '%Y-%m-%d %H:%M:%S.%f %Z %z',
        YmdHMSZz: '%Y-%m-%d %H:%M:%S %Z %z'
      },
      DATE_FMT_MD: {
        'ddd, DD MMM YYYY HH:mm:ss G\\MT': 'rfc1123',
        'DD MMM YYYY HH:mm:ss G\\MT': 'rfc1123_nowkday',
        'ddd, DD MMM YYYY HH:mm:ss': 'rfc1123_notz',
        'ddd, DD MMM YYYY HH:mm:ss Z': 'rfc1123_tzoffset',
        'ddd, DD-MMM-YYYY HH:mm:ss G\\MT': 'rfc1123_hypen',
        'dddd, DD-MMM-YY HH:mm:ss G\\MT': 'rfc850',
        'YYYY-MM-DD HH:mm:ss Z': 'iso8601',
        'ddd MMM DD YYYY HH:mm:ss z Z': 'abdYHMSZz',
        'ddd MMM DD YYYY HH:mm:ss': 'abdYHMS',
        'YYYY-MM-DD HH:mm:ss z Z': 'YmdHMSZz',
        rfc1123: 'ddd, DD MMM YYYY HH:mm:ss G\\MT',
        rfc1123_nowkday: 'DD MMM YYYY HH:mm:ss G\\MT',
        rfc1123_notz: 'ddd, DD MMM YYYY HH:mm:ss',
        rfc1123_tzoffset: 'ddd, DD MMM YYYY HH:mm:ss Z',
        rfc1123_hypen: 'ddd, DD-MMM-YYYY HH:mm:ss G\\MT',
        rfc850: 'dddd, DD-MMM-YY HH:mm:ss G\\MT',
        iso8601: 'YYYY-MM-DD HH:mm:ss Z',
        abdYHMSZz: 'ddd MMM DD YYYY HH:mm:ss z Z',
        abdYHMS: 'ddd MMM DD YYYY HH:mm:ss',
        YmdHMSZz: 'YYYY-MM-DD HH:mm:ss z Z'
      },
      PY_NAME_TO_FMT_DICT: {
        rfc1123: '%a, %d %b %Y %H:%M:%S GMT',
        rfc1123_nowkday: '%d %b %Y %H:%M:%S GMT',
        rfc1123_notz: '%a, %d %b %Y %H:%M:%S',
        rfc1123_tzoffset: '%a, %d %b %Y %H:%M:%S %z',
        rfc1123_hypen: '%a, %d-%b-%Y %H:%M:%S GMT',
        rfc850: '%A, %d-%b-%y %H:%M:%S GMT',
        rfc850_nowkday: '%d-%b-%y %H:%M:%S GMT',
        rfc850_a: '%a, %d-%b-%y %H:%M:%S GMT',
        rfc850_broken: '%A, %d-%b-%Y %H:%M:%S GMT',
        rfc850_broken_nowkday: '%d-%b-%Y %H:%M:%S GMT',
        asctime: '%a, %b %d %H:%M:%S %Y',
        iso8601: '%Y-%m-%d %H:%M:%S %z',
        abdYHMSZz: '%a %b %d %Y %H:%M:%S %Z %z',
        abdYHMS: '%a %b %d %Y %H:%M:%S',
        nodejs: '%Y-%m-%dT%H:%M:%S.%fZ',
        YmdHMSf: '%Y-%m-%d %H:%M:%S.%f',
        YmdHMSfZz: '%Y-%m-%d %H:%M:%S.%f %Z %z',
        YmdHMSZz: '%Y-%m-%d %H:%M:%S %Z %z'
      },
      NAME_TO_FMT_DICT: {
        rfc1123: 'ddd, DD MMM YYYY HH:mm:ss G\\MT',
        rfc1123_nowkday: 'DD MMM YYYY HH:mm:ss G\\MT',
        rfc1123_notz: 'ddd, DD MMM YYYY HH:mm:ss',
        rfc1123_tzoffset: 'ddd, DD MMM YYYY HH:mm:ss Z',
        rfc1123_hypen: 'ddd, DD-MMM-YYYY HH:mm:ss G\\MT',
        rfc850: 'dddd, DD-MMM-YY HH:mm:ss G\\MT',
        iso8601: 'YYYY-MM-DD HH:mm:ss Z',
        abdYHMSZz: 'ddd MMM DD YYYY HH:mm:ss z Z',
        abdYHMS: 'ddd MMM DD YYYY HH:mm:ss',
        YmdHMSZz: 'YYYY-MM-DD HH:mm:ss z Z'
      },
      PY_FMT_TO_NAME_DICT: {
        '%a, %d %b %Y %H:%M:%S GMT': 'rfc1123',
        '%d %b %Y %H:%M:%S GMT': 'rfc1123_nowkday',
        '%a, %d %b %Y %H:%M:%S': 'rfc1123_notz',
        '%a, %d %b %Y %H:%M:%S %z': 'rfc1123_tzoffset',
        '%a, %d-%b-%Y %H:%M:%S GMT': 'rfc1123_hypen',
        '%A, %d-%b-%y %H:%M:%S GMT': 'rfc850',
        '%d-%b-%y %H:%M:%S GMT': 'rfc850_nowkday',
        '%a, %d-%b-%y %H:%M:%S GMT': 'rfc850_a',
        '%A, %d-%b-%Y %H:%M:%S GMT': 'rfc850_broken',
        '%d-%b-%Y %H:%M:%S GMT': 'rfc850_broken_nowkday',
        '%a, %b %d %H:%M:%S %Y': 'asctime',
        '%Y-%m-%d %H:%M:%S %z': 'iso8601',
        '%a %b %d %Y %H:%M:%S %Z%z': 'abdYHMSZz',
        '%a %b %d %Y %H:%M:%S': 'abdYHMS',
        '%Y-%m-%dT%H:%M:%S.%fZ': 'nodejs',
        '%Y-%m-%d %H:%M:%S.%f': 'YmdHMSf',
        '%Y-%m-%d %H:%M:%S.%f %Z%z': 'YmdHMSfZz',
        '%Y-%m-%d %H:%M:%S %Z %z': 'YmdHMSZz'
      },
      FMT_TO_NAME_DICT: {
        'ddd, DD MMM YYYY HH:mm:ss G\\MT': 'rfc1123',
        'DD MMM YYYY HH:mm:ss G\\MT': 'rfc1123_nowkday',
        'ddd, DD MMM YYYY HH:mm:ss': 'rfc1123_notz',
        'ddd, DD MMM YYYY HH:mm:ss Z': 'rfc1123_tzoffset',
        'ddd, DD-MMM-YYYY HH:mm:ss G\\MT': 'rfc1123_hypen',
        'dddd, DD-MMM-YY HH:mm:ss G\\MT': 'rfc850',
        'YYYY-MM-DD HH:mm:ss Z': 'iso8601',
        'ddd MMM DD YYYY HH:mm:ss z Z': 'abdYHMSZz',
        'ddd MMM DD YYYY HH:mm:ss': 'abdYHMS',
        'YYYY-MM-DD HH:mm:ss z Z': 'YmdHMSZz'
      }
    }
    
    > var sjsnoz = require('./index').sjsnoz
    {
      get_yq_via_m: [Function: get_yq_via_m],
      is_leap_year: [Function: is_leap_year],
      get_days_num_of_year: [Function: get_days_num_of_year],
      year2str: [Function: year2str],
      month2str: [Function: month2str],
      day2str: [Function: day2str],
      ym2str: [Function: ym2str],
      ymd2str: [Function: ymd2str],
      hour2str: [Function: hour2str],
      min2str: [Function: min2str],
      sec2str: [Function: sec2str],
      hms2str: [Function: hms2str],
      get_dt: [Function: get_dt],
      get_local_wd: [Function: get_local_wd],
      get_utc_wd: [Function: get_utc_wd],
      get_days_num_of_month: [Function: get_days_num_of_month],
      get_yd: [Function: get_yd],
      get_local_yw: [Function: get_local_yw],
      get_utc_yw: [Function: get_utc_yw],
      get_qm: [Function: get_qm],
      get_fst_date_of_q: [Function: get_fst_date_of_q],
      get_local_qw: [Function: get_local_qw],
      get_utc_qw: [Function: get_utc_qw],
      get_local_qd: [Function: get_local_qd],
      get_utc_qd: [Function: get_utc_qd],
      get_mt: [Function: get_mt],
      get_fst_date_of_m: [Function: get_fst_date_of_m],
      get_local_mw: [Function: get_local_mw],
      get_utc_mw: [Function: get_utc_mw],
      get_td: [Function: get_td],
      moffset2z: [Function: moffset2z],
      z2moffset: [Function: z2moffset],
      get_z: [Function: get_z],
      dt2local_dict: [Function: dt2local_dict],
      dt2utc_dict: [Function: dt2utc_dict],
      dt2dict: [Function: dt2dict],
      dt2ts: [Function: dt2ts],
      dt2local_str: [Function: dt2local_str],
      dt2utc_str: [Function: dt2utc_str],
      dt2str: [Function: dt2str],
      obj2local_dict: [Function: obj2local_dict],
      sub: [Function: sub],
      dhmsms_dict_to_mts: [Function: dhmsms_dict_to_mts],
      dhmsms_dict_to_ts: [Function: dhmsms_dict_to_ts],
      dhmsms_dict_to_min: [Function: dhmsms_dict_to_min],
      dhmsms_dict_to_hour: [Function: dhmsms_dict_to_hour],
      dhmsms_dict_to_day: [Function: dhmsms_dict_to_day]
    }
    
    > var cmmn = require('./index').cmmn
    {
      append: [Function: append],
      prepend: [Function: prepend],
      calc_units: [Function: calc_units],
      get_qr: [Function: get_qr],
      get_unit_dict: [Function: get_unit_dict]
    }
    >

##day

    const day = require("jsnoz").day
    day.fst_yd(y)
    day.lst_yd(y)
    var g = day.yd(y)  //generator
    var g = day.yd_from_lst(y) //generator
    day.fst_md(y,m)
    day.lst_md(y,m)
    var g = day.md(y,m)  //generator
    var g = day.md_from_lst(y.m) //generator



##week

    const week = require("jsnoz").week
    day.fst_ywd(y,n)  //n = 1,2,3,4,5,6,7
    day.lst_ywd(y,n)
    var g = day.ywd(y,n)  //generator
    var g = day.ywd_from_lst(y,n) //generator
    day.fst_mwd(y,m,n)
    day.lst_mwd(y,m,n)
    var g = day.mwd(y,m,n)  //generator
    var g = day.mwd_from_lst(y,m,n) //generator


## Similar Python Project.........
-------------------------------------------------------
  

[pynoz](https://github.com/ihgazni2/pynoz)


----------------------------------------------



