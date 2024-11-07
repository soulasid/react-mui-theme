import { createFileRoute } from "@tanstack/react-router";
import PageContent from "@/config/layout/Content";
import DateRangePicker from "@/components/DateRangePicker";
export const Route = createFileRoute("/_private/")({
  component: () => (
    <PageContent>
      <h1>dkdkdk</h1>
      <DateRangePicker />
    </PageContent>
  ),
});
