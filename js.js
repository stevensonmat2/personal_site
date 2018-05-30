


// function toggle_visibility(id) {
//     var e = document.getElementById(id);
//     if(e.style.display == 'block')
//         e.style.display = 'none';
//     else
//         e.style.display = 'block';
// }

function toggle_visibility(id) {
    var e = document.getElementById(id);
    var x = document.getElementsByClassName("page_item");
    var i;
    for (i = 0; i < x.length; i++) {
        console.log ('hello')
        x[i].style.display = "none";
    //     else
    //         i.style.display = 'block';
    e.style.color = 'white';
    e.style.display = 'block';
    }
}

// function toggle_visibility(id) {
//     document.getElementById('id').style.display = 'block';
//     var divsToHide = document.getElementsByClassName("menu_item"); //divsToHide is an array
//     for(var i = 0; i < divsToHide.length; i++){
//         menu_item[i].style.display = "none"; // depending on what you're doing
//     }
// }
