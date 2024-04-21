const btnMore = document.getElementById("btnMore");
const comments = document.getElementById("comments");
var commentCount = 0;
var btn = new Array();

btnMore.onclick = function() {
    commentCount++;
    btn = document.getElementsByClassName("btn", commentCount.toString());
    //create container
    let container = document.createElement("div");
    container.classList.add("commentContainer");
    //append container
    comments.append(container);

    //create p element
    let paraElem = document.createElement("p");
    //create class name
    paraElem.classList.add("para", "close", commentCount.toString());
    //create paragraph text
    paraElem.textContent = "Lorem ";
    //append p
    container.appendChild(paraElem);

    //create button element
    let paraBtn = document.createElement("button");
    //create button class name
    paraBtn.classList.add("btn", commentCount.toString());
    //create button text
    paraBtn.textContent = "ME!";
    //append button
    container.appendChild(paraBtn);
};

function paraOpen(commentNum) {
    //when activated splice the class name of btn clicked to get the comment num eg "btn 0" then edit corrisonding para className like below
}

// btn.onclick = function() {
//     if (para.className == "para close") {
//         para.className = "para open";
//         btn.textContent = "YES!";
//     }
//     else {
//         para.className = "para close";
//         btn.textContent = "ME!"
//     }
// };