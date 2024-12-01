Sistema de Gestão de Relatórios com Assinaturas Digitais
Funcionalidades
Login Seguro

Autenticação de usuários utilizando JWT (JSON Web Tokens).
Formulário de login com validação de credenciais (e-mail e senha).
Sistema de registro de novos usuários.
Gestão de Relatórios

Criação de relatórios com título e conteúdo.
Funcionalidade de edição de relatórios (apenas para usuários autorizados).
Exclusão de relatórios (apenas para administradores ou usuários autorizados).
Visualização dos relatórios criados no dashboard do usuário.
Assinaturas Digitais

O requisitante pode assinar digitalmente o relatório.
O aprovador assina o relatório após a validação.
Assinaturas geradas com criptografia RSA para garantir autenticidade e integridade.
Relatórios são marcados como "Concluídos" após a assinatura do requisitante e do aprovador.
Notificações por E-mail

Envio de e-mails automáticos para o aprovador quando um relatório precisa ser assinado.
Notificação por e-mail quando um relatório é assinado, incluindo detalhes sobre o status.
Dashboard do Usuário

Interface simples e intuitiva para visualização dos relatórios pendentes e concluídos.
Filtro de relatórios por status: pendente, assinado, finalizado.
Segurança

Proteção contra CSRF e XSS.
Configuração do Helmet para adicionar cabeçalhos de segurança HTTP.
Criptografia de senhas com bcrypt.
Proteção de rotas com middleware de autenticação utilizando JWT.
Banco de Dados

Banco de dados MongoDB para armazenamento de usuários, relatórios e assinaturas.
Utilização de Mongoose para gerenciar os modelos de dados.
