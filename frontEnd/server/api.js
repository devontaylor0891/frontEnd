/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const AWS = require('aws-sdk');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });

  // Check for an authenticated admin user
  const adminCheck = (req, res, next) => {
    const roles = req.user[config.NAMESPACE] || [];
    if (roles.indexOf('admin') > -1) {
      next();
    } else {
      res.status(401).send({message: 'Not authorized for admin access'});
    }
  }

/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

 // using the mock api data in assets/api folder
 // GET list of PRODUCTS where DELIVERY DATE is in the future and DELIVERY LOCATION is within the search radius
  app.get('http://localhost:3000/searchResults', (req, res) => {
    res.send(res.JSON);
  })

  // POST a new product - from RWAS 6
  app.post('/api/product/new', jwtCheck, (req, res) => {
    Product.findOne({
      name: req.body.name,
      producerId: req.body.producer.id}, (err, existingProduct) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (existingProduct) {
        return res.status(409).send({message: 'You already have a product with that name.'});
      }
      const product = new Product({
        name: req.body.name,
        producerId: req.body.producer.id,
        image: req.body.image,
        description: req.body.description
      });
      product.save((err) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(product);
      });
    });	
  });

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

  // app.get('/getPresignedUrl/', function (req, res) {
  //   AWS.config.update({accessKeyId: 'XXXX', secretAccessKey: 'XXXX'})

  //   // Tried with and without this. Since s3 is not region-specific, I don't
  //   // think it should be necessary.
  //   AWS.config.update({region: 'us-west-2'})

  //   const myBucket = 'onlylocalfood-images'
  //   const myKey = 'file-name.jpg'
  //   const s3 = new AWS.S3();
  //   const params = {
  //     Bucket: myBucket,
  //     Key: myKey
  //   };
  //   s3.getSignedUrl('getObject', params, function (err, url) {
  //     console.log('url: ', url);
  //   });
  // });

};