function filtrar(categoria) {
    const projetos = document.querySelectorAll('.project');
    const botoes = document.querySelectorAll('.tab-btn');

    botoes.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    projetos.forEach(projeto => {
        if (categoria === 'todos') {
            projeto.style.display = 'block';
        } else {
            projeto.style.display =
                projeto.classList.contains(categoria) ? 'block' : 'none';
        }
    });
}