document.querySelector("#push").onclick = function() {
    if(document.querySelector("input").value.length == 0){
        alert(" please enter a task ")
    }else {
        document.querySelector("#tasks").innerHTML 
        += `
            <div class="task">
                ${document.querySelector("input").value}
                <button class="delete"></button>
            </div>
        `

       const current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++ ) {
                current_tasks[i].onclick = function() {
                    this.parentNode.remove();
                }
            }

    }

    const tasks = document.querySelectorAll(".task");
    for(var i=0; i<tasks.length; i++) {
        tasks[i].onclick = function() {
            this.classList.toggle("completed")
        }
    }

    document.querySelector("#newtask input").value = ""
}
