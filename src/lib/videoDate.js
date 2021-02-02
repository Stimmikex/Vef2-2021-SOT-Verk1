export function videoLength(videodataVideos) {
  const timedur = videodataVideos;
  let theTime = '';
  if (timedur < 10) {
    theTime = `0:0${timedur}`;
    return theTime;
  }
  if (timedur > 9 && timedur < 60) {
    theTime = `0:${timedur}`;
    return theTime;
  }
  if (timedur > 59) {
    theTime = `${Math.floor(timedur / 60)}:`;
    if (timedur % 60 < 10) {
      theTime = `${theTime}0${(timedur % 60)}`;
    } else {
      theTime = `${theTime}${(timedur % 60)}`;
    }
    return theTime;
  }
  return '';
}

export function timeStamp(videodataVideos) {
  const d = new Date();
  const n = d.getTime();
  let totaltime = n - parseInt(videodataVideos, 10);
  totaltime /= (1000 * 60 * 60);
  totaltime = Math.round(totaltime);
  let LongAgo = '';

  if (totaltime < 2) {
    LongAgo = ('Fyrir 1 klukkustund síðan');
    return LongAgo;
  }
  if (totaltime > 2 && totaltime < 48) {
    LongAgo = (`Fyrir ${totaltime} klukkustundum síðan`);
    return LongAgo;
  }
  if (totaltime < 48 && totaltime > 23) {
    LongAgo = ('Fyrir 1 degi síðan');
    return LongAgo;
  }
  if (totaltime > 48 && totaltime < 168) {
    LongAgo = `Fyrir ${Math.round(totaltime / 24)} dögum síðan`;
    return LongAgo;
  }
  if (totaltime > 167 && totaltime < (168 * 2)) {
    LongAgo = ('Fyrir 1 viku síðan');
    return LongAgo;
  }
  if (totaltime > (168 * 2) && totaltime < 720) {
    LongAgo = `Fyrir ${Math.round((totaltime / 24) / 7)} vikum síðan`;
    return LongAgo;
  }
  if (totaltime > 720 && totaltime < (720 * 2)) {
    LongAgo = ('Fyrir 1 mánuði síðan');
    return LongAgo;
  }
  if (totaltime > (720 * 2) && totaltime < 8760) {
    LongAgo = `Fyrir ${Math.round(((totaltime / 24) / 30))} mánuðum síðan`;
    return LongAgo;
  }
  if (totaltime > 8760 && totaltime < (8760 * 2)) {
    LongAgo = ('Fyrir 1 ári síðan');
    return LongAgo;
  }
  if (totaltime > (8760 * 2)) {
    LongAgo = `Fyrir ${Math.round((totaltime / 24) / 365)} árum síðan`;
    return LongAgo;
  }
  return LongAgo;
}
