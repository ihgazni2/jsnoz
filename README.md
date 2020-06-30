# jsnoz
>__jsnoz__

# Install

>__npm install jsnoz__


## Usage

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

### with moment js, using require('jsnoz').ndnoz
        > const  moment = require('moment-timezone')
        > var mom = moment(new Date())
        > var {dt2dict} = require('jsnoz').ndnoz
        > mom
        Moment<2020-06-29T20:04:57+08:00>
        >
        > dt2dict(mom)
        {
          y: 2020,
          m: 6,
          d: 29,
          h: 20,
          min: 4,
          s: 57,
          ms: 391,
          ts: 1593432297.391,
          mts: 1593432297391,
          z: '+0800',
          zone: 'CST',
          tzname: 'CST',
          soffset: 28800,
          msoffset: 28800000,
          yq: 2,
          yw: 27,
          yd: 181,
          qm: 3,
          qw: 14,
          qd: 90,
          mt: 3,
          mw: 5,
          td: 9,
          wd: 1
        }
        > new Date(1593432297391)
        2020-06-29T12:04:57.391Z
        >






## In Progresing.........
-------------------------------------------------------
  

[pynoz](https://github.com/ihgazni2/pynoz)


----------------------------------------------



