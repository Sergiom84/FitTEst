import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Activity, Calendar, Clock, Heart } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: "Entrenamientos Totales",
      value: "24",
      description: "Este mes",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      title: "Calorías Quemadas",
      value: "2,847",
      description: "Esta semana",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Minutos Activos",
      value: "1,240",
      description: "Este mes",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Días Consecutivos",
      value: "12",
      description: "Racha actual",
      icon: Calendar,
      color: "text-purple-600"
    }
  ]

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Panel Principal</h1>
        <p className="text-gray-600 dark:text-gray-400">¡Bienvenido de vuelta! Aquí tienes tu resumen de fitness.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">{stat.value}</div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Actividad Reciente</CardTitle>
          <CardDescription>Tus últimos entrenamientos y logros</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="bg-blue-600 dark:bg-blue-700 rounded-full p-2">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-gray-50">Completado Entrenamiento de Tren Superior</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">45 minutos • Hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="bg-green-500 rounded-full p-2">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-gray-50">Quemadas 420 calorías</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sesión de cardio • Ayer</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
