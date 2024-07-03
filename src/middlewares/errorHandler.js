const errorHandler = (err, req, res, next) => {
    if (err.code === 'NoSuchKey') {
      return res.status(404).json({ error: 'File not found' });
    }
    if (err.code === 'AccessDenied') {
      return res.status(403).json({ error: 'Bucket not accessible' });
    }
    res.status(500).json({ error: err.message });
  };
  
  module.exports = errorHandler;
  