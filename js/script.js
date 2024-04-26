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
    paraElem.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nihil ad maiores delectus expedita deleniti totam distinctio fugiat excepturi illum? Incidunt sed a atque repellat fugit. Neque, id animi. Impedit dolorum aperiam facere provident tempore quos veritatis repudiandae nobis maxime, temporibus inventore, est minus sapiente ipsam. Dolorum provident doloremque enim soluta, tenetur placeat libero sapiente dolor. Fuga dolorum odio ex veritatis voluptatum, laudantium porro voluptatibus mollitia temporibus vitae dolor quisquam iusto error quia praesentium. Quae laudantium unde quos itaque voluptatibus provident, minima minus consequatur voluptatem beatae temporibus quam quas nihil atque perferendis nemo eum! Beatae, reiciendis. Libero, ad repudiandae optio vitae nisi excepturi explicabo illo numquam, id veniam commodi quos harum! Esse eaque tempore excepturi dolores quibusdam suscipit sed, corporis obcaecati natus nulla cum, molestias velit sit quidem illo. Veritatis magni magnam doloremque architecto sint, at nesciunt eum est commodi, culpa impedit eveniet nam. Praesentium saepe minima itaque quo tenetur commodi dolore reiciendis enim eligendi, libero sapiente, officia illo consequatur et nesciunt ab dolores aut possimus adipisci cupiditate suscipit, accusantium pariatur! Iusto esse expedita ipsum accusamus illum hic magnam deserunt laboriosam nam aperiam quia adipisci veniam culpa ut itaque, eum velit? Eum nostrum molestiae ipsam, dolorem alias autem non atque numquam aut facere illo amet, porro nam nisi. Iste porro ipsa consectetur  tenetur commodi dolore reiciendis enim eligendi, libero sapiente, officia illo consequatur et nesciunt ab dolores aut possimus adipisci cupiditate suscipit, accusantium pariatur! Iusto esse expedita ipsum accusamus illum hic magnam deserunt laboriosam nam aperiam quia adipisci veniam culpa ut itaque, eum velit? Eum nostrum molestiae ipsam, dolorem alias autem non atque numquam aut facere illo amet, porro nam nisi. Iste porro ipsa consectetur ";
    //append p
    container.appendChild(paraElem);

    //create button element
    let paraBtn = document.createElement("button");
    //create button class name
    paraBtn.classList.add("btn", commentCount.toString());
    //create button onclick
    paraBtn.setAttribute("onclick", "paraHeight(this)");
    //create button text
    paraBtn.textContent = "ME!";
    //append button
    container.appendChild(paraBtn);
};

function paraHeight(obj) {

    let commentNum = obj.classList[1].toString(); //eg para close '0'

    let paraTargetClose = document.getElementsByClassName("para close " + commentNum);
    let paraTargetOpen = document.getElementsByClassName("para open " + commentNum);

    if (paraTargetClose.length == 1)
    {
        paraTargetClose[0].className = "para open " + commentNum;
        obj.textContent = "YES!";
    }
    else if (paraTargetOpen.length == 1)
    {
        paraTargetOpen[0].className = "para close " + commentNum;
        obj.textContent = "ME!";
    }

}