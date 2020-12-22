const {response} = require('express');
const dbconnnectivity = require('../dbconnection');

exports.gettemp = async (req, res) => {
  dbconnnectivity.query('SELECT * FROM temp where id = 1', function (err, result) {
    if (err) res.status(500).send({error: 'Something Worng'});
    if (result) {
      res.json({res: result});
    }
  });
};

exports.settemp = async (req, res) => {
  const supp = req.params.id;
  dbconnnectivity.query('update temp set value = '+supp+'where id = 1', function (err, result) {
    if (err) res.status(500).send({error: 'Something Worng'});
    if (result) {
      res.json({res: result});
    }
  });
};
