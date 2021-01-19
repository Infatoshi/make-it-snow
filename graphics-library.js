function stroke(style) {
    ctx.strokeStyle = style;
}
function fill(style) {
    ctx.fillStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}



// Draw a stroke or fill rectangle with a top-left corner of (x, y), a width of w and height of h 
function rect(x, y, w, h, mode) {
    if (mode === 'fill') {
        ctx.fillRect(x, y, w, h);
    
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h)
    }}
    
    
    
    // Draw a line segment from (x1, y1) to (x2, y2)
    function line(x1, y1, x2, y2) {
        
        ctx.beginPath();
        ctx.moveTo(x1, y1); // Endpoint 1
        ctx.lineTo(x2, y2); // Endpoint 2
        ctx.stroke();
    }

    function circle(x, y, r, mode) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        if (mode === "fill") {
            ctx.fill();
        } else if (mode === "stroke") {
            ctx.stroke();
        }
    }


    function triangle(x1, y1, x2, y2, x3, y3, mode) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.fill();
        if (mode === "fill") {
            ctx.fill();
        } else if (mode === "stroke") {
            ctx.closePath();
            ctx.stroke();
        }
    }

    function font(fontsetting) {
        ctx.font = fontsetting;
    }

    function text (message, x, y, mode) {
        if (mode === "fill") {
            ctx.fillText(message, x, y);
        } else if (mode === "stroke") {
            ctx.strokeText(message, x, y);
        }
    }


    function ellipse (x, y, xRadius, yRadius, rotation, mode){
        ctx.beginPath();
        ctx.ellipse(x, y, xRadius, yRadius, rotation, mode)
        if (mode === "fill") {
            ctx.fill();
        } else if (mode === "stroke") {
            ctx.stroke();
        }
    }



    function image(img, x, y, w, h) {
        ctx.image(img, x, y, w, h);
    }

    function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
        ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
    }

    
    