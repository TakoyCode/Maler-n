// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;
    html += /*HTML*/ `
        <div class="centerEggsView">    
            <div class="paintEggContainer">
                ${createEggHtml()}
                <div class="paintboxContainer">
                    ${createPaintboxHtml()}
                </div> 
            </div>
            
            <div class="patternContainer">
                ${createPatternButtonsHtml()}
            </div>
        </div>
    `;
    app.innerHTML = html;
};

function createEggHtml() {
    let html = ``;
    switch (model.egg.pattern) {
        case "stripes":
            html += /*HTML*/ `
            <div style="background-color: ${model.egg.color1}; 
            background: repeating-linear-gradient(
                -180deg,
                ${model.egg.color1},
                ${model.egg.color1} 2vh,
                ${model.egg.color2} 2vh,
                ${model.egg.color2} 4vh
                );" 
            class="egg"></div>
            `;
            break;
        case "circles":
            html += /*HTML*/ `
            <div style="background-color: ${model.egg.color1}; 
            background: repeating-radial-gradient(
                circle,
                ${model.egg.color1},
                ${model.egg.color1} 1vh,
                ${model.egg.color2} 1vh,
                ${model.egg.color2} 2.5vh
                );" 
            class="egg"></div>
            `;
            break;
        case "cut":
            html += /*HTML*/ `
                <div style="background-color: ${model.egg.color1}; 
                background: repeating-linear-gradient(
                    45deg,
                    ${model.egg.color1},
                    ${model.egg.color1} 50%,
                    ${model.egg.color2} 50%,
                    ${model.egg.color2}
                    );" 
                class="egg"></div>
                `;
            break;

        default:
            html += /*HTML*/ `
            <div style="background-color: ${model.egg.color1}" class="egg"></div>
            `;
            break;
    }
    return html;
}

function createPaintboxHtml() {
    let html = "";
    html += /*HTML*/ `

    <div>
        <label>Chosen Color 1</label>
        <div onclick="chooseWhatColorToChange('Color 1')" class="colorboxes"
         style="background-color: ${model.egg.color1}; outline: ${model.colorchange == "Color 1" ? "0.3vh solid white" : ""}"></div>
    </div>
    <div>
        <label>Chosen Color 2</label>
        <div onclick="chooseWhatColorToChange('Color 2')"  class="colorboxes"
         style="background-color: ${model.egg.color2}; outline: ${model.colorchange == "Color 2" ? "0.3vh solid white" : ""}"></div>
    </div>

    <input type="color" class="box" value="${model.colorInput}"
    onchange="model.colorInput = this.value; choseColor(this.value);"/>

    `;

    for (i = 0; i < model.colors.length; i++) {
        html += /*HTML*/ `
        
        <div onclick="choseColor('${model.colors[i]}')" style="background-color: ${model.colors[i]};" 
        class="box"></div>
        
        `;
    };
    return html;
};

function createPatternButtonsHtml() {
    let html = "";
    for (i = 0; i < model.patterns.length; i++) {
        html += /*HTML*/ `
        
        <div onclick="chosePattern('${model.patterns[i]}')" 
        style="background-color: lightgray; outline: ${model.egg.pattern == model.patterns[i] ? "0.4vh solid white" : ""};" 
        class="box centerText"
        >${model.patterns[i]}</div>

        `;
    };
    return html;
};