/// <reference types="vite/client" />

declare module 'figma:asset/*' {
  const value: string;
  export default value;
}

declare module 'react/jsx-runtime' {
  export * from 'react'
}
