export const seminarFragment = (seminarFormat?: boolean) => `
id
titel
url
maximaleAnzahlTeilnehmer
bild {
  medium: url(transformation: {image: {resize: {width: 480}}})
  fileName
  height
  width
  size
  handle
  mimeType
}
preis
format
kurzbeschreibung
beschreibung {
  html
}
referenten {
  name
}
veranstaltungsort {
  koordinaten {
    longitude
    latitude
  }
}
teilnehmer {
  id
}
kategorien {
  id
  name
  seminare${seminarFormat ? '(where: {format: $seminarFormat})' : ''} {
    id
  }
}
`;

export const SEMINAR = `
  query($url:String!) {
    seminar(where: {url: $url}) {
      ${seminarFragment()}
    }
  }
`;
export const SEMINARE = `
  query($seminarFormat: SeminarFormat!){
    seminare(where:{format: $seminarFormat}) {
      ${seminarFragment(true)}
    }
  }
`;
