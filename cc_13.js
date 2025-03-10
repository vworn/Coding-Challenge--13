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
