// painel_gestao_script.js

document.addEventListener('DOMContentLoaded', () => {
  const estrutura = {
    "Coordenação-Geral de Gestão": {
      "PROCESSO DE PLANEJAMENTO": [
        {
          nome: "PROCESSO DE PLANEJAMENTO - Processo A",
          concluidos: 3,
          etapas: [
            "1- Levantamento de demandas",
            "2- Priorização de ações",
            "3- Elaboração de cronograma",
            "4- Validação com unidades",
            "5- Divulgação do planejamento"
          ],
          complexidade: 6,
          sistema: "SEI",
          codigo: "01400.001111/2025-28"
        },
        {
          nome: "PROCESSO DE PLANEJAMENTO - Processo B",
          concluidos: 1,
          etapas: [
            "1- Levantamento de demandas",
            "2- Priorização de ações",
            "3- Elaboração de cronograma",
            "4- Validação com unidades",
            "5- Divulgação do planejamento"
          ],
          complexidade: 6,
          sistema: "SEI",
          codigo: "01400.001112/2025-20"
        }
      ],
      "MONITORAMENTO DE RESULTADOS": [
        {
          nome: "MONITORAMENTO DE RESULTADOS - Processo A",
          concluidos: 2,
          etapas: [
            "1- Definição de indicadores",
            "2- Coleta de dados",
            "3- Análise de desempenho",
            "4- Elaboração de relatório",
            "5- Reunião de alinhamento"
          ],
          complexidade: 7,
          sistema: "SALIC",
          codigo: "01400.001120/2025-11"
        }
      ],
      "GESTÃO DE CONTRATOS": [
        {
          nome: "GESTÃO DE CONTRATOS - Processo A",
          concluidos: 4,
          etapas: [
            "1- Solicitação de contratação",
            "2- Elaboração do termo de referência",
            "3- Seleção de fornecedor",
            "4- Assinatura do contrato",
            "5- Acompanhamento da execução"
          ],
          complexidade: 8,
          sistema: "Nenhum",
          codigo: "01400.001150/2025-02"
        }
      ]
    },
    "Coordenação-Geral de Projetos Especiais": {
      "PROJETOS ESTRATÉGICOS": [
        {
          nome: "PROJETOS ESTRATÉGICOS - Processo A",
          concluidos: 2,
          etapas: [
            "1- Identificação do projeto",
            "2- Designação da equipe",
            "3- Planejamento de etapas",
            "4- Execução",
            "5- Avaliação de resultados"
          ],
          complexidade: 9,
          sistema: "SEI",
          codigo: "01400.001160/2025-03"
        }
      ],
      "SUPORTE TÉCNICO": [
        {
          nome: "SUPORTE TÉCNICO - Processo A",
          concluidos: 5,
          etapas: [
            "1- Recebimento de solicitação",
            "2- Triagem",
            "3- Atendimento inicial",
            "4- Resolução",
            "5- Registro de chamado encerrado"
          ],
          complexidade: 3,
          sistema: "Nenhum",
          codigo: "01400.001161/2025-09"
        }
      ]
    }
  };

  console.log("Estrutura carregada com tipos de processo, complexidade, sistema e código:", estrutura);

  // Você pode conectar essa estrutura ao seu painel usando funções JS específicas
  // como preencher dropdowns, gerar gráficos e exibir resumos conforme necessário.
});
