import { canvases } from './http';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

// 목록
export async function getCanvases(params) {
  const payload = Object.assign(
    {
      _sort: 'lastModified',
      _order: 'desc',
    },
    params,
  );
  const { data } = await canvases.get('/', { params: payload });
  return data;
}

// 저장, 수정, 삭제
// ...

// 등록
export function createCanvas() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    lastModified: dayjs().format('YYYY-mm-DD HH:mm:ss'),
    category: '신규',
  };
  return canvases.post('/', newCanvas);
}

// 삭제
export async function deleteCanvas(id) {
  await canvases.delete(`/${id}`);
}

export async function getCanvasById(id) {
  const { data } = await canvases.get(`/${id}`);
  return data;
}

export async function updateTitle(id, title) {
  canvases.patch(`/${id}`, { title });
}

export async function updateCanvas(id, canvas) {
  await canvases.put(`/${id}`, canvas);
}
