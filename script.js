function enviarParaWhatsapp() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const valor = document.getElementById("valor").value;

  const mensagem = `Olá! Meu nome é ${nome}, meu telefone é ${telefone}.\\nPago cerca de ${valor} por mês na conta de energia e gostaria de economizar.`;
  const url = `https://wa.me/553125801241?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
  return false;
}
