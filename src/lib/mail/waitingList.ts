const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
  <p>
    Hallo ${teilnehmer.name} wir haben dich auf die Warteliste des Seminars "${seminar.titel}" gesetzt.
  </p>
  <p>
    ${seminar.kurzbeschreibung}
  </p>
`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) => html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
  html,
  text
};
