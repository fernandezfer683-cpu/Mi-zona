# Mi Zona — guía paso a paso

## Paso 1: Firebase (base de datos gratis)

1. Andá a console.firebase.google.com
2. Creá un proyecto nuevo
3. Menú izquierdo → Firestore Database → Crear base de datos → Modo de producción
4. Volvé al inicio → ícono `</>` (Web) → registrá una app
5. Copiá la configuración que te muestra y pegala en `src/firebase.js`, reemplazando los textos "PEGA_ACA_TU_..."
6. En Firestore, andá a la pestaña "Reglas" y reemplazá el contenido por esto (para que funcione mientras no tenés un login real):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

Esto deja que cualquiera con el link de tu sitio pueda leer y escribir en la base — parecido a como funciona ahora con la contraseña "padre" en el panel. Más adelante se puede reforzar con un login real.

## Paso 2: Probar el sitio (sin instalar nada en tu computadora)

1. Andá a stackblitz.com
2. Creá un proyecto nuevo de tipo "Vite + React"
3. Reemplazá los archivos del proyecto por los de esta carpeta (`package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, y todo lo de `src/`)
4. StackBlitz instala las dependencias solo. Si no lo hace, escribí en su terminal: `npm install`
5. Con eso ya deberías ver tu sitio funcionando en la vista previa

## Paso 3: Publicar con tu dominio

1. Subí el código a GitHub (StackBlitz tiene un botón para conectar con GitHub) o descargá el proyecto
2. Andá a vercel.com, creá una cuenta gratis, conectá tu repositorio de GitHub
3. Vercel detecta que es un proyecto Vite y lo publica solo — te da un link como `mi-zona.vercel.app`
4. En Vercel, andá a "Settings" → "Domains" y ahí podés conectar un dominio que hayas comprado (ej. en NIC Argentina o cualquier proveedor de dominios) para que sea `mizona.com.ar` en vez de `mizona.vercel.app`

## Importante

- La contraseña de administrador sigue siendo "padre" (definida en `src/App.jsx`), cambiala antes de mostrárselo a nadie
- El panel de administrador es visible para cualquiera que sepa la contraseña, pero no hay un login real de usuario — es una limitación a mejorar más adelante si el proyecto crece
