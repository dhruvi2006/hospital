const express = require('express');
const Department = require('./Department');
const router = express.Router();

// Get departments
router.get('/departments', async (req, res) => {
  const departments = await Department.find();
  res.json(departments);
});

// Update bed availability
router.put('/update-bed/:id', async (req, res) => {
  const { id } = req.params;
  const { bedsAvailable } = req.body;
  const department = await Department.findById(id);
  department.bedsAvailable = bedsAvailable;
  await department.save();
  res.json(department);
});

module.exports = router;
// Update bed availability
router.put('/update-bed/:id', async (req, res) => {
  const { id } = req.params;
  const { bedsAvailable } = req.body;

  try {
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    department.bedsAvailable = bedsAvailable;
    await department.save();

    res.json(department);
  } catch (error) {
    console.error('Error updating department', error);
    res.status(500).json({ message: 'Error updating bed availability' });
  }
});

// Update bed availability for a department
router.put('/update-bed/:id', async (req, res) => {
  const { id } = req.params;
  const { bedsAvailable } = req.body;

  try {
    // Find the department by ID
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }

    // Update the number of available beds
    department.bedsAvailable = bedsAvailable;
    await department.save();

    res.json(department);
  } catch (error) {
    console.error('Error updating department', error);
    res.status(500).json({ message: 'Error updating bed availability' });
  }
});
