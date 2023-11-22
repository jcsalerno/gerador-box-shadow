class BoxShadowGenerator {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    previewBox,
    rule,
    webkitRule,
    mozRule
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.color = color;
    this.colorRef = colorRef;
    this.opacity = opacity;
    this.opacityRef = opacityRef;
    this.inset = inset;
    this.previewBox = previewBox;
    this.rule = rule;
    this.webkitRule = webkitRule;
    this.mozRule = mozRule;
  }

  initialize() {
    // Ajustar para garantir que os valores iniciais estejam corretos em ambos os campos
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.blurRef.value = this.blur.value;
    this.spreadRef.value = this.spread.value;
    this.colorRef.value = this.color.value;
    this.opacityRef.value = this.opacity.value;
    this.insetRef = this.inset.checked;

    // Adicione a linha a seguir para configurar o valor inicial para o campo de espalhamento (spread)
    this.spreadRef.value = this.spread.value;

    this.applyRule(); // Chame applyRule novamente após a definição de insetRef
    this.showRule();
  }

  applyRule() {
    console.log("Applying Rule");

    // Atualizar os valores dos elementos de referência diretamente
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.blurRef.value = this.blur.value;
    this.spreadRef.value = this.spread.value;
    this.colorRef.value = this.color.value;
    this.opacityRef.value = this.opacity.value;

    const rgbValue = this.hexToRgb(this.colorRef.value);
    console.log("RGB Value:", rgbValue);

    const shadowRule = `${this.insetRef ? "inset " : ""}${
      this.horizontalRef.value
    }px ${this.verticalRef.value}px ${this.blurRef.value}px ${
      this.spreadRef.value
    }px rgba(${rgbValue}, ${this.opacityRef.value})`;

    console.log("Shadow Rule:", shadowRule);
    this.previewBox.style.boxShadow = shadowRule;
    this.currentRule = shadowRule;
    this.showRule();
  }

  showRule() {
    this.rule.innerText = this.currentRule;
    this.webkitRule.innerText = this.currentRule;
    this.mozRule.innerText = this.currentRule;
  }

  updateValue(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontal.value = value;
        break;
      case "vertical":
        this.vertical.value = value;
        break;
      case "blur":
        this.blur.value = value;
        break;
      case "spread":
        this.spread.value = value;
        break;
      case "color":
        this.color.value = value;
        break;
      case "opacity":
        this.opacity.value = value;
        break;
      case "inset":
        this.insetRef = value;
        break;
    }

    this.applyRule();
    this.showRule();
  }

  hexToRgb(hex) {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
      ("0x" + hex[5] + hex[6]) | 0
    }`;
  }
}

// Seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

// Novos recursos
const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");
const inset = document.querySelector("#inset");

//Box
const previewBox = document.querySelector("#box");

// Regras
const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxShadow = new BoxShadowGenerator(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  color,
  colorRef,
  opacity,
  opacityRef,
  inset,
  previewBox,
  rule,
  webkitRule,
  mozRule
);

boxShadow.initialize();

// Eventos
horizontal.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValue("horizontal", value);
});

vertical.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValue("vertical", value);
});

spread.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValue("spread", value);
});

blur.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValue("blur", value);
});

color.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValue("color", value);
});

opacity.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateValue("opacity", value);
});

inset.addEventListener("input", (e) => {
  const value = e.target.checked;
  boxShadow.updateValue("inset", value);
});
