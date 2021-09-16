var diff = 0;
var date = Date.now();
var player

const GAMES = {
    openURL(url) { window.open(url) },
    main: {
        ua: {
            id: 'ime',
            title: "Unlimited Alphabets",
            type: "main",
            link: "https://mrredshark77.github.io/unlimited-alphabets",
        },
        ime: {
            id: 'ime',
            title: "Incremental Merge",
            type: "main",
            link: "https://mrredshark77.github.io/incremental-merge",
        },
        tu: {
            id: 'tu',
            title: "The Uninfinity",
            type: "main",
            link: "https://mrredshark77.github.io/the-uninfinity",
        },
        ims: {
            id: 'ims',
            title: "Incremental Mass",
            type: "main",
            link: "https://mrredshark77.github.io/incremental-mass",
        },
        ei: {
            id: 'ei',
            title: "Electrical Incremental",
            type: "main",
            link: "https://mrredshark77.github.io/Electrical-Incremental",
        },
        tt: {
            id: 'tt',
            title: "The Treemental",
            type: "main",
            link: "https://mrredshark77.github.io/The-Treemental/",
        },
        tbg: {
            id: 'tbg',
            title: "The Balanced Game",
            type: "main",
            link: "https://mrredshark77.github.io/The-Balanced-Game/",
        },
        tcto: {
            id: 'tcto',
            title: "The Color Tree (OLD)",
            type: "main",
            link: "https://mrredshark77.github.io/the-color-tree/",
        },
        liq: {
            id: 'liq',
            title: "Liquids",
            type: "main",
            link: "https://mrredshark77.github.io/Liquids/",
        },
    },
    mod: {
        di: {
            id: 'di',
            title: "Distance Incremental v2.1 Fan",
            type: "mod",
            link: "https://mrredshark77.github.io/DistInc.github.io/main.html",
        },
        dic: {
            id: 'dic',
            title: "Distance Incremental Condensed",
            type: "mod",
            link: "https://mrredshark77.github.io/DistIncCondensed/main.html",
        },
        adr: {
            id: 'adr',
            title: "Antimatter Dimension NG+Reality",
            type: "mod",
            link: "https://mrredshark77.github.io/IvarK.github.io/",
        },
        tdt: {
            id: 'tdt',
            title: "The Distance Tree",
            type: "mod",
            link: "https://mrredshark77.github.io/The-Modding-Tree/",
        },
        tct: {
            id: 'tct',
            title: "The Color Tree",
            type: "mod",
            link: "https://mrredshark77.github.io/Color-Tree/",
        },
    },
    prototype: {
        tur: {
            id: 'tur',
            title: "The Uninfinity Respecced",
            type: "prototype",
            link: "https://mrredshark77.github.io/the-uninfinity-respecced/",
        },
        ri: {
            id: 'ri',
            title: "Replicanti Incremental",
            type: "prototype",
            link: "https://mrredshark77.github.io/Replicanti-Incremental/",
        },
        imr: {
            id: 'imr',
            title: "Incremental Mass Rewritten",
            type: "prototype",
            link: "https://mrredshark77.github.io/incremental-mass-rewritten/",
        },
    },
    tba: {
        imr: {
            id: 'imr',
            title: "Incremental Merge v1.0 Rewritten",
            type: "tba",
        },
    }
}

function loop() {
    diff = Date.now()-date;
    calc(diff);
    date = Date.now();
}

function format(ex, acc=3) {
    ex = E(ex)
    if (ex.isInfinite()) return 'Infinity'
    let e = ex.log10().floor()
    if (e.lt(9)) {
        if (e.lt(3)) {
            return ex.toFixed(acc)
        }
        return ex.floor().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    } else {
        if (ex.gte("eeee9")) {
            let slog = ex.slog()
            return (slog.gte(1e9)?'':E(10).pow(slog.sub(slog.floor())).toFixed(3)) + "F" + format(slog.floor(), 0)
        }
        let m = ex.div(E(10).pow(e))
        return (e.log10().gte(9)?'':m.toFixed(3))+'e'+format(e,0)
    }
}

setInterval(loop, 50)