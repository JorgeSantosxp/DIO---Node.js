# Podcast Menager

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios podcasts separados por categoria


### Domínio
Podcasts feitos em vídeos

### Features
- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtra episódios por nome de podcast


## Como

### Feature:

- Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
GET: retorna lista de episódios
Vou retornar em uma api rest (json) o 
nome do podcast, nome do episódio, imagem de capa, link

```js
[
{
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: ["saúde", "esporte", "corrida"]
},

{
    podcastName: "Flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"]
},
]


```