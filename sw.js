self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installé avec succès !');
});

// Obligatoire pour que le téléphone valide l'installation
self.addEventListener('fetch', (e) => {
  // On laisse passer toutes les requêtes (important pour que Firebase marche)
});
