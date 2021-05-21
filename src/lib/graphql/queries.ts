export const seminarFragment = `
id
titel
url
bild {
  medium: url(transformation: {image: {resize: {width: 300}}})
  small: url(transformation: {image: {resize: {width: 32}}})
  fileName
  height
  width
  size
  handle
  mimeType
}
preis
format
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
`;

export const SEMINAR = `
query($url:String!) {
    seminar(where: {url: $url}) {
        ${seminarFragment}
    }
}
`;
export const SEMINARE = `
  query {
    seminare {
        ${seminarFragment}
    }
  }
`;
