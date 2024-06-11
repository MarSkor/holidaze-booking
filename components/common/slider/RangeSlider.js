// code from https://benhoneywill.com/building-a-range-slider-component-in-react/

import React, { useState, useEffect } from "react";

const RangeSlider = ({ min, max, value, step, onChange }) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = (e) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    onChange({ min: newMinVal, max: maxValue });
  };

  const handleMaxChange = (e) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    onChange({ min: minValue, max: newMaxVal });
  };

  // positioning the slider controls
  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="rangeslider">
      <div className="rangeslider__wrapper">
        <div className="rangeslider__input-wrapper">
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            step={step}
            onChange={handleMinChange}
            className="rangeslider__thumb rangeslider__thumb--zindex-3"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            step={step}
            onChange={handleMaxChange}
            className="rangeslider__thumb rangeslider__thumb--zindex-4"
          />
        </div>

        <div className="rangeslider__control-wrapper">
          <div
            className="rangeslider__control"
            style={{ left: `${minPos}%` }}
          />
          <div className="rangeslider__rail">
            <div
              className="rangeslider__rail--inner-rail"
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div
            className="rangeslider__control"
            style={{ left: `${maxPos}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
