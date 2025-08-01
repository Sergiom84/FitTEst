import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Utensils, Target, TrendingUp, ShoppingCart, Plus, Minus } from 'lucide-react'

const Nutrition = () => {
  const [selectedMealPlan, setSelectedMealPlan] = useState('maintenance')
  const [mealsPerDay, setMealsPerDay] = useState(4)

  // Datos calculados por la IA
  const nutritionData = {
    basalMetabolicRate: 1850,
    totalDailyExpenditure: 2400,
    currentPlan: 'maintenance',
    targetCalories: 2400,
    macros: {
      protein: { grams: 150, calories: 600, percentage: 25 },
      carbs: { grams: 300, calories: 1200, percentage: 50 },
      fats: { grams: 67, calories: 600, percentage: 25 }
    }
  }

  const mealPlans = [
    {
      id: 'deficit',
      name: 'Déficit Calórico',
      description: 'Para pérdida de grasa',
      calories: 2000,
      adjustment: -400,
      icon: '📉',
      color: 'text-red-600'
    },
    {
      id: 'maintenance',
      name: 'Mantenimiento',
      description: 'Mantener peso actual',
      calories: 2400,
      adjustment: 0,
      icon: '⚖️',
      color: 'text-blue-600'
    },
    {
      id: 'surplus',
      name: 'Superávit Calórico',
      description: 'Para ganancia muscular',
      calories: 2800,
      adjustment: +400,
      icon: '📈',
      color: 'text-green-600'
    }
  ]

  const sampleMeals = [
    {
      id: 1,
      name: 'Desayuno',
      time: '08:00',
      calories: 600,
      foods: [
        { name: 'Avena', amount: '80g', calories: 300 },
        { name: 'Plátano', amount: '1 unidad', calories: 100 },
        { name: 'Proteína Whey', amount: '30g', calories: 120 },
        { name: 'Almendras', amount: '20g', calories: 80 }
      ]
    },
    {
      id: 2,
      name: 'Almuerzo',
      time: '13:00',
      calories: 800,
      foods: [
        { name: 'Pechuga de Pollo', amount: '200g', calories: 330 },
        { name: 'Arroz Integral', amount: '100g', calories: 350 },
        { name: 'Brócoli', amount: '150g', calories: 40 },
        { name: 'Aceite de Oliva', amount: '10ml', calories: 80 }
      ]
    },
    {
      id: 3,
      name: 'Merienda',
      time: '17:00',
      calories: 400,
      foods: [
        { name: 'Yogur Griego', amount: '200g', calories: 200 },
        { name: 'Nueces', amount: '30g', calories: 200 }
      ]
    },
    {
      id: 4,
      name: 'Cena',
      time: '21:00',
      calories: 600,
      foods: [
        { name: 'Salmón', amount: '150g', calories: 300 },
        { name: 'Patata Dulce', amount: '200g', calories: 180 },
        { name: 'Espinacas', amount: '100g', calories: 20 },
        { name: 'Aguacate', amount: '50g', calories: 100 }
      ]
    }
  ]

  const supplements = [
    {
      name: 'Proteína Whey',
      purpose: 'Completar requerimientos proteicos',
      timing: 'Post-entreno',
      recommended: true,
      price: '€29.99'
    },
    {
      name: 'Creatina Monohidrato',
      purpose: 'Mejorar rendimiento y fuerza',
      timing: 'Cualquier momento',
      recommended: true,
      price: '€19.99'
    },
    {
      name: 'Omega-3',
      purpose: 'Salud cardiovascular y articular',
      timing: 'Con las comidas',
      recommended: false,
      price: '€24.99'
    }
  ]

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Nutrición y Dietas</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Plan nutricional personalizado basado en tus objetivos y metodología
        </p>
      </div>

      {/* Resumen Calórico */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Metabolismo Basal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nutritionData.basalMetabolicRate}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">kcal/día</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Gasto Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nutritionData.totalDailyExpenditure}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">kcal/día</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Objetivo Calórico
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{nutritionData.targetCalories}</div>
            <p className="text-xs text-gray-600 dark:text-gray-400">kcal/día</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Comidas/Día
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setMealsPerDay(Math.max(3, mealsPerDay - 1))}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-2xl font-bold">{mealsPerDay}</span>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setMealsPerDay(Math.min(6, mealsPerDay + 1))}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selección de Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Tipo de Dieta</CardTitle>
          <CardDescription>Selecciona tu objetivo nutricional</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mealPlans.map((plan) => (
              <div
                key={plan.id}
                className={`p-4 border rounded-lg cursor-pointer transition-all ${
                  selectedMealPlan === plan.id 
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedMealPlan(plan.id)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{plan.icon}</span>
                  <div>
                    <h3 className="font-medium">{plan.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-bold">{plan.calories} kcal</span>
                      {plan.adjustment !== 0 && (
                        <Badge variant={plan.adjustment > 0 ? "default" : "destructive"}>
                          {plan.adjustment > 0 ? '+' : ''}{plan.adjustment}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Distribución de Macronutrientes */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución de Macronutrientes</CardTitle>
          <CardDescription>Basado en tu metodología Heavy Duty y objetivos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{nutritionData.macros.protein.grams}g</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Proteínas</div>
              <div className="text-xs text-gray-500">{nutritionData.macros.protein.percentage}% • {nutritionData.macros.protein.calories} kcal</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{nutritionData.macros.carbs.grams}g</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Carbohidratos</div>
              <div className="text-xs text-gray-500">{nutritionData.macros.carbs.percentage}% • {nutritionData.macros.carbs.calories} kcal</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{nutritionData.macros.fats.grams}g</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Grasas</div>
              <div className="text-xs text-gray-500">{nutritionData.macros.fats.percentage}% • {nutritionData.macros.fats.calories} kcal</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plan de Comidas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Utensils className="h-5 w-5" />
            <span>Plan de Comidas Diario</span>
          </CardTitle>
          <CardDescription>Distribución de {mealsPerDay} comidas adaptada a tus preferencias</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleMeals.slice(0, mealsPerDay).map((meal) => (
              <div key={meal.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h3 className="font-medium text-lg">{meal.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{meal.time} • {meal.calories} kcal</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Personalizar
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {meal.foods.map((food, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{food.name} ({food.amount})</span>
                      <span className="text-gray-600 dark:text-gray-400">{food.calories} kcal</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suplementación */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Suplementación Recomendada</span>
          </CardTitle>
          <CardDescription>Suplementos basados en tu metodología y objetivos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {supplements.map((supplement, index) => (
              <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{supplement.name}</h3>
                    {supplement.recommended && (
                      <Badge variant="default">Recomendado</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{supplement.purpose}</p>
                  <p className="text-xs text-gray-500 mt-1">Tomar: {supplement.timing}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-green-600">{supplement.price}</span>
                  <Button size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Nutrition
