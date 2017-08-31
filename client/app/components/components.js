import angular from 'angular';
    import InputsModule from './inputs/inputs.module';

const ComponentsModule = angular.module('app.components',[
       InputsModule.name 
]);

export default ComponentsModule;