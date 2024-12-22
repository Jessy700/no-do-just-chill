# Portfolio Personal - Desarrollador .NET & Azure Cloud

## Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── ui/            # Componentes de UI (shadcn)
│   ├── Hero.tsx       # Componente principal de la página de inicio
│   ├── Navbar.tsx     # Barra de navegación
│   └── ...
├── pages/             # Páginas de la aplicación
│   ├── Index.tsx      # Página principal
│   ├── About.tsx      # Página Acerca de
│   ├── Projects.tsx   # Página de proyectos
│   ├── Blog.tsx       # Página del blog
│   ├── BlogPost.tsx   # Página de artículo individual
│   └── Contact.tsx    # Página de contacto
├── lib/               # Utilidades y configuraciones
└── hooks/             # Custom hooks
```

## Tecnologías Utilizadas

- React + TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- Framer Motion
- React Router
- React Query

## Desarrollo Local

1. Clona el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```

## Despliegue en Azure App Service

1. Construye la aplicación para producción
```bash
npm run build
```

2. Instala Azure CLI si aún no lo tienes
```bash
# Windows (PowerShell Admin)
winget install -e --id Microsoft.AzureCLI

# macOS
brew install azure-cli

# Linux
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

3. Inicia sesión en Azure
```bash
az login
```

4. Crea un grupo de recursos si no existe
```bash
az group create --name <NOMBRE_GRUPO_RECURSOS> --location eastus
```

5. Crea el App Service Plan
```bash
az appservice plan create --name <NOMBRE_PLAN> --resource-group <NOMBRE_GRUPO_RECURSOS> --sku FREE
```

6. Crea el Web App
```bash
az webapp create --name <NOMBRE_APP> --resource-group <NOMBRE_GRUPO_RECURSOS> --plan <NOMBRE_PLAN>
```

7. Configura la aplicación para servir una SPA
```bash
az webapp config set --resource-group <NOMBRE_GRUPO_RECURSOS> --name <NOMBRE_APP> --linux-fx-version "NODE|18-lts"
```

8. Despliega la aplicación
```bash
az webapp deployment source config-zip --resource-group <NOMBRE_GRUPO_RECURSOS> --name <NOMBRE_APP> --src ./dist
```

## Características

- Diseño responsive
- Modo oscuro/claro
- Animaciones suaves
- Blog con artículos
- Formulario de contacto
- Sección de proyectos
- Optimizado para SEO

## Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.