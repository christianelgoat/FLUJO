import React, { useState, useEffect } from 'react';
import { generateFlowchartData } from './services/geminiService';
import Flowchart from './components/Flowchart';
import Loader from './components/Loader';
import type { Stage } from './types';

const initialText = `
8.1. Etapa 1: Establecer Parámetros a Evaluar
Descripción de la Etapa: En esta fase inicial, se definieron las métricas y características clave que determinarían el éxito del MVP. El objetivo era establecer qué se iba a medir antes de decidir cómo medirlo.
Acciones Realizadas: Se analizaron los objetivos del proyecto y los "dolores" identificados en la investigación de usuario para derivar los parámetros de validación más críticos.
Herramientas Utilizadas:
Mapa de Empatía (Anexo 5): Para asegurar que los parámetros estuvieran alineados con las necesidades reales del usuario.
Definición de Objetivos (Sección 2.2): Para traducir los objetivos del proyecto en métricas medibles.
Evidencia (Parámetros Definidos):
Cuantitativos: Tasa de Adopción Potencial, Facilidad de Uso (Usabilidad), Confianza en el Sistema.
Cualitativos: Percepción de Valor, Identificación de Puntos de Fricción y Oportunidades de Mejora.
8.2. Etapa 2: Establecer Pruebas Experimentales
Descripción de la Etapa: Se diseñó el conjunto de experimentos y métodos que se utilizarían para recopilar datos sobre los parámetros definidos en la etapa anterior.
Acciones Realizadas: Se estructuró una prueba de usabilidad guiada que combinaba la ejecución de tareas con la recopilación de percepciones para obtener una visión integral.
Herramientas Utilizadas:
Google Forms: Para la creación del "Formulario Interactivo" que guiaría a los usuarios y recopilaría los datos de manera estandarizada.
Documento de Plan de Validación (Anexo 8.1): Donde se definieron las tareas específicas ("Registrar Producto", "Registrar Movimientos") y las preguntas de la encuesta (escalas de Likert y preguntas abiertas).
8.3. Etapa 3: Establecer Criterios de Aceptabilidad
Descripción de la Etapa: Se establecieron umbrales numéricos claros y predefinidos que actuarían como la línea base para determinar si los resultados de las pruebas eran exitosos.
Acciones Realizadas: Se definieron los porcentajes mínimos de éxito basados en estándares de la industria para la adopción de nuevas tecnologías y la usabilidad.
Herramientas Utilizadas:
Matriz de Validación del MVP (Anexo 14): Documento formal donde se registraron estos criterios.
Evidencia (Criterios Clave):
Criterio de Aceptabilidad 1: Lograr una tasa de adopción potencial de al menos el 80% (usuarios que califiquen la herramienta con 4 o 5 sobre 5 en utilidad).
Criterio de Aceptabilidad 2: Lograr que al menos el 80% de los usuarios califiquen las tareas principales como "fáciles" o "muy fáciles".
8.4. Etapa 4: Desarrollar Pruebas Experimentales
Descripción de la Etapa: Corresponde a la ejecución del plan de validación.
Acciones Realizadas: Se reclutó a una muestra de 18 usuarios y se llevaron a cabo las sesiones de prueba, donde interactuaron con el MVP mientras se recopilaban sus respuestas y comportamientos a través del formulario guiado.
Herramientas Utilizadas:
Prototipo funcional del MVP "Smart Control Stock".
Dispositivos de acceso (computadoras, tablets) para los participantes.
8.5. Etapa 5: Evaluar Resultados y Comparar con Criterios
Descripción de la Etapa: Se analizaron los datos cuantitativos y cualitativos recopilados y se compararon directamente con los criterios de aceptabilidad definidos en la Etapa 3.
Acciones Realizadas: Se procesaron las respuestas de los formularios, se generaron gráficos para visualizar los datos cuantitativos y se sintetizó el feedback cualitativo.
Herramientas Utilizadas:
Google Forms / Hojas de Cálculo: Para la tabulación y visualización de datos.
Técnicas de síntesis de feedback: Para agrupar y analizar los comentarios abiertos de los usuarios.
Evidencia (Comparativa de Resultados):
Tasa de Adopción: Resultado obtenido: 94.4%. Criterio: ≥ 80%. Conclusión: CRITERIO SUPERADO. (Anexo 8.4, 8.5).
Facilidad de Uso: Resultado obtenido: 94.4%. Criterio: ≥ 80%. Conclusión: CRITERIO SUPERADO. (Anexo 8.2).
8.6. Etapa 6: Informe de Validación
Descripción de la Etapa: Consiste en la documentación formal de todo el proceso, los hallazgos y las conclusiones.
Acciones Realizadas: Se redactaron las secciones correspondientes del presente informe, incluyendo la metodología, los resultados detallados y los anexos con la evidencia gráfica y cualitativa.
Herramientas Utilizadas:
El presente documento de informe del proyecto.
Evidencia: Los Anexos 8 al 14 constituyen el cuerpo principal de la evidencia de este informe de validación.
8.7. Etapa 7: Revisión de Informe y Priorización Futura
Descripción de la Etapa: Esta etapa final cierra el ciclo de mejora continua. Se utilizan los hallazgos del informe para tomar decisiones estratégicas sobre el futuro desarrollo del producto.
Acciones Realizadas: Se analizó el feedback cualitativo para identificar las áreas de mejora más críticas y se aplicó un marco de decisión para priorizarlas.
Herramientas Utilizadas:
Tabla de Priorización NUF (Novedosa, Útil, Factible) (Anexo 13): Para evaluar y clasificar las funcionalidades sugeridas por los usuarios.
Evidencia (Decisiones Estratégicas): Se concluyó que las prioridades inmediatas para la siguiente iteración del MVP son el desarrollo de un Dashboard funcional con KPIs y la implementación de un sistema de búsqueda y filtrado, con el fin de reducir el "sesgo" o brecha entre la experiencia actual y la ideal.
`;

const App: React.FC = () => {
  const [flowchartData, setFlowchartData] = useState<Stage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStageId, setActiveStageId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await generateFlowchartData(initialText);
        setFlowchartData(data);
        if (data.length > 0) {
          setActiveStageId(data[0].id);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-50 to-slate-100 min-h-screen font-sans text-slate-800 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Diagrama de Flujo de Validación de MVP</h1>
        </header>

        {isLoading && <Loader />}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative max-w-2xl mx-auto" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {!isLoading && !error && flowchartData.length > 0 && activeStageId !== null && (
            <Flowchart 
              stages={flowchartData}
              activeStageId={activeStageId}
              onStageSelect={setActiveStageId}
            />
        )}
      </div>
    </main>
  );
};

export default App;