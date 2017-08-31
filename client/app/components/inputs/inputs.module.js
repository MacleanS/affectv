import angular from 'angular';
import inputsComponent from './inputs.component';
import ngSanitize from 'angular-sanitize';
import productService from '../../services/services';
import 'angular-ui-bootstrap';
import ngS3upload from '../../../../js/ng-s3upload.min'

const inputsModule = angular.module('inputs', ['ngSanitize', productService,'ui.bootstrap','ngS3upload'])
  .component('inputs', inputsComponent);
export default inputsModule;