setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    
    h_rotation = 30*htime + mtime/2    // (12 hour -> 360degree | 1hr -> 30degree) ++ (60min -> 30degree | 1min -> 1/2degree)
    m_rotation = 6*mtime + stime/10;               // (60min -> 360degree | 1min -> 6degree) ++ (60sec -> 6degree | 1sec -> 1/10degree)
    s_rotation = 6*stime;                          // 60secs -> 360degree | 1sec -> 6degree

    hour.style.transform = `rotate(${h_rotation}deg)`;
    min.style.transform = `rotate(${m_rotation}deg)`;
    sec.style.transform = `rotate(${s_rotation}deg)`;
}, 1000);

