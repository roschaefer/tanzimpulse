import { seminarFragment } from './queries';
export const UPSERT_TEILNEHMER = `
mutation ($url: String!, $email: String!, $name: String!, $adresse: String!) {
  teilnehmer: upsertTeilnehmer(
    where: {email: $email},
    upsert: {
      create: { name: $name, email: $email, adresse: $adresse, seminare: {connect: {url: $url}}},
      update: { name: $name, email: $email, adresse: $adresse, seminare: {connect: {where: {url: $url}}}}
    }
  ) {
    id
    name
    email
    seminare(where: {url: $url}) {
      ${seminarFragment}
    }
  }
}
`;

export const PUBLISH_TEILNEHMER = `
mutation ($email: String!) {
  teilnehmer: publishTeilnehmer(where: {email: $email}, to: PUBLISHED) {
    stage
    id
    documentInStages(stages: [PUBLISHED]) {
      id
      stage
    }
  }
}
`
