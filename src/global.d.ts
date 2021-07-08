/// <reference types="@sveltejs/kit" />
interface Identifiable {
  id: string;
}

type Teilnehmer = {
  id: string;
  email: string;
  name: string;
  adresse: string;
  seminare: Seminar[];
};

type Seminar = {
  id: string;
  titel: string;
  datum: Date;
  kurzbeschreibung: string;
  preis?: number;
  maximaleAnzahlTeilnehmer?: number;
  teilnehmer: Teilnehmer[];
  kategorien: Kategorie[];
};

type Kategorie = {
  id: string;
  name: string;
  selected?: boolean;
};
