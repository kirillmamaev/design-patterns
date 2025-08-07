class DatabaseConnectionService {
  private static instance: DatabaseConnectionService;
  private queryHistory: string[] = [];

  private constructor() {
    console.log('DatabaseConnectionService initialized.');
  }

  public static getInstance(): DatabaseConnectionService {
    if (!DatabaseConnectionService.instance) {
      DatabaseConnectionService.instance = new DatabaseConnectionService();
    }
    return DatabaseConnectionService.instance;
  }

  public query(query: string): void {
    this.queryHistory.push(query);
    console.log(`Executing query: ${query}`);
  }

  public getQueryHistory(): string {
    return this.queryHistory.join(', ');
  } 
}

const DataBaseConnection1 = DatabaseConnectionService.getInstance();
const DataBaseConnection2 = DatabaseConnectionService.getInstance();

console.log((DataBaseConnection1 === DataBaseConnection2) ? 'DataBaseConnection1 and DataBaseConnection2 both point to the same DataBaseConnectionService instance.' : '');

DataBaseConnection1.query('DB1-Query1');
DataBaseConnection2.query('DB2-Query1');
DataBaseConnection1.query('DB1-Query2');

console.log('DataBaseConnection1 history:', DataBaseConnection1.getQueryHistory());
console.log('DataBaseConnection2 history:', DataBaseConnection2.getQueryHistory());

// > node singleton.ts

// Output:
// DatabaseConnectionService initialized.
// DataBaseConnection1 and DataBaseConnection2 both point to the same DataBaseConnectionService instance.
// Executing query: DB1-Query1
// Executing query: DB2-Query1
// Executing query: DB1-Query2
// DataBaseConnection1 history: DB1-Query1, DB2-Query1, DB1-Query2
// DataBaseConnection2 history: DB1-Query1, DB2-Query1, DB1-Query2
