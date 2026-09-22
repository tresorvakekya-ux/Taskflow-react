import { NextRequest, NextResponse } from 'next/server';
import {
  obtenirTacheParId,
  marquerCommeTerminee,
  supprimerTache,
} from '@/lib/tachesStore';

type Context = {
  params: Promise<{ id: string }> | { id: string };
};

export async function GET(
  request: NextRequest,
  context: Context
) {
  const { id } = await context.params;
  const tache = obtenirTacheParId(id);

  if (!tache) {
    return NextResponse.json(
      { error: 'Tâche non trouvée.' },
      { status: 404 }
    );
  }

  return NextResponse.json(tache, { status: 200 });
}

export async function PUT(
  request: NextRequest,
  context: Context
) {
  const { id } = await context.params;
  const tacheMiseAJour = marquerCommeTerminee(id);

  if (!tacheMiseAJour) {
    return NextResponse.json(
      { error: 'Tâche non trouvée.' },
      { status: 404 }
    );
  }

  return NextResponse.json(tacheMiseAJour, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  context: Context
) {
  const { id } = await context.params;
  const tacheSupprimee = supprimerTache(id);

  if (!tacheSupprimee) {
    return NextResponse.json(
      { error: 'Tâche non trouvée.' },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { message: 'Tâche supprimée avec succès.', tache: tacheSupprimee },
    { status: 200 }
  );
}