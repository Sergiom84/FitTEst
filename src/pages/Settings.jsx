import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Settings as SettingsIcon, Bell, Shield, Download, Trash2, Moon, Sun, Volume2 } from 'lucide-react'

const Settings = () => {
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    progressUpdates: true,
    nutritionAlerts: false,
    injuryChecks: true
  })

  const [theme, setTheme] = useState('system')
  const [dataRetention, setDataRetention] = useState('1year')

  return (
    <div className="space-y-8 fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">Ajustes y Configuración</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Personaliza tu experiencia en MindMixer
        </p>
      </div>

      {/* Notificaciones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="h-5 w-5" />
            <span>Notificaciones</span>
          </CardTitle>
          <CardDescription>Configura qué notificaciones quieres recibir</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-medium">Recordatorios de Entrenamiento</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Te recordaremos cuando sea hora de entrenar
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.workoutReminders}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  workoutReminders: e.target.checked
                }))}
                className="w-4 h-4 text-blue-600"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-medium">Actualizaciones de Progreso</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Notificaciones sobre tu evolución y logros
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.progressUpdates}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  progressUpdates: e.target.checked
                }))}
                className="w-4 h-4 text-blue-600"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-medium">Alertas Nutricionales</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Recordatorios sobre comidas y suplementos
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.nutritionAlerts}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  nutritionAlerts: e.target.checked
                }))}
                className="w-4 h-4 text-blue-600"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <div className="font-medium">Chequeos de Lesiones</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Seguimiento del estado de tus lesiones
                </div>
              </div>
              <input
                type="checkbox"
                checked={notifications.injuryChecks}
                onChange={(e) => setNotifications(prev => ({
                  ...prev,
                  injuryChecks: e.target.checked
                }))}
                className="w-4 h-4 text-blue-600"
              />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Apariencia */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Moon className="h-5 w-5" />
            <span>Apariencia</span>
          </CardTitle>
          <CardDescription>Personaliza el tema y la apariencia de la aplicación</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Tema</label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="light"
                    checked={theme === 'light'}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-4 h-4"
                  />
                  <Sun className="h-4 w-4" />
                  <span>Claro</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="dark"
                    checked={theme === 'dark'}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-4 h-4"
                  />
                  <Moon className="h-4 w-4" />
                  <span>Oscuro</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value="system"
                    checked={theme === 'system'}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-4 h-4"
                  />
                  <SettingsIcon className="h-4 w-4" />
                  <span>Sistema</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Privacidad y Datos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Privacidad y Datos</span>
          </CardTitle>
          <CardDescription>Controla cómo se manejan tus datos personales</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Retención de Datos</label>
            <select 
              value={dataRetention}
              onChange={(e) => setDataRetention(e.target.value)}
              className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="6months">6 meses</option>
              <option value="1year">1 año</option>
              <option value="2years">2 años</option>
              <option value="indefinite">Indefinido</option>
            </select>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Tiempo que se conservarán tus datos de entrenamiento
            </p>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Descargar Mis Datos
            </Button>
            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
              <Trash2 className="h-4 w-4 mr-2" />
              Eliminar Todos los Datos
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Integración con Música */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Volume2 className="h-5 w-5" />
            <span>Integración Musical</span>
          </CardTitle>
          <CardDescription>Conecta tus servicios de música favoritos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
                <div>
                  <div className="font-medium">Spotify</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">No conectado</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Conectar</Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">YT</span>
                </div>
                <div>
                  <div className="font-medium">YouTube Music</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">No conectado</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Conectar</Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AM</span>
                </div>
                <div>
                  <div className="font-medium">Apple Music</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">No conectado</div>
                </div>
              </div>
              <Button variant="outline" size="sm">Conectar</Button>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Funciones de Música Inteligente
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Playlists automáticas según tipo de entrenamiento</li>
              <li>• Música adaptada a la fase del ejercicio</li>
              <li>• Control flotante durante los entrenamientos</li>
              <li>• Sincronización con ritmo cardíaco (próximamente)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Información de la App */}
      <Card>
        <CardHeader>
          <CardTitle>Información de la Aplicación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span>Versión</span>
            <Badge variant="outline">1.0.0</Badge>
          </div>
          <div className="flex justify-between">
            <span>Última actualización</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">15 Enero 2024</span>
          </div>
          <div className="flex justify-between">
            <span>Metodología activa</span>
            <Badge>Heavy Duty (Adaptada)</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Botón de Guardar */}
      <div className="flex justify-end">
        <Button className="bg-green-600 hover:bg-green-700">
          Guardar Configuración
        </Button>
      </div>
    </div>
  )
}

export default Settings
