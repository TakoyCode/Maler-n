// Modell

function choseColor(color) {
    if (model.colorchange == "Color 1") {
        model.egg.color1 = color;
    }
    else if (model.colorchange == "Color 2") {
        model.egg.color2 = color;
    }
    updateView();
};


function chosePattern(pattern) {
    model.egg.pattern = pattern;
    updateView();
};

function chooseWhatColorToChange(colorToChange) {
    model.colorchange = colorToChange;
    updateView();
}