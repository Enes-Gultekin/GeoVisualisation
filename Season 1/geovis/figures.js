var images = document.getElementsByTagName('img'); 

for(var i = 0; i < images.length; i++) {
    images[i].src = images[i].src.replace('file:///','');
    
    if (images[i].alt != "") {
        let img_code = images[i].outerHTML;
        let figure = "<figure>" + img_code + " <figcaption>" + images[i].alt + "</figcaption></figure>";
        images[i].outerHTML = figure;
    }
    
}