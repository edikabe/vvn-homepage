export interface Signalement {
  typeSignalement: string;
  couleurVelo: string;
  marqueVelo: string;
  dateVol: string;
} 

export function mapSignalements(source: any[]): Signalement[] {
  return source.map(s => ({
    typeSignalement: s["type_signalement"],
    couleurVelo: s["couleur_velo"],
    marqueVelo: s["marque_velo"],
    dateVol: s["date_du_vol"]
  }))
} 