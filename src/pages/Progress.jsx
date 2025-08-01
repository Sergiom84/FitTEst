import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { TrendingUp, Target, Award, Calendar } from 'lucide-react'

const Progress = () => {
  const weightData = [
    { month: 'Jan', weight: 75 },
    { month: 'Feb', weight: 74.5 },
    { month: 'Mar', weight: 74 },
    { month: 'Apr', weight: 73.5 },
    { month: 'May', weight: 73 },
    { month: 'Jun', weight: 72.5 },
  ]

  const workoutData = [
    { week: 'Week 1', workouts: 3 },
    { week: 'Week 2', workouts: 4 },
    { week: 'Week 3', workouts: 5 },
    { week: 'Week 4', workouts: 4 },
    { week: 'Week 5', workouts: 6 },
    { week: 'Week 6', workouts: 5 },
  ]

  const achievements = [
    {
      title: "Primer Entrenamiento",
      description: "Completaste tu primera sesión de entrenamiento",
      date: "Hace 2 meses",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Racha de 7 Días",
      description: "Entrenaste durante 7 días consecutivos",
      date: "Hace 1 mes",
      icon: Calendar,
      color: "text-blue-500"
    },
    {
      title: "Objetivo de Peso",
      description: "Perdiste 2.5kg hacia tu objetivo",
      date: "Hace 2 semanas",
      icon: Target,
      color: "text-green-500"
    }
  ]

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Progreso</h1>
        <p className="text-gray-600 dark:text-gray-400">Sigue tu viaje fitness y tus logros</p>
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weight Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Progreso de Peso</span>
            </CardTitle>
            <CardDescription>Tu viaje de pérdida de peso en los últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Workout Frequency */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span>Entrenamientos Semanales</span>
            </CardTitle>
            <CardDescription>Número de entrenamientos completados cada semana</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="workouts" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Logros</CardTitle>
          <CardDescription>Tus hitos y logros de fitness</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className={`p-2 rounded-full bg-white dark:bg-gray-950 ${achievement.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-50">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{achievement.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Progress
