import { useState, FormEvent } from 'react'; // Ajout de FormEvent ici

interface FormulaireTacheProps {
  onTacheAjoutee: () => void; // Fonction pour recharger la liste après l'ajout
}
    
export default function FormulaireTache({ onTacheAjoutee }: FormulaireTacheProps) {
  const [titre, setTitre] = useState('');
  const [enCoursEnvoi, setEnCoursEnvoi] = useState(false);

  const gererSoumission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // On évite d'envoyer un texte vide
    if (!titre.trim()) return;

    setEnCoursEnvoi(true);

    try {
      // Envoi de la nouvelle tâche à l'API
      const reponse = await fetch('http://localhost:3001/taches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titre: titre.trim(),
          completed: false, // Une nouvelle tâche n'est pas encore faite
        }),
      });

      if (!reponse.ok) {
        throw new Error('Erreur lors de la création de la tâche');
      }

      // Tout s'est bien passé : on vide le champ de saisie
      setTitre('');
      // On prévient le parent qu'il faut recharger la liste des tâches
      onTacheAjoutee();
    } catch (erreur) {
      alert("Impossible d'ajouter la tâche. Vérifiez que votre API fonctionne.");
      console.error(erreur);
    } finally {
      setEnCoursEnvoi(false);
    }
  };

  return (
    <form onSubmit={gererSoumission} style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        placeholder="Ajouter une nouvelle tâche..."
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        disabled={enCoursEnvoi}
        style={{ padding: '8px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button 
        type="submit" 
        disabled={enCoursEnvoi}
        style={{ padding: '8px 16px', borderRadius: '4px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        {enCoursEnvoi ? 'Ajout...' : 'Ajouter'}
      </button>
    </form>
  );
}