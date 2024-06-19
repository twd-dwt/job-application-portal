import { Application } from "../application/Application";
import { Company } from "../company/Company";

export type JobListing = {
  applications?: Array<Application>;
  company?: Company | null;
  createdAt: Date;
  description: string | null;
  id: string;
  location: string | null;
  salary: number | null;
  title: string | null;
  updatedAt: Date;
};
