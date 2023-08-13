const router = require('express').Router();
const { Product, Category, User, Cart } = require('../models');
const withAuth = require('../utils/auth');

// GET all products for homepage

router.get('/', async (req, res) => {
    try {
        
    }