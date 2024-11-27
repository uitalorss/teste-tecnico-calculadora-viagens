# Teste técnico: Veloz (Corridas particulares)

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![Static Badge](https://img.shields.io/badge/status-in_development-yellow?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/uitalorss/teste-tecnico-usuarios-documentos?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/uitalorss/teste-tecnico-usuarios-documentos?style=for-the-badge)
![GitHub Contributors](https://img.shields.io/github/contributors/uitalorss/teste-tecnico-usuarios-documentos?style=for-the-badge&color=blue)

<img src="/frontend/src/public/app.png">

### 💡 Um pouco sobre o projeto.

Esse projeto é um teste técnico disponibilizado pela empresa Shopper para uma vaga de Desenvolvedor Fullstack. Onde é pedido a criação de uma aplicação fullstack onde é possível simular o pedido de corridas em um site.

### Ajustes e melhorias

O projeto está em desenvolvimento e, apesar do teste não cobrir algumas das situações abaixo, eu continuarei as desenvolvendo para meu aprendizado. As próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Desenvolvimento da API do projeto.
- [x] Desenvolvimento da interface responsiva da aplicação. 
- [x] Implementação de um ecossistema de microsserviços da aplicação com Docker.
- [ ] Implementação da cobertura de testes unitários das rotas da API.
- [ ] Implementação dos testes de ponta-a-ponta.

## 💻 Tecnologias utilizadas

- Back-end
    - Express
    - Typescript
- Front-end
    - React
    - Typescript
    - Styled-components
    - Nginx
- Docker

## 🚀 Instalando o projeto
- Faça o clone do projeto através do comando `git clone https://github.com/uitalorss/teste-tecnico-calculadora-viagens.git`
- Configure as variáveis de ambiente do backend em um arquivo `.env`.
  - Na pasta já há um arquivo .env.example.
- **Certifique de verificar a sua API KEY do google está válida para ter acesso a fazer as requisições das rotas desejadas.**
    
## ☕ Usando o projeto
- Acesse a pasta do projeto.
- Digite o comando `docker compose up`.

## ✅ Requisitos funcionais

- [x] É possível estimar uma corrida baseado em um endereço de partida e destino.
- [x] É possível verificar informações de uma corrida.
- [x] É possível visualizar uma mapa estático da corrida.
- [x] É possível selecionar um motorista dentre os disponíveis.
- [x] É possível confirmar uma corrida.
- [x] Não é possível confirmar uma corrida, caso a sua distância seja menor que o inicial mínimo de um motorista.
- [x] É possível verificar o histórico de corridas de um usuário.
- [x] É possível verificar o histórico de corridas que um usuário fez com determinado motorista.

## 📫 Contribuindo para o projeto

<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->

Para contribuir com o projeto, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/15834173?v=4" width="100px;" alt="Foto do Uítalo Souza no GitHub"/><br>
        <sub>
          <b>Uítalo Souza</b>
        </sub>
      </a>
    </td>
  </tr>
</table>  