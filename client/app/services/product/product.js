export function productService($http) {
  'ngInject';

  return {
    getProducts() {
      return $http({
        method: 'GET',
        url: 'api/products.json'
      });
    }
  };
}