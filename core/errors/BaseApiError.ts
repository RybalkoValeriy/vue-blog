export interface BaseApiError {
  message: string;
  errors: Record<string, string[]>;
}
