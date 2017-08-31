import template from './inputs.component.html';
import controller from './inputs.controller.js';
import './inputs.component.scss';


let inputsComponent = {
  restrict: 'E',
  template,
  controller,
  controllerAs: 'inputsController'
};
export default inputsComponent;