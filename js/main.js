var tmp = {
    time: 0,
}
var diff = 0;
var date = Date.now();

function setupHTML() {
    setupMainFilesHTML()

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

function getaf(x) { return x < 10 ? "0"+x : x }

function updateHTML() {
    let d = new Date()

    let [h,m,s] = [d.getHours(),d.getMinutes(),d.getSeconds()]

    tmp.el.time.setHTML(getaf(h)+":"+getaf(m)+":"+getaf(s))
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
    updateMainFilesHTML()
    setTimeout(() => {
        tmp.el.app.setDisplay(true)
    }, 100);
    setInterval(loop,50)
}