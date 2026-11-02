export interface Element {
  id: number;
  titol: string;
  descripcio: string;
  categoria: string;
  dataCreacio: Date | string;
  estrelles: number;
  destacat?: boolean;
}