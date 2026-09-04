# Só uma Palhinha — página do produto

HTML, CSS e JS separados, sem build e sem dependência. Basta subir os
arquivos como estão.

## Estrutura

```
index.html
estilo.css
script.js
img/
  logo-palhinha.png
  corte.jpg
  duas.jpg
  mordida.jpg
```

Os caminhos são relativos, então a pasta funciona igual aberta com dois
cliques no computador ou servida pelo GitHub Pages.

## Publicar no GitHub Pages

1. Crie um repositório e envie estes arquivos na raiz, mantendo a pasta `img/`.
2. No repositório, vá em **Settings › Pages**.
3. Em **Source**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`. Salve.
5. O endereço sai em `https://SEU-USUARIO.github.io/NOME-DO-REPO/` em alguns minutos.

## Antes de publicar: o que precisa ser trocado

Os pontos abaixo estão marcados no `index.html` com o comentário `TROCAR`.
Todos são suposição, não informação confirmada.

- **Perfil do Instagram** — hoje `@souumapalhinha`, no rodapé. É o único
  chute que sobrou nos links.
- **Segundo sabor** — nome e descrição. O texto atual descreve o que aparece
  na foto (cobertura clara, doce de leite, coco), sem nome oficial.
- **Região de entrega** — a resposta na seção de perguntas está genérica.

Confira também, com quem produz, os itens que viram compromisso público:

- Validade de cinco dias e orientação de congelamento.
- Aviso de alérgenos (leite, glúten, soja, e a menção a castanhas).
- Prazos de encomenda: pedido fechando às 20h e dois dias para festa.

O WhatsApp já está ligado: os quatro botões apontam para
`wa.me/5521992507540` com a mensagem "Oi! Vim pelo site e quero encomendar
palhinhas." já preenchida.

## Fontes

Anton e Karla são carregadas do Google Fonts pelo `<link>` no `index.html`.
Se um dia a página precisar funcionar sem internet, baixe os arquivos `.woff2`
e troque o `<link>` por regras `@font-face` locais.

## Trocar as fotos

Substitua os arquivos em `img/` mantendo os nomes. As fotos entram pequenas
e emolduradas de propósito, enquanto ainda são provisórias. Quando houver
fotos melhores, aumente `max-width` na regra `.moldura` do `estilo.css`.
