import { dateFormat } from "../helpers";
const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
<p>
Hallo ${teilnehmer.name},</p>
<p>vielen Dank für Ihr Interesse zum Seminar "${seminar.titel}" am ${dateFormat.format(new Date(seminar.datum))}.<br>
Wir haben Sie auf die Warteliste gesetzt und werden Sie kontaktieren, wenn kurzfristig noch ein Platz frei werden sollte.
</p>
<p>Mit freundlichen Grüßen</p>
<p>Ihr Tanzimpulse-Team</p>
<hr>
    <p><strong>Tanzimpulse - Institut für Tanzimpulse</strong></p>
    <p>Büroanschrift<br>
        Folwiese 20<br>
51069 Köln<br>
Bettina Bierdümpel und Ute Luckey</p>


<p>Kontakt<br>
Tel:		0221 - 68 36 91<br>
Fax: 	0221 - 689 77 97<br>
Web: 	<a href="https://www.tanzimpulse.de" target="_blank">tanzimpulse.de</a>
</p>
`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) => html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
  html,
  text
};
