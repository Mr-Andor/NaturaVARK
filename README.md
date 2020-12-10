# NaturaVARK

Este é um ambiente de teste para um projeto de faculdade e possui apenas as funções básicas para realizar os testes com algumas telas e funções que serviram apenas como mockup durante a apresentação do projeto para uma banca avaliadora. 

O cadastro dos itens está fixo em um script em vez de um cadastro por dashboard pois não era necessário para realizar os testes. O fluxo segue apenas até o carrinho pois a proposta do projeto era a integração do token como um serviço, não entregar um e-commerce. Logo, as implementações do projeto são feitas com apenas isso em mente.

*BUGS CONHECIDOS*:

- O link do Carrinho não retorna o endereço correto.
- O mostrador de subtotal de itens está concatenando o total de itens em vez de realizar uma soma se você altera a quantidade de itens no carrinho
- Clicar no link do Carrinho irá realizar um logout do usuário, caso esteja logado.
