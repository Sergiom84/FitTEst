import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Play, Eye, Edit, AlertCircle, CheckCircle, X } from 'lucide-react'

const Routines = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [exerciseProgress, setExerciseProgress] = useState({})
  const [showExerciseDetail, setShowExerciseDetail] = useState(null)

  // Datos de ejemplo - esto vendría de la IA según la metodología seleccionada
  const weeklyRoutine = [
    {
      day: "Lunes",
      name: "Tren Superior - Push",
      completed: true,
      exercises: [
        {
          id: 1,
          name: "Press Banca",
          sets: 4,
          reps: "8-10",
          weight: "80kg",
          restTime: "2-3 min",
          completed: true,
          lastWeight: "75kg",
          progression: "+5kg"
        },
        {
          id: 2,
          name: "Press Militar",
          sets: 3,
          reps: "10-12",
          weight: "50kg",
          restTime: "90s",
          completed: true,
          lastWeight: "47.5kg",
          progression: "+2.5kg"
        },
        {
          id: 3,
          name: "Fondos en Paralelas",
          sets: 3,
          reps: "12-15",
          weight: "Peso corporal",
          restTime: "90s",
          completed: false,
          lastWeight: "Peso corporal",
          progression: "Mantener"
        }
      ]
    },
    {
      day: "Martes",
      name: "Tren Inferior",
      completed: false,
      exercises: [
        {
          id: 4,
          name: "Sentadilla",
          sets: 4,
          reps: "6-8",
          weight: "100kg",
          restTime: "3 min",
          completed: false,
          lastWeight: "95kg",
          progression: "+5kg"
        },
        {
          id: 5,
          name: "Peso Muerto Rumano",
          sets: 3,
          reps: "8-10",
          weight: "90kg",
          restTime: "2-3 min",
          completed: false,
          lastWeight: "85kg",
          progression: "+5kg"
        }
      ]
    },
    {
      day: "Miércoles",
      name: "Descanso",
      completed: null,
      exercises: []
    },
    {
      day: "Jueves",
      name: "Tren Superior - Pull",
      completed: false,
      exercises: [
        {
          id: 6,
          name: "Dominadas",
          sets: 4,
          reps: "8-12",
          weight: "Peso corporal",
          restTime: "2 min",
          completed: false,
          lastWeight: "Peso corporal",
          progression: "Mantener"
        },
        {
          id: 7,
          name: "Remo con Barra",
          sets: 3,
          reps: "10-12",
          weight: "70kg",
          restTime: "90s",
          completed: false,
          lastWeight: "67.5kg",
          progression: "+2.5kg"
        }
      ]
    }
  ]

  const handleExerciseProgress = (exerciseId, data) => {
    setExerciseProgress(prev => ({
      ...prev,
      [exerciseId]: data
    }))
  }

  const ExerciseDetail = ({ exercise }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{exercise.name}</h3>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowExerciseDetail(null)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-4">
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <Play className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-gray-600 dark:text-gray-400">Video Explicativo</span>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-medium">Detalles del Ejercicio</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Series: {exercise.sets}</div>
              <div>Repeticiones: {exercise.reps}</div>
              <div>Peso: {exercise.weight}</div>
              <div>Descanso: {exercise.restTime}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Registrar Progreso</h4>
            <div className="space-y-2">
              <input
                type="number"
                placeholder="Peso utilizado (kg)"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
              />
              <select className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
                <option>¿Cómo te sentiste?</option>
                <option>Muy fácil</option>
                <option>Fácil</option>
                <option>Perfecto</option>
                <option>Difícil</option>
                <option>Muy difícil</option>
              </select>
              <textarea
                placeholder="Notas adicionales (opcional)"
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                rows="2"
              />
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1">
              <AlertCircle className="h-4 w-4 mr-2" />
              Reportar Lesión
            </Button>
            <Button className="flex-1">
              <CheckCircle className="h-4 w-4 mr-2" />
              Guardar Progreso
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Rutinas de Entrenamiento</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tu plan de entrenamiento personalizado basado en Heavy Duty (Versión Adaptada)
        </p>
      </div>

      {/* Resumen Semanal */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen de la Semana</CardTitle>
          <CardDescription>Progreso actual de tu rutina semanal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Días Completados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Días Pendientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Adherencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">+5kg</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Progreso Medio</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rutina Semanal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weeklyRoutine.map((day, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              day.completed === true ? 'border-green-500 bg-green-50 dark:bg-green-950' :
              day.completed === false ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' :
              'border-gray-300 bg-gray-50 dark:bg-gray-800'
            }`}
            onClick={() => day.exercises.length > 0 && setSelectedDay(day)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{day.day}</CardTitle>
                {day.completed === true && <CheckCircle className="h-5 w-5 text-green-600" />}
                {day.completed === false && <AlertCircle className="h-5 w-5 text-blue-600" />}
              </div>
              <CardDescription>{day.name}</CardDescription>
            </CardHeader>
            <CardContent>
              {day.exercises.length > 0 ? (
                <div className="space-y-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {day.exercises.length} ejercicios
                  </div>
                  <div className="text-xs">
                    {day.exercises.filter(e => e.completed).length}/{day.exercises.length} completados
                  </div>
                </div>
              ) : (
                <Badge variant="secondary">Descanso</Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detalle del Día Seleccionado */}
      {selectedDay && (
        <Card>
          <CardHeader>
            <CardTitle>{selectedDay.day} - {selectedDay.name}</CardTitle>
            <CardDescription>Ejercicios programados para hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedDay.exercises.map((exercise) => (
                <div 
                  key={exercise.id}
                  className={`p-4 border rounded-lg ${
                    exercise.completed ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' :
                    'bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-lg">{exercise.name}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                        <div>Series: {exercise.sets}</div>
                        <div>Reps: {exercise.reps}</div>
                        <div>Peso: {exercise.weight}</div>
                        <div>Descanso: {exercise.restTime}</div>
                      </div>
                      {exercise.progression && (
                        <div className="mt-2">
                          <Badge variant="secondary" className="text-xs">
                            Progresión: {exercise.progression}
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setShowExerciseDetail(exercise)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleExerciseProgress(exercise.id, {})}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Modal de Detalle del Ejercicio */}
      {showExerciseDetail && (
        <ExerciseDetail exercise={showExerciseDetail} />
      )}
    </div>
  )
}

export default Routines
