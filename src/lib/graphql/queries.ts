import { gql } from '$lib/helpers';
export const seminarFragment = gql`
  fragment seminarFragment on Seminar {
    id
    titel
    url
    maximaleAnzahlTeilnehmer
    datum
    bild {
      medium: url(transformation: { image: { resize: { width: 480 } } })
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
      adresse
      koordinaten {
        longitude
        latitude
      }
    }
    teilnehmer {
      id
    }
  }
`;

export const SEMINAR = gql`
  ${seminarFragment}

  query ($url: String!) {
    seminar(where: { url: $url }) {
      ...seminarFragment
      kategorien {
        id
        name
      }
    }
  }
`;
export const SEMINARE = gql`
  ${seminarFragment}

  query ($seminarFormat: SeminarFormat!, $limit: Int, $today: DateTime!) {
    seminare(orderBy: datum_ASC, where: {format: $seminarFormat, datum_gte: $today}, first: $limit) {
      ...seminarFragment
      kategorien {
        id
        name
        seminare(where: {format: $seminarFormat}) {
          id
        }
      }
    }
  }
  
`;

export const NEUIGKEITEN = gql`
{
  neuigkeiten {
    id
    ueberschrift
    inhalt {
      html
    }
  }
}
`;