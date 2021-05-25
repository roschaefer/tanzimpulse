/// <reference types="@sveltejs/kit" />
type Teilnehmer = {
	email: string;
	name: string;
	adresse: string;
	seminare: Seminar[];
};

type Seminar = {
	titel: string;
	kurzbeschreibung: string;
	preis?: number;
	maximaleAnzahlTeilnehmer?: number;
	teilnehmer: Teilnehmer[];
};
