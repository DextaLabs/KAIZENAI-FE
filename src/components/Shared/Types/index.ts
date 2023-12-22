export type DateRangeType = {
  from_date: Date;
  to_date: Date;
  frequency: "daily" | "hourly";
  preset: string;
};
