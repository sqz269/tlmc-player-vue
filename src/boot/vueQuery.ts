import { boot } from 'quasar/wrappers';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

export default boot(({ app }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
        retry: 2, // Retry failed requests twice
      },
    },
  });

  app.use(VueQueryPlugin, { queryClient });
});
