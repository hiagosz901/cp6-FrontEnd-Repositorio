# Checkpoint 6 — processo e critérios

Este documento relaciona o portfólio aos critérios do Checkpoint 6. Os registros abaixo usam os prompts preservados em `promptsErefs.txt` e os pedidos feitos durante a revisão do projeto. Não foram criados eventos, experiências ou referências como se fossem fatos do autor.

## 1. Referências visuais

1. [Huy Phan — portfólio](https://huyml.co/). Referência para apresentar projetos selecionados em uma sequência editorial, com hierarquia tipográfica forte. Aplicação: navegação, chamadas e seção de projetos.
2. [Signal-A Studio](https://signal-a.studio/). Referência para a escala da tipografia, a abertura visual e a apresentação organizada de trabalhos. Aplicação: título da página, ritmo das seções e cartões de projeto.
3. [Exemplo de título sobre a imagem](img/references/portfolio-overlay-example.png), enviado pelo autor. Referência para sobrepor tipografia à fotografia. A decisão final foi separar o nome e a descrição da imagem: a hero é preta e a fotografia ganhou uma seção própria logo abaixo.
4. [Referência tipográfica “ASCENSION”](img/references/ascension-typography-example.png), enviada pelo autor. Referência de clima para letras grandes e contraste sobre fundo escuro. O lettering tridimensional e os brilhos não foram reproduzidos; o projeto mantém a tipografia Archivo do site.
5. Imagem “Rumo à Luz no Próximo Capítulo”, escolhida pelo autor para o projeto. Referência visual direta da seção com fotografia: escada, silhueta e abertura iluminada. O arquivo usado é `img/hero-luz.png`.

As duas capturas enviadas na conversa foram copiadas para `img/references/` para acompanhar a entrega.

## 2. Decisões de identidade visual

| Elemento | Decisão usada no site | Papel e motivo |
| --- | --- | --- |
| `#000000` | Fundo principal | Cria uma base escura e dá continuidade à imagem da escada. |
| `#FFFFFF` | Texto e botões principais | Mantém contraste alto e destaca títulos e ações. |
| `#A3A3A3` | Texto secundário | Distingue metadados sem competir com os títulos. |
| `#0C0C0C` | Fundo dos cartões | Separa os projetos do fundo preto com uma variação discreta. |

**Tipografia:** Archivo, nos pesos 400 a 800. Os pesos mais fortes dão ênfase ao nome e aos títulos; os pesos regulares mantêm a leitura dos textos e descrições.

**Tom:** direto, profissional e contemporâneo. O layout usa frases curtas, títulos em caixa alta, contraste alto e animações contidas.

**Estrutura:** hero preta com nome e apresentação; imagem em seção independente; habilidades; trabalhos; sobre; experiência; contato. Eventos não foram incluídos porque nenhum evento foi informado nos materiais disponíveis.

## 3. Prompts preservados

Os quatro primeiros registros abaixo foram transcritos de `promptsErefs.txt`, mantendo a redação arquivada.

### Prompt inicial

> crie um site de repositorio, e pegue como referencia esses dois links e as imagens que foram enviadas.

### Ajustes registrados no arquivo original

**Prompt 2**

> crie um aquivo css, e separe o html e faça a ordem dos arquivos de forma profissonal, criando pasta para separar html, css, src, img e etc

**Prompt 3**

> Troque o nome  NEXXAS SUPLEMENTOS
> para HighFlowTech e coloque esse link
>
> Troque o nome  Hugger Burger
> para  Força zero e coloque esse link https://ebook-forca-zero.vercel.app/
>
> Troque o nome  Hikar - Captaçao
> para Projeto 90 dias e coloque esse link https://projeto90dias-rosy.vercel.app/
>
> e coloca a imagen de cada 1 na capa de cada trabalho

**Prompt 4**

> coloque as imagens do hikar, da astec da kortesia

### Ajustes feitos nesta revisão

5. `quero que vc coloque essa imagem como fundo da hero do site`
6. `quero que isso ai fique meio que em cima da imagem igual esse exemplo que mandei`
7.

```text
mais nao ta igual eu pedi, quero que essa escrita&#x20;
Hiago Silva de OLiveira
Estudante de Engenharia de Software na FIAP e Jovem Aprendiz na XP Inc. Desenvolvo projetos web e soluções digitais.

vc crie outra sessao para ela onde o fundo vai ser preto  separe ela da imagens  e crie uma sessao especifica pra essa imagem de fundo ele ficara so ela  entao sera hero sem a imagem de fundo  e em seguida vira a a sessao separada com imagem de fundo&#x20;
[**Ver trabalhos**](http://127.0.0.1:5500/index.html#trabalhos)[**Contato**](http://127.0.0.1:5500/index.html#contato)
```

8.

```text
me contato quero que vc coloque meu, linkdin e meu telefone e meu email&#x20;
[**linkedin.com/in/hiago-silva-de-oliveira**](https://www.linkedin.com/in/hiago-silva-de-oliveira/) &#x20;
11 94714-6300
profissionalhiago01@gmail.com
```

9. `quero que vc olhe tudo que ta escrito no index.html e concerte todo o portugues se tiver algo escrito fora do normal`
10. `vc nao concertou todos as coisas que pedi ainda continua com a quebra e simbolos entranhos ja escrita`
11. `consegue verificar se meu codigo ta dentro dos padroes desse pdf se nao tiver ajusta pra mim`

## 4. Registro de correções

| Rodada / problema observado | Pedido de correção | Resultado | Aprendizado |
| --- | --- | --- | --- |
| 5. A imagem ainda não fazia parte do site. | Usar a imagem enviada na hero. | A imagem foi adicionada ao projeto; a primeira versão a colocou como fundo da própria hero. | Confirmar a composição desejada antes de fechar a estrutura. |
| 6. O autor queria o título sobre a imagem, conforme o exemplo visual. | Sobrepor o conteúdo à fotografia. | A sobreposição não correspondeu ao resultado pretendido; o autor esclareceu a separação na rodada seguinte. | Uma referência visual pode não explicar sozinha a estrutura final desejada. |
| 7. Texto e imagem estavam na mesma hero. | Deixar o nome e a apresentação em uma hero preta e mover a imagem para uma seção própria. | `index.html` separa as seções; os botões “Ver trabalhos” e “Contato” ficam na seção visual. | Tratar a imagem e o conteúdo textual como blocos independentes quando essa é a intenção do layout. |
| 8. Faltavam meios de contato. | Incluir LinkedIn, telefone e e-mail. | Os três contatos aparecem como links apropriados em `src/main.js`. | Usar `https`, `tel:` e `mailto:` conforme o tipo de contato. |
| 9. O autor identificou português fora do normal no HTML. | Revisar os textos do `index.html`. | A mensagem de fallback sem JavaScript ficou mais clara; os textos dinâmicos ainda precisavam ser conferidos. | O conteúdo não está todo no HTML: revisar também os dados gerados por JavaScript. |
| 10. Permaneciam caracteres corrompidos na seção Experiência. | Corrigir a escrita e a codificação do conteúdo renderizado. | A página foi aberta no navegador e os textos de experiência aparecem com acentos corretos. | Validar o conteúdo renderizado no navegador, não apenas a origem dos dados. |
| 11. O site precisava ser comparado aos critérios do PDF. | Conferir o projeto e ajustar o que faltava. | Seção de habilidades e documentação dos critérios, referências, decisões visuais e correções adicionadas. | Mapear cada critério para uma parte verificável do site ou do registro do processo. |

## 5. Resultado e itens a completar

O site já apresenta projetos, habilidades, sobre, experiência e contato. O repositório local contém o código e os arquivos de imagem.

- Link público do repositório: não localizado nos arquivos disponíveis.
- Link do deploy final do portfólio: não localizado nos arquivos disponíveis.
- Reflexão pessoal final: precisa ser escrita pelo autor para não atribuir a ele uma opinião inventada.
- Eventos: nenhum evento foi informado para inclusão.

**Checagem local realizada:** a página foi aberta no navegador; as seções, os textos com acentos e os cartões de projeto foram conferidos. Os filtros “No ar” e “Em breve” foram acionados e a visualização foi restaurada para “Todos”.

**Checagem ainda necessária antes da entrega:** percorrer a página em celular e tablet, testar os links externos e confirmar os links públicos do repositório e do deploy. O PDF recomenda verificar links, botões, interações e diferentes tamanhos de tela.
