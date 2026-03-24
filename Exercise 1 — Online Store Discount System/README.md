# Exercício 01 — Sistema de Desconto por Idade, Quantidade e Membro

## Objetivo
Simular a compra de um produto aplicando regras de desconto com base na idade do cliente, na quantidade comprada e no status de membro.

## Entradas
- `productName`: nome do produto
- `basePrice`: preço unitário do produto
- `quantity`: quantidade comprada
- `customerAge`: idade do cliente
- `isMember`: informa se o cliente é membro ou não

## Regras
- O valor total da compra é calculado multiplicando o preço unitário pela quantidade.
- Clientes maiores de idade podem comprar normalmente.
- Clientes menores de idade só podem comprar até 2 unidades.
- Para clientes maiores de idade:
  - se comprarem 3 ou mais itens e for um membro:
    - recebe 15% de desconto
    - não membro recebe 10% de desconto
  - se comprarem menos de 3 itens:
    - membro recebe 5% de desconto
    - não membro não recebe desconto
- Para clientes menores de idade:
  - comprando até 2 itens:
    - membro recebe 5% de desconto
    - não membro não recebe desconto
  - comprando mais de 2 itens:
    - a compra não é permitida

## Saída esperada
O programa exibe no console:
- nome do produto
- quantidade final
- preço final da compra

## O que eu pratiquei
- declaração de variáveis
- operadores aritméticos
- condicionais aninhadas
- aplicação de desconto
- regras de negócio
- formatação de valores com `toFixed(2)`
