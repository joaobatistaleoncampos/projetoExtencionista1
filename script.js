// IMPORTS DO FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// CONFIG DO FIREBASE (COLE A SUA AQUI)
const firebaseConfig = {
  apiKey: "AIzaSyCE8AzqEDisC3KVztITvzcGk-LRnsqGVXQ",
  authDomain: "site-doacao.firebaseapp.com",
  databaseURL: "https://site-doacao-default-rtdb.firebaseio.com",
  projectId: "site-doacao",
  storageBucket: "site-doacao.firebasestorage.app",
  messagingSenderId: "999078266795",
  appId: "1:999078266795:web:f21d4538e8f0a6c82234ee",
  measurementId: "G-H6E4E7JTPD"
};

// INICIA FIREBASE
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// PEGAR ELEMENTOS
const form = document.getElementById("formDoacao");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // CAMPOS
  const nome = document.getElementById("nome").value;
  const contato = document.getElementById("contato").value;

  const roupas = document.getElementById("roupas").checked;
  const calcados = document.getElementById("calcados").checked;
  const cama = document.getElementById("cama").checked;
  const outros = document.getElementById("outros").checked;

  try {
    await addDoc(collection(db, "doacoes"), {
      nome: nome,
      contato: contato,
      itens: {
        roupas: roupas,
        calcados: calcados,
        cama: cama,
        outros: outros
      },
      data: new Date()
    });

    alert("Doação registrada com sucesso!");
    form.reset();

  } catch (erro) {
    console.error("Erro ao salvar:", erro);
    alert("Erro ao salvar!");
  }
});