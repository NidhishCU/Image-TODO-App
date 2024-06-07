document.addEventListener("DOMContentLoaded", function () {
    const dropzone = document.getElementById("dropzone");
    const fileInput = document.getElementById("fileInput");
    const fileList = document.getElementById("fileList");
    const MAX_IMAGES = 5;

    // Handle drag and drop events
    dropzone.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", function (e) {
        e.preventDefault();
        dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", function (e) {
        e.preventDefault();
        dropzone.classList.remove("dragover");
        handleFiles(e.dataTransfer.files);
    });

    dropzone.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        handleFiles(fileInput.files);
    });

    function handleFiles(files) {
        const currentImagesCount = fileList.children.length;
        if (currentImagesCount + files.length > MAX_IMAGES) {
            alert("You can upload a maximum of 5 images.");
            return;
        }

        Array.from(files).forEach(file => {
            if (file.type.startsWith("image/")) {
                if (file.size <= 1 * 1024 * 1024) {
                    displayFile(file);
                } else {
                    alert("Only image files under 1 MB are allowed.");
                }
            } else {
                alert("File is not an image.");
            }
        });
    }

    function displayFile(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const div = document.createElement("div");
            div.className = "file-name";

            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = file.name;
            img.className = "thumbnail";
            div.appendChild(img);

            const textarea = document.createElement("textarea");
            textarea.placeholder = "Add a description...";
            div.appendChild(textarea);

            const iconsDiv = document.createElement("div");
            iconsDiv.className = "icons";

            const checkIcon = document.createElement("span");
            checkIcon.className = "icon";
            checkIcon.innerHTML = "&#10004;";
            checkIcon.addEventListener("click", function () {
                if (textarea.value.trim() !== "") {
                    textarea.disabled = true;
                    div.classList.add("des-added");
                    alert("Description added");
                    saveToLocalStorage();
                } else {
                    alert("Description cannot be empty.");
                }
            });
            iconsDiv.appendChild(checkIcon);

            const deleteIcon = document.createElement("span");
            deleteIcon.className = "icon";
            deleteIcon.innerHTML = "&#10006;";
            deleteIcon.addEventListener("click", function () {
                fileList.removeChild(div);
                saveToLocalStorage();
            });
            iconsDiv.appendChild(deleteIcon);

            div.appendChild(iconsDiv);
            fileList.appendChild(div);

            saveToLocalStorage();
        };
        reader.readAsDataURL(file);
    }

    function saveToLocalStorage() {
        const storedImagesData = Array.from(fileList.children).map(div => {
            const img = div.querySelector("img");
            const textarea = div.querySelector("textarea");
            return {
                src: img.src,
                description: textarea.value
            };
        });
        localStorage.setItem("storedImagesData", JSON.stringify(storedImagesData));
    }

    function loadFromLocalStorage() {
        const storedImagesData = JSON.parse(
            localStorage.getItem("storedImagesData") || "[]"
        );
        console.log("Loaded from localStorage:", storedImagesData);
        storedImagesData.forEach((data) => {
            const div = document.createElement("div");
            div.className = "file-name";

            const img = document.createElement("img");
            img.src = data.src;
            img.className = "thumbnail";
            div.appendChild(img);

            const textarea = document.createElement("textarea");
            textarea.value = data.description || "";
            if (data.description) {
                textarea.disabled = true;
                div.classList.add("des-added");
            }
            div.appendChild(textarea);

            const iconsDiv = document.createElement("div");
            iconsDiv.className = "icons";

            const checkIcon = document.createElement("span");
            checkIcon.className = "icon";
            checkIcon.innerHTML = "&#10004;";
            checkIcon.addEventListener("click", function () {
                if (textarea.value.trim() !== "") {
                    textarea.disabled = true;
                    div.classList.add("des-added");
                    alert("Description added");
                    saveToLocalStorage();
                } else {
                    alert("Description cannot be empty.");
                }
            });
            iconsDiv.appendChild(checkIcon);

            const deleteIcon = document.createElement("span");
            deleteIcon.className = "icon";
            deleteIcon.innerHTML = "&#10006;";
            deleteIcon.addEventListener("click", function () {
                fileList.removeChild(div);
                saveToLocalStorage();
            });
            iconsDiv.appendChild(deleteIcon);

            div.appendChild(iconsDiv);
            fileList.appendChild(div);
        });
    }

    loadFromLocalStorage();
});
