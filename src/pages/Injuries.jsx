import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { AlertTriangle, Plus, Shield, Activity, Calendar, TrendingUp } from 'lucide-react'

const Injuries = () => {
  const [showAddInjury, setShowAddInjury] = useState(false)
  const [injuries, setInjuries] = useState([
    {
      id: 1,
      type: 'Dolor lumbar',
      severity: 'Leve',
      date: '2024-01-15',
      status: 'En recuperación',
      affectedExercises: ['Peso muerto', 'Sentadilla', 'Remo inclinado'],
      alternatives: ['Peso muerto con trap bar', 'Sentadilla goblet', 'Remo en máquina'],
      notes: 'Dolor al inclinarse hacia adelante. Mejora con calentamiento.',
      recovery: 70
    }
  ])

  const bodyParts = [
    'Cuello', 'Hombro izquierdo', 'Hombro derecho', 'Brazo izquierdo', 'Brazo derecho',
    'Codo izquierdo', 'Codo derecho', 'Muñeca izquierda', 'Muñeca derecha',
    'Espalda alta', 'Espalda baja', 'Pecho', 'Abdomen',
    'Cadera', 'Glúteos', 'Muslo izquierdo', 'Muslo derecho',
    'Rodilla izquierda', 'Rodilla derecha', 'Pantorrilla izquierda', 'Pantorrilla derecha',
    'Tobillo izquierdo', 'Tobillo derecho', 'Pie izquierdo', 'Pie derecho'
  ]

  const injuryTypes = [
    'Dolor muscular', 'Contractura', 'Tirón muscular', 'Desgarro',
    'Dolor articular', 'Inflamación', 'Tendinitis', 'Bursitis',
    'Esguince', 'Luxación', 'Fractura', 'Otro'
  ]

  const severityLevels = [
    { value: 'Leve', color: 'bg-yellow-100 text-yellow-800', description: 'Molestia leve, no impide entrenar' },
    { value: 'Moderado', color: 'bg-orange-100 text-orange-800', description: 'Dolor notable, limita algunos ejercicios' },
    { value: 'Grave', color: 'bg-red-100 text-red-800', description: 'Dolor intenso, impide entrenar la zona' }
  ]

  const AddInjuryForm = () => (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Reportar Nueva Lesión</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Zona Afectada</label>
            <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
              <option>Selecciona la zona</option>
              {bodyParts.map((part) => (
                <option key={part} value={part}>{part}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Tipo de Lesión</label>
            <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
              <option>Selecciona el tipo</option>
              {injuryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Gravedad</label>
          <div className="space-y-2">
            {severityLevels.map((level) => (
              <label key={level.value} className="flex items-center space-x-3 cursor-pointer">
                <input type="radio" name="severity" value={level.value} className="w-4 h-4" />
                <div>
                  <Badge className={level.color}>{level.value}</Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-2">{level.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">¿Cuándo ocurrió?</label>
          <input 
            type="date" 
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Descripción detallada</label>
          <textarea 
            className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            rows="3"
            placeholder="Describe cómo ocurrió, qué movimientos causan dolor, etc."
          />
        </div>

        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            onClick={() => setShowAddInjury(false)}
          >
            Cancelar
          </Button>
          <Button 
            onClick={() => {
              // Aquí iría la lógica para guardar la lesión
              setShowAddInjury(false)
            }}
          >
            Reportar Lesión
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Lesiones y Adaptaciones</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Gestiona tus lesiones y obtén adaptaciones automáticas en tu rutina
        </p>
      </div>

      {/* Botón para añadir lesión */}
      {!showAddInjury && (
        <Button 
          onClick={() => setShowAddInjury(true)}
          className="bg-red-600 hover:bg-red-700"
        >
          <AlertTriangle className="h-4 w-4 mr-2" />
          Reportar Nueva Lesión
        </Button>
      )}

      {/* Formulario para añadir lesión */}
      {showAddInjury && <AddInjuryForm />}

      {/* Resumen de Estado */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Lesiones Activas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{injuries.filter(i => i.status !== 'Recuperado').length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              En Recuperación
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{injuries.filter(i => i.status === 'En recuperación').length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Ejercicios Adaptados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">6</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Recuperación Media
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">70%</div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Lesiones */}
      <div className="space-y-4">
        {injuries.map((injury) => (
          <Card key={injury.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span>{injury.type}</span>
                  </CardTitle>
                  <CardDescription>
                    Reportado el {new Date(injury.date).toLocaleDateString('es-ES')}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Badge 
                    className={
                      injury.severity === 'Leve' ? 'bg-yellow-100 text-yellow-800' :
                      injury.severity === 'Moderado' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }
                  >
                    {injury.severity}
                  </Badge>
                  <Badge variant="outline">{injury.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progreso de Recuperación */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Progreso de Recuperación</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{injury.recovery}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${injury.recovery}%` }}
                  ></div>
                </div>
              </div>

              {/* Ejercicios Afectados y Alternativas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-red-600 mb-2 flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Ejercicios Eliminados
                  </h4>
                  <div className="space-y-1">
                    {injury.affectedExercises.map((exercise, index) => (
                      <div key={index} className="text-sm bg-red-50 dark:bg-red-950 p-2 rounded">
                        {exercise}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-green-600 mb-2 flex items-center">
                    <Activity className="h-4 w-4 mr-1" />
                    Alternativas Seguras
                  </h4>
                  <div className="space-y-1">
                    {injury.alternatives.map((alternative, index) => (
                      <div key={index} className="text-sm bg-green-50 dark:bg-green-950 p-2 rounded">
                        {alternative}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notas */}
              {injury.notes && (
                <div>
                  <h4 className="font-medium mb-2">Notas</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded">
                    {injury.notes}
                  </p>
                </div>
              )}

              {/* Acciones */}
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Actualizar Estado
                </Button>
                <Button variant="outline" size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Ver Evolución
                </Button>
                <Button variant="outline" size="sm">
                  Editar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Información sobre Adaptaciones Automáticas */}
      <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-blue-900 dark:text-blue-100">
            <Shield className="h-5 w-5" />
            <span>Adaptaciones Automáticas de la IA</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-blue-800 dark:text-blue-200">
            <p>• <strong>Eliminación automática</strong> de ejercicios que puedan agravar la lesión</p>
            <p>• <strong>Sustitución inteligente</strong> por ejercicios alternativos seguros</p>
            <p>• <strong>Ajuste de intensidad</strong> y volumen para favorecer la recuperación</p>
            <p>• <strong>Monitoreo continuo</strong> del progreso de recuperación</p>
            <p>• <strong>Reintroducción gradual</strong> de ejercicios cuando sea seguro</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Injuries
