
export interface Tache {
  id: string;
  titre: string;
  terminee: boolean;
}

export let meTaches: Tache[] = [
  { id: '1', titre: 'Configurer le projet Next.js', terminee: true },
  { id: '2', titre: 'Créer les routes d API pour /api/taches', terminee: false },
  { id: '3', titre: 'Intégrer le composant de connexion TaskFlow', terminee: false },
];

export function toutObtenirTaches(): Tache[] {
  return meTaches;
}

export function obtenirTacheParId(id: string): Tache | undefined {
  return meTaches.find((t) => t.id === id);
}

export function ajouterTache(titre: string): Tache {
  const nouvelleTache: Tache = {
    id: Date.now().toString(),
    titre,
    terminee: false,
  };
  meTaches.push(nouvelleTache);
  return nouvelleTache;
}

export function marquerCommeTerminee(id: string): Tache | null {
  const tache = obtenirTacheParId(id);
  if (!tache) return null;
  tache.terminee = true;
  return tache;
}

export function supprimerTache(id: string): Tache | null {
  const index = meTaches.findIndex((t) => t.id === id);
  if (index === -1) return null;
  return meTaches.splice(index, 1)[0];
}