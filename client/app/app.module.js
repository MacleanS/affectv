import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';

//import 'angular-ui-bootstrap';
import ServicesModule from './services/services';

angular.module('app', [
  ComponentsModule.name,
  ServicesModule
]).component('app', appComponent);