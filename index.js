const fs = require('fs');
const config = require('./config.json')
var bypato = ''
for (let i = 0; i < `${config.repeticoes}`; i++) { 
const numero = Math.floor(Math.random() * 1000000000) + 999999999;
const mes = Math.floor(Math.random() * 8) + 1;
const cvv = Math.floor(Math.random() * 800) + 100;
const ano = Math.floor(Math.random() * 10) + 2021;
const numero2 = `${config.bin}` + numero;
const data = `${numero2}|0${mes}|${ano}|${cvv}`;
bypato += `${data}\n` }
bypato += "\nBY PATO DEV O BRABO"
fs.writeFile(`${config['nome-arquivo']}`+'-ByPato.' + `${config.extencao}`, bypato, (err) => {
    if (err) throw err;
console.log("\033[0;31m ██████╗ ██████╗███████╗\n██╔════╝██╔════╝██╔════╝\n██║     ██║     ███████╗\n██║     ██║     ╚════██║\n╚██████╗╚██████╗███████║\n ╚═════╝ ╚═════╝╚══════╝ By PatoDev\033[5;30m\033[1;32m")
  console.log(`[!] - Foi criado um arquivo com o nome ${config['nome-arquivo']}-ByPato.${config.extencao}, e dentro dele contem ${config.repeticoes} ccs geradas com a bin ${config.bin}  no formato do tipo checker`);
});

//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
//CODIGO CRIADO 100% BY PATO DEV, TODOS DOS DIREITOS REZERVADOS, CASo AJA ALGUMA MODIFICAÇAO DOS CREDITOS OU DOS ARQUIVOS VOCE ESTARA SUJEITO A UM BOLETIN DE OCORRENCIA DE ACORDO COM O LICENCIAMENTO MIT.
