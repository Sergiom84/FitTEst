import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { User, Mail, Phone, MapPin, Edit, Settings, Activity, Target, Scale, Ruler } from 'lucide-react'

const Profile = () => {
  const [editMode, setEditMode] = useState(false)

  const userInfo = {
    name: "Carlos Martínez",
    email: "carlos.martinez@gmail.com",
    phone: "+34 612 345 678",
    location: "Madrid, España",
    joinDate: "Enero 2024",
    avatar: "/api/placeholder/150/150",
    // Datos básicos
    age: 28,
    weight: 75,
    height: 178,
    sex: "Masculino",
    // Composición corporal
    bodyFat: 15,
    waist: 82,
    chest: 98,
    arms: 35,
    // Nivel y metodología
    trainingLevel: "Intermedio",
    methodology: "Heavy Duty",
    methodologyVersion: "Adaptada",
    // Objetivos
    primaryGoal: "Ganar músculo",
    secondaryGoal: "Perder grasa",
    approach: "Saludable y sostenible"
  }

  const bodyComposition = [
    { metric: "Peso", value: `${userInfo.weight} kg`, icon: Scale, color: "text-blue-600" },
    { metric: "Altura", value: `${userInfo.height} cm`, icon: Ruler, color: "text-green-600" },
    { metric: "Grasa Corporal", value: `${userInfo.bodyFat}%`, icon: Activity, color: "text-orange-600" },
    { metric: "Cintura", value: `${userInfo.waist} cm`, icon: Target, color: "text-purple-600" }
  ]

  const goals = [
    { title: "Perder Peso", target: "5 kg", current: "2.5 kg", progress: 50 },
    { title: "Ganar Músculo", target: "10 kg", current: "3 kg", progress: 30 },
    { title: "Distancia Corriendo", target: "10 km", current: "7 km", progress: 70 }
  ]

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Perfil</h1>
        <p className="text-gray-600 dark:text-gray-400">Gestiona tu cuenta y objetivos de fitness</p>
      </div>

      {/* Datos Básicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bodyComposition.map((item, index) => {
          const Icon = item.icon
          return (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center">
                  <Icon className={`h-4 w-4 mr-2 ${item.color}`} />
                  {item.metric}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
                <AvatarFallback className="text-2xl">
                  {userInfo.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{userInfo.name}</CardTitle>
              <CardDescription>Miembro desde {userInfo.joinDate}</CardDescription>
              <div className="flex justify-center space-x-2 mt-2">
                <Badge variant="outline">{userInfo.age} años</Badge>
                <Badge variant="outline">{userInfo.sex}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm">{userInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm">{userInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <span className="text-sm">{userInfo.location}</span>
              </div>
              <div className="pt-4 space-y-2">
                <Button className="w-full" variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
                <Button className="w-full" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configuración
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goals and Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Metodología y Nivel */}
          <Card>
            <CardHeader>
              <CardTitle>Metodología y Nivel</CardTitle>
              <CardDescription>Tu configuración actual de entrenamiento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Nivel de Entrenamiento</label>
                  <div className="mt-1">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {userInfo.trainingLevel}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Metodología</label>
                  <div className="mt-1">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {userInfo.methodology} ({userInfo.methodologyVersion})
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Objetivo Principal</label>
                  <p className="mt-1 text-sm">{userInfo.primaryGoal}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Enfoque</label>
                  <p className="mt-1 text-sm">{userInfo.approach}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fitness Goals */}
          <Card>
            <CardHeader>
              <CardTitle>Objetivos de Fitness</CardTitle>
              <CardDescription>Sigue tu progreso hacia tus objetivos de fitness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.title}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {goal.current} / {goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {goal.progress}% completado
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas Rápidas</CardTitle>
              <CardDescription>Tu resumen de fitness de un vistazo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">24</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Entrenamientos Este Mes</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Racha Actual</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">2,847</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Calorías Quemadas</div>
                </div>
                <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-50">1,240</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Minutos Activos</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile
