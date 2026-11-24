import { LlibreApi } from '../models/llibres-api.model';
import { Llibre } from '../models/llibre.model';

export function adaptLlibreFromApi(raw: LlibreApi): Llibre {
  const titolNet = (raw.titol ?? '').trim() || 'Sense títol';

  const descripcioNeta = (raw.descripcio ?? '').trim();
  const descripcioFinal =
    descripcioNeta.length > 0 ? descripcioNeta : 'Sense descripció disponible.';

  const categoriaNeta = (raw.categoria ?? '').trim();
  const categoriaFinal =
    categoriaNeta.length > 0
      ? categoriaNeta.charAt(0).toUpperCase() + categoriaNeta.slice(1)
      : 'General';

  const dataNeta = (raw.dataCreacio ?? '').trim();
  const dataFinal = normalitzarData(dataNeta);

  const estatRaw = (raw.estatLectura ?? '').trim().toLowerCase();
  let estatFinal = 'Pendent';
  if (estatRaw === 'llegit' || estatRaw === 'read') {
    estatFinal = 'Llegit';
  } else if (estatRaw === 'llegint' || estatRaw === 'reading') {
    estatFinal = 'Llegint';
  }

  const num = Number(raw.estrelles);
  const puntuacioFinal = Number.isNaN(num) ? 0 : Math.max(0, Math.min(10, num));

  return {
    id: String(raw.id),
    titol: titolNet,
    descripcio: descripcioFinal,
    categoria: categoriaFinal,
    dataPublicacio: dataFinal,
    estatLectura: estatFinal,
    puntuacio: puntuacioFinal,
    destacat: Boolean(raw.destacat)
  };
}

function normalitzarData(data: string): string {
  if (!data) {
    return 'Data no indicada';
  }
  const matchIso = /^\d{4}-\d{2}-\d{2}$/.exec(data);
  if (matchIso) {
    return data;
  }
  const parsed = new Date(data);
  if (Number.isNaN(parsed.getTime())) {
    return data;
  }
  return parsed.toISOString().slice(0, 10);
}