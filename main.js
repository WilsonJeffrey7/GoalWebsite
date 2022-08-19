window.addEventListener('load', () => {
    const form = document.querySelector("#new-goal-method");
    const input = document.querySelector("#new-goal-input");
    const listStuff = document.querySelector("#goals");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const goal = input.value;

        if (!goal) {
            alert("Please enter a goal");
            return;
        }
        const goalStuff = document.createElement("div");
        goalStuff.classList.add("goal");
        
        const goalContents = document.createElement("div");
        goalContents.classList.add("content");
        
        goalStuff.appendChild(goalContent);

        const goalInput = document.createElement("input")
        goalInput.classList.add("text");
        goalInput.type = "text";
        goalInput.value = goal;
        goalInput.setAttribute("readonly", "readonly");

        goalContents.appendChild(goalInput);

        listStuff.appendChild(goalStuff);
    })
})