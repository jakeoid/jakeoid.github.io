function undraw() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

function draw() {
    undraw();
    var c = document.getElementById("myCanvas");
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    c.width = width * 20;
    c.height = height * 20;
    var str = document.getElementById("spanText").value;
    var str = "\n" + str;
    console.log(str.length + ".")
    var x = 20;
    var z = -20;
    for (var i = 0, len = str.length; i < len; i++) {
        var chars = str.charAt(i);
        console.log(chars)
        if (chars == "#") {
            var ctx = c.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(x, z, 20, 20);
            var x = x + 20;
        }
        if (chars == ".") {
            var x = x + 20;
        }
        if (chars == "\n") {
            var z = z + 20;
            var x = 0;
        }
    }
}

function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    var filenameValue = document.getElementById("filename").value.toLowerCase().replace(/\s/gi, '_');
    downloadCanvas(this, 'myCanvas', filenameValue + '.png');
}, false);