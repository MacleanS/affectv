import angular from 'angular';
import { productService } from './product/product';

export default angular.module('app.services', [])
  .factory('productService', productService)
  .name;