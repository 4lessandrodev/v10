const CARDS_LOGO_CLIENTES = document.getElementById('logos-clientes');
let position_logo_clients_direita = true;

if (innerWidth >= 990) {
 setInterval(() => {
     position_logo_clients_direita = !position_logo_clients_direita;
     if (position_logo_clients_direita) {
         CARDS_LOGO_CLIENTES.scroll({
             left: 0,
             behavior: 'smooth'
         });
     } else {
         CARDS_LOGO_CLIENTES.scroll({
             left: 600,
             behavior: 'smooth'
         });
     }
 }, 7000);
}