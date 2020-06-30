# jsnoz
>__jsnoz__

# Install

>__npm install jsnoz__


## Usage

### without moment js,using require('jsnoz').sjsnoz


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



