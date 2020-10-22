const DICT_KL = [
  'y',      'm',       'd',
  'h',      'min',     's',
  'ms',     'ts',      'mts',
  'tzname', 'soffset', 'msoffset',
  'yq',     'yw',      'yd',
  'qm',     'qw',      'qd',
  'mt',     'mw',      'td',
  'wd'
]


const PY_DATE_FMT_MD = {
    '%a, %d %b %Y %H:%M:%S GMT':'rfc1123',
    '%d %b %Y %H:%M:%S GMT':'rfc1123_nowkday',
    '%a, %d %b %Y %H:%M:%S':'rfc1123_notz',
    '%a, %d %b %Y %H:%M:%S %z':'rfc1123_tzoffset',
    '%a, %d-%b-%Y %H:%M:%S GMT':'rfc1123_hypen',
    '%A, %d-%b-%y %H:%M:%S GMT':'rfc850',
    '%d-%b-%y %H:%M:%S GMT':'rfc850_nowkday',
    '%a, %d-%b-%y %H:%M:%S GMT':'rfc850_a',
    '%A, %d-%b-%Y %H:%M:%S GMT':'rfc850_broken',
    '%d-%b-%Y %H:%M:%S GMT':'rfc850_broken_nowkday',
    '%a, %b %d %H:%M:%S %Y':'asctime',
    '%Y-%m-%d %H:%M:%S %z':'iso8601',
    "%a %b %d %Y %H:%M:%S %Z%z":'abdYHMSZz',
    "%a %b %d %Y %H:%M:%S":'abdYHMS',
    "%Y-%m-%dT%H:%M:%S.%fZ":'nodejs',
    "%Y-%m-%d %H:%M:%S.%f":'YmdHMSf',
    "%Y-%m-%d %H:%M:%S.%f %Z%z":'YmdHMSfZz',
    '%Y-%m-%d %H:%M:%S %Z %z':'YmdHMSZz',
    'rfc1123': '%a, %d %b %Y %H:%M:%S GMT',
    'rfc1123_nowkday': '%d %b %Y %H:%M:%S GMT',
    'rfc1123_notz': '%a, %d %b %Y %H:%M:%S',
    'rfc1123_tzoffset': '%a, %d %b %Y %H:%M:%S %z',
    'rfc1123_hypen': '%a, %d-%b-%Y %H:%M:%S GMT',
    'rfc850': '%A, %d-%b-%y %H:%M:%S GMT',
    'rfc850_nowkday': '%d-%b-%y %H:%M:%S GMT',
    'rfc850_a': '%a, %d-%b-%y %H:%M:%S GMT',
    'rfc850_broken': '%A, %d-%b-%Y %H:%M:%S GMT',
    'rfc850_broken_nowkday': '%d-%b-%Y %H:%M:%S GMT',
    'asctime': '%a, %b %d %H:%M:%S %Y',
    'iso8601': '%Y-%m-%d %H:%M:%S %z',
    'abdYHMSZz': '%a %b %d %Y %H:%M:%S %Z %z',
    'abdYHMS': '%a %b %d %Y %H:%M:%S',
    'nodejs': '%Y-%m-%dT%H:%M:%S.%fZ',
    'YmdHMSf': '%Y-%m-%d %H:%M:%S.%f',
    'YmdHMSfZz': '%Y-%m-%d %H:%M:%S.%f %Z %z',
    'YmdHMSZz': '%Y-%m-%d %H:%M:%S %Z %z',
}

const DATE_FMT_MD = {
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
}



const PY_NAME_TO_FMT_DICT = {
    'rfc1123': '%a, %d %b %Y %H:%M:%S GMT',
    'rfc1123_nowkday': '%d %b %Y %H:%M:%S GMT',
    'rfc1123_notz': '%a, %d %b %Y %H:%M:%S',
    'rfc1123_tzoffset': '%a, %d %b %Y %H:%M:%S %z',
    'rfc1123_hypen': '%a, %d-%b-%Y %H:%M:%S GMT',
    'rfc850': '%A, %d-%b-%y %H:%M:%S GMT',
    'rfc850_nowkday': '%d-%b-%y %H:%M:%S GMT',
    'rfc850_a': '%a, %d-%b-%y %H:%M:%S GMT',
    'rfc850_broken': '%A, %d-%b-%Y %H:%M:%S GMT',
    'rfc850_broken_nowkday': '%d-%b-%Y %H:%M:%S GMT',
    'asctime': '%a, %b %d %H:%M:%S %Y',
    'iso8601': '%Y-%m-%d %H:%M:%S %z',
    'abdYHMSZz': '%a %b %d %Y %H:%M:%S %Z %z',
    'abdYHMS': '%a %b %d %Y %H:%M:%S',
    'nodejs': '%Y-%m-%dT%H:%M:%S.%fZ',
    'YmdHMSf': '%Y-%m-%d %H:%M:%S.%f',
    'YmdHMSfZz': '%Y-%m-%d %H:%M:%S.%f %Z %z',
    'YmdHMSZz':'%Y-%m-%d %H:%M:%S %Z %z'
}


const NAME_TO_FMT_DICT = {
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
}


const PY_FMT_TO_NAME_DICT = {
    '%a, %d %b %Y %H:%M:%S GMT':'rfc1123',
    '%d %b %Y %H:%M:%S GMT':'rfc1123_nowkday',
    '%a, %d %b %Y %H:%M:%S':'rfc1123_notz',
    '%a, %d %b %Y %H:%M:%S %z':'rfc1123_tzoffset',
    '%a, %d-%b-%Y %H:%M:%S GMT':'rfc1123_hypen',
    '%A, %d-%b-%y %H:%M:%S GMT':'rfc850',
    '%d-%b-%y %H:%M:%S GMT':'rfc850_nowkday',
    '%a, %d-%b-%y %H:%M:%S GMT':'rfc850_a',
    '%A, %d-%b-%Y %H:%M:%S GMT':'rfc850_broken',
    '%d-%b-%Y %H:%M:%S GMT':'rfc850_broken_nowkday',
    '%a, %b %d %H:%M:%S %Y':'asctime',
    '%Y-%m-%d %H:%M:%S %z':'iso8601',
    "%a %b %d %Y %H:%M:%S %Z%z":'abdYHMSZz',
    "%a %b %d %Y %H:%M:%S":'abdYHMS',
    "%Y-%m-%dT%H:%M:%S.%fZ":'nodejs',
    "%Y-%m-%d %H:%M:%S.%f":'YmdHMSf',
    "%Y-%m-%d %H:%M:%S.%f %Z%z":'YmdHMSfZz',
    '%Y-%m-%d %H:%M:%S %Z %z':'YmdHMSZz'
}




const FMT_TO_NAME_DICT = {
    'ddd, DD MMM YYYY HH:mm:ss G\\MT':'rfc1123',
    'DD MMM YYYY HH:mm:ss G\\MT':'rfc1123_nowkday',
    'ddd, DD MMM YYYY HH:mm:ss':'rfc1123_notz',
    'ddd, DD MMM YYYY HH:mm:ss Z':'rfc1123_tzoffset',
    'ddd, DD-MMM-YYYY HH:mm:ss G\\MT':'rfc1123_hypen',
    'dddd, DD-MMM-YY HH:mm:ss G\\MT':'rfc850',
    //'%d-%b-%y %H:%M:%S GMT':'rfc850_nowkday',
    //'%a, %d-%b-%y %H:%M:%S GMT':'rfc850_a',
    //'%A, %d-%b-%Y %H:%M:%S GMT':'rfc850_broken',
    //'%d-%b-%Y %H:%M:%S GMT':'rfc850_broken_nowkday',
    //'%a, %b %d %H:%M:%S %Y':'asctime',
    'YYYY-MM-DD HH:mm:ss Z':'iso8601',
    "ddd MMM DD YYYY HH:mm:ss z Z":'abdYHMSZz',
    "ddd MMM DD YYYY HH:mm:ss":'abdYHMS',
    //"%Y-%m-%dT%H:%M:%S.%fZ":'nodejs',
    //"%Y-%m-%d %H:%M:%S.%f":'YmdHMSf',
    //"%Y-%m-%d %H:%M:%S.%f %Z%z":'YmdHMSfZz',
    'YYYY-MM-DD HH:mm:ss z Z':'YmdHMSZz'
}

const UNITS = {
    DAY_MS: 1000*60*60 *24,
    DAY_S : 60*60 *24,
    DAY_MIN : 1440,
    DAY_HOUR : 24,
    HOUR_MS : 1000*60*60,
    HOUR_S : 60*60,
    HOUR_MIN : 60 ,
    MIN_MS : 1000*60,
    MIN_S : 60,
    S_MS : 1000,
}


module.exports = {
    UNITS,
    DICT_KL,
    PY_DATE_FMT_MD,
    DATE_FMT_MD,
    PY_NAME_TO_FMT_DICT,
    NAME_TO_FMT_DICT,
    PY_FMT_TO_NAME_DICT,
    FMT_TO_NAME_DICT
}
