function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("data.json", function(text){
    var data = JSON.parse(text);
    for(var i=1; i<=20; i++) {
        document.getElementsByClassName("pf").item(i-1).setAttribute("id","pf"+i);
        document.getElementsByClassName("name").item(i-1).setAttribute("id","name"+i);
        document.getElementsByClassName("date").item(i-1).setAttribute("id","date"+i);
        document.getElementsByClassName("img").item(i-1).setAttribute("id","img"+i);
        document.getElementsByClassName("caption").item(i-1).setAttribute("id","caption"+i);
        document.getElementsByClassName("likes").item(i-1).setAttribute("id","likes"+i);
        document.getElementById("pf" + i).src = data[i - 1].profile_image;
        document.getElementById("name" + i).innerHTML = data[i - 1].name;
        var date = data[i - 1].date;
        var finalDate = date.split(" ");
        document.getElementById("date" + i).innerHTML = finalDate[0];
        document.getElementById("img" + i).src = data[i - 1].image;
        document.getElementById("caption" + i).innerHTML = data[i - 1].caption;
        document.getElementById("likes" + i).innerHTML = data[i - 1].likes;
    }
});

var flag=2;
function loadMore(){
    if (flag === 2) {
        document.getElementById("second").style.display = 'inline-block';
        flag++;
    }
    else if (flag === 3) {
        document.getElementById("third").style.display = 'inline-block';
        flag++;
    }
    else if (flag === 4) {
        document.getElementById("fourth").style.display = 'inline-block';
        flag++;
    }
    else if (flag === 5) {
        document.getElementById("fifth").style.display = 'inline-block';
        document.getElementById("button").style.display='none';
    }

}
function liked(element){
        if(element.getAttribute('class')==='like') {
            element.src = 'icons/heartRed.svg';
            element.setAttribute('class','liked')
            element.parentElement.lastChild.previousSibling.innerHTML = parseInt(element.parentElement.lastChild.previousSibling.innerHTML,10)+1;
        }
        else {
            element.src='icons/heart.svg'
            element.setAttribute('class','like')
            element.parentElement.lastChild.previousSibling.innerHTML = parseInt(element.parentElement.lastChild.previousSibling.innerHTML,10)-1;
        }
}




