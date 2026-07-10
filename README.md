# XSS Demo - Aplicação Vulnerável

## Descrição

Este projeto demonstra uma aplicação web intencionalmente vulnerável a ataques de **Cross-Site Scripting (XSS)**.

O objetivo é mostrar como o uso inadequado do método `innerHTML` permite que conteúdos enviados pelo usuário sejam interpretados como HTML pelo navegador, possibilitando a execução de elementos e eventos maliciosos.

> **Atenção:** Este projeto foi desenvolvido exclusivamente para fins educacionais e não deve ser utilizado em ambientes de produção.

## Tecnologias utilizadas

* Node.js
* Express.js
* HTML5
* CSS3
* JavaScript

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

3. Abra o navegador em:

```
http://localhost:3000
```

## Demonstração

A aplicação permite que usuários adicionem comentários.

Nesta versão, os comentários são inseridos utilizando:

```javascript
innerHTML
```

Como consequência, conteúdos HTML enviados pelo usuário são interpretados pelo navegador.

Exemplo:

```html
<h1>Teste</h1>
```

O navegador renderiza o texto como um título.

Também é possível observar a execução de eventos HTML, demonstrando a vulnerabilidade de XSS.

## Objetivo acadêmico

Este projeto foi desenvolvido para demonstrar, de forma prática, como uma implementação insegura pode permitir ataques do tipo Cross-Site Scripting (XSS), servindo como comparação com uma versão protegida da aplicação.
