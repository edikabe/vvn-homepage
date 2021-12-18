export interface Signalement {
  typeSignalement: string
  couleurVelo: string
  marqueVelo: string
  typeVelo: string
  dateVol: string
  stationnementLieuClos?: StationnementLieuClos | undefined
}

export enum StationnementLieuClos {
  Non = "Non",
  LocalPrivatif = "Oui, un local privatif",
  LocalCollectif = "Oui, un local collectif",
}

export interface ExportInfo {
  creation: number
}

function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter(k => Number.isNaN(+k)) as K[];
}

function enumKeyOf<O extends object, K extends keyof O = keyof O>(obj: O, value: any): K {
  return Object.keys(obj)[Object.values(obj).indexOf(value)] as K;
}

export function mapStationnementLieuClos(source: string | undefined): StationnementLieuClos | undefined {
  if(source) {
    return StationnementLieuClos[enumKeyOf(StationnementLieuClos, source)]
  } else {
    return undefined;
  }
}

export function mapSignalements(source: any[]): Signalement[] {
  return source.map((s) => {
    return  {
      typeSignalement: s["type_signalement"],
      couleurVelo: s["couleur_velo"],
      marqueVelo: s["marque_velo"],
      dateVol: s["date_du_vol"],
      typeVelo: s["type_velo"],
      stationnementLieuClos: mapStationnementLieuClos(s["stationnement_lieu_clos"])
    };
  })
}
