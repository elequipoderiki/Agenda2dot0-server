const error404 = (req, res) => {
    res.status(404).json({
      code: 404,
      message: "Not Found",
    });
  };
  
  module.exports =  error404