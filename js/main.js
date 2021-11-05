var tmp = {
    time: 0,
}
var diff = 0;
var date = Date.now();

function setupHTML() {
    let contents = new Element("contents")
    let table = ""
    for (let x in CONTENTS) {
        let c = CONTENTS[x]
        table += `
        <div id="content_${x}" class="content" ${c.url?`onclick="window.open('${c.url}')"`:""}>
            <div style="height: 94%">
                <div class="title">${c.title}</div>
                ${c.description?`<div class="description">${c.description}</div>`:""}
            </div>
            <div class="category">${CONTENTS_CATEGORY[c.category]}</div>
        </div>
        `
    }
    contents.setHTML(table)

    tmp.el = {}
	let all = document.getElementsByTagName("*")
	for (let i=0;i<all.length;i++) {
		let x = all[i]
		tmp.el[x.id] = new Element(x)
	}
}

function calc(dt) {
    tmp.time += dt
}

function updateTemp() {

}

function updateHTML() {

}

function loop() {
    diff = Date.now()-date;
    updateTemp()
    updateHTML()
    calc(diff/1000);
    date = Date.now();
}

function loadApp() {
    setupHTML()
    setInterval(loop,50)
}