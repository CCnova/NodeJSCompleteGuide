exports.getNotFoundPage = (req, res, next) => {
  const pageTitle = 'Page Not Found';
  const path = '';
  res.status(404).render('not-found', { pageTitle, path });
};