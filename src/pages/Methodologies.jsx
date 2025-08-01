import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Lock, Unlock, AlertTriangle, CheckCircle, Info } from 'lucide-react'

const Methodologies = () => {
  const [selectedMethodology, setSelectedMethodology] = useState(null)
  const [showComparison, setShowComparison] = useState(false)
  const [adaptiveMode, setAdaptiveMode] = useState(true) // true = automático, false = manual

  const methodologies = [
    {
      id: 1,
      name: "Heavy Duty",
      description: "Entrenamiento de alta intensidad con bajo volumen y máximo descanso",
      purpose: "Máximo desarrollo muscular con mínimo tiempo de entrenamiento",
      level: "Intermedio-Avanzado",
      frequency: "2-3 días/semana",
      volume: "Muy bajo",
      intensity: "Muy alta",
      icon: "⚡"
    },
    {
      id: 2,
      name: "Powerlifting",
      description: "Enfoque en los tres levantamientos básicos: sentadilla, press banca y peso muerto",
      purpose: "Maximizar la fuerza en los movimientos básicos",
      level: "Intermedio-Competición",
      frequency: "4-6 días/semana",
      volume: "Alto",
      intensity: "Alta",
      icon: "🏋️"
    },
    {
      id: 3,
      name: "Hipertrofia",
      description: "Entrenamiento orientado al crecimiento muscular con volumen moderado-alto",
      purpose: "Maximizar el crecimiento muscular y la masa corporal",
      level: "Principiante-Avanzado",
      frequency: "4-5 días/semana",
      volume: "Moderado-Alto",
      intensity: "Moderada-Alta",
      icon: "💪"
    },
    {
      id: 4,
      name: "Funcional",
      description: "Movimientos naturales y ejercicios que mejoran la funcionalidad diaria",
      purpose: "Mejorar la capacidad funcional y prevenir lesiones",
      level: "Principiante-Intermedio",
      frequency: "3-4 días/semana",
      volume: "Moderado",
      intensity: "Moderada",
      icon: "🤸"
    },
    {
      id: 5,
      name: "Oposiciones",
      description: "Preparación física específica para pruebas de oposiciones",
      purpose: "Superar las pruebas físicas de oposiciones",
      level: "Principiante-Intermedio",
      frequency: "4-5 días/semana",
      volume: "Alto",
      intensity: "Moderada-Alta",
      icon: "🎯"
    },
    {
      id: 6,
      name: "Entrenamiento en Casa",
      description: "Rutinas adaptadas para entrenar en casa con equipamiento mínimo",
      purpose: "Mantener la forma física sin necesidad de gimnasio",
      level: "Principiante-Intermedio",
      frequency: "3-5 días/semana",
      volume: "Moderado",
      intensity: "Moderada",
      icon: "🏠"
    }
  ]

  const userLevel = "Principiante" // Esto vendría del perfil del usuario

  const getRecommendedVersion = (methodology) => {
    if (userLevel === "Principiante") return "Adaptada"
    if (userLevel === "Intermedio") return "Adaptada"
    return "Estricta"
  }

  const handleMethodologySelect = (methodology) => {
    setSelectedMethodology(methodology)
    setShowComparison(true)
  }

  const VersionComparison = ({ methodology }) => (
    <div className="mt-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
        Comparativa de Versiones - {methodology.name}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-700 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span>Versión Adaptada</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Intensidad:</strong> Moderada</p>
            <p><strong>Volumen:</strong> Bajo a medio</p>
            <p><strong>Riesgo:</strong> Bajo</p>
            <p><strong>Frecuencia:</strong> Menor (más descanso)</p>
            <p><strong>Adaptación IA:</strong> Alta</p>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Recomendado para tu nivel
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-red-700 dark:text-red-400">
              <AlertTriangle className="h-5 w-5" />
              <span>Versión Estricta</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Intensidad:</strong> Alta</p>
            <p><strong>Volumen:</strong> Medio a alto</p>
            <p><strong>Riesgo:</strong> Alto si no se regula</p>
            <p><strong>Frecuencia:</strong> Mayor estímulo semanal</p>
            <p><strong>Adaptación IA:</strong> Bajo riesgo inicial</p>
            <Badge variant="destructive">
              No recomendado para principiantes
            </Badge>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
        <div className="flex items-start space-x-2">
          <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100">
              Recomendación de MindFit
            </h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
              Para usuarios principiantes o no familiarizados con {methodology.name}, 
              recomendamos usar la versión adaptada durante mínimo 4-6 semanas antes de considerar el cambio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Metodologías de Entrenamiento</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Selecciona la metodología que mejor se adapte a tus objetivos y nivel
        </p>
      </div>

      {/* Modo de Selección */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {adaptiveMode ? <Lock className="h-5 w-5" /> : <Unlock className="h-5 w-5" />}
            <span>Modo de Selección</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                checked={adaptiveMode}
                onChange={() => setAdaptiveMode(true)}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span className="font-medium">Selección Automática (Recomendado)</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  La IA asigna automáticamente la versión según tu nivel
                </p>
              </div>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                checked={!adaptiveMode}
                onChange={() => setAdaptiveMode(false)}
                className="w-4 h-4 text-blue-600"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <Unlock className="h-4 w-4" />
                  <span className="font-medium">Elección Manual</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tú decides entre versión adaptada o estricta
                </p>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Metodologías */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {methodologies.map((methodology) => (
          <Card key={methodology.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-4xl">{methodology.icon}</div>
                <Badge variant="outline">{methodology.level}</Badge>
              </div>
              <CardTitle className="text-xl">{methodology.name}</CardTitle>
              <CardDescription>{methodology.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Frecuencia:</span>
                  <span>{methodology.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Volumen:</span>
                  <span>{methodology.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Intensidad:</span>
                  <span>{methodology.intensity}</span>
                </div>
              </div>
              
              <Button 
                className="w-full" 
                onClick={() => handleMethodologySelect(methodology)}
              >
                Seleccionar Metodología
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparación de Versiones */}
      {showComparison && selectedMethodology && (
        <Card>
          <CardContent className="pt-6">
            <VersionComparison methodology={selectedMethodology} />
            
            <div className="mt-6 flex space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setShowComparison(false)}
              >
                Cancelar
              </Button>
              <Button 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  // Aquí iría la lógica para confirmar la selección
                  console.log('Metodología seleccionada:', selectedMethodology.name)
                  console.log('Modo adaptativo:', adaptiveMode)
                  console.log('Versión recomendada:', getRecommendedVersion(selectedMethodology))
                }}
              >
                Confirmar Selección
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default Methodologies
