import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Dumbbell, Clock, Users, Play } from 'lucide-react'

const Workouts = () => {
  const workouts = [
    {
      id: 1,
      title: "Fuerza Tren Superior",
      description: "Desarrolla músculo y fuerza en tu tren superior",
      duration: "45 min",
      difficulty: "Intermedio",
      exercises: 8,
      image: "💪"
    },
    {
      id: 2,
      title: "Cardio Explosivo",
      description: "Cardio de alta intensidad para quemar calorías",
      duration: "30 min",
      difficulty: "Principiante",
      exercises: 6,
      image: "🏃"
    },
    {
      id: 3,
      title: "Core y Abdominales",
      description: "Fortalece tu core con ejercicios específicos",
      duration: "25 min",
      difficulty: "Intermedio",
      exercises: 10,
      image: "🎯"
    },
    {
      id: 4,
      title: "HIIT Cuerpo Completo",
      description: "Entrenamiento completo para todos los grupos musculares",
      duration: "40 min",
      difficulty: "Avanzado",
      exercises: 12,
      image: "🔥"
    },
    {
      id: 5,
      title: "Flujo de Yoga",
      description: "Sesión relajante de yoga para flexibilidad",
      duration: "35 min",
      difficulty: "Principiante",
      exercises: 15,
      image: "🧘"
    },
    {
      id: 6,
      title: "Potencia Tren Inferior",
      description: "Fortalece tus piernas y glúteos",
      duration: "50 min",
      difficulty: "Avanzado",
      exercises: 9,
      image: "🦵"
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Principiante':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Avanzado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Entrenamientos</h1>
        <p className="text-gray-600 dark:text-gray-400">Elige entre nuestra colección de rutinas de fitness</p>
      </div>

      {/* Workouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workouts.map((workout) => (
          <Card key={workout.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-4xl">{workout.image}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}>
                  {workout.difficulty}
                </span>
              </div>
              <CardTitle className="text-xl">{workout.title}</CardTitle>
              <CardDescription>{workout.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Dumbbell className="h-4 w-4" />
                  <span>{workout.exercises} ejercicios</span>
                </div>
              </div>
              <Button className="w-full" size="sm">
                <Play className="h-4 w-4 mr-2" />
                Iniciar Entrenamiento
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Workouts
