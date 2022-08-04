const editBtn = document.getElementById("editBtn");
const styleBtn = document.getElementById("styleBtn");
const textEditor = document.getElementById("textEditor");
const styleEditor = document.getElementById("styleEditor");
const contentPreviewer = document.getElementById("contentPreviewer");
const textEditorArea = document.getElementById("textEditorArea");
const saveBtn = document.getElementById("saveBtn");
const addBtn = document.getElementById("addBtn");

const fontSizeForm = document.getElementById("fontSizeForm");


function showEditBlock ( ){
    textEditor.style.display = "block";
    styleEditor.style.display = "none";

    textEditorArea.innerText = contentPreviewer.innerHTML; 
}

showEditBlock();

function showStyleBlock ( ){
    styleEditor.style.display = "block";
    textEditor.style.display = "none";
    
}

function saveEditedContent ( ){
    contentPreviewer.innerHTML = textEditorArea.innerText; 
}

editBtn.addEventListener("click", showEditBlock);
styleBtn.addEventListener("click", showStyleBlock);
saveBtn.addEventListener("click", saveEditedContent);


const fontSizes = ["12px", "14px", "16px", "18px", "20px"];
let fontSizeRadio = document.getElementsByClassName("fontSizeRadio");

function applyFontSize(){
    for(let i = 0; i < fontSizeRadio.length; i++){
        if (fontSizeRadio[i].checked == true){
            contentPreviewer.style.fontSize = fontSizes[i];
        }
    }
}
    for (let i = 0; i < fontSizeRadio.length; i++){
    fontSizeRadio[i].addEventListener('click', applyFontSize);
}




let fontFam = document.getElementsByClassName("fontFam");
let selectFontFamily = document.getElementById("selectFontFamily");
let fontOptions = selectFontFamily.querySelectorAll('option');


selectFontFamily.addEventListener('change', (event) => {
    for (let i = 0; i < fontOptions.length; i++){
        if(fontOptions[i].selected) {
            contentPreviewer.style.fontFamily = fontOptions[i].value;
        }
    }
})

    
let textColors = document.getElementById("textColors");
let backgroundColors = document.getElementById("backgroundColors");

let oneColor = document.getElementsByClassName("oneColor");
let oneBgColor = document.getElementsByClassName("oneBgColor");

let textColorBtn = document.getElementById("textColorBtn");
let backgroundColorBtn = document.getElementById("backgroundColorBtn");

function applyTextColor() {
    textColors.style.display = "flex";
    for (let i = 0 ; i < oneColor.length; i++) {
        oneColor[i].addEventListener("click", () => {
        contentPreviewer.style.color = oneColor[i].style.backgroundColor;
        if (contentPreviewer.style.color = oneColor[i].style.backgroundColor){
            textColors.style.display = "none";
        }
    }
    )
    }
}
function applyBackgroundColor() {
    backgroundColors.style.display = "flex";
    for (let i = 0 ; i < oneBgColor.length; i++) {
        oneBgColor[i].addEventListener("click", () => {
        contentPreviewer.style.backgroundColor += oneBgColor[i].style.backgroundColor;
        if (contentPreviewer.style.backgroundColor = oneBgColor[i].style.backgroundColor){
            backgroundColors.style.display = "none";
        }
    }
    )
    }
}
textColorBtn.addEventListener("click", applyTextColor);
backgroundColorBtn.addEventListener("click", applyBackgroundColor);



let styleCheckbox = document.getElementsByName('styleCheckbox');

styleCheckbox[0].addEventListener('click', () => {
     if(styleCheckbox[0].checked) {
         contentPreviewer.style.fontWeight = "bold";}
        else{
            contentPreviewer.style.fontWeight = "normal";
        }
     });
     
styleCheckbox[1].addEventListener('click', () => {
    if(styleCheckbox[1].checked) {
        contentPreviewer.style.fontStyle = 'italic'}
        else{
            contentPreviewer.style.fontStyle = "normal";
        }
    });


    let tableContainer = document.getElementById("tableContainer");
    const everything = document.getElementById("everything");
    const whatDoYouWant = document.body.appendChild(document.createElement("div"));
    whatDoYouWant.id = "whatDoYouWant";
    whatDoYouWant.innerHTML = "<p style=font-size:20px><b>Choose what you want:</b></p><br/><input type=radio name = wantRadio id= wantRadio1>table<input type=radio name = wantRadio id= wantRadio2>list";
    const wantRadio1 = document.getElementById("wantRadio1");
    const wantRadio2 = document.getElementById("wantRadio2");
    let listDiv = document.getElementById("listDiv");
    addBtn.addEventListener("click", () => {
        everything.style.display = "none";
        whatDoYouWant.style.display = "block";
    })
    
    whatDoYouWant.appendChild(tableContainer);
    wantRadio1.addEventListener("click", () => {
        tableContainer.style.display = "block";
        listDiv.style.display = "none";
    })
    
    let tableSubmitter = document.getElementById("tableSubmitter");
    let trCounter = document.getElementById("trCounter");
    let tdCounter = document.getElementById("tdCounter");
    let tdWidth = document.getElementById("tdWidth");
    let tdHeight = document.getElementById("tdHeight");
    let borderWidth = document.getElementById("borderWidth");
    let borderType = document.getElementById("borderType");
    let borderColor = document.getElementById("borderColor");
    
    tableSubmitter.addEventListener("click", () => {
        let tables = document.createElement("table");
        contentPreviewer.appendChild(tables);
        for(let i=0; i<parseInt(trCounter.value); i++){
            tables.innerHTML += "<tr>"
            for(let k=0; k<parseInt(tdCounter.value); k++){
                var tds = document.createElement('td');
                tds.style.height = parseInt(tdHeight.value) + "px";
                tds.style.width = parseInt(tdWidth.value) + "px";
                tds.style.borderWidth = parseInt(borderWidth.value) + "px";
                tds.style.borderStyle = borderType.value;
                tds.style.borderColor = borderColor.value;
                tables.appendChild(tds);
            }
            tables.innerHTML += "</tr>"
        }
        everything.style.display = "block";
        whatDoYouWant.style.display = "none";
    }
    );
    
    let listDiv1 = document.getElementById("listDiv1");
    let liCounter = document.getElementById("liCounter");
    let marksType = document.getElementById("marksType");
    let liSubmitter = document.getElementById("liSubmitter");
    whatDoYouWant.appendChild(listDiv);

    wantRadio2.addEventListener("click", () => {
        listDiv.style.display = "block";
        tableContainer.style.display = "none";
    })
    
    liSubmitter.addEventListener("click", () => {
        contentPreviewer.innerHTML += "<ul>";
        for(let i=0; i<parseInt(liCounter.value); i++){
            var lis = document.createElement("li");
            lis.style.listStyleType = marksType.value;
            contentPreviewer.appendChild(lis)
        }
        contentPreviewer.innerHTML += "</ul>";
        everything.style.display = "block";
        whatDoYouWant.style.display = "none";
    })

