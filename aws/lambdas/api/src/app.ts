import express from 'express';
import bookRouter from './routes/book.routes';

const app = express();



app.use('/book', bookRouter)
app.use((req, res, next) => {
  console.log(req);
  return res.status(200).json({
    message: "default!",
  });

});

export default app