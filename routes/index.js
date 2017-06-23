module.exports = (app) => {
   let entries = [];
   app.locals.entries = entries;

   app.get('/',(req, res) => {
      res.render('index', {
         title: 'Inicio'
      });
   });

   app.get('/new-entry',(req, res) => {
      res.render('new-entry', {
         title: 'Nueva Entrada'
      });
   });

   app.post('/new-entry', (req, res) => {
      if (!req.body.title || !req.body.body) {
         res.send(400).send('Entradas deben tener un título y un cuerpo');
      }

      let newEntry = {
         title: req.body.title,
         content: req.body.body,
         published: new Date()

      }

      entries.push(newEntry);

      res.redirect('/');
   });
}
