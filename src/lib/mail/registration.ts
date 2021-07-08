import { dateFormat } from "../helpers";
const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
  <p>
    Hallo ${teilnehmer.name},</p>
    <p>vielen Dank für Ihr Interesse zum Seminar "${seminar.titel}" am ${dateFormat.format(new Date(seminar.datum))}.</p>
    <p>Damit Ihr Platz reserviert ist, überweisen Sie bitte bis zum xx den Betrag XX auf folgendes Konto:</p>
    <p>IBAN: 123456<br>
    Musterbank</p>
    <p>Erst nach Eingang der Kursgebühr auf unserem Konto ist Ihr Platz reserviert.</p>
    <p>Bitte haben Sie dafür Verständnis, dass bei Nichteingang des Betrages innerhalb der oben genannten Frist, wir Ihre Anfrage stornieren und den Platz wieder für andere Interessenten freigeben</p>
    <p>Wir freuen uns auf Ihre Teilnahme und verbleiben mit freundlichen Grüßen</p>
    <p>Ihr Tanzimpulse-Team</p>
    <hr>
    <p><strong>Tanzimpulse - Institut für Tanzimpulse<strong></p>
    <p>Büroanschrift<br>
        Folwiese 20<br>
51069 Köln<br>
Bettina Bierdümpel und Ute Luckey</p>
<br>
<p>

<p>Kontakt<br>
Tel:		0221 - 68 36 91<br>
Fax: 	0221 - 689 77 97<br>
Web: 	<a href="https://www.tanzimpulse.de" target="_blank">tanzimpulse.de</a>
</p>
 


    ${seminar.kurzbeschreibung}
  </p>
`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) => html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
  html,
  text
};
