const dateValue = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
const btn = document.querySelector("button");

dateValue.addEventListener("click", function(e) {
    //console.log(e.target);
    if (e.target.tagName === "P") {
        let clicked;
        clicked = e.target.textContent;
        target = e.target.parentNode;
        date.value = `7월 ${clicked}일`;
    }
})

function writeSchedule() {
    if (content.value === "") {
        content.setAttribute("placeholder", "내용을 입력해줘")
    } else {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(content.value));
        //console.log(content.value);
        target.appendChild(div);
        content.value = "";

        //한번 클릭시 줄긋기
        div.addEventListener("click", function() {
            div.style = "text-decoration: line-through;"
        })

        //두번 클릭시 삭제
        div.addEventListener("dblclick", function() {
            div.remove();
        })
    }
}


//궁금한 것

/*
한번 클릭시 줄 긋기 한번더 클릭시 줄 긋기 삭제
아래와 같이 작성했습니다.(실행불가)

div.addEventListener("click", function () {
    if (div.style = "text-decoration: line-through;") {
        div.style = "text-decoration: none;"
    } else {
        div.style = "text-decoration: line-through;"
    }
})

최종적으로는 if문을 이용해 처음 클릭하면 줄긋기 다시 한번 더 클릭시 삭제를 구현하고 싶습니다.
*/



