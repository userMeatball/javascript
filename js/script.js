var commentList = document.querySelector("#comments");
commentList.addEventListener("click", function(e){

    if (e.target.classList[0] == "btn") {
        let paraElem = e.target.previousElementSibling;
        if (paraElem.className == "para close") {
            paraElem.className = "para open";
            e.target.textContent = "YES!";
        }
        else if (paraElem.className == "para open") {
            paraElem.className = "para close";
            e.target.textContent = "ME!";
        } 
    }
    if (e.target.classList[0] == "delete") {
        let container = e.target.parentElement;
        commentList.removeChild(container);
    }

});

const btnMore = document.getElementById("btnMore");
const comments = document.getElementById("comments");
btnMore.onclick = function() {

    btn = document.getElementsByClassName("btn");
    //create container
    let container = document.createElement("div");
    container.classList.add("commentContainer");
    //append container
    comments.append(container);

    //create p element
    let paraElem = document.createElement("p");
    //create class name
    paraElem.classList.add("para", "close");
    //create paragraph text
    paraElem.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil ad maiores delectus expedita deleniti totam distinctio fugiat excepturi illum? Incidunt sed a atque repellat fugit. Neque, id animi. Impedit dolorum aperiam facere provident tempore quos veritatis repudiandae nobis maxime, temporibus inventore, est minus sapiente ipsam. Dolorum provident doloremque enim soluta, tenetur placeat libero sapiente dolor. Fuga dolorum odio ex veritatis voluptatum, laudantium porro voluptatibus mollitia temporibus vitae dolor quisquam iusto error quia praesentium. Quae laudantium unde quos itaque voluptatibus provident, minima minus consequatur voluptatem beatae temporibus quam quas nihil atque perferendis nemo eum! Beatae, reiciendis. Libero, ad repudiandae optio vitae nisi excepturi explicabo illo numquam, id veniam commodi quos harum! Esse eaque tempore excepturi dolores quibusdam suscipit sed, corporis obcaecati natus nulla cum, molestias velit sit quidem illo. Veritatis magni magnam doloremque architecto sint, at nesciunt eum est commodi, culpa impedit eveniet nam. Praesentium saepe minima itaque quo tenetur commodi dolore reiciendis enim eligendi, libero sapiente, officia illo consequatur et nesciunt ab dolores aut possimus adipisci cupiditate suscipit, accusantium pariatur! Iusto esse expedita ipsum accusamus illum hic magnam deserunt laboriosam nam aperiam quia adipisci veniam culpa ut itaque, eum velit? Eum nostrum molestiae ipsam, dolorem alias autem non atque numquam aut facere illo amet, porro nam nisi. Iste porro ipsa consectetur  tenetur commodi dolore reiciendis enim eligendi, libero sapiente, officia illo consequatur et nesciunt ab dolores aut possimus adipisci cupiditate suscipit, accusantium pariatur! Iusto esse expedita ipsum accusamus illum hic magnam deserunt laboriosam nam aperiam quia adipisci veniam culpa ut itaque, eum velit? Eum nostrum molestiae ipsam, dolorem alias autem non atque numquam aut facere illo amet, porro nam nisi. Iste porro ipsa consectetur ";
    //append p
    container.appendChild(paraElem);

    //create button element
    let paraBtn = document.createElement("button");
    //create button class name
    paraBtn.className = "btn";
    //create button text
    paraBtn.textContent = "ME!";
    //append button
    container.appendChild(paraBtn);

    //create edit element
    let editBtn = document.createElement("button");
    //creat button class name
    editBtn.className = "edit";
    //create button text
    editBtn.textContent = "EDIT!";
    //append button
    container.appendChild(editBtn);

    //create del element
    let delBtn = document.createElement("button");
    //create del class name
    delBtn.className = "delete";
    //create del text
    delBtn.textContent = "DEL!";
    //append button
    container.appendChild(delBtn);

};