console.log("HI");

const container = document.querySelector(".grid_container");
const button = document.querySelector("button")

function create_grid(col, row) {
    let arr = [];

    for (let i = 0; i < col; i++) {
        arr.push([])
        const new_row = document.createElement("div");
        new_row.setAttribute("class", "row");
        container.appendChild(new_row);
        for (let j = 0; j < row; j++) {
            const new_div = document.createElement("div");
            new_div.setAttribute("class", "box");

            new_div.addEventListener("mouseover", (event) => {
                event.target.style.backgroundColor = "purple";
                
            },
            false
            );

            arr[i].push(new_div);
            new_row.appendChild(new_div);
        }
    }
}

function button_callback() {
    
    let num_rows = get_valid_input("Number of Rows: ");
    if (!num_rows) return false;
    let num_cols = get_valid_input("Number of Columns: ");
    if (!num_cols) return false;
    container.textContent = "";
    create_grid(num_rows, num_cols);
    button.textContent = "Refresh Grid";
}

function is_valid_input(input) {
    if (isNaN(input)) return false;
    let num = Number(input);
    if (num % 1 != 0) return false;
    if (num < 1 || num > 100) return false;
    return true;
}

function get_valid_input(prompt_message) {
    user_input = prompt(prompt_message);
    if (!is_valid_input(user_input)) {
        button.textContent = "Invalid. Chose an integer between 1 and 100.";
        return false;
    }
    return Number(user_input);
}


create_grid(16, 16);
button.addEventListener("click", button_callback);