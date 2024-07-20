import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Pamer/'  // Asegúrate de que esta base coincida con el nombre del repositorio
});
