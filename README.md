# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

---------------------------------------------------------------------------------------------------

## Descrição das regras

### Preparação do jogo

1. São distribuidas 6 cartas aleatórias para cada jogador.

2. O restante das cartas formam a pilha de compra.

3. Em partidas com 3 a 6 jogadores, cada jogador recebe somente 1 pino de votação, já em partidas com 7 a 12 jogadores cada jogador recebe 2 pinos de votação.

### Início da partida

No primeiro turno, um dos jogadores é o narrador. Ele
escolhe uma das 6 imagens que tem na mão e, sem mostrar
a carta aos demais jogadores, diz algo em voz alta que esteja
associado a essa imagem.
O que ele diz pode ter formas diferentes: pode ser apenas
uma palavra, muitas palavras ou apenas um som. Pode ser
algo inventado ou retirado de alguma obra já existente (um
verso ou dois de um poema ou música, o título de um filme,
livro ou qualquer outro, um ditado, etc.).

### Entrega das cartas para o narrador

Os outros jogadores escolhem, dentre as 6 cartas que pos-
suem nas mãos, a carta que acreditam que melhor representa
o que o narrador disse. Cada jogador entrega a carta escolhida
ao narrador, sem mostrar aos outros jogadores. O narrador
embaralha sua carta com as cartas escolhidas dos outros
jogadores e as coloca, aleatoriamente e com a face para cima,
sobre os espaços numerados de 1 a 12 na trilha de pontos

### Votação

O objetivo dos jogadores é encontrar a carta do narrador den-
tre as cartas reveladas. Cada jogador, com exceção do
narrador, vota secretamente na carta que acredita ser a do
narrador usando, para isso, a cartela de votação. Por exem-
plo: se um jogador acredita que a imagem do narrador é a
número 3, ele coloca o pino de votação sobre o espaço
número 3 da cartela de votação. Quando todos os jogadores
tiverem votado, cada um mostra sua cartela de votação, e o
narrador revela qual imagem era a sua.

### Contagem dos pontos

Se todos os jogadores descobrirem qual é a imagem do nar-
rador, ou se nenhum jogador descobrir, o narrador não ganha
pontos e os outros jogadores ganham 2 pontos cada um.

Nos outros casos, o narrador ganha 3 pontos, assim como
os jogadores que adivinharam qual era a carta do narrador.

Cada jogador, com exceção do narrador, marca 1 ponto para
cada voto que teve em sua carta (o máximo de pontos que
pode marcar é 3)

### Fim do turno

Cada jogador compra uma carta para ter novamente 6 cartas
na mão. Se não houver mais cartas na pilha de compras para
os jogadores comprarem, embaralhe as cartas descartadas
para formar uma nova pilha de compras. O novo narrador do
próximo turno é o jogador que está sentado à esquerda do
narrador anterior (e assim por diante, no sentido horário, para
os turnos restantes do jogo).

### Fim do jogo

A partida termina quando um jogador chega a 30 pontos. O
jogador que acumulou o maior número de pontos ao longo
da partida é o vencedor.
