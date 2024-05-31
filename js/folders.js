var selected_file = ""
var opened_folder = ""
var opened_image = ""

const FILES = {
    "Games": {
        folder: {
            "Current Games": {
                folder: {
                    "Incremental Mass Rewritten": {
                        icon_url: `https://mrredshark77.github.io/incremental-mass-rewritten/images/mass.png`,
                        link: `https://mrredshark77.github.io/incremental-mass-rewritten/`,
                    },
                    "Luck Incremental": {
                        icon_url: `https://mrredshark77.github.io/Luck-Incremental/icon.png`,
                        link: `https://mrredshark77.github.io/Luck-Incremental/`,
                    },
                    "Really Grass Cutting Incremental": {
                        icon_url: `https://mrredshark77.github.io/Really-Grass-Cutting-Incremental/images/grass.png`,
                        link: `https://mrredshark77.github.io/Really-Grass-Cutting-Incremental/`,
                    },
                    "Shark Incremental": {
                        icon_url: `https://mrredshark77.github.io/shark-incremental/textures/shark.png`,
                        link: `https://mrredshark77.github.io/shark-incremental/`,
                    },
                    "Stone-emental": {
                        icon_url: `https://mrredshark77.github.io/Stonemental/images/stone.png`,
                        link: `https://mrredshark77.github.io/Stonemental/`,
                    },
                },
            },
            "Finished Games": {
                folder: {
                    "Endless Dice": {
                        icon_url: `https://mrredshark77.github.io/Endless-Dice/images/icon.png`,
                        link: `https://mrredshark77.github.io/Endless-Dice/`,
                    },
                    "Liquids": {
                        icon_url: `https://mrredshark77.github.io/Liquids/images/Icon.png`,
                        link: `https://mrredshark77.github.io/Liquids/`,
                    },
                    "Project Claustrophobia": {
                        link: `https://mrredshark77.github.io/Capped-At-1/`,
                    },
                    "The Balanced Game": {
                        link: `https://mrredshark77.github.io/The-Balanced-Game/`,
                    },
                    "Universe Time": {
                        icon_url: `https://mrredshark77.github.io/Universe-Time/images/icon.png`,
                        link: `https://mrredshark77.github.io/Universe-Time/`,
                    },
                },
            },
            "Modded Games": {
                folder: {
                    "Antimatter Dimension NG+Reality": {
                        icon: `antimatter`,
                        link: `https://raw.githack.com/mrredshark77/ivark.github.io/master/index.html`,
                    },
                    "Antimatter Dimension Post NG+3": {
                        icon: `antimatter`,
                        link: `https://mrredshark77.github.io/post-ng-3-plus/`,
                    },
                    "Antimatter Dimensions: NG+3 Classic Reloaded": {
                        icon: `antimatter`,
                        link: `https://mrredshark77.github.io/NG-plus-3CR/`,
                    },
                    "Distance Incremental Condensed": {
                        icon_url: `https://jacorb90.me/DistInc.github.io/images/game_icon.ico`,
                        link: `https://mrredshark77.github.io/DistIncCondensed/main.html`,
                    },
                    "Distance Incremental v2.1 Fan": {
                        icon_url: `https://jacorb90.me/DistInc.github.io/images/game_icon.ico`,
                        link: `https://mrredshark77.github.io/DistInc.github.io/main.html`,
                    },
                    "The Color Tree": {
                        link: `https://mrredshark77.github.io/Color-Tree/`,
                    },
                },
            },
            "Old Games": {
                folder: {
                    "Electrical Incremental": {
                        link: `https://mrredshark77.github.io/Electrical-Incremental/`,
                    },
                    "Incremental Mass": {
                        link: `https://mrredshark77.github.io/incremental-mass/`,
                    },
                    "Incremental Merge": {
                        icon_url: `https://mrredshark77.github.io/incremental-merge/images/icon.png`,
                        link: `https://mrredshark77.github.io/incremental-merge/`,
                    },
                    "Replicanti Incremental": {
                        link: `https://mrredshark77.github.io/Replicanti-Incremental/`,
                    },
                    "The Color Tree (OLD)": {
                        link: `https://mrredshark77.github.io/the-color-tree/`,
                    },
                    "The Treemental": {
                        link: `https://mrredshark77.github.io/The-Treemental/`,
                    },
                    "The Uninfinity": {
                        link: `https://mrredshark77.github.io/the-uninfinity/`,
                    },
                    "Unlimited Alphabets": {
                        link: `https://mrredshark77.github.io/unlimited-alphabets/`,
                    },
                },
            },
            "Prototype Games": {
                folder: {
                    "Antimatter Dimensions: Reborn": {
                        icon: `antimatter`,
                        link: `https://mrredshark77.github.io/antimatter-dimensions-reborn/`,
                    },
                    "The Uninfinity Respecced": {
                        link: `https://mrredshark77.github.io/the-uninfinity-respecced/`,
                    },
                },
            },
        },
    },
    "Other Tools": {
        folder: {
            "Sharky MineSweeper": {
                icon: `explosion`,
                link: `https://mrredshark77.github.io/sharky-minesweeper/`,
            },
        },
    },
    "Pictures": {
        folder: {
            "Cats": {
                icon_url: `https://www.iconarchive.com/download/i29422/raindropmemory/harmonia-pastelis/hp-folder-cat.ico`,
                folder: {
                    "Angry Black Kitten": {
                        img: `https://media.istockphoto.com/id/877332938/photo/frightened-black-kitten-standing-in-front-of-white-background.jpg?s=170667a&w=0&k=20&c=Fs-28gHUvtJEkBOrQ1TXZ-8bz46mmAyAivX_l3AmLYI=`,
                    },
                    "Black Cat": {
                        img: `https://static.boredpanda.com/blog/wp-content/uploads/2021/08/Meet-MeonJi-the-black-cat-that-is-the-instagram-sensation-6124b05b9ee2a__700.jpg`,
                    },
                    "Cute Cat Giving Thumbs Up": {
                        img: `https://media.istockphoto.com/id/898220516/photo/cute-cat-giving-thumbs-up.jpg?s=612x612&w=0&k=20&c=iBe6lUXwdZg3SehLqtUOw31aDWcOgNRSd28ybI46sms=`,
                    },
                    "Maxwell": {
                        img: `https://static.planetminecraft.com/files/image/minecraft/texture-pack/2023/619/16473147-maxwell_l.jpg`,
                    },
                    "Maxwell 2": {
                        img: `https://preview.redd.it/r5njan3pu4p91.jpg?width=1037&format=pjpg&auto=webp&v=enabled&s=8be1dab4e1232d526e983c59c629297bcdeb6aae`,
                    },
                    "Maxwell 3": {
                        img: `https://preview.redd.it/movn6i1pu4p91.jpg?width=1080&crop=smart&auto=webp&v=enabled&s=3f417fc25b09d3bab0cbfd043f0341dbedcd0be9`,
                    },
                    "4 dabloons": {
                        img: `https://cdn.vox-cdn.com/uploads/chorus_asset/file/24220015/IMG_6434.jpg`,
                    },
                },
            },
            "Sharks": {
                folder: {
                    "Sharky": {
                        img: `https://i.pinimg.com/originals/ab/ac/cd/abaccd1a635ecf1b46e91da515275777.jpg`,
                    },
                    "Sharky 2": {
                        img: `https://i.pinimg.com/originals/37/16/4f/37164fdf207ca11d3ca5f5495a0abf50.jpg`,
                    },
                    "Sharky 3": {
                        img: `https://i.pinimg.com/originals/c8/6b/e6/c86be63ee91c87d2c0bb62be90299721.jpg`,
                    },
                    "Sharky 4": {
                        img: `https://i.pinimg.com/736x/68/0b/3d/680b3df1f0b81b1d78850b9effcffcfd.jpg`,
                    },
                    "Sharky 5": {
                        img: `http://i.imgur.com/9qImCCf.jpg`,
                    },
                    "Sharky Selfie": {
                        img: `https://i.pinimg.com/originals/df/62/c1/df62c186c84111c02309073f4561d795.jpg`,
                    },
                },
            },
            "Test": {
                img: `images/Test.png`,
            },
        },
    },
    "Command Prompt": {
        cmd: true,
        icon: `command`,
    },
}

function setupMainFilesHTML() {
    let h = ""

    for (let fn in FILES) {
        let f = FILES[fn]

        let icon = f.icon

        if (!icon) icon = f.img ? 'painting' : f.folder ? "folder" : "program"

        h += `
        <div class="file-div" id="file-${fn}" onclick="selectFile('${fn}')">
            <img src="images/${icon}.png">
            <div class="file-name">${fn}</div>
        </div>
        `
    }

    (new Element('main_files_table')).setHTML(h)
}

function selectFile(...files) {
    let r = files.join('/')
    let d = (()=>FILES)()

    for (let i in files) {
        d = i > 0 ? d.folder[files[i]] : d[files[i]]
    }

    if (selected_file == r) {
        if (opened_folder != r && d.folder) {
            opened_folder = r
            setupFolderFiles(d.folder,files.length)
        }
        else if (d.link) window.open(d.link)
        else if (opened_image != r && d.img) {
            opened_image = r
            tmp.el.image_title.setHTML(r)
            document.getElementById('img-selected').setAttribute('src',d.img)
        }
        else if (d.cmd) {
            tmp.el['cmd-div'].setDisplay(true)
        }
    }

    selected_file = r

    updateMainFilesHTML()
}

function closeFolder() {
    opened_folder = ""

    updateMainFilesHTML()
}

function closeImage() {
    opened_image = ""

    updateMainFilesHTML()
}

function setupFolderFiles(data,depth) {
    let h = "", of = opened_folder.split('/')

    if (depth > 1) {
        h += `
        <div class="file-div" onclick="backFolder()">
            <img src="images/opened_folder.png">
            <div class="file-name">...</div>
        </div>
        `
    }

    for (let fn in data) {
        let f = data[fn]

        let icon = f.icon

        if (!icon) icon = f.img ? 'painting' : f.folder ? "folder" : "program"

        let sf = ``

        for (let i in of) sf += (i>0?",":"")+`'${of[i]}'`

        h += `
        <div class="file-div" id="file-${opened_folder}/${fn}" onclick="selectFile(${sf},'${fn}')">
            <img src="${f.icon_url||`images/${icon}.png`}">
            <div class="file-name">${fn}</div>
        </div>
        `
    }

    tmp.el.folder_table.setHTML(h)
}

function backFolder() {
    let s = opened_folder.split('/')
    let bf = s.slice(0,s.length-1)
    let d = (()=>FILES)()

    opened_folder = bf.join('/')
    selected_file = ""

    for (let i in bf) {
        d = i > 0 ? d.folder[bf[i]] : d[bf[i]]
    }

    setupFolderFiles(d.folder,bf.length)

    updateMainFilesHTML()
}

function updateMainFilesHTML() {
    let ff = selected_file.split("/")

    for (let fn in FILES) {
        let f = tmp.el["file-"+fn]

        f.setClasses({'file-div': true, 'selected': ff.length == 1 && ff[0] == fn})
    }

    tmp.el['folder-div'].setDisplay(opened_folder != "")

    if (opened_folder != "") {
        tmp.el.folder_title.setHTML(opened_folder)

        let ffs = document.getElementById('folder_table').children

        for (let i = 0; i < ffs.length; i++) {
            let ff = ffs[i]

            ff.className = "file-div " + (selected_file == ff.id.split('file-')[1] ? "selected" : "")
        }
    }

    tmp.el['image-div'].setDisplay(opened_image != "")
}