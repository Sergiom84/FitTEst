import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Activity, Calendar, Clock, Heart } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: "Total Workouts",
      value: "24",
      description: "This month",
      icon: Activity,
      color: "text-blue-600"
    },
    {
      title: "Calories Burned",
      value: "2,847",
      description: "This week",
      icon: Heart,
      color: "text-red-600"
    },
    {
      title: "Active Minutes",
      value: "1,240",
      description: "This month",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Streak Days",
      value: "12",
      description: "Current streak",
      icon: Calendar,
      color: "text-purple-600"
    }
  ]

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome back! Here's your fitness overview.</p>
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
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest workouts and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="bg-blue-600 dark:bg-blue-700 rounded-full p-2">
                <Activity className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-gray-50">Completed Upper Body Workout</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">45 minutes • 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <div className="bg-green-500 rounded-full p-2">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 dark:text-gray-50">Burned 420 calories</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Cardio session • Yesterday</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
