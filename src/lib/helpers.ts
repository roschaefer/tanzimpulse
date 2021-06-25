export function overbooked(seminar: Seminar) {
  if (!seminar.maximaleAnzahlTeilnehmer) return false;
  return seminar.teilnehmer.length > seminar.maximaleAnzahlTeilnehmer;
}
export function onlyUnique(k: Identifiable, index: number, kategorien: Identifiable[]) {
  return kategorien.map((k) => k.id).indexOf(k.id) === index;
}

export function addTransientSelected(selectedIds?: string[]) {
  return selectedIds?.length ? (kategorie: Kategorie) => ({ ...kategorie, selected: selectedIds.includes(kategorie.id) }) : (kategorie: Kategorie) => ({ ...kategorie, selected: true });
}

// A little silly, but offers graphQL syntax highlighting in the editor
export const gql = String.raw;
