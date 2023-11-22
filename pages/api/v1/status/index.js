function status(request, response) {
  response.status(200).json({ chave: "teste concluído" });
}

export default status;
