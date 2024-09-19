export default [
  {
    ignores: ['node_modules/**'], // Ignoriert node_modules-Verzeichnis
  },
  {
    rules: {
      'no-unused-vars': 'error',  // Fehlermeldung, wenn eine Variable deklariert, aber nicht verwendet wird
      'prefer-const': 'error',    // Fehlermeldung, wenn 'let' anstelle von 'const' verwendet wird
      'eqeqeq': 'error'           // Fehlermeldung, wenn '==' statt '===' verwendet wird
    },
  },
];
