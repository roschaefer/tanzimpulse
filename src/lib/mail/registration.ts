import { dateFormat } from "../helpers";
const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
  <p>Hallo ${teilnehmer.name},</p>
    <p>vielen Dank für Ihr Interesse zum Seminar "${seminar.titel}" am ${dateFormat.format(new Date(seminar.datum))}.
    <br>Damit Ihr Platz reserviert ist, überweisen Sie bitte innerhalb von 14 Tagen, spätestens jedoch bis zum Veranstaltungstermin, den Betrag von ${seminar.preis} Euro auf folgendes Konto:</p>
    <p>IBAN: 12345689<br>
    Musterbank</p>
    <p><strong>Erst nach Eingang der Kursgebühr auf unserem Konto ist Ihr Platz reserviert.</strong>
    <br>Bitte haben Sie dafür Verständnis, dass bei Nichteingang des Betrages innerhalb der oben genannten Frist, wir Ihre Anfrage stornieren und den Platz wieder für andere Interessenten freigeben</p>
    <p>Wir freuen uns auf Ihre Teilnahme und verbleiben mit freundlichen Grüßen</p>
    <p>Ihr Tanzimpulse-Team</p>
    <br>
    <hr>
    <br>
    <p><strong>Tanzimpulse - Institut für Tanzimpulse</strong></p>
    <p>
    Büroanschrift<br>
    Folwiese 20<br>
    51069 Köln<br>
    Bettina Bierdümpel und Ute Luckey</p>
    <p>Kontakt<br>
    Tel:	0221 - 68 36 91<br>
    Fax: 	0221 - 689 77 97<br>
    E-Mail: <a href="mailto:info@tanzimpulse.de">info@tanzimpulse.de</a><br>
    Web: 	<a href="https://www.tanzimpulse.de" target="_blank">tanzimpulse.de</a>
    </p>
    <p>
    Bürozeiten<br>
    Montag bis Freitag: 8:30 - 13:00 Uhr<br >
    Dienstags und Donnerstags: 20:30 - 22:00 Uhr
    </p>
      


    ${seminar.kurzbeschreibung}

`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) => html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
  html,
  text
};
