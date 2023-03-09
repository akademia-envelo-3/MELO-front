export interface Inbox {
  id: number;
  categoryName: string;
  requestDate: string;
  inDatabaseAndHidden: boolean;
  categoryId?: number;
  requestedBy: string;
}
