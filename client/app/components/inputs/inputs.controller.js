require('aws-sdk/dist/aws-sdk');
let AWS = window.AWS;

class inputsController {

  /*@ngInject*/
    constructor(productService) {
      this.name = 'inputs';
      this.productService = productService;
      this.products = [];
      this.htmlTemplate = '';
      this.file = {
        name: 'myAdvert',
        type: 'html',
        body: ''
      };
      this.creds = {
        bucket: 'affectv',

        // REMOVED MY AWS KEYS
        access_key: '--',
        secret_key: '--'
      }
    }

    generateAd() {
      // GET RESULTS FROM API

      this.productService.getProducts().then((results) => {
        this.products = results.data.data.products;

        // APPEND ADS HTML TO FILE
        this.file.body = document.getElementById('product-ad').innerHTML;

        // UPLOAD FILE TO AWS S3 BUCKET
        this.upload();


      })
    }

    upload() {

      let _this = this;
      // Configure The S3 Object
      AWS.config.update({ accessKeyId: this.creds.access_key, secretAccessKey: this.creds.secret_key });
      AWS.config.region = 'eu-west-1';
      let bucket = new AWS.S3({ params: { Bucket: this.creds.bucket } });

      if(this.file) {
        let params = { Key: this.file.name, ContentType: this.file.type, Body: this.file.body, ServerSideEncryption: 'AES256', /* ACL:'public-read-write' */ };

        bucket.putObject(params, function(err, data) {
          if(err) {
            // There Was An Error With Your S3 Config
            alert(err.message);
            return false;
          }
          else {
            // Success!
            alert('Upload Done');

            // USE THIS URL IN THE PRODUCED HTML
            const adURL = 'http://affectv.s3-website-eu-west-1.amazonaws.com/' + params.Key;

            _this.updateHTML(adURL);

            //_this.htmlTemplate = '<iframe src="' + adURL + '"></iframe>'
          }
        })
          .on('httpUploadProgress',function(progress) {
            // Log Progress Information
            console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
          });
      }
      else {
        // No File Selected
        alert('No File Selected');
      }
  }

  updateHTML(url) {
      this.htmlTemplate = url;
  }
}

export default inputsController;