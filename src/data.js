import { readFile } from 'fs/promises';

export default async function fetchData() {
  let data = '';
  try {
    data = await readFile('./videos.json');
    return JSON.parse(data);
  } catch (e) {
    throw new Error('error:', e);
  }
}
