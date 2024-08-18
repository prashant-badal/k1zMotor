const express = require('express');
const multer = require('multer');
const carController = require('../controllers/CarController');

const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory to save the file
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});
const upload = multer({ storage: storage });

// CRUD Routes
router.post('/cars', upload.single('image'), carController.createCar);  // POST with image
router.get('/cars', carController.getCars);
router.get('/cars/:id', carController.getCarById);
router.put('/cars/:id', carController.updateCar);
router.delete('/cars/:id', carController.deleteCar);

module.exports = router;
