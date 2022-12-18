import { Effects, SCALE_STEP, ScaleRange } from "./consts.js";

const slider = document.querySelector('.effect-level__slider');
const sliderWrapper = document.querySelector('.img-upload__effect-level')
const imageForChange = document.querySelector('.img-upload__preview').querySelector('img');
const sliderValue = document.querySelector('.effect-level__value');
const scaleButtonBigger = document.querySelector('.scale__control--bigger');
const scaleButtonSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');

const checkScaleEnds = (val) => {
  if (val > ScaleRange.Max) {
    val = ScaleRange.Max;
  }
  if (val <= ScaleRange.Min){
    val = ScaleRange.Min;
  }
  return val;
};

const changeScale = (val) => {
  const sliderNumber = checkScaleEnds(Number(scaleValue.value.replace('%', '')) + SCALE_STEP * val);
  imageForChange.style.transform = `scale(${sliderNumber / 100})`;
  scaleValue.value = `${sliderNumber}%`;
};

const onScaleButtonClick = () => {
  scaleButtonBigger.addEventListener('click', () => changeScale(1))
  scaleButtonSmaller.addEventListener('click', () => changeScale(-1))
};

const createSlider = () => {
  scaleValue.value = `${100}%`;
  sliderWrapper.classList.add('hidden');
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 0.1,

    format: {
      to: (value) => (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });
};

const changeEffect = (evt) => {
  sliderWrapper.classList.remove('hidden');
  const effect = evt.target.value;
  if (effect === 'none') {
    sliderWrapper.classList.add('hidden');
    imageForChange.style.filter = 'none';
    return;
  }
  imageForChange.removeAttribute('class');
  imageForChange.removeAttribute('style');

  imageForChange.classList.add(`effects__preview--${effect}`)
  slider.noUiSlider.updateOptions(Effects[effect].options);
  slider.noUiSlider.on('update', () => {
    sliderValue.value = slider.noUiSlider.get();
    imageForChange.style.filter = Effects[effect].filter + `(${sliderValue.value}${Effects[effect].unit})`
  });
};

export { createSlider, changeEffect, onScaleButtonClick };
