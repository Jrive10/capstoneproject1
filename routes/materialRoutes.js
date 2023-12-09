const express = require('express');
const router = express.Router();
const materialController = require('../controllers/materialController');

router.get('/', materialController.getAllMaterials);
// Implement other material routes similarly

module.exports = router;
