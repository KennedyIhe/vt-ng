interface ColumnSetting {
    field: string;
    title: string;
    format?: string;
    type: 'text' | 'numeric' | 'boolean' | 'date';
    width?: number;
  }
