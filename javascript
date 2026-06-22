const array_selecoes = ["Brasil", "Argentina", "França", "Alemanha", "Espanha", "Portugal", "Marrocos", "Japão"];

const objeto_selecao = {
    nome: "Brasil",
    continente: "América do Sul",
    titulos: 5
};

const dados_pontuacao = [
    { nome: "Brasil", pontos: 4 },
    { nome: "Marrocos", pontos: 4 },
    { nome: "Escócia", pontos: 3 },
    { nome: "Haiti", pontos: 0 }
];

function obter_texto_pontos(total_pontos) {
    return "Pontuação Total: " + total_pontos + " pontos";
}

function calcular_total(vitorias, empates) {
    let total = (vitorias * 3) + (empates * 1);
    return total;
}

const btn_mostrar = document.querySelector("#btn-mostrar-selecoes");
const container_lista = document.querySelector("#lista-selecoes-container");

btn_mostrar.addEventListener("click", function() {
    container_lista.innerHTML = "";
    const ul_elemento = document.createElement("ul");
    ul_elemento.classList.add("lista-dinamica");
    
    array_selecoes.forEach(function(selecao) {
        const li_elemento = document.createElement("li");
        li_elemento.textContent = selecao;
        ul_elemento.appendChild(li_elemento);
    });
    
    container_lista.appendChild(ul_elemento);
});

const btn_favorito = document.querySelector("#btn-favorito");
const card_brasil = document.querySelector("#card-usa");

btn_favorito.addEventListener("click", function() {
    card_brasil.classList.toggle("destaque-favorito");
});

const btn_calcular = document.querySelector("#btn-calcular");
const campo_vitorias = document.querySelector("#vitorias");
const campo_empates = document.querySelector("#empates");
const paragrafo_resultado = document.querySelector("#resultado-pontos");

btn_calcular.addEventListener("click", function() {
    const qtd_vitorias = parseInt(campo_vitorias.value) || 0;
    const qtd_empates = parseInt(campo_empates.value) || 0;
    
    const pontos_finais = calcular_total(qtd_vitorias, qtd_empates);
    const mensagem_retorno = obter_texto_pontos(pontos_finais);
    
    if (pontos_finais > 0) {
        paragrafo_resultado.style.color = "#1a73e8";
    } else {
        paragrafo_resultado.style.color = "#d93025";
    }
    
    paragrafo_resultado.textContent = mensagem_retorno;
});

const form_cadastro = document.querySelector("#form-cadastro");
const msg_sucesso = document.querySelector("#msg-sucesso");

form_cadastro.addEventListener("submit", function(evento) {
    evento.preventDefault();
    alert("Enviado com sucesso!");
    msg_sucesso.style.display = "block";
    form_cadastro.reset();
});
