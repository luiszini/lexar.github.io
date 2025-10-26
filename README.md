# LEXAR - Sistema de Gestión Previsional

## 📋 Descripción

LEXAR es un sistema integral de gestión previsional diseñado para facilitar el trabajo de profesionales del derecho en el ámbito previsional argentino.

## 🚀 Inicio Rápido

### Página Principal
- **dashboard.html** - Página de inicio con acceso a todas las funcionalidades

### Funcionalidades Disponibles

#### 1. Cómputo Previsional (`index.html`)
Herramienta completa para calcular:
- Años de aportes y servicios
- Edad jubilatoria
- Requisitos de jubilación
- Moratorias (Ley 24476 y Plan 27705)
- Régimen de construcción
- Compensación por tareas insalubres
- Prorrateo de regímenes especiales

**Características:**
- Importación de Historia Laboral ANSES (PDF)
- Cálculo automático de beneficios
- Gestión de aportes múltiples
- Exportación a PDF
- Sistema de guardado y recuperación
- Historial de cambios con deshacer/rehacer

#### 2. Cálculo de Astreintes (`astreintes.html`)
Calculadora especializada en astreintes que:
- Calcula días hábiles entre fechas
- Excluye feriados nacionales automáticamente
- Permite agregar días inhábiles personalizados
- Genera reportes detallados
- Exporta resultados para imprimir

**Características:**
- Cálculo automático de días hábiles
- Base de datos de feriados actualizada
- Personalización de días inhábiles
- Vista previa de impresión

#### 3. Funcionalidades Futuras (Próximamente)
- 📄 Generador de Documentos
- 📈 Estadísticas y Reportes
- 🗂️ Gestión de Casos
- 📚 Base de Conocimiento

## 📊 Panel de Estadísticas

El dashboard muestra:
- **Casos Procesados**: Total de cómputos realizados
- **Casos Activos**: Cómputos en proceso
- **Casos Completados**: Cómputos finalizados
- **Tiempo Promedio**: Duración promedio por caso

*Las estadísticas se almacenan localmente en el navegador*

## 🔧 Accesos Rápidos

Desde el dashboard puedes acceder rápidamente a:
- Nuevo Cómputo
- Nuevo Astreinte
- Casos Recientes
- Configuración
- Mis Archivos
- Ayuda y Soporte

## 📚 Recursos Disponibles

### Documentación
- **prorrateo.pdf**: Guía oficial de prorrateo según instructivo ANSES
- Manual de Usuario (próximamente)
- Tutoriales en video (próximamente)

### Normativa
- Ley 24476 - Moratoria previsional
- Ley 27705 - Plan de regularización
- Decreto 475/21 - Régimen de construcción
- Normativa ANSES actualizada

## 🎨 Características del Diseño

El sistema utiliza un diseño moderno y profesional con:
- Esquema de colores azul corporativo (#0066CC, #0052A3)
- Diseño responsive para todos los dispositivos
- Gradientes y sombras para mejor UX
- Interfaz intuitiva y fácil de usar
- Navegación fluida entre módulos

## 💾 Almacenamiento de Datos

El sistema utiliza **localStorage** del navegador para:
- Guardar cómputos realizados
- Almacenar estadísticas
- Recordar preferencias del usuario
- Mantener historial de cambios

**Nota**: Los datos se guardan localmente en tu navegador y no se envían a ningún servidor.

## 🔄 Navegación

### Estructura del Sistema
```
dashboard.html (Inicio)
    ├── index.html (Cómputo Previsional)
    ├── astreintes.html (Cálculo de Astreintes)
    └── [Otras funcionalidades futuras]
```

### Volver al Dashboard
En cada aplicación encontrarás un botón **🏠 Inicio** que te lleva de vuelta al dashboard principal.

## 📝 Uso del Sistema

### Para Cómputo Previsional:
1. Accede desde el dashboard o directamente a `index.html`
2. Completa los datos personales (fecha de nacimiento, sexo, nacionalidad)
3. Carga los aportes manualmente o importa desde PDF de ANSES
4. El sistema calculará automáticamente años y edad
5. Utiliza las moratorias si es necesario
6. Exporta el resultado a PDF

### Para Astreintes:
1. Accede desde el dashboard o directamente a `astreintes.html`
2. Ingresa los datos del juicio
3. Define el período de cálculo
4. Agrega días inhábiles si es necesario
5. Calcula y revisa el resultado
6. Imprime o guarda el cálculo

## 🛠️ Características Técnicas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Diseño**: Responsive, Mobile-first
- **Compatibilidad**: Navegadores modernos (Chrome, Firefox, Edge, Safari)
- **Dependencias**: html2pdf.js para exportación PDF
- **Almacenamiento**: localStorage (navegador)

## 📞 Soporte

Para asistencia técnica:
- 📧 Email: soporte@lexar.com
- 📞 Teléfono: (011) 4000-0000
- ⏰ Horario: Lunes a Viernes 9:00-18:00

## 📄 Licencia

© 2025 LEXAR. Todos los derechos reservados.

---

## 🔐 Privacidad

El sistema LEXAR respeta tu privacidad:
- No se envían datos a servidores externos
- Toda la información se procesa localmente
- No se requiere registro ni login
- No se utilizan cookies de seguimiento

---

**Versión**: 2.0.0  
**Última actualización**: Octubre 2025  
**Desarrollado con dedicación para profesionales del derecho previsional**

