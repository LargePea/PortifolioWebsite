var tabcontents, tablinks;
tabcontents = document.getElementsByClassName("tab-content");
tablinks = document.getElementsByClassName("tab-links");


function OpenTab(event, tabName){
    for(i = 0; i < tabcontents.length; i++){
        tabcontents[i].style.display = "none";
    }

    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" current-tab", "");
    }

    document.getElementById(tabName).style.display = "grid";
    event.currentTarget.className += " current-tab";
}