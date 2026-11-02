self.addEventListener('install', (e) => {
  console.log('[Service Worker] Total Limpeza RLV Instalado com Sucesso!');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('[Service Worker] Ativado e pronto para rodar!');
});

self.addEventListener('fetch', (e) => {
  // Mantém o app interceptando requisições e operando na camada web app
});