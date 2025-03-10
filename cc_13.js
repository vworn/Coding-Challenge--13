document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");
    const addEmployeeBtn = document.getElementById("addEmployee");

    // Task 2: Adding Employee Cards Dynamically
    addEmployeeBtn.addEventListener("click", addEmployee);

    function addEmployee() {
        const nameInput = document.getElementById("employeeName");
        const positionInput = document.getElementById("employeePosition");
        const name = nameInput.value.trim();
        const position = positionInput.value.trim();

        if (name === "" || position === "") {
            alert("Please enter both name and position!");
            return;
        }

        // Create employee card
        const card = document.createElement("div");
        card.classList.add("employee-card");

        // Create name and position elements
        const empName = document.createElement("h3");
        empName.textContent = name;

        const empPosition = document.createElement("p");
        empPosition.textContent = position;

        // Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
                removeBtn.classList.add("remove-btn");
        
                // Append elements to card
                card.appendChild(empName);
                card.appendChild(empPosition);
                card.appendChild(removeBtn);
        
                // Append card to employee container
                employeeContainer.appendChild(card);
        
                // Clear input fields
                nameInput.value = "";
                positionInput.value = "";
            }
        });


        // Task 4: Implementing Removal of Employee Cards with Event Bubbling
        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents event bubbling
            employeeContainer.removeChild(card);
        });

        // Create edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");


        // Task 5: Inline Editing of Employee Details
        editBtn.addEventListener("click", () => {
            enableEditing(card, empName, empPosition);
        });

        // Append elements to card
        card.appendChild(empName);
        card.appendChild(empPosition);
        card.appendChild(editBtn);
        card.appendChild(removeBtn);
        employeeContainer.appendChild(card);

        // Clear input fields
        nameInput.value = "";
        positionInput.value = "";
    }

    // Task 5: Inline Editing Function
    function enableEditing(card, nameElement, positionElement) {
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = nameElement.textContent;

        const positionInput = document.createElement("input");
        positionInput.type = "text";
        positionInput.value = positionElement.textContent;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-btn");

        saveBtn.addEventListener("click", () => {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;

            // Swap back static elements
            card.replaceChild(nameElement, nameInput);
            card.replaceChild(positionElement, positionInput);
            card.replaceChild(editBtn, saveBtn);
        });

        // Swap static elements with input fields
        card.replaceChild(nameInput, nameElement);
        card.replaceChild(positionInput, positionElement);
        card.replaceChild(saveBtn, card.querySelector(".edit-btn"));
    }

    // Task 4: Event Bubbling Demonstration
    employeeContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("employee-card")) {
            console.log("Employee card clicked!");
        }
    });

    // Task 3: Converting NodeLists to Arrays for Bulk Updates
    function bulkUpdate() {
        const cards = Array.from(document.querySelectorAll(".employee-card"));
        cards.forEach(card => {
            card.style.backgroundColor = "lightblue";
        });
    }

    // Example usage: Call bulkUpdate() from the console to update all employee cards