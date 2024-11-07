import { createFileRoute } from '@tanstack/react-router';
import Layout from 'config/layout/Private';
export const Route = createFileRoute('/_private')({
  component: Layout,
});
