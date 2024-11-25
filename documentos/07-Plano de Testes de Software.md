# Plano de Testes de Software

Pré-requisitos: Especificação do Projeto, Projeto de Interface

Os requisitos para realização dos testes de software são:

Site publicado na internet;
Navegador da internet: Chrome, Firefox ou Edge.
Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o Login de usuários</td>
  <td>
   <ul>
    <li>RF-02: Sistema de login facilitado (Gov.br ou dados básicos, como CPF)</li>
   </ul>
  </td>
  <td>Verificar se o login está sendo feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página inicial do FacilitaSUS.</li>
    <li>Colocar seu CPF</li>
    <li>Clicar em “Continuar”.</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para a sua página de cadastro.</td>
  <td>Mateus</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-02: Verificar se o agendamento de exames e consultas</td>
  <td>
   <ul>
   <li>RF-03 Otimização do processo de agendamento de exames: O sistema deve ser otimizado para facilitar o processo de marcação de exames, tornando-o mais rápido e intuitivo.</li>
   </ul>
  </td>
  <td>Verificar se o agendamento de exames e consultas </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Continuar”.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Agendamento de exames”, no menu.</li>
    <li>Visualizar a página de Agendamento de exames.</li>
    <li>Inserir um horário disponível.</li>
    <li>Clicar em “Confirmar”.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em “Confirmar”, deve ser redirecionado para a pagina de "meus exames" e um indicador de exames deve aparecer ao lado do item "meus exames" na barra lateral.</td>
  <td>Mateus</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-03: Verificar o fluxo de orientação completo</td>
  <td>
   <ul>
   <li>RF-04 O exame/consulta agendado deverá aparecer em Meus exames/Minhas consultas</li>
   </ul>
  </td>
  <td>Verificar se o cadastro de exame/consulta foi feito corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Entrar”, no menu.</li>
    <li>Preencher seus dados e clicar em “Continuar”.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em “Agendamento de exames”, no menu.</li>
    <li>Visualizar a página de Agendamento de exames.</li>
    <li>Inserir um horário disponível.</li>
    <li>Clicar em “Confirmar”.</li>
    <li>Clicar em “Meus exames” e conferir os dados do exame agendado.</li>
   </ol>
   </td>
  <td>Deve ocorrer uma validação das informações fornecidas pelo usuário</td>
  <td>Mateus</td>
 </tr>
</table>
 
