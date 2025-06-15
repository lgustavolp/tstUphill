import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

export default defineConfig({
  e2e: {
    baseUrl: 'https://uphillhealth.com/uphillchallenge/desk?routePackageId=ROUTE_PACKAGE_AS_CHALLENGE&page=0&tab=2&phasesIds=*',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler());
      return config;
    },
    specPattern: 'cypress/e2e/**/*.feature'
  },
  video: true
});
