import type { Stage } from '../types';

export const staticFlowchartData: Stage[] = [
  {
    "id": 1,
    "title": "Etapa 1: Establecer Parámetros a Evaluar",
    "description": "En esta fase inicial, se definieron las métricas y características clave que determinarían el éxito del MVP. El objetivo era establecer qué se iba a medir antes de decidir cómo medirlo.",
    "actions": [
      "Se analizaron los objetivos del proyecto y los \"dolores\" identificados en la investigación de usuario para derivar los parámetros de validación más críticos."
    ],
    "tools": [
      "Mapa de Empatía (Anexo 5): Para asegurar que los parámetros estuvieran alineados con las necesidades reales del usuario.",
      "Definición de Objetivos (Sección 2.2): Para traducir los objetivos del proyecto en métricas medibles."
    ],
    "evidence": [
      "Cuantitativos: Tasa de Adopción Potencial, Facilidad de Uso (Usabilidad), Confianza en el Sistema.",
      "Cualitativos: Percepción de Valor, Identificación de Puntos de Fricción y Oportunidades de Mejora."
    ]
  },
  {
    "id": 2,
    "title": "Etapa 2: Establecer Pruebas Experimentales",
    "description": "Se diseñó el conjunto de experimentos y métodos que se utilizarían para recopilar datos sobre los parámetros definidos en la etapa anterior.",
    "actions": [
      "Se estructuró una prueba de usabilidad guiada que combinaba la ejecución de tareas con la recopilación de percepciones para obtener una visión integral."
    ],
    "tools": [
      "Google Forms: Para la creación del \"Formulario Interactivo\" que guiaría a los usuarios y recopilaría los datos de manera estandarizada.",
      "Documento de Plan de Validación (Anexo 8.1): Donde se definieron las tareas específicas (\"Registrar Producto\", \"Registrar Movimientos\") y las preguntas de la encuesta (escalas de Likert y preguntas abiertas)."
    ],
    "evidence": []
  },
  {
    "id": 3,
    "title": "Etapa 3: Establecer Criterios de Aceptabilidad",
    "description": "Se establecieron umbrales numéricos claros y predefinidos que actuarían como la línea base para determinar si los resultados de las pruebas eran exitosos.",
    "actions": [
      "Se definieron los porcentajes mínimos de éxito basados en estándares de la industria para la adopción de nuevas tecnologías y la usabilidad."
    ],
    "tools": [
      "Matriz de Validación del MVP (Anexo 14): Documento formal donde se registraron estos criterios."
    ],
    "evidence": [
      "Criterio de Aceptabilidad 1: Lograr una tasa de adopción potencial de al menos el 80% (usuarios que califiquen la herramienta con 4 o 5 sobre 5 en utilidad).",
      "Criterio de Aceptabilidad 2: Lograr que al menos el 80% de los usuarios califiquen las tareas principales como \"fáciles\" o \"muy fáciles\"."
    ]
  },
  {
    "id": 4,
    "title": "Etapa 4: Desarrollar Pruebas Experimentales",
    "description": "Corresponde a la ejecución del plan de validación.",
    "actions": [
      "Se reclutó a una muestra de 18 usuarios y se llevaron a cabo las sesiones de prueba, donde interactuaron con el MVP mientras se recopilaban sus respuestas y comportamientos a través del formulario guiado."
    ],
    "tools": [
      "Prototipo funcional del MVP \"Smart Control Stock\".",
      "Dispositivos de acceso (computadoras, tablets) para los participantes."
    ],
    "evidence": []
  },
  {
    "id": 5,
    "title": "Etapa 5: Evaluar Resultados y Comparar con Criterios",
    "description": "Se analizaron los datos cuantitativos y cualitativos recopilados y se compararon directamente con los criterios de aceptabilidad definidos en la Etapa 3.",
    "actions": [
      "Se procesaron las respuestas de los formularios, se generaron gráficos para visualizar los datos cuantitativos y se sintetizó el feedback cualitativo."
    ],
    "tools": [
      "Google Forms / Hojas de Cálculo: Para la tabulación y visualización de datos.",
      "Técnicas de síntesis de feedback: Para agrupar y analizar los comentarios abiertos de los usuarios."
    ],
    "evidence": [
      "Reducción de Tiempo: Resultado: 56.8%. Criterio: ≥ 25%. Conclusión: CRITERIO SUPERADO.",
      "Tasa de Adopción: Resultado: 51.6%. Criterio: ≥ 80%. Conclusión: CRITERIO NO CUMPLIDO.",
      "Reducción de Estrés: Resultado: Mejora de 3.97/5. Criterio: ≥ 2.25/5. Conclusión: CRITERIO SUPERADO.",
      "(Los resultados completos y el análisis detallado se presentan en el Capítulo 9)."
    ]
  },
  {
    "id": 6,
    "title": "Etapa 6: Informe de Validación",
    "description": "Consiste en la documentación formal de todo el proceso, los hallazgos y las conclusiones.",
    "actions": [
      "Se redactaron las secciones correspondientes del presente informe, incluyendo la metodología, los resultados detallados y los anexos con la evidencia gráfica y cualitativa."
    ],
    "tools": [
      "El presente documento de informe del proyecto."
    ],
    "evidence": [
      "Los Anexos 8 al 14 constituyen el cuerpo principal de la evidencia de este informe de validación."
    ]
  },
  {
    "id": 7,
    "title": "Etapa 7: Revisión de Informe y Priorización Futura",
    "description": "Esta etapa final cierra el ciclo de mejora continua. Se utilizan los hallazgos del informe para tomar decisiones estratégicas sobre el futuro desarrollo del producto.",
    "actions": [
      "Se analizó el feedback cualitativo para identificar las áreas de mejora más críticas y se aplicó un marco de decisión para priorizarlas."
    ],
    "tools": [
      "Tabla de Priorización NUF (Novedosa, Útil, Factible) (Anexo 13): Para evaluar y clasificar las funcionalidades sugeridas por los usuarios."
    ],
    "evidence": [
      "Se concluyó que las prioridades inmediatas para la siguiente iteración del MVP son el desarrollo de un Dashboard funcional con KPIs y la implementación de un sistema de búsqueda y filtrado, con el fin de reducir el \"sesgo\" o brecha entre la experiencia actual y la ideal."
    ]
  }
];