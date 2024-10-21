## 1. Introdução ao DOM (Document Object Model)
- O que é o DOM e sua relação com HTML e JavaScript.
- Estrutura do DOM: nós, elementos e árvore do DOM.
- Diferença entre o DOM e a renderização da página.

## 2. Selecionando Elementos do DOM
- **Métodos de Seleção**
  - `getElementById(id)` – Seleciona um elemento pelo seu ID.
  - `getElementsByClassName(class)` – Seleciona todos os elementos com uma classe específica (retorna uma coleção de elementos).
  - `getElementsByTagName(tag)` – Seleciona todos os elementos de uma tag específica (retorna uma coleção de elementos).
  - `querySelector(selector)` – Seleciona o primeiro elemento que corresponde a um seletor CSS.
  - `querySelectorAll(selector)` – Seleciona todos os elementos que correspondem a um seletor CSS (retorna uma NodeList).

- **Acessando Elementos Filhos**
  - `parentNode` – Acessa o pai de um elemento.
  - `childNodes` – Acessa todos os nós filhos de um elemento.
  - `firstChild`, `lastChild` – Acessa o primeiro e o último filho de um elemento.
  - `nextSibling`, `previousSibling` – Acessa o irmão seguinte ou anterior.

## 3. Modificando Elementos do DOM
- **Alterando Conteúdo**
  - `textContent` – Modifica o texto de um elemento.
  - `innerHTML`   – Modifica o conteúdo HTML de um elemento.
  - `innerText`   – Modifica o texto visível (sem HTML) de um elemento.

- **Alterando Atributos**
  - `setAttribute(name, value)` – Define um atributo para um elemento.
  - `getAttribute(name)` – Obtém o valor de um atributo.
  - `removeAttribute(name)` – Remove um atributo de um elemento.
  - Alteração direta de atributos como `src`, `href`, `className`, etc.

- **Manipulando Estilos**
  - Alteração de estilos inline usando `style.property`.
  - Uso de `classList` para adicionar, remover ou alternar classes CSS:
    - `classList.add(className)`
    - `classList.remove(className)`
    - `classList.toggle(className)`
    - `classList.contains(className)`

- **Criando e Removendo Elementos**
  - `createElement(tagName)` – Cria um novo elemento.
  - `appendChild(child)` – Adiciona um novo filho ao elemento.
  - `insertBefore(newElement, referenceElement)` – Insere um novo elemento antes de um elemento de referência.
  - `removeChild(child)` – Remove um filho de um elemento.

## 4. Manipulação de Eventos
- **Introdução a Eventos**
  - O que são eventos e como funcionam no DOM.
  - Diferença entre eventos de bolha e captura.

- **Adicionando Manipuladores de Eventos**
  - `addEventListener(event, handler)` – Adiciona um manipulador de eventos a um elemento.
  - Tipos comuns de eventos: `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`, `load`, `resize`.

- **Removendo Manipuladores de Eventos**
  - `removeEventListener(event, handler)` – Remove um manipulador de eventos.

- **Objetos de Evento**
  - Acesso a propriedades do objeto de evento, como `event.target`, `event.type`, e `event.preventDefault()`.

- **Eventos de Formulário**
  - Manipulação de eventos de entrada de dados (como `input`, `change`, `focus`, `blur`).
  - Prevenindo o comportamento padrão de formulários com `event.preventDefault()`.

- **Delegação de Eventos**
  - O que é delegação de eventos e como utilizá-la para melhorar a performance.

## 5. Práticas e Exercícios
- Criar projetos práticos que envolvam a manipulação do DOM, como:
  - Um formulário interativo.
  - Um jogo simples ou uma aplicação de lista de tarefas (To-Do List).
  - Um modal ou popup interativo.

## 6. Recursos Adicionais
- **Documentação**
  - Documentação do MDN sobre DOM: [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
  - Exemplos e guias do W3Schools: [W3Schools - JavaScript HTML DOM](https://www.w3schools.com/js/js_htmldom.asp)