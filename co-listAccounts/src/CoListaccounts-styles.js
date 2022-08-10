/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`@charset "UTF-8";
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.background {
  height: 64px;
  width: 1280px;
  background-color: #072146;
}

.steps {
  height: 24px;
  width: 262px;
  color: #666666;
  font-family: "Benton Sans BBVA";
  font-size: 15px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
}

.tiittle {
  height: 64px;
  width: 472px;
  color: #121212;
  font-family: "Benton Sans BBVA";
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 32px;
}

.component-dividers-light-backg {
  height: 1px;
  width: 458px;
  transform: scaleY(-1);
}

.🔄-checkbox-or-radio-button {
  height: 24px;
  width: 24px;
}

.✏️-title {
  height: 24px;
  width: 426px;
  color: #121212;
  font-family: "Benton Sans BBVA";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
}

.↳-🔄-clip-card-pan-or-descrip {
  height: 24px;
  width: 43px;
}

.↳-𝐭-description-3 {
  height: 24px;
  width: 426px;
}

.↳-✏️-info-notification-label {
  height: 24px;
  width: 406px;
  color: #666666;
  font-family: "Benton Sans BBVA";
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0;
  line-height: 24px;
}

.💎-icon-24-x-24 {
  height: 14.67px;
  width: 14.67px;
}

.component-lists-list-option-🖥- {
  height: 88px;
  width: 458px;
}

.🎨-change-color-here {
  height: 14.67px;
  width: 14.67px;
  background-color: #043263;
}

.component-buttons-button-defau {
  height: 56px;
  width: 136px;
}

.⬜️-background {
  height: 56px;
  width: 136px;
  border-radius: 1px;
  background-color: #E9E9E9;
}

.↳-✏️-button-label {
  height: 24px;
  width: 72px;
  color: #BDBDBD;
  font-family: "Benton Sans BBVA";
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}

.component-buttons-button-multi {
  height: 32px;
  width: 123px;
}

.📦-container {
  height: 24px;
  width: 91px;
}

.💎-icon-24-x-24 {
  height: 21.04px;
  width: 16.13px;
  background-color: #1973B8;
}

.button-border {
  box-sizing: border-box;
  height: 32px;
  width: 123px;
  border: 1px solid #D3D3D3;
  border-radius: 16px;
}

.✏️-label {
  height: 24px;
  width: 59px;
  color: #1973B8;
  font-family: "Benton Sans BBVA";
  font-size: 15px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}
`;