# Central de Apoio Emocional Digital

<!-- Badges -->
![Versão](https://img.shields.io/badge/Versão-1.0-blue)
![Status](https://img.shields.io/badge/Status-Concluído-success)
![Licença](https://img.shields.io/badge/Licença-MIT-green)

## 🌟 Link do Projeto Publicado

[🔗 Central de Apoio Emocional Digital](https://central-de-apoio-emocional-digital.vercel.app/)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Execução](#instalação-e-execução)
- [Componentes Principais](#componentes-principais)
- [Acessibilidade e Responsividade](#acessibilidade-e-responsividade)
- [Autores](#autores)
- [Licença](#licença)

## Sobre o Projeto

A **Central de Apoio Emocional Digital** é uma plataforma web desenvolvida para oferecer suporte emocional e psicológico de forma acessível e empática. O projeto visa criar um espaço seguro onde as pessoas possam encontrar informações, recursos e ferramentas para cuidar da saúde mental, especialmente em momentos de vulnerabilidade.

O site foi desenvolvido com foco na simplicidade e acessibilidade, priorizando a privacidade do usuário e oferecendo múltiplas formas de apoio emocional, desde chatbots simulados até informações sobre serviços profissionais de psicologia.

## Funcionalidades

### 🤖 Chat com Amigo Virtual
- Simulação de conversa com um assistente virtual empático
- Respostas contextualizadas baseadas em palavras-chave
- Sistema de categorias com switch case para organizar as respostas

### 📝 Diário de Emoções
- Interface intuitiva para registro diário de sentimentos
- Armazenamento local dos dados (localStorage)
- Sistema de categorização de emoções com emojis
- Histórico de registros emocionais
- Nota de privacidade explicando como os dados são tratados

### 🏥 Localização de Ajuda
- Lista completa de clínicas e serviços de psicologia em Porto Alegre
- Classificação por tipo de serviço (CAPS, universitários, especializados)
- Filtros para facilitar a localização
- Informações completas de contato e endereço

### 📚 Informações e Recursos
- Seção detalhada sobre ansiedade
- Técnicas de autoajuda e bem-estar
- Recursos sobre saúde mental
- Links para serviços profissionais

### 🆘 Sistema de Emergência
- Seção destacada com informações de emergência
- Botão flutuante de ajuda disponível em todas as páginas
- Contatos de emergência (CVV - 188)
- Recursos para situações críticas

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização responsiva com flexbox e grid
- **JavaScript**: Interação dinâmica e funcionalidades avançadas
- **LocalStorage**: Armazenamento local dos dados do diário
- **APIs Web**: Navegação, eventos e manipulação do DOM

### Recursos Técnicos

- Design responsivo para dispositivos móveis e desktop
- Acessibilidade com ARIA labels e contraste adequado
- Animações CSS para melhor experiência do usuário
- Validação de formulários
- Busca e filtragem dinâmica de conteúdo

## Estrutura do Projeto

```
Central-de-Apoio-Emocional-Digital/
│
├── index.html              # Página principal com seção de emergência
├── informacoes.html        # Informações sobre apoio emocional
├── ansiedade.html          # Recursos sobre ansiedade
├── diario.html             # Diário de emoções
├── localizacao.html        # Localização de serviços de psicologia
├── style.css               # Folha de estilos principal
├── script.js               # Scripts principais
├── style.css               # Estilos principais
└── README.md               # Documentação do projeto
```

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone git@github.com:RodrigoBergenthal/Central-de-apoio-emocional-digital.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Central-de-Apoio-Emocional-Digital
   ```

3. Abra o arquivo `index.html` em seu navegador preferido:
   ```bash
   abrir index.html
   ```

Alternativamente, você pode hospedar localmente usando Python:
```bash
python -m http.server 8000
```

Então acesse `http://localhost:8000` no seu navegador.

## Componentes Principais

### Chat Simulado
Implementado com uma série de respostas pré-definidas baseadas em categorias de palavras-chave, oferecendo uma experiência de conversa empática e compreensiva.

### Diário de Emoções
Sistema de registro emocional com:
- Seletor de emoções com emojis
- Área para registro textual
- Armazenamento local
- Histórico de registros
- Sistema de exclusão

### Busca e Filtragem
Sistema de busca dinâmica e filtros por categorias para encontrar rapidamente os recursos necessários.

### Botão de Emergência
Botão flutuante disponível em todas as páginas que direciona imediatamente para os recursos de emergência.

## Acessibilidade e Responsividade

O projeto foi desenvolvido com foco na acessibilidade e usabilidade:

- **Design responsivo**: Adaptável a diferentes tamanhos de tela
- **Contraste adequado**: Cores com bom contraste para leitura
- **Links de acesso rápido**: Botão flutuante de emergência
- **Semântica HTML**: Uso apropriado de tags semânticas
- **Atributos ARIA**: Suporte para tecnologias assistivas
- **Navegação por teclado**: Suporte total à navegação via teclado

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

**Desenvolvido com ❤️ para promover o bem-estar emocional**

[ Voltar ao Topo ](#central-de-apoio-emocional-digital)