// BYPS 2026-2027 season: every date, theme, and recurring rule lives here.
// Used by the home page (index.html) and the full calendar (calendar/index.html),
// so a change here shows up in both places.
//
// Date keys are "YYYY-MM-DD" with 0-based months, matching JavaScript Date:
// "2026-11-06" is December 6, 2026. "2027-00-24" is January 24, 2027.

const BYPS = (() => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const yearPlan = [
        { year: 2026, month: 8 }, { year: 2026, month: 9 }, { year: 2026, month: 10 },
        { year: 2026, month: 11 }, { year: 2027, month: 0 }, { year: 2027, month: 1 },
        { year: 2027, month: 2 }, { year: 2027, month: 3 }, { year: 2027, month: 4 }
    ];

    const holidays = {
        "2026-08-07": "Labor Day",
        "2026-10-26": "Thanksgiving",
        "2026-11-25": "Christmas Day",
        "2027-00-01": "New Year's Day",
        "2027-00-18": "MLK Day (No School)",
        "2027-01-15": "Presidents Day (No School)",
        "2027-02-28": "Easter Sunday",
        "2027-04-31": "Memorial Day"
    };

    const schoolEvents = {
        "2026-08-07": "No School - Labor Day",
        "2026-08-18": "Harvest Auction",
        "2026-08-28": "No School - Staff Dev",
        "2026-09-19": "MS Fall Concert",
        "2026-09-22": "No School - Teacher In-service",
        "2026-09-23": "No School - Teacher In-service",
        "2026-10-25": "No School - Thanksgiving",
        "2026-10-26": "No School - Thanksgiving",
        "2026-10-27": "No School - Thanksgiving",
        "2026-11-10": "MS Christmas Concert",
        "2026-11-21": "HS Exams Start",
        "2026-11-24": "No School - Christmas Break",
        "2027-00-18": "No School - Staff Dev",
        "2027-01-12": "No School - Winter Break",
        "2027-01-15": "No School - Winter Break",
        "2027-02-11": "HS Washington Trip",
        "2027-02-12": "No School - CSI Workshop",
        "2027-02-22": "Spring Break",
        "2027-02-23": "Spring Break",
        "2027-02-24": "Spring Break",
        "2027-02-25": "Spring Break",
        "2027-02-26": "Spring Break",
        "2027-03-30": "Grandparents Day / Banquet",
        "2027-04-07": "MS CSI Music Festival",
        "2027-04-14": "Track & Field @ DCS",
        "2027-04-25": "HS Exams Start",
        "2027-04-27": "Last Day of School"
    };

    const specificDates = {
        "2026-08-13": [{ title: "Kick-off Bonfire (6:30-8:00)", cat: "activity" }],
        "2026-08-30": [{ title: "Fight Hunger Food Drive", cat: "activity" }],
        "2026-09-11": [{ title: "10:24 Small Groups", cat: "1024" }], // Oct 11
        "2026-09-18": [{ title: "Joint Worship Night (6:30pm): Contemporary Praise + Small Groups", cat: "event" }], // Oct 18
        "2026-08-23": [{ title: "SWaT Kick-off", cat: "swat" }], // Sept 23
        "2026-09-21": [{ title: "Alto Chase & Bonfire (7:30-9:00)", cat: "activity" }], // Oct 21
        "2026-09-28": [{ title: "Fundraiser Fiesta Supper", cat: "activity" }], // Oct 28
        "2026-11-06": [{ title: "Caroling & Christmas Party", cat: "event" }],
        "2026-11-20": [{ title: "Candlelight Service", cat: "event" }],
        "2027-00-03": [{ title: "Alumni Supper", cat: "activity" }],
        "2027-00-07": [{ title: "Winter Retreat (WI)", cat: "activity" }], // Jan 7
        "2027-00-08": [{ title: "Winter Retreat", cat: "activity" }],
        "2027-00-09": [{ title: "Winter Retreat", cat: "activity" }],
        "2027-00-10": [{ title: "Winter Retreat", cat: "activity" }],
        "2027-00-24": [{ title: "10:24 Small Groups", cat: "1024" }], // Jan 24th
        "2027-01-21": [{ title: "Guys/Girls Night", cat: "activity" }],
        "2027-01-24": [{ title: "Spaghetti Supper Fundraiser", cat: "activity" }], // Feb 24th (Wed)
        "2027-03-10": [{ title: "FunNight: VB & Bake Sale", cat: "activity" }],
        "2027-03-28": [{ title: "Flash Mob / RAK Night", cat: "activity" }],
        "2027-04-02": [
            { title: "BYPS Leadership Meeting", cat: "event" },
            { title: "SWaT Leadership Meeting", cat: "swat" }
        ],
        "2027-04-05": [{ title: "EOY Fun Night: Bowling", cat: "activity" }],
        "2027-04-08": [{ title: "EOY SWaT Night", cat: "swat" }],
        "2027-04-16": [{ title: "EOY Celebration Sunday", cat: "event" }]
    };

    // 2026-2027 Year Theme: Reformed Spiritual Warfare -- Principles of War
    // One principle per 10:24 Small Groups night, in order.
    const seriesTheme = {
        "2026-08-20": { num: 1, title: "The Mission" },
        "2026-09-11": { num: 2, title: "Fighting" },
        "2026-10-01": { num: 3, title: "Focused Effort" },
        "2026-10-15": { num: 4, title: "Guard Yourself" },
        "2027-00-24": { num: 5, title: "Fight Together" },
        "2027-01-07": { num: 6, title: "Stay Connected" },
        "2027-02-07": { num: 7, title: "Small Moves" },
        "2027-03-18": { num: 8, title: "Never Quit" }
    };

    // 2026-2027 SWaT Series: Middle School Apologetics
    // One topic per regular SWaT (MS) night, in order.
    const swatTheme = {
        "2026-09-14": { num: 1, title: "Know Why" },
        "2026-10-11": { num: 2, title: "God Exists" },
        "2027-00-13": { num: 3, title: "Trust It" },
        "2027-02-10": { num: 4, title: "He's Alive" },
        "2027-03-14": { num: 5, title: "God & Evil" }
    };

    function dateKey(year, month, day) {
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

    function weekdaysInMonth(year, month, dow) {
        const days = [];
        const d = new Date(year, month, 1);
        while (d.getMonth() === month) {
            if (d.getDay() === dow) days.push(d.getDate());
            d.setDate(d.getDate() + 1);
        }
        return days;
    }

    // Everything on one day, in display order. Each entry is
    // { cat, title, theme? } where cat is holiday, school, 1024, activity, swat, or event.
    function entriesFor(year, month, day, { showSchool = false } = {}) {
        const key = dateKey(year, month, day);
        const sundays = weekdaysInMonth(year, month, 0);
        const weds = weekdaysInMonth(year, month, 3);
        const entries = [];

        const isSeptember = (month === 8 && year === 2026);
        const isOctober = (month === 9 && year === 2026);
        const isDecember = (month === 11 && year === 2026);
        const isFebruary = (month === 1 && year === 2027);
        const isMarch = (month === 2 && year === 2027);
        const isApril = (month === 3 && year === 2027);
        const isMay = (month === 4 && year === 2027);
        const isJanuary = (month === 0 && year === 2027);

        const smallGroups = () => ({ cat: "1024", title: "10:24 Small Groups", theme: seriesTheme[key] && seriesTheme[key].title });

        if (holidays[key]) entries.push({ cat: "holiday", title: holidays[key] });
        if (showSchool && schoolEvents[key]) entries.push({ cat: "school", title: schoolEvents[key] });

        // 10:24 Small Groups: 1st & 3rd Sundays, with the months below handled by specificDates
        if (sundays[0] === day && !isSeptember && !isOctober && !isDecember && !isJanuary && !isApril && !isMay) {
            entries.push(smallGroups());
        }
        if (sundays[2] === day) {
            const isMarch21_2027 = (isMarch && day === 21);
            if (!isOctober && !isDecember && !isJanuary && !isFebruary && !isMay && !isMarch21_2027) {
                entries.push(smallGroups());
            }
        }

        // Activity / Fundraiser: 4th Wednesday
        if (weds[3] === day) {
            const excludedDates = ["2026-09-28", "2026-10-25", "2026-11-23", "2027-00-27", "2027-01-24", "2027-02-24", "2027-03-28"];
            if (!isMay && !excludedDates.includes(key) && !isSeptember && !isOctober) {
                entries.push({ cat: "activity", title: "Activity/Fundraiser" });
            }
        }

        // SWaT: 2nd Wednesday
        if (weds[1] === day && !isMay && !isSeptember) {
            let label = "SWaT (MS)";
            if (isDecember) label = "SWaT: Caroling & Christmas Party";
            if (isFebruary) label = "SWaT: Grands Valentines Supper & BINGO";
            entries.push({ cat: "swat", title: label, theme: swatTheme[key] && swatTheme[key].title });
        }

        (specificDates[key] || []).forEach(entry => {
            entries.push(entry.cat === "1024" ? smallGroups() : { cat: entry.cat, title: entry.title });
        });

        return entries;
    }

    // Upcoming youth events (no holidays or school events), from `from` to the end of the season.
    // Multi-day events (like Winter Retreat) collapse into one entry with an endDate.
    // `cats` limits the list to some categories, e.g. ["swat"] for the SWaT site.
    function upcoming(from = new Date(), limit = 6, cats = null) {
        const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
        const last = yearPlan[yearPlan.length - 1];
        const end = new Date(last.year, last.month + 1, 0);
        const list = [];
        for (const d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
            const dayBefore = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
            entriesFor(d.getFullYear(), d.getMonth(), d.getDate())
                .filter(e => e.cat !== "holiday" && e.cat !== "school")
                .filter(e => !cats || cats.includes(e.cat))
                .forEach(e => {
                    const run = list.find(x => x.cat === e.cat
                        && (x.endDate || x.date).getTime() === dayBefore.getTime()
                        && (x.title.startsWith(e.title) || e.title.startsWith(x.title)));
                    if (run) run.endDate = new Date(d);
                    else list.push({ ...e, date: new Date(d) });
                });
            if (list.length > limit) break;
        }
        return list.slice(0, limit);
    }

    // A series as a dated list, in order: [{ num, title, date }]
    function series(themeMap) {
        return Object.entries(themeMap)
            .map(([key, t]) => {
                const [y, m, d] = key.split("-").map(Number);
                return { ...t, date: new Date(y, m, d) };
            })
            .sort((a, b) => a.num - b.num);
    }

    return {
        monthNames, yearPlan, entriesFor, upcoming,
        smallGroupsSeries: series(seriesTheme),
        swatSeries: series(swatTheme)
    };
})();
