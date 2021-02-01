import express from 'express';
import fetchData from './src/data.js';
import { videoLength, timeStamp } from './src/videoDate.js';

const app = express();

// Þetta verður aðgengilegt gegnum `local.bar` í template
app.locals.videoLength = str => videoLength(str);

app.locals.timeStamp = str => timeStamp(str);

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const dataMan = await fetchData();
    res.render('pages/index', { title: 'Fræðslumynd­bandaleigan', dataMan });
  } catch (e) {
    console.log(e);
  }
});

app.get('/test/:data?', async (req, res, next) => {
  try {
    const id = req.params.data;
    const dataMan = await fetchData();
    if (dataMan.videos[id]) {
      res.render('pages/video', { title: 'video', id, dataMan });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
  }
});

app.get('/error', (req, res) => {
  throw new Error('Villa!');
});

function notFoundHandler(req, res, next) {
  res.status(404).send('<p>404 Villa</p><br><img src="https://cdn.vox-cdn.com/thumbor/L6FeAUnniR8SCsq2DlsYygwGh6s=/0x0:724x625/1200x800/filters:focal(305x256:419x370)/cdn.vox-cdn.com/uploads/chorus_image/image/54668769/pepe_the_frog_dead_in_a_casket.0.png">');
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('Villa!');
}

app.use(notFoundHandler);

app.use(errorHandler);

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
