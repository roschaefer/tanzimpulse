const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
  <p>
    Hallo ${teilnehmer.name} vielen Dank für deine Anmeldung zum Seminar "${seminar.titel}".
  </p>
  <p>
    ${seminar.kurzbeschreibung}
  </p>
`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) =>
	html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
	html,
	text
};
