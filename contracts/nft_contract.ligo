// Declaración del contrato
type token is 
  | Token of int * string;

// Entrada del contrato
type storage is 
  | Ledger of map(address, list(token));

// Función para agregar un NFT a un usuario específico
function addToken (const add : address; const token : token; const ledger : map(address, list(token))) : map(address, list(token)) is
  let userTokens = 
    if (Map.mem add ledger) then Map.find add ledger else []
  in
    Map.add add (token :: userTokens) ledger;

// Función para mintear un nuevo NFT
function mintNFT (const to : address; const token : token; var storage : storage) : unit is 
  let newLedger = addToken(to, token, storage)
  in
    storage := Ledger(newLedger);

// Función principal del contrato
function main (const _ : unit; var storage : storage; const parameter : token * address) : list(operation) is
  let (token, to) = parameter in
  let _ = mintNFT(to, token, storage)
  in 
    [];
