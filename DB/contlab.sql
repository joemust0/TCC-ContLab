-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25/05/2024 às 06:26
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `contlab`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `balancos`
--

CREATE TABLE `balancos` (
  `num_atividade` int(11) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `nome_balanco` varchar(255) DEFAULT NULL,
  `descricao_balanco` text DEFAULT NULL,
  `data_criacao` date DEFAULT NULL,
  `data_emissao` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `balancos`
--

INSERT INTO `balancos` (`num_atividade`, `id_usuario`, `nome_balanco`, `descricao_balanco`, `data_criacao`, `data_emissao`) VALUES
(1, 1, 'Balanço Exemplo', 'Descrição do balanço exemplo', '2024-05-19', '2024-05-19'),
(2, 2, 'Balanço Exemplo', 'Descrição do balanço exemplo', '2024-05-19', '2024-05-19'),
(3, 9, 'Balanço Exemplo 3', 'Descrição do balanço exemplo', '2024-05-19', '2024-05-19'),
(4, 9, 'Balanço Exemplo 3', 'Descrição do balanço exemplo', '2024-05-19', '2024-05-19'),
(5, 9, 'Balanço Exemplo 5', 'Descrição do balanço exemplo', '2024-05-19', '2024-05-19');

-- --------------------------------------------------------

--
-- Estrutura para tabela `lancamentos`
--

CREATE TABLE `lancamentos` (
  `id` int(11) NOT NULL,
  `num_atividade` int(11) DEFAULT NULL,
  `c_debito` varchar(255) DEFAULT NULL,
  `v_debito` decimal(10,2) DEFAULT NULL,
  `c_credito` varchar(255) DEFAULT NULL,
  `v_credito` decimal(10,2) DEFAULT NULL,
  `id_plano_de_contas` int(11) DEFAULT NULL,
  `conta_analitica` varchar(255) DEFAULT NULL,
  `chave_nf` int(11) DEFAULT NULL,
  `num_nf` int(11) DEFAULT NULL,
  `serie_nf` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `lancamentos`
--

INSERT INTO `lancamentos` (`id`, `num_atividade`, `c_debito`, `v_debito`, `c_credito`, `v_credito`, `id_plano_de_contas`, `conta_analitica`, `chave_nf`, `num_nf`, `serie_nf`) VALUES
(1, 1, '1001', 100.00, '2001', 100.00, 1, 'Contabilização exemplo 1', 12345, 0, 1),
(2, 1, '1001', 100.00, '2001', 100.00, 1, 'Contabilização exemplo 1', 12345, 0, 1),
(3, 1, '1002', 200.00, '2002', 200.00, 2, 'Contabilização exemplo 2', 12346, 0, 2),
(4, 1, '1003', 300.00, '2003', 300.00, 3, 'Contabilização exemplo 3', 12347, 0, 3),
(5, 1, '1004', 400.00, '2004', 400.00, 4, 'Contabilização exemplo 4', 12348, 0, 4),
(6, 1, '1005', 500.00, '2005', 500.00, 5, 'Contabilização exemplo 5', 12349, 0, 5),
(7, 3, '1001', 100.00, '2001', 100.00, 1, 'Contabilização exemplo 1', 12345, 0, 1),
(8, 3, '1002', 200.00, '2002', 200.00, 2, 'Contabilização exemplo 2', 12346, 0, 2),
(9, 3, '1003', 300.00, '2003', 300.00, 3, 'Contabilização exemplo 3', 12347, 0, 3),
(10, 3, '1004', 400.00, '2004', 400.00, 4, 'Contabilização exemplo 4', 12348, 0, 4),
(11, 3, '1005', 500.00, '2005', 500.00, 5, 'Contabilização exemplo 5', 12349, 0, 5);

-- --------------------------------------------------------

--
-- Estrutura para tabela `planodecontas`
--

CREATE TABLE `planodecontas` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `conta` varchar(255) DEFAULT NULL,
  `conta_sintetica` varchar(255) DEFAULT NULL,
  `conta_analitica` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `planodecontas`
--

INSERT INTO `planodecontas` (`id`, `tipo`, `estado`, `modelo`, `conta`, `conta_sintetica`, `conta_analitica`) VALUES
(1, 'Ativo', 'circulante', 'disponivel', 'caixa', '1.1.1', '1.1.1.1'),
(2, 'Ativo', 'circulante', 'disponivel', 'Bancos Conta Movimentos', '1.1.1', '1.1.1.2'),
(3, 'Ativo', 'circulante', 'disponivel', 'Aplicação de liquidez Imediata', '1.1.1', '1.1.1.3'),
(4, 'Ativo', 'circulante', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'Notas Promissórias a Receber', '1.1.2', '1.1.2.1'),
(5, 'Ativo', 'circulante', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'Repasses do SFH a Formalizar', '1.1.2', '1.1.2.2'),
(6, 'Ativo', 'circulante', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'FGTS a Repassar', '1.1.2', '1.1.2.3'),
(7, 'Ativo', 'circulante', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'Juros Contratuais a Receber', '1.1.2', '1.1.2.4'),
(8, 'Ativo', 'circulante', 'CRÉDITOS D OBRAS POR EMPREITADA ', 'Faturas a Receber', '1.1.3', '1.1.3.1'),
(9, 'Ativo', 'circulante', 'CRÉDITOS D OBRAS POR EMPREITADA ', 'Serviços Executados a Faturar', '1.1.3', '1.1.3.2'),
(10, 'Ativo', 'circulante', 'CRÉDITOS D OBRAS POR EMPREITADA ', 'Provisão p/ créd. Liquid. duvidosa', '1.1.3', '1.1.3.9'),
(11, 'Ativo', 'circulante', 'CRÉDITOS DE OBRAS POR ADMINISTR.', 'Faturas a Receber', '1.1.4', '1.1.4.1'),
(12, 'Ativo', 'circulante', 'TÍTULOS DESCONTADOS', 'Duplicatas', '1.1.6', '1.1.6.1'),
(13, 'Ativo', 'circulante', 'CRÉDITOS DIVERSOS ', 'Adiantamentos a Fornecedores', '1.1.7', '1.1.7.1'),
(14, 'Ativo', 'circulante', 'CRÉDITOS DIVERSOS ', 'Adiantamentos a Funcionários ', '1.1.7', '1.1.7.2'),
(15, 'Ativo', 'circulante', 'CRÉDITOS DIVERSOS ', 'Adiantamentos a Terceiros ', '1.1.7', '1.1.7.3'),
(16, 'Ativo', 'circulante', 'CRÉDITOS DIVERSOS ', 'Antecipação de Impostos ', '1.1.7', '1.1.7.4'),
(17, 'Ativo', 'circulante', 'CRÉDITOS DIVERSOS ', 'Títulos e valores mobiliários ', '1.1.7', '1.1.7.5'),
(18, 'Ativo', 'circulante', 'CRÉDITOS DIVERSOS ', 'Outros créditos', '1.1.7', '1.1.7.9'),
(19, 'Ativo', 'circulante', 'IMÓVEIS A COMERCIAL. E ESTOQUES ', 'Estoque de Materiais ', '1.1.8', '1.1.8.1'),
(20, 'Ativo', 'circulante', 'IMÓVEIS A COMERCIAL. E ESTOQUES ', 'Terrenos a Comercializar ', '1.1.8', '1.1.8.2'),
(21, 'Ativo', 'circulante', 'IMÓVEIS A COMERCIAL. E ESTOQUES ', 'Imóveis em Construção   ', '1.1.8', '1.1.8.3'),
(22, 'Ativo', 'circulante', 'DESPESAS ANTECIPADAS', 'Custos e Despesas Antecipadas ', '1.1.9', '1.1.9.1'),
(23, 'Ativo', 'REALIZÁVEL A LONGO PRAZO', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'Notas Promissórias a Receber', '1.2.2', '1.2.2.1'),
(24, 'Ativo', 'REALIZÁVEL A LONGO PRAZO', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'Repasses do SFH a Formalizar', '1.2.2', '1.2.2.2'),
(25, 'Ativo', 'REALIZÁVEL A LONGO PRAZO', 'CRÉDITOS DE VENDAS DE IMÓVEIS', 'FGTS a Repassar', '1.2.2', '1.2.2.3'),
(26, 'Ativo', 'REALIZÁVEL A LONGO PRAZO', 'CRÉDITOS COM PESSOAS LIGADAS', 'Créditos com Sócios ou Diretores', '1.2.9', '1.2.9.1'),
(27, 'Ativo', 'REALIZÁVEL A LONGO PRAZO', 'CRÉDITOS COM PESSOAS LIGADAS', 'Créditos com Empresas Ligadas ', '1.2.9', '1.2.9.2'),
(28, 'Ativo', 'REALIZÁVEL A LONGO PRAZO', 'INVESTIMENTO ', 'Créditos com Empresas Controladas', '1.2.9', '1.2.9.3'),
(29, 'Ativo', 'PERMANENTE ', 'INVESTIMENTO ', 'Participação em Empresas Coligadas', '1.3.1', '1.3.1.1'),
(30, 'Ativo', 'PERMANENTE ', 'INVESTIMENTO ', 'Participação em Empresas Controladas ', '1.3.1', '1.3.1.2'),
(31, 'Ativo', 'PERMANENTE ', 'INVESTIMENTO ', 'Participações por Incentivos Fiscais', '1.3.1', '1.3.1.3'),
(32, 'Ativo', 'PERMANENTE ', 'INVESTIMENTO ', 'Participações Diversas', '1.3.1', '1.3.1.4'),
(33, 'Ativo', 'PERMANENTE ', 'INVESTIMENTO ', 'Imóveis de Renda ', '1.3.1', '1.3.1.5'),
(34, 'Ativo', 'PERMANENTE ', 'INVESTIMENTO ', 'Outros Investimentos', '1.3.1', '1.3.1.9'),
(35, 'Ativo', 'PERMANENTE', 'IMOBILIZADO ', 'Imobilizações Técnicas Tangíveis ', '1.3.2', '1.3.2.1'),
(36, 'Ativo', 'PERMANENTE', 'IMOBILIZADO ', 'Depreciações Acumuladas', '1.3.2', '1.3.2.2'),
(37, 'Ativo', 'PERMANENTE', 'IMOBILIZADO ', 'Consórcios para aquisições de Bens', '1.3.2', '1.3.2.3'),
(38, 'Ativo', 'PERMANENTE', 'IMOBILIZADO ', 'Adiantamentos a Fornecedores de Imobilizado', '1.3.2', '1.3.2.4'),
(39, 'Ativo', 'PERMANENTE', 'DIFERIDO ', 'Despesas Pré-Operacionais ', '1.3.3', '1.3.3.1'),
(40, 'Ativo', 'PERMANENTE', 'DIFERIDO ', 'Amortizações Acumuladas ', '1.3.3', '1.3.3.2'),
(41, 'PASSIVO', 'circulante', 'DÉBITOS DE FUNCIONAMENTO', 'Fornecedores', '2.1.1', '2.1.1.1'),
(42, 'PASSIVO', 'circulante', 'DÉBITOS DE FUNCIONAMENTO', 'Adiantamento de Clientes', '2.1.1', '2.1.1.2'),
(43, 'PASSIVO', 'circulante', 'DÉBITOS DE FUNCIONAMENTO', 'Recuperações a Pagar', '2.1.1', '2.1.1.3'),
(44, 'PASSIVO', 'circulante', 'DÉBITOS DE FUNCIONAMENTO', 'Obrigações Sociais a Recolher', '2.1.1', '2.1.1.4'),
(45, 'PASSIVO', 'circulante', 'DÉBITOS DE FUNCIONAMENTO', 'Obrigações Tributárias a Recolher ', '2.1.1', '2.1.1.5'),
(46, 'PASSIVO', 'circulante', 'DÉBITOS DE FUNCIONAMENTO', 'Parcelamento de Tributos ', '2.1.1', '2.1.1.6'),
(47, 'Passivo', 'circulante', 'DÉBITOS DE FINANCIAMENTO', 'Financiamentos de Capital de Giro ', '2.1.2', '2.1.2.1'),
(48, 'Passivo', 'circulante', 'DÉBITOS DE FINANCIAMENTO', 'Financiamentos de Bens do Ativo Permanente', '2.1.2', '2.1.2.2'),
(49, 'Passivo', 'circulante', 'DÉBITOS DE FINANCIAMENTO', 'Financiamentos de Construção - SFH', '2.1.2', '2.1.2.3'),
(50, 'Passivo', 'circulante', 'DÉBITOS DE FINANCIAMENTO', 'Financiamentos de Origem Externa', '2.1.2', '2.1.2.4'),
(51, 'Passivo', 'circulante', 'DÉBITOS DE FINANCIAMENTO', 'Financiamentos p aquisição de Imóveis', '2.1.2', '2.1.2.5'),
(52, 'Passivo', 'circulante', 'DÉBITOS DE FINANCIAMENTO', 'Financiamentos Diversos', '2.1.2', '2.1.2.9'),
(53, 'Passivo', 'circulante', 'OUTRAS EXIGIBILIDADES', 'Custos Orçados', '2.1.3', '2.1.3.1'),
(54, 'Passivo', 'circulante', 'OUTRAS EXIGIBILIDADES', 'Custos Contratados', '2.1.3', '2.1.3.2'),
(55, 'Passivo', 'circulante', 'OUTRAS EXIGIBILIDADES', 'Provisões', '2.1.3', '2.1.3.3'),
(56, 'Passivo', 'circulante', 'OUTRAS EXIGIBILIDADES', 'Débitos Diversos', '2.1.3', '2.1.3.4'),
(57, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DE FUNCIONAMENTO', 'Fornecedores ', '2.2.1', '2.2.1.1'),
(58, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DE FUNCIONAMENTO', 'Parcelamento de Tributos', '2.2.1', '2.2.1.2'),
(59, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DE FUNCIONAMENTO', 'Custos Orçados', '2.2.1', '2.2.1.3'),
(60, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Financiamentos de Capital de Giro', '2.2.2', '2.2.2.1'),
(61, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Financiamentos de Bens do Ativo Permanente ', '2.2.2', '2.2.2.2'),
(62, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Financiamentos de Construção - SFH ', '2.2.2', '2.2.2.3'),
(63, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Financiamentos de Origem Externa', '2.2.2', '2.2.2.4'),
(64, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Financiamentos para aquisição de Imóveis', '2.2.2', '2.2.2.5'),
(65, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Débitos de Sócios da Empresa', '2.2.2', '2.2.2.6'),
(66, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Débitos com Empresas Ligadas ', '2.2.2', '2.2.2.7'),
(67, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Débitos de Empresas Controladas', '2.2.2', '2.2.2.8'),
(68, 'Passivo', 'PASSIVO EXIGÍVEL A LONGO PRAZO ', 'DÉBITOS DEFINANCIAMENTO', 'Débitos de Empresas Coligadas', '2.2.2', '2.2.2.9'),
(69, 'Passivo', 'RESULT. DE EXERCÍCIOS FUTUROS', 'RECEITAS DIFERIDAS', 'Receitas Diferidas de Vendas de Imóveis ', '2.3.1', '2.3.1.1'),
(70, 'Passivo', 'RESULT. DE EXERCÍCIOS FUTUROS', 'RECEITAS DIFERIDAS', 'Receitas Diferidas de Obras em Sociedade', '2.3.1', '2.3.1.2'),
(71, 'Passivo', 'RESULT. DE EXERCÍCIOS FUTUROS', 'RECEITAS DIFERIDAS', 'Receitas Diferidas de Juros', '2.3.1', '2.3.1.3'),
(72, 'Passivo', 'RESULT. DE EXERCÍCIOS FUTUROS', 'CUSTOS DIFERIDOS ', 'Custos Diferidos de Vendas de Imóveis', '2.3.2', '2.3.2.1'),
(73, 'Passivo', 'RESULT. DE EXERCÍCIOS FUTUROS', 'CUSTOS DIFERIDOS ', 'Receitas Diferidas de Obras em Sociedade', '2.3.2', '2.3.2.2'),
(74, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'CAPITAL SOCIAL', 'Capital Realizado  ', '2.4.1', '2.4.1.1'),
(75, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE CAPITAL ', 'Reservas de Correção Monetária Do Capital  ', '2.4.2', '2.4.2.1'),
(76, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE CAPITAL ', 'Reservas de Ágio   ', '2.4.2', '2.4.2.2'),
(77, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE CAPITAL ', 'Reservas de Reavaliação  ', '2.4.2', '2.4.2.3'),
(78, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE REAVALIAÇÃO ', 'Reservas de Reavaliação de Bens Próprios ', '2.4.3', '2.4.3.1'),
(79, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE REAVALIAÇÃO ', 'Reserva de Reavaliação de Bens de Coligadas', '2.4.3', '2.4.3.2'),
(80, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE LUCROS', 'Reservas Contratuais', '2.4.4', '2.4.4.1'),
(81, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE LUCROS', 'Reservas para Contingências ', '2.4.4', '2.4.4.2'),
(82, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE LUCROS', 'Reserva especial CM IPC/90', '2.4.4', '2.4.4.3'),
(83, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESERVAS DE LUCROS', 'Outras Reservas ', '2.4.4', '2.4.4.9'),
(84, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESULTADOS ACUMULADOS', 'Lucros Acumulados  ', '2.4.9', '2.4.9.1'),
(85, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESULTADOS ACUMULADOS', 'Prejuízos Acumulados', '2.4.9', '2.4.9.2'),
(86, 'Passivo', 'PATRIMÔNIO LÍQUIDO', 'RESULTADOS ACUMULADOS', 'Lucros ou Prejuízos do Período', '2.4.9', '2.4.9.9'),
(87, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Receitas de Vendas de Terrenos ', '3.1.1', '3.1.1.1'),
(88, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Receitas de Obras por Empreitada', '3.1.1', '3.1.1.3'),
(89, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Receitas de Obras por Administração ', '3.1.1', '3.1.1.4'),
(90, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Receitas de Aluguéis de Imóveis ', '3.1.1', '3.1.1.5'),
(91, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Receitas de Vendas de Material ', '3.1.1', '3.1.1.6'),
(92, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Receitas de Prestação de Serviços  ', '3.1.1', '3.1.1.7'),
(93, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS OPERACIONAIS ', 'Devoluções de vendas/serviços ', '3.1.1', '3.1.1.9'),
(94, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Custos dos Terrenos Vendidos ', '3.1.2', '3.1.2.1'),
(95, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Custos dos Imóveis Vendidos', '3.1.2', '3.1.2.2'),
(96, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Custos das Obras Por Empreitada', '3.1.2', '3.1.2.3'),
(97, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Custos das Obras por Administração ', '3.1.2', '3.1.2.4'),
(98, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Custos com Imóveis Locados ', '3.1.2', '3.1.2.5'),
(99, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Custos dos Materiais Vendidos ', '3.1.2', '3.1.2.6'),
(100, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'CUSTOS OPERACIONAIS ', 'Recuperação de Custos de Exercícios anteriores', '3.1.2', '3.1.2.9'),
(101, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS OPERACIONAIS  ', 'Despesas Administrativas', '3.1.3', '3.1.3.1'),
(102, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS OPERACIONAIS  ', 'Despesas Comerciais', '3.1.3', '3.1.3.2'),
(103, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS OPERACIONAIS  ', 'Despesas Financeiras Líquidas ', '3.1.3', '3.1.3.3'),
(104, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS OPERACIONAIS  ', 'Despesas Tributárias ', '3.1.3', '3.1.3.4'),
(105, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS OPERACIONAIS  ', 'Amortizações e Depreciações  ', '3.1.3', '3.1.3.5'),
(106, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS OPERACIONAIS  ', 'Recuperação de Despesas ', '3.1.3', '3.1.3.6'),
(107, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'EFEITOS INFLACIONÁRIOS', 'Correção Monetária de Balanço ', '3.1.4', '3.1.4.1'),
(108, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS NÃO OPERACIONAIS', 'Ganhos de Equivalência Patrimonial', '3.2.1', '3.2.1.1'),
(109, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'RECEITAS NÃO OPERACIONAIS', 'Receitas Diversas ', '3.2.1', '3.2.1.9'),
(110, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS NÃO OPERACIONAIS ', 'Perdas de Equivalência Patrimonial  ', '3.2.2', '3.2.2.1'),
(111, 'RESULTADO ', 'RESULTADO OPERACIONAL ', 'DESPESAS NÃO OPERACIONAIS ', 'Despesas Diversas ', '3.2.2', '3.2.2.2');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `instituicao` varchar(255) DEFAULT NULL,
  `responsavel` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `nickname`, `email`, `senha`, `instituicao`, `responsavel`) VALUES
(1, 'Fulano de Tal', NULL, 'fulano@example.com', 'senha123', NULL, NULL),
(2, 'João', 'Joe', 'joao@gmail.com', '1234', 'ETEC ZL', 'Test'),
(3, 'João2', 'Joe2', 'joo@gmail.com', '1254', 'ETEC ZL', 'Test 2'),
(8, 'João4', 'Joe4', 'joao4@gmail.com', '123354', 'ETEC ZL', 'Test 3'),
(9, 'João9', 'Joe9', 'joao4@gmail.com', '123354', 'ETEC ZL', 'Test 3'),
(10, 'Marquinhos', 'Marquinhos', 'Marquinhos@gmail.com', 'marquinhos.12', 'ETEC ZL', 'Test 3');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `balancos`
--
ALTER TABLE `balancos`
  ADD PRIMARY KEY (`num_atividade`);

--
-- Índices de tabela `lancamentos`
--
ALTER TABLE `lancamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `num_atividade` (`num_atividade`);

--
-- Índices de tabela `planodecontas`
--
ALTER TABLE `planodecontas`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `balancos`
--
ALTER TABLE `balancos`
  MODIFY `num_atividade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `lancamentos`
--
ALTER TABLE `lancamentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `planodecontas`
--
ALTER TABLE `planodecontas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `lancamentos`
--
ALTER TABLE `lancamentos`
  ADD CONSTRAINT `lancamentos_ibfk_1` FOREIGN KEY (`num_atividade`) REFERENCES `balancos` (`num_atividade`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
