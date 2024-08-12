import { Service as TService } from "../api/service/Service";

export const SERVICE_TITLE_FIELD = "title";

export const ServiceTitle = (record: TService): string => {
  return record.title?.toString() || String(record.id);
};
