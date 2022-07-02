//selecting all required elements
const dropArea = document.querySelector(".drag-area");

let file; //this is a global variable and we'll use it inside multiple funcitions

//if user Drag file over DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
});

//if user leave dragged file form DropArea
dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
});

//if user drop  file on  DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this mean if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    let fileType = file.type;


    let valiExtensions = [".png", ".jpg", ".pdf", ".doc", ".docx"]; //adding some valid image extensions in array
    if (valiExtensions.includes(fileType)) {
        console.log("this is an  file");
    } else {
        console.log("this is not an  file");
    }
});