export interface LlibreApi {
  id: string | number;
  titol: string;
  descripcio?: string;
  categoria?: string;
  dataCreacio?: string;
  estatLectura?: string;
  estrelles?: number | string;
  destacat?: boolean;
}