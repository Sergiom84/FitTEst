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
      title: "First Workout",
      description: "Completed your first workout session",
      date: "2 months ago",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "7-Day Streak",
      description: "Worked out for 7 consecutive days",
      date: "1 month ago",
      icon: Calendar,
      color: "text-blue-500"
    },
    {
      title: "Weight Goal",
      description: "Lost 2.5kg towards your goal",
      date: "2 weeks ago",
      icon: Target,
      color: "text-green-500"
    }
  ]

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Progress</h1>
        <p className="text-muted-foreground">Track your fitness journey and achievements</p>
      </div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weight Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span>Weight Progress</span>
            </CardTitle>
            <CardDescription>Your weight loss journey over the past 6 months</CardDescription>
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
              <span>Weekly Workouts</span>
            </CardTitle>
            <CardDescription>Number of workouts completed each week</CardDescription>
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
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Your fitness milestones and accomplishments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="flex items-center space-x-4 p-4 bg-accent rounded-lg">
                  <div className={`p-2 rounded-full bg-background ${achievement.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
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
