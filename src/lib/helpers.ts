export function overbooked(seminar: Seminar) {
	if (!seminar.maximaleAnzahlTeilnehmer) return false;
	return seminar.teilnehmer.length > seminar.maximaleAnzahlTeilnehmer;
}
