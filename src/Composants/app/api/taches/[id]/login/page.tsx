import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('tresorvakekya@gmail.com');
  const [password, setPassword] = useState('••••••••');
  const [errorMessage, setErrorMessage] = useState('E-mail ou mot de passe incorrect.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Veuillez remplir tous les champs.');
    } else {
      setErrorMessage('E-mail ou mot de passe incorrect.');
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-slate-900 font-sans">
      <div className="hidden md:flex w-1/2 flex-col justify-center px-12 lg:px-20 text-white bg-slate-900">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Task<span className="text-emerald-400">Flow</span>
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Organisez vos projets, suivez vos tâches, et gardez le contrôle de votre avancement.
          </p>

          <div className="space-y-3 pt-4 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <p>Créez autant de projets que nécessaire</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <p>Suivez chaque tâche de bout en bout</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <p>Visualisez votre progression en un coup d eyeil</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 flex-col justify-center items-center bg-slate-100 px-6 py-12">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-bold text-slate-800">Connexion</h2>
            <p className="text-xs text-slate-500">Entrez vos identifiants pour continuer</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="nom@exemple.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
                required
              />
            </div>

            {errorMessage && (
              <div className="rounded-md bg-red-100 border border-red-200 p-2.5 text-center text-xs font-medium text-red-600">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2.5 text-xs transition duration-150"
            >
              Se connecter
            </button>
          </form>

          <div className="text-center text-xs text-slate-600">
            Pas encore de compte ?{' '}
            <a href="#" className="font-semibold text-slate-800 hover:underline">
              Créer un compte
            </a>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-3 text-[11px] text-amber-800">
            <strong>Note 1 :</strong> Connexion / Inscription ... le message rouge s affiche en cas d erreur.
          </div>
        </div>
      </div>
    </div>
  );
}