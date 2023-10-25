```
<ref *1> Sequelize {
  options: {
    dialect: 'mysql',
    dialectModule: null,
    dialectModulePath: null,
    host: '127.0.0.1',
    protocol: 'tcp',
    define: {},
    query: {},
    sync: {},
    timezone: '+00:00',
    standardConformingStrings: true,
    logging: [Function: log],
    omitNull: false,
    native: false,
    replication: false,
    ssl: undefined,
    pool: {},
    quoteIdentifiers: true,
    hooks: {},
    retry: { max: 5, match: [Array] },
    transactionType: 'DEFERRED',
    isolationLevel: null,
    databaseVersion: 0,
    typeValidation: false,
    benchmark: false,
    minifyAliases: false,
    logQueryParameters: false,
    attributeBehavior: 'throw',
    database: 'test_db2',
    username: 'eunjae',
    password: 'Qualia123!',
    port: '3306'
  },
  config: {
    database: 'test_db2',
    username: 'eunjae',
    password: 'Qualia123!',
    host: '127.0.0.1',
    port: '3306',
    pool: {},
    protocol: 'tcp',
    native: false,
    ssl: undefined,
    replication: false,
    dialectModule: null,
    dialectModulePath: null,
    keepDefaultTimezone: undefined,
    dialectOptions: undefined
  },
  dialect: <ref *2> MysqlDialect {
    sequelize: [Circular *1],
    connectionManager: ConnectionManager {
      sequelize: [Circular *1],
      config: [Object],
      dialect: [Circular *2],
      versionPromise: null,
      dialectName: 'mysql',
      pool: [Pool],
      lib: [Object]
    },
    queryGenerator: MySQLQueryGenerator {
      sequelize: [Circular *1],
      options: [Object],
      dialect: 'mysql',
      _dialect: [Circular *2],
      _quoteIdentifier: [Function: quoteIdentifier],
      quoteIdentifier: [Function (anonymous)],
      OperatorMap: [Object],
      typeValidation: undefined
    },
    queryInterface: MySQLQueryInterface {
      sequelize: [Circular *1],
      queryGenerator: [MySQLQueryGenerator]
    }
  },
  queryInterface: MySQLQueryInterface {
    sequelize: [Circular *1],
    queryGenerator: MySQLQueryGenerator {
      sequelize: [Circular *1],
      options: [Object],
      dialect: 'mysql',
      _dialect: [MysqlDialect],
      _quoteIdentifier: [Function: quoteIdentifier],
      quoteIdentifier: [Function (anonymous)],
      OperatorMap: [Object],
      typeValidation: undefined
    }
  },
  models: {},
  modelManager: ModelManager { models: [], sequelize: [Circular *1] },
  connectionManager: <ref *3> ConnectionManager {
    sequelize: [Circular *1],
    config: {
      database: 'test_db2',
      username: 'eunjae',
      password: 'Qualia123!',
      host: '127.0.0.1',
      port: '3306',
      pool: [Object],
      protocol: 'tcp',
      native: false,
      ssl: undefined,
      replication: false,
      dialectModule: null,
      dialectModulePath: null,
      keepDefaultTimezone: undefined,
      dialectOptions: undefined
    },
    dialect: <ref *2> MysqlDialect {
      sequelize: [Circular *1],
      connectionManager: [Circular *3],
      queryGenerator: [MySQLQueryGenerator],
      queryInterface: [MySQLQueryInterface]
    },
    versionPromise: null,
    dialectName: 'mysql',
    pool: Pool {
      log: false,
      idleTimeoutMillis: 10000,
      acquireTimeoutMillis: 60000,
      reapIntervalMillis: 1000,
      maxUsesPerResource: Infinity,
      _factory: [Object],
      _count: 0,
      _draining: false,
      _pendingAcquires: [],
      _inUseObjects: [],
      _availableObjects: [],
      _removeIdleScheduled: false
    },
    lib: {
      createConnection: [Function (anonymous)],
      connect: [Function (anonymous)],
      Connection: [class Connection extends EventEmitter],
      ConnectionConfig: [class ConnectionConfig],
      createPool: [Function (anonymous)],
      createPoolCluster: [Function (anonymous)],
      createQuery: [Function: createQuery],
      Pool: [class Pool extends EventEmitter],
      PoolCluster: [class PoolCluster extends EventEmitter],
      createServer: [Function (anonymous)],
      PoolConnection: [Function],
      authPlugins: [Object],
      escape: [Function: escape],
      escapeId: [Function: escapeId],
      format: [Function: format],
      raw: [Function: raw],
      createConnectionPromise: [Getter],
      createPoolPromise: [Getter],
      createPoolClusterPromise: [Getter],
      Types: [Getter],
      Charsets: [Getter],
      CharsetToEncoding: [Getter],
      setMaxParserCache: [Function (anonymous)],
      clearParserCache: [Function (anonymous)]
    }
  }
}
```

```
Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): SELECT CONSTRAINT_NAME as constraint_name,CONSTRAINT_NAME as constraintName,CONSTRAINT_SCHEMA as constraintSchema,CONSTRAINT_SCHEMA as constraintCatalog,TABLE_NAME as tableName,TABLE_SCHEMA as tableSchema,TABLE_SCHEMA as tableCatalog,COLUMN_NAME as columnName,REFERENCED_TABLE_SCHEMA as referencedTableSchema,REFERENCED_TABLE_SCHEMA as referencedTableCatalog,REFERENCED_TABLE_NAME as referencedTableName,REFERENCED_COLUMN_NAME as referencedColumnName FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE where TABLE_NAME = 'Users' AND CONSTRAINT_NAME!='PRIMARY' AND CONSTRAINT_SCHEMA='test_db2' AND REFERENCED_TABLE_NAME IS NOT NULL;
Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` VARCHAR(255) NOT NULL , `pw` VARCHAR(255) NOT NULL, `name` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Users` FROM `test_db2`
```

-   sequelize.sync({force: true})
    -   강제 실행 데이터 손실 주의
