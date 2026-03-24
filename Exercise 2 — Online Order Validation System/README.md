# Exercício 02 — Validação de Pedido

## Descrição
Este exercício simula a validação de um pedido com base em regras de desconto, restrição de idade, existência de conta e método de pagamento. O objetivo é praticar lógica condicional em JavaScript por meio de um fluxo simples de aprovação de compra.

## Objetivo
Criar uma lógica que:
- calcule o valor total do pedido
- aplique desconto quando o total atingir um valor mínimo
- bloqueie compras com restrição de idade
- valide o método de pagamento
- determine se o pedido pode ou não ser aprovado

## Entradas
- `productPrice`: preço unitário do produto
- `quantity`: quantidade comprada
- `customerAge`: idade do cliente
- `hasAccount`: informa se o cliente possui conta
- `paymentMethod`: método de pagamento (`credit`, `debit` ou `pix`)
- `availableBalance`: saldo disponível
- `productRestricted`: informa se o produto possui restrição de idade

## Regras
- O valor total do pedido é calculado multiplicando `productPrice` por `quantity`.
- Se o total for maior ou igual a `300`, aplica-se 10% de desconto.
- Se o produto for restrito e o cliente tiver menos de 18 anos, a compra não pode prosseguir.
- O cliente precisa possuir conta para que o pedido seja aprovado.
- Regras de pagamento:
  - `pix` é aceito diretamente
  - `credit` e `debit` só são aceitos se o saldo disponível for maior ou igual ao valor total, conforme a lógica definida neste exercício
- O pedido só é aprovado se:
  - a validação de idade for verdadeira
  - o cliente possuir conta
  - a validação de pagamento for verdadeira

## Saída esperada
Se o pedido for aprovado, o programa exibe no console:
- status do pedido
- valor total final
- saldo disponível
- método de pagamento

Se o pedido não for aprovado, o programa exibe mensagens de rejeição no console.

## O que eu pratiquei
- declaração de variáveis
- operadores aritméticos
- operadores lógicos
- condicionais
- validação de regras
- encadeamento de decisões
- fluxo de aprovação de pedido
