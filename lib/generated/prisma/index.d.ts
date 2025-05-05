
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Incident
 * 
 */
export type Incident = $Result.DefaultSelection<Prisma.$IncidentPayload>
/**
 * Model IncidentUpdate
 * 
 */
export type IncidentUpdate = $Result.DefaultSelection<Prisma.$IncidentUpdatePayload>
/**
 * Model IncidentResponse
 * 
 */
export type IncidentResponse = $Result.DefaultSelection<Prisma.$IncidentResponsePayload>
/**
 * Model IncidentAsset
 * 
 */
export type IncidentAsset = $Result.DefaultSelection<Prisma.$IncidentAssetPayload>
/**
 * Model WeatherAlert
 * 
 */
export type WeatherAlert = $Result.DefaultSelection<Prisma.$WeatherAlertPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model StoreWeatherAlert
 * 
 */
export type StoreWeatherAlert = $Result.DefaultSelection<Prisma.$StoreWeatherAlertPayload>
/**
 * Model NewsArticle
 * 
 */
export type NewsArticle = $Result.DefaultSelection<Prisma.$NewsArticlePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model DataCache
 * 
 */
export type DataCache = $Result.DefaultSelection<Prisma.$DataCachePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Incidents
 * const incidents = await prisma.incident.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Incidents
   * const incidents = await prisma.incident.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.incident`: Exposes CRUD operations for the **Incident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incidents
    * const incidents = await prisma.incident.findMany()
    * ```
    */
  get incident(): Prisma.IncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentUpdate`: Exposes CRUD operations for the **IncidentUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentUpdates
    * const incidentUpdates = await prisma.incidentUpdate.findMany()
    * ```
    */
  get incidentUpdate(): Prisma.IncidentUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentResponse`: Exposes CRUD operations for the **IncidentResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentResponses
    * const incidentResponses = await prisma.incidentResponse.findMany()
    * ```
    */
  get incidentResponse(): Prisma.IncidentResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incidentAsset`: Exposes CRUD operations for the **IncidentAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncidentAssets
    * const incidentAssets = await prisma.incidentAsset.findMany()
    * ```
    */
  get incidentAsset(): Prisma.IncidentAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weatherAlert`: Exposes CRUD operations for the **WeatherAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeatherAlerts
    * const weatherAlerts = await prisma.weatherAlert.findMany()
    * ```
    */
  get weatherAlert(): Prisma.WeatherAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeWeatherAlert`: Exposes CRUD operations for the **StoreWeatherAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreWeatherAlerts
    * const storeWeatherAlerts = await prisma.storeWeatherAlert.findMany()
    * ```
    */
  get storeWeatherAlert(): Prisma.StoreWeatherAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsArticle`: Exposes CRUD operations for the **NewsArticle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsArticles
    * const newsArticles = await prisma.newsArticle.findMany()
    * ```
    */
  get newsArticle(): Prisma.NewsArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataCache`: Exposes CRUD operations for the **DataCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataCaches
    * const dataCaches = await prisma.dataCache.findMany()
    * ```
    */
  get dataCache(): Prisma.DataCacheDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Incident: 'Incident',
    IncidentUpdate: 'IncidentUpdate',
    IncidentResponse: 'IncidentResponse',
    IncidentAsset: 'IncidentAsset',
    WeatherAlert: 'WeatherAlert',
    Store: 'Store',
    StoreWeatherAlert: 'StoreWeatherAlert',
    NewsArticle: 'NewsArticle',
    User: 'User',
    ActivityLog: 'ActivityLog',
    DataCache: 'DataCache'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "incident" | "incidentUpdate" | "incidentResponse" | "incidentAsset" | "weatherAlert" | "store" | "storeWeatherAlert" | "newsArticle" | "user" | "activityLog" | "dataCache"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Incident: {
        payload: Prisma.$IncidentPayload<ExtArgs>
        fields: Prisma.IncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findFirst: {
            args: Prisma.IncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          findMany: {
            args: Prisma.IncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          create: {
            args: Prisma.IncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          createMany: {
            args: Prisma.IncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          delete: {
            args: Prisma.IncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          update: {
            args: Prisma.IncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          deleteMany: {
            args: Prisma.IncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentPayload>
          }
          aggregate: {
            args: Prisma.IncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncident>
          }
          groupBy: {
            args: Prisma.IncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentCountAggregateOutputType> | number
          }
        }
      }
      IncidentUpdate: {
        payload: Prisma.$IncidentUpdatePayload<ExtArgs>
        fields: Prisma.IncidentUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          findFirst: {
            args: Prisma.IncidentUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          findMany: {
            args: Prisma.IncidentUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          create: {
            args: Prisma.IncidentUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          createMany: {
            args: Prisma.IncidentUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentUpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          delete: {
            args: Prisma.IncidentUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          update: {
            args: Prisma.IncidentUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          deleteMany: {
            args: Prisma.IncidentUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentUpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>[]
          }
          upsert: {
            args: Prisma.IncidentUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentUpdatePayload>
          }
          aggregate: {
            args: Prisma.IncidentUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentUpdate>
          }
          groupBy: {
            args: Prisma.IncidentUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentUpdateCountAggregateOutputType> | number
          }
        }
      }
      IncidentResponse: {
        payload: Prisma.$IncidentResponsePayload<ExtArgs>
        fields: Prisma.IncidentResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>
          }
          findFirst: {
            args: Prisma.IncidentResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>
          }
          findMany: {
            args: Prisma.IncidentResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>[]
          }
          create: {
            args: Prisma.IncidentResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>
          }
          createMany: {
            args: Prisma.IncidentResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>[]
          }
          delete: {
            args: Prisma.IncidentResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>
          }
          update: {
            args: Prisma.IncidentResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>
          }
          deleteMany: {
            args: Prisma.IncidentResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>[]
          }
          upsert: {
            args: Prisma.IncidentResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentResponsePayload>
          }
          aggregate: {
            args: Prisma.IncidentResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentResponse>
          }
          groupBy: {
            args: Prisma.IncidentResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentResponseCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentResponseCountAggregateOutputType> | number
          }
        }
      }
      IncidentAsset: {
        payload: Prisma.$IncidentAssetPayload<ExtArgs>
        fields: Prisma.IncidentAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncidentAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncidentAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>
          }
          findFirst: {
            args: Prisma.IncidentAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncidentAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>
          }
          findMany: {
            args: Prisma.IncidentAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>[]
          }
          create: {
            args: Prisma.IncidentAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>
          }
          createMany: {
            args: Prisma.IncidentAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncidentAssetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>[]
          }
          delete: {
            args: Prisma.IncidentAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>
          }
          update: {
            args: Prisma.IncidentAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>
          }
          deleteMany: {
            args: Prisma.IncidentAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncidentAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncidentAssetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>[]
          }
          upsert: {
            args: Prisma.IncidentAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncidentAssetPayload>
          }
          aggregate: {
            args: Prisma.IncidentAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncidentAsset>
          }
          groupBy: {
            args: Prisma.IncidentAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncidentAssetGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncidentAssetCountArgs<ExtArgs>
            result: $Utils.Optional<IncidentAssetCountAggregateOutputType> | number
          }
        }
      }
      WeatherAlert: {
        payload: Prisma.$WeatherAlertPayload<ExtArgs>
        fields: Prisma.WeatherAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>
          }
          findFirst: {
            args: Prisma.WeatherAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>
          }
          findMany: {
            args: Prisma.WeatherAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>[]
          }
          create: {
            args: Prisma.WeatherAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>
          }
          createMany: {
            args: Prisma.WeatherAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>[]
          }
          delete: {
            args: Prisma.WeatherAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>
          }
          update: {
            args: Prisma.WeatherAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>
          }
          deleteMany: {
            args: Prisma.WeatherAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>[]
          }
          upsert: {
            args: Prisma.WeatherAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherAlertPayload>
          }
          aggregate: {
            args: Prisma.WeatherAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeatherAlert>
          }
          groupBy: {
            args: Prisma.WeatherAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherAlertCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherAlertCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      StoreWeatherAlert: {
        payload: Prisma.$StoreWeatherAlertPayload<ExtArgs>
        fields: Prisma.StoreWeatherAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreWeatherAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreWeatherAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>
          }
          findFirst: {
            args: Prisma.StoreWeatherAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreWeatherAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>
          }
          findMany: {
            args: Prisma.StoreWeatherAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>[]
          }
          create: {
            args: Prisma.StoreWeatherAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>
          }
          createMany: {
            args: Prisma.StoreWeatherAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StoreWeatherAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>[]
          }
          delete: {
            args: Prisma.StoreWeatherAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>
          }
          update: {
            args: Prisma.StoreWeatherAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>
          }
          deleteMany: {
            args: Prisma.StoreWeatherAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreWeatherAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StoreWeatherAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>[]
          }
          upsert: {
            args: Prisma.StoreWeatherAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreWeatherAlertPayload>
          }
          aggregate: {
            args: Prisma.StoreWeatherAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreWeatherAlert>
          }
          groupBy: {
            args: Prisma.StoreWeatherAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreWeatherAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreWeatherAlertCountArgs<ExtArgs>
            result: $Utils.Optional<StoreWeatherAlertCountAggregateOutputType> | number
          }
        }
      }
      NewsArticle: {
        payload: Prisma.$NewsArticlePayload<ExtArgs>
        fields: Prisma.NewsArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findFirst: {
            args: Prisma.NewsArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          findMany: {
            args: Prisma.NewsArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          create: {
            args: Prisma.NewsArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          createMany: {
            args: Prisma.NewsArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          delete: {
            args: Prisma.NewsArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          update: {
            args: Prisma.NewsArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          deleteMany: {
            args: Prisma.NewsArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>[]
          }
          upsert: {
            args: Prisma.NewsArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsArticlePayload>
          }
          aggregate: {
            args: Prisma.NewsArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsArticle>
          }
          groupBy: {
            args: Prisma.NewsArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsArticleCountArgs<ExtArgs>
            result: $Utils.Optional<NewsArticleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      DataCache: {
        payload: Prisma.$DataCachePayload<ExtArgs>
        fields: Prisma.DataCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>
          }
          findFirst: {
            args: Prisma.DataCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>
          }
          findMany: {
            args: Prisma.DataCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>[]
          }
          create: {
            args: Prisma.DataCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>
          }
          createMany: {
            args: Prisma.DataCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>[]
          }
          delete: {
            args: Prisma.DataCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>
          }
          update: {
            args: Prisma.DataCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>
          }
          deleteMany: {
            args: Prisma.DataCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>[]
          }
          upsert: {
            args: Prisma.DataCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataCachePayload>
          }
          aggregate: {
            args: Prisma.DataCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataCache>
          }
          groupBy: {
            args: Prisma.DataCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataCacheCountArgs<ExtArgs>
            result: $Utils.Optional<DataCacheCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    incident?: IncidentOmit
    incidentUpdate?: IncidentUpdateOmit
    incidentResponse?: IncidentResponseOmit
    incidentAsset?: IncidentAssetOmit
    weatherAlert?: WeatherAlertOmit
    store?: StoreOmit
    storeWeatherAlert?: StoreWeatherAlertOmit
    newsArticle?: NewsArticleOmit
    user?: UserOmit
    activityLog?: ActivityLogOmit
    dataCache?: DataCacheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IncidentCountOutputType
   */

  export type IncidentCountOutputType = {
    incidentUpdates: number
    responses: number
    assets: number
  }

  export type IncidentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidentUpdates?: boolean | IncidentCountOutputTypeCountIncidentUpdatesArgs
    responses?: boolean | IncidentCountOutputTypeCountResponsesArgs
    assets?: boolean | IncidentCountOutputTypeCountAssetsArgs
  }

  // Custom InputTypes
  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentCountOutputType
     */
    select?: IncidentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountIncidentUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentResponseWhereInput
  }

  /**
   * IncidentCountOutputType without action
   */
  export type IncidentCountOutputTypeCountAssetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentAssetWhereInput
  }


  /**
   * Count Type WeatherAlertCountOutputType
   */

  export type WeatherAlertCountOutputType = {
    affectedStores: number
  }

  export type WeatherAlertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affectedStores?: boolean | WeatherAlertCountOutputTypeCountAffectedStoresArgs
  }

  // Custom InputTypes
  /**
   * WeatherAlertCountOutputType without action
   */
  export type WeatherAlertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlertCountOutputType
     */
    select?: WeatherAlertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeatherAlertCountOutputType without action
   */
  export type WeatherAlertCountOutputTypeCountAffectedStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWeatherAlertWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    incidents: number
    weatherAlerts: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | StoreCountOutputTypeCountIncidentsArgs
    weatherAlerts?: boolean | StoreCountOutputTypeCountWeatherAlertsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountIncidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountWeatherAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWeatherAlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Incident
   */

  export type AggregateIncident = {
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  export type IncidentAvgAggregateOutputType = {
    id: number | null
    severity: number | null
    storeId: number | null
  }

  export type IncidentSumAggregateOutputType = {
    id: number | null
    severity: number | null
    storeId: number | null
  }

  export type IncidentMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    severity: number | null
    incidentType: string | null
    status: string | null
    reportedAt: Date | null
    resolvedAt: Date | null
    sourceId: string | null
    sourceSystem: string | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    location: string | null
    severity: number | null
    incidentType: string | null
    status: string | null
    reportedAt: Date | null
    resolvedAt: Date | null
    sourceId: string | null
    sourceSystem: string | null
    storeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    location: number
    coordinates: number
    severity: number
    incidentType: number
    status: number
    reportedAt: number
    resolvedAt: number
    sourceId: number
    sourceSystem: number
    storeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentAvgAggregateInputType = {
    id?: true
    severity?: true
    storeId?: true
  }

  export type IncidentSumAggregateInputType = {
    id?: true
    severity?: true
    storeId?: true
  }

  export type IncidentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    severity?: true
    incidentType?: true
    status?: true
    reportedAt?: true
    resolvedAt?: true
    sourceId?: true
    sourceSystem?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    severity?: true
    incidentType?: true
    status?: true
    reportedAt?: true
    resolvedAt?: true
    sourceId?: true
    sourceSystem?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    location?: true
    coordinates?: true
    severity?: true
    incidentType?: true
    status?: true
    reportedAt?: true
    resolvedAt?: true
    sourceId?: true
    sourceSystem?: true
    storeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incident to aggregate.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incidents
    **/
    _count?: true | IncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentMaxAggregateInputType
  }

  export type GetIncidentAggregateType<T extends IncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncident[P]>
      : GetScalarType<T[P], AggregateIncident[P]>
  }




  export type IncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithAggregationInput | IncidentOrderByWithAggregationInput[]
    by: IncidentScalarFieldEnum[] | IncidentScalarFieldEnum
    having?: IncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentCountAggregateInputType | true
    _avg?: IncidentAvgAggregateInputType
    _sum?: IncidentSumAggregateInputType
    _min?: IncidentMinAggregateInputType
    _max?: IncidentMaxAggregateInputType
  }

  export type IncidentGroupByOutputType = {
    id: number
    title: string
    description: string
    location: string
    coordinates: JsonValue | null
    severity: number
    incidentType: string
    status: string
    reportedAt: Date
    resolvedAt: Date | null
    sourceId: string | null
    sourceSystem: string | null
    storeId: number | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentCountAggregateOutputType | null
    _avg: IncidentAvgAggregateOutputType | null
    _sum: IncidentSumAggregateOutputType | null
    _min: IncidentMinAggregateOutputType | null
    _max: IncidentMaxAggregateOutputType | null
  }

  type GetIncidentGroupByPayload<T extends IncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentGroupByOutputType[P]>
        }
      >
    >


  export type IncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    coordinates?: boolean
    severity?: boolean
    incidentType?: boolean
    status?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    sourceId?: boolean
    sourceSystem?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | Incident$storeArgs<ExtArgs>
    incidentUpdates?: boolean | Incident$incidentUpdatesArgs<ExtArgs>
    responses?: boolean | Incident$responsesArgs<ExtArgs>
    assets?: boolean | Incident$assetsArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    coordinates?: boolean
    severity?: boolean
    incidentType?: boolean
    status?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    sourceId?: boolean
    sourceSystem?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | Incident$storeArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    coordinates?: boolean
    severity?: boolean
    incidentType?: boolean
    status?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    sourceId?: boolean
    sourceSystem?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    store?: boolean | Incident$storeArgs<ExtArgs>
  }, ExtArgs["result"]["incident"]>

  export type IncidentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    coordinates?: boolean
    severity?: boolean
    incidentType?: boolean
    status?: boolean
    reportedAt?: boolean
    resolvedAt?: boolean
    sourceId?: boolean
    sourceSystem?: boolean
    storeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "location" | "coordinates" | "severity" | "incidentType" | "status" | "reportedAt" | "resolvedAt" | "sourceId" | "sourceSystem" | "storeId" | "createdAt" | "updatedAt", ExtArgs["result"]["incident"]>
  export type IncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | Incident$storeArgs<ExtArgs>
    incidentUpdates?: boolean | Incident$incidentUpdatesArgs<ExtArgs>
    responses?: boolean | Incident$responsesArgs<ExtArgs>
    assets?: boolean | Incident$assetsArgs<ExtArgs>
    _count?: boolean | IncidentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | Incident$storeArgs<ExtArgs>
  }
  export type IncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | Incident$storeArgs<ExtArgs>
  }

  export type $IncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Incident"
    objects: {
      store: Prisma.$StorePayload<ExtArgs> | null
      incidentUpdates: Prisma.$IncidentUpdatePayload<ExtArgs>[]
      responses: Prisma.$IncidentResponsePayload<ExtArgs>[]
      assets: Prisma.$IncidentAssetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      location: string
      coordinates: Prisma.JsonValue | null
      severity: number
      incidentType: string
      status: string
      reportedAt: Date
      resolvedAt: Date | null
      sourceId: string | null
      sourceSystem: string | null
      storeId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incident"]>
    composites: {}
  }

  type IncidentGetPayload<S extends boolean | null | undefined | IncidentDefaultArgs> = $Result.GetResult<Prisma.$IncidentPayload, S>

  type IncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentCountAggregateInputType | true
    }

  export interface IncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Incident'], meta: { name: 'Incident' } }
    /**
     * Find zero or one Incident that matches the filter.
     * @param {IncidentFindUniqueArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentFindUniqueArgs>(args: SelectSubset<T, IncidentFindUniqueArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Incident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentFindUniqueOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentFindFirstArgs>(args?: SelectSubset<T, IncidentFindFirstArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Incident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindFirstOrThrowArgs} args - Arguments to find a Incident
     * @example
     * // Get one Incident
     * const incident = await prisma.incident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incidents
     * const incidents = await prisma.incident.findMany()
     * 
     * // Get first 10 Incidents
     * const incidents = await prisma.incident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentWithIdOnly = await prisma.incident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentFindManyArgs>(args?: SelectSubset<T, IncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Incident.
     * @param {IncidentCreateArgs} args - Arguments to create a Incident.
     * @example
     * // Create one Incident
     * const Incident = await prisma.incident.create({
     *   data: {
     *     // ... data to create a Incident
     *   }
     * })
     * 
     */
    create<T extends IncidentCreateArgs>(args: SelectSubset<T, IncidentCreateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incidents.
     * @param {IncidentCreateManyArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentCreateManyArgs>(args?: SelectSubset<T, IncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incidents and returns the data saved in the database.
     * @param {IncidentCreateManyAndReturnArgs} args - Arguments to create many Incidents.
     * @example
     * // Create many Incidents
     * const incident = await prisma.incident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Incident.
     * @param {IncidentDeleteArgs} args - Arguments to delete one Incident.
     * @example
     * // Delete one Incident
     * const Incident = await prisma.incident.delete({
     *   where: {
     *     // ... filter to delete one Incident
     *   }
     * })
     * 
     */
    delete<T extends IncidentDeleteArgs>(args: SelectSubset<T, IncidentDeleteArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Incident.
     * @param {IncidentUpdateArgs} args - Arguments to update one Incident.
     * @example
     * // Update one Incident
     * const incident = await prisma.incident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateArgs>(args: SelectSubset<T, IncidentUpdateArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incidents.
     * @param {IncidentDeleteManyArgs} args - Arguments to filter Incidents to delete.
     * @example
     * // Delete a few Incidents
     * const { count } = await prisma.incident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentDeleteManyArgs>(args?: SelectSubset<T, IncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incidents and returns the data updated in the database.
     * @param {IncidentUpdateManyAndReturnArgs} args - Arguments to update many Incidents.
     * @example
     * // Update many Incidents
     * const incident = await prisma.incident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incidents and only return the `id`
     * const incidentWithIdOnly = await prisma.incident.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Incident.
     * @param {IncidentUpsertArgs} args - Arguments to update or create a Incident.
     * @example
     * // Update or create a Incident
     * const incident = await prisma.incident.upsert({
     *   create: {
     *     // ... data to create a Incident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Incident we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpsertArgs>(args: SelectSubset<T, IncidentUpsertArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentCountArgs} args - Arguments to filter Incidents to count.
     * @example
     * // Count the number of Incidents
     * const count = await prisma.incident.count({
     *   where: {
     *     // ... the filter for the Incidents we want to count
     *   }
     * })
    **/
    count<T extends IncidentCountArgs>(
      args?: Subset<T, IncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAggregateArgs>(args: Subset<T, IncidentAggregateArgs>): Prisma.PrismaPromise<GetIncidentAggregateType<T>>

    /**
     * Group by Incident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentGroupByArgs['orderBy'] }
        : { orderBy?: IncidentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Incident model
   */
  readonly fields: IncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Incident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends Incident$storeArgs<ExtArgs> = {}>(args?: Subset<T, Incident$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    incidentUpdates<T extends Incident$incidentUpdatesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$incidentUpdatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends Incident$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Incident$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assets<T extends Incident$assetsArgs<ExtArgs> = {}>(args?: Subset<T, Incident$assetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Incident model
   */
  interface IncidentFieldRefs {
    readonly id: FieldRef<"Incident", 'Int'>
    readonly title: FieldRef<"Incident", 'String'>
    readonly description: FieldRef<"Incident", 'String'>
    readonly location: FieldRef<"Incident", 'String'>
    readonly coordinates: FieldRef<"Incident", 'Json'>
    readonly severity: FieldRef<"Incident", 'Int'>
    readonly incidentType: FieldRef<"Incident", 'String'>
    readonly status: FieldRef<"Incident", 'String'>
    readonly reportedAt: FieldRef<"Incident", 'DateTime'>
    readonly resolvedAt: FieldRef<"Incident", 'DateTime'>
    readonly sourceId: FieldRef<"Incident", 'String'>
    readonly sourceSystem: FieldRef<"Incident", 'String'>
    readonly storeId: FieldRef<"Incident", 'Int'>
    readonly createdAt: FieldRef<"Incident", 'DateTime'>
    readonly updatedAt: FieldRef<"Incident", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Incident findUnique
   */
  export type IncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findUniqueOrThrow
   */
  export type IncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident findFirst
   */
  export type IncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findFirstOrThrow
   */
  export type IncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incident to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incidents.
     */
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident findMany
   */
  export type IncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter, which Incidents to fetch.
     */
    where?: IncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incidents to fetch.
     */
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incidents.
     */
    cursor?: IncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incidents.
     */
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Incident create
   */
  export type IncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a Incident.
     */
    data: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
  }

  /**
   * Incident createMany
   */
  export type IncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Incident createManyAndReturn
   */
  export type IncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to create many Incidents.
     */
    data: IncidentCreateManyInput | IncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident update
   */
  export type IncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a Incident.
     */
    data: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
    /**
     * Choose, which Incident to update.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident updateMany
   */
  export type IncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
  }

  /**
   * Incident updateManyAndReturn
   */
  export type IncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * The data used to update Incidents.
     */
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyInput>
    /**
     * Filter which Incidents to update
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Incident upsert
   */
  export type IncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the Incident to update in case it exists.
     */
    where: IncidentWhereUniqueInput
    /**
     * In case the Incident found by the `where` argument doesn't exist, create a new Incident with this data.
     */
    create: XOR<IncidentCreateInput, IncidentUncheckedCreateInput>
    /**
     * In case the Incident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateInput, IncidentUncheckedUpdateInput>
  }

  /**
   * Incident delete
   */
  export type IncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    /**
     * Filter which Incident to delete.
     */
    where: IncidentWhereUniqueInput
  }

  /**
   * Incident deleteMany
   */
  export type IncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incidents to delete
     */
    where?: IncidentWhereInput
    /**
     * Limit how many Incidents to delete.
     */
    limit?: number
  }

  /**
   * Incident.store
   */
  export type Incident$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Incident.incidentUpdates
   */
  export type Incident$incidentUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    cursor?: IncidentUpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * Incident.responses
   */
  export type Incident$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    where?: IncidentResponseWhereInput
    orderBy?: IncidentResponseOrderByWithRelationInput | IncidentResponseOrderByWithRelationInput[]
    cursor?: IncidentResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentResponseScalarFieldEnum | IncidentResponseScalarFieldEnum[]
  }

  /**
   * Incident.assets
   */
  export type Incident$assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    where?: IncidentAssetWhereInput
    orderBy?: IncidentAssetOrderByWithRelationInput | IncidentAssetOrderByWithRelationInput[]
    cursor?: IncidentAssetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentAssetScalarFieldEnum | IncidentAssetScalarFieldEnum[]
  }

  /**
   * Incident without action
   */
  export type IncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
  }


  /**
   * Model IncidentUpdate
   */

  export type AggregateIncidentUpdate = {
    _count: IncidentUpdateCountAggregateOutputType | null
    _avg: IncidentUpdateAvgAggregateOutputType | null
    _sum: IncidentUpdateSumAggregateOutputType | null
    _min: IncidentUpdateMinAggregateOutputType | null
    _max: IncidentUpdateMaxAggregateOutputType | null
  }

  export type IncidentUpdateAvgAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentUpdateSumAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentUpdateMinAggregateOutputType = {
    id: number | null
    incidentId: number | null
    message: string | null
    status: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type IncidentUpdateMaxAggregateOutputType = {
    id: number | null
    incidentId: number | null
    message: string | null
    status: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type IncidentUpdateCountAggregateOutputType = {
    id: number
    incidentId: number
    message: number
    status: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type IncidentUpdateAvgAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentUpdateSumAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentUpdateMinAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdBy?: true
    createdAt?: true
  }

  export type IncidentUpdateMaxAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdBy?: true
    createdAt?: true
  }

  export type IncidentUpdateCountAggregateInputType = {
    id?: true
    incidentId?: true
    message?: true
    status?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentUpdate to aggregate.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentUpdates
    **/
    _count?: true | IncidentUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentUpdateMaxAggregateInputType
  }

  export type GetIncidentUpdateAggregateType<T extends IncidentUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentUpdate[P]>
      : GetScalarType<T[P], AggregateIncidentUpdate[P]>
  }




  export type IncidentUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentUpdateWhereInput
    orderBy?: IncidentUpdateOrderByWithAggregationInput | IncidentUpdateOrderByWithAggregationInput[]
    by: IncidentUpdateScalarFieldEnum[] | IncidentUpdateScalarFieldEnum
    having?: IncidentUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentUpdateCountAggregateInputType | true
    _avg?: IncidentUpdateAvgAggregateInputType
    _sum?: IncidentUpdateSumAggregateInputType
    _min?: IncidentUpdateMinAggregateInputType
    _max?: IncidentUpdateMaxAggregateInputType
  }

  export type IncidentUpdateGroupByOutputType = {
    id: number
    incidentId: number
    message: string
    status: string | null
    createdBy: string | null
    createdAt: Date
    _count: IncidentUpdateCountAggregateOutputType | null
    _avg: IncidentUpdateAvgAggregateOutputType | null
    _sum: IncidentUpdateSumAggregateOutputType | null
    _min: IncidentUpdateMinAggregateOutputType | null
    _max: IncidentUpdateMaxAggregateOutputType | null
  }

  type GetIncidentUpdateGroupByPayload<T extends IncidentUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentUpdateGroupByOutputType[P]>
        }
      >
    >


  export type IncidentUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentUpdate"]>

  export type IncidentUpdateSelectScalar = {
    id?: boolean
    incidentId?: boolean
    message?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type IncidentUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "message" | "status" | "createdBy" | "createdAt", ExtArgs["result"]["incidentUpdate"]>
  export type IncidentUpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentUpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentUpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentUpdate"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incidentId: number
      message: string
      status: string | null
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["incidentUpdate"]>
    composites: {}
  }

  type IncidentUpdateGetPayload<S extends boolean | null | undefined | IncidentUpdateDefaultArgs> = $Result.GetResult<Prisma.$IncidentUpdatePayload, S>

  type IncidentUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentUpdateCountAggregateInputType | true
    }

  export interface IncidentUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentUpdate'], meta: { name: 'IncidentUpdate' } }
    /**
     * Find zero or one IncidentUpdate that matches the filter.
     * @param {IncidentUpdateFindUniqueArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentUpdateFindUniqueArgs>(args: SelectSubset<T, IncidentUpdateFindUniqueArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentUpdateFindUniqueOrThrowArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindFirstArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentUpdateFindFirstArgs>(args?: SelectSubset<T, IncidentUpdateFindFirstArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindFirstOrThrowArgs} args - Arguments to find a IncidentUpdate
     * @example
     * // Get one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentUpdates
     * const incidentUpdates = await prisma.incidentUpdate.findMany()
     * 
     * // Get first 10 IncidentUpdates
     * const incidentUpdates = await prisma.incidentUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentUpdateFindManyArgs>(args?: SelectSubset<T, IncidentUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentUpdate.
     * @param {IncidentUpdateCreateArgs} args - Arguments to create a IncidentUpdate.
     * @example
     * // Create one IncidentUpdate
     * const IncidentUpdate = await prisma.incidentUpdate.create({
     *   data: {
     *     // ... data to create a IncidentUpdate
     *   }
     * })
     * 
     */
    create<T extends IncidentUpdateCreateArgs>(args: SelectSubset<T, IncidentUpdateCreateArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentUpdates.
     * @param {IncidentUpdateCreateManyArgs} args - Arguments to create many IncidentUpdates.
     * @example
     * // Create many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentUpdateCreateManyArgs>(args?: SelectSubset<T, IncidentUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentUpdates and returns the data saved in the database.
     * @param {IncidentUpdateCreateManyAndReturnArgs} args - Arguments to create many IncidentUpdates.
     * @example
     * // Create many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentUpdates and only return the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentUpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentUpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentUpdate.
     * @param {IncidentUpdateDeleteArgs} args - Arguments to delete one IncidentUpdate.
     * @example
     * // Delete one IncidentUpdate
     * const IncidentUpdate = await prisma.incidentUpdate.delete({
     *   where: {
     *     // ... filter to delete one IncidentUpdate
     *   }
     * })
     * 
     */
    delete<T extends IncidentUpdateDeleteArgs>(args: SelectSubset<T, IncidentUpdateDeleteArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentUpdate.
     * @param {IncidentUpdateUpdateArgs} args - Arguments to update one IncidentUpdate.
     * @example
     * // Update one IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentUpdateUpdateArgs>(args: SelectSubset<T, IncidentUpdateUpdateArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentUpdates.
     * @param {IncidentUpdateDeleteManyArgs} args - Arguments to filter IncidentUpdates to delete.
     * @example
     * // Delete a few IncidentUpdates
     * const { count } = await prisma.incidentUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentUpdateDeleteManyArgs>(args?: SelectSubset<T, IncidentUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentUpdateUpdateManyArgs>(args: SelectSubset<T, IncidentUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentUpdates and returns the data updated in the database.
     * @param {IncidentUpdateUpdateManyAndReturnArgs} args - Arguments to update many IncidentUpdates.
     * @example
     * // Update many IncidentUpdates
     * const incidentUpdate = await prisma.incidentUpdate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentUpdates and only return the `id`
     * const incidentUpdateWithIdOnly = await prisma.incidentUpdate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentUpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentUpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentUpdate.
     * @param {IncidentUpdateUpsertArgs} args - Arguments to update or create a IncidentUpdate.
     * @example
     * // Update or create a IncidentUpdate
     * const incidentUpdate = await prisma.incidentUpdate.upsert({
     *   create: {
     *     // ... data to create a IncidentUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentUpdate we want to update
     *   }
     * })
     */
    upsert<T extends IncidentUpdateUpsertArgs>(args: SelectSubset<T, IncidentUpdateUpsertArgs<ExtArgs>>): Prisma__IncidentUpdateClient<$Result.GetResult<Prisma.$IncidentUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateCountArgs} args - Arguments to filter IncidentUpdates to count.
     * @example
     * // Count the number of IncidentUpdates
     * const count = await prisma.incidentUpdate.count({
     *   where: {
     *     // ... the filter for the IncidentUpdates we want to count
     *   }
     * })
    **/
    count<T extends IncidentUpdateCountArgs>(
      args?: Subset<T, IncidentUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentUpdateAggregateArgs>(args: Subset<T, IncidentUpdateAggregateArgs>): Prisma.PrismaPromise<GetIncidentUpdateAggregateType<T>>

    /**
     * Group by IncidentUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentUpdateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentUpdateGroupByArgs['orderBy'] }
        : { orderBy?: IncidentUpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentUpdate model
   */
  readonly fields: IncidentUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentUpdate model
   */
  interface IncidentUpdateFieldRefs {
    readonly id: FieldRef<"IncidentUpdate", 'Int'>
    readonly incidentId: FieldRef<"IncidentUpdate", 'Int'>
    readonly message: FieldRef<"IncidentUpdate", 'String'>
    readonly status: FieldRef<"IncidentUpdate", 'String'>
    readonly createdBy: FieldRef<"IncidentUpdate", 'String'>
    readonly createdAt: FieldRef<"IncidentUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentUpdate findUnique
   */
  export type IncidentUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate findUniqueOrThrow
   */
  export type IncidentUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate findFirst
   */
  export type IncidentUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentUpdates.
     */
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate findFirstOrThrow
   */
  export type IncidentUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdate to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentUpdates.
     */
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate findMany
   */
  export type IncidentUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter, which IncidentUpdates to fetch.
     */
    where?: IncidentUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentUpdates to fetch.
     */
    orderBy?: IncidentUpdateOrderByWithRelationInput | IncidentUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentUpdates.
     */
    cursor?: IncidentUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentUpdates.
     */
    skip?: number
    distinct?: IncidentUpdateScalarFieldEnum | IncidentUpdateScalarFieldEnum[]
  }

  /**
   * IncidentUpdate create
   */
  export type IncidentUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentUpdate.
     */
    data: XOR<IncidentUpdateCreateInput, IncidentUpdateUncheckedCreateInput>
  }

  /**
   * IncidentUpdate createMany
   */
  export type IncidentUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentUpdates.
     */
    data: IncidentUpdateCreateManyInput | IncidentUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentUpdate createManyAndReturn
   */
  export type IncidentUpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentUpdates.
     */
    data: IncidentUpdateCreateManyInput | IncidentUpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentUpdate update
   */
  export type IncidentUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentUpdate.
     */
    data: XOR<IncidentUpdateUpdateInput, IncidentUpdateUncheckedUpdateInput>
    /**
     * Choose, which IncidentUpdate to update.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate updateMany
   */
  export type IncidentUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentUpdates.
     */
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyInput>
    /**
     * Filter which IncidentUpdates to update
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to update.
     */
    limit?: number
  }

  /**
   * IncidentUpdate updateManyAndReturn
   */
  export type IncidentUpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * The data used to update IncidentUpdates.
     */
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyInput>
    /**
     * Filter which IncidentUpdates to update
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentUpdate upsert
   */
  export type IncidentUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentUpdate to update in case it exists.
     */
    where: IncidentUpdateWhereUniqueInput
    /**
     * In case the IncidentUpdate found by the `where` argument doesn't exist, create a new IncidentUpdate with this data.
     */
    create: XOR<IncidentUpdateCreateInput, IncidentUpdateUncheckedCreateInput>
    /**
     * In case the IncidentUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentUpdateUpdateInput, IncidentUpdateUncheckedUpdateInput>
  }

  /**
   * IncidentUpdate delete
   */
  export type IncidentUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
    /**
     * Filter which IncidentUpdate to delete.
     */
    where: IncidentUpdateWhereUniqueInput
  }

  /**
   * IncidentUpdate deleteMany
   */
  export type IncidentUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentUpdates to delete
     */
    where?: IncidentUpdateWhereInput
    /**
     * Limit how many IncidentUpdates to delete.
     */
    limit?: number
  }

  /**
   * IncidentUpdate without action
   */
  export type IncidentUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentUpdate
     */
    select?: IncidentUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentUpdate
     */
    omit?: IncidentUpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentUpdateInclude<ExtArgs> | null
  }


  /**
   * Model IncidentResponse
   */

  export type AggregateIncidentResponse = {
    _count: IncidentResponseCountAggregateOutputType | null
    _avg: IncidentResponseAvgAggregateOutputType | null
    _sum: IncidentResponseSumAggregateOutputType | null
    _min: IncidentResponseMinAggregateOutputType | null
    _max: IncidentResponseMaxAggregateOutputType | null
  }

  export type IncidentResponseAvgAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentResponseSumAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentResponseMinAggregateOutputType = {
    id: number | null
    incidentId: number | null
    responseType: string | null
    responder: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentResponseMaxAggregateOutputType = {
    id: number | null
    incidentId: number | null
    responseType: string | null
    responder: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IncidentResponseCountAggregateOutputType = {
    id: number
    incidentId: number
    responseType: number
    responder: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IncidentResponseAvgAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentResponseSumAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentResponseMinAggregateInputType = {
    id?: true
    incidentId?: true
    responseType?: true
    responder?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentResponseMaxAggregateInputType = {
    id?: true
    incidentId?: true
    responseType?: true
    responder?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IncidentResponseCountAggregateInputType = {
    id?: true
    incidentId?: true
    responseType?: true
    responder?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IncidentResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentResponse to aggregate.
     */
    where?: IncidentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentResponses to fetch.
     */
    orderBy?: IncidentResponseOrderByWithRelationInput | IncidentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentResponses
    **/
    _count?: true | IncidentResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentResponseMaxAggregateInputType
  }

  export type GetIncidentResponseAggregateType<T extends IncidentResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentResponse[P]>
      : GetScalarType<T[P], AggregateIncidentResponse[P]>
  }




  export type IncidentResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentResponseWhereInput
    orderBy?: IncidentResponseOrderByWithAggregationInput | IncidentResponseOrderByWithAggregationInput[]
    by: IncidentResponseScalarFieldEnum[] | IncidentResponseScalarFieldEnum
    having?: IncidentResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentResponseCountAggregateInputType | true
    _avg?: IncidentResponseAvgAggregateInputType
    _sum?: IncidentResponseSumAggregateInputType
    _min?: IncidentResponseMinAggregateInputType
    _max?: IncidentResponseMaxAggregateInputType
  }

  export type IncidentResponseGroupByOutputType = {
    id: number
    incidentId: number
    responseType: string
    responder: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: IncidentResponseCountAggregateOutputType | null
    _avg: IncidentResponseAvgAggregateOutputType | null
    _sum: IncidentResponseSumAggregateOutputType | null
    _min: IncidentResponseMinAggregateOutputType | null
    _max: IncidentResponseMaxAggregateOutputType | null
  }

  type GetIncidentResponseGroupByPayload<T extends IncidentResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentResponseGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentResponseGroupByOutputType[P]>
        }
      >
    >


  export type IncidentResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    responseType?: boolean
    responder?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentResponse"]>

  export type IncidentResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    responseType?: boolean
    responder?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentResponse"]>

  export type IncidentResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    responseType?: boolean
    responder?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentResponse"]>

  export type IncidentResponseSelectScalar = {
    id?: boolean
    incidentId?: boolean
    responseType?: boolean
    responder?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IncidentResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "responseType" | "responder" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["incidentResponse"]>
  export type IncidentResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentResponse"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incidentId: number
      responseType: string
      responder: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["incidentResponse"]>
    composites: {}
  }

  type IncidentResponseGetPayload<S extends boolean | null | undefined | IncidentResponseDefaultArgs> = $Result.GetResult<Prisma.$IncidentResponsePayload, S>

  type IncidentResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentResponseCountAggregateInputType | true
    }

  export interface IncidentResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentResponse'], meta: { name: 'IncidentResponse' } }
    /**
     * Find zero or one IncidentResponse that matches the filter.
     * @param {IncidentResponseFindUniqueArgs} args - Arguments to find a IncidentResponse
     * @example
     * // Get one IncidentResponse
     * const incidentResponse = await prisma.incidentResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentResponseFindUniqueArgs>(args: SelectSubset<T, IncidentResponseFindUniqueArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentResponseFindUniqueOrThrowArgs} args - Arguments to find a IncidentResponse
     * @example
     * // Get one IncidentResponse
     * const incidentResponse = await prisma.incidentResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseFindFirstArgs} args - Arguments to find a IncidentResponse
     * @example
     * // Get one IncidentResponse
     * const incidentResponse = await prisma.incidentResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentResponseFindFirstArgs>(args?: SelectSubset<T, IncidentResponseFindFirstArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseFindFirstOrThrowArgs} args - Arguments to find a IncidentResponse
     * @example
     * // Get one IncidentResponse
     * const incidentResponse = await prisma.incidentResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentResponses
     * const incidentResponses = await prisma.incidentResponse.findMany()
     * 
     * // Get first 10 IncidentResponses
     * const incidentResponses = await prisma.incidentResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentResponseWithIdOnly = await prisma.incidentResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentResponseFindManyArgs>(args?: SelectSubset<T, IncidentResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentResponse.
     * @param {IncidentResponseCreateArgs} args - Arguments to create a IncidentResponse.
     * @example
     * // Create one IncidentResponse
     * const IncidentResponse = await prisma.incidentResponse.create({
     *   data: {
     *     // ... data to create a IncidentResponse
     *   }
     * })
     * 
     */
    create<T extends IncidentResponseCreateArgs>(args: SelectSubset<T, IncidentResponseCreateArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentResponses.
     * @param {IncidentResponseCreateManyArgs} args - Arguments to create many IncidentResponses.
     * @example
     * // Create many IncidentResponses
     * const incidentResponse = await prisma.incidentResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentResponseCreateManyArgs>(args?: SelectSubset<T, IncidentResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentResponses and returns the data saved in the database.
     * @param {IncidentResponseCreateManyAndReturnArgs} args - Arguments to create many IncidentResponses.
     * @example
     * // Create many IncidentResponses
     * const incidentResponse = await prisma.incidentResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentResponses and only return the `id`
     * const incidentResponseWithIdOnly = await prisma.incidentResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentResponse.
     * @param {IncidentResponseDeleteArgs} args - Arguments to delete one IncidentResponse.
     * @example
     * // Delete one IncidentResponse
     * const IncidentResponse = await prisma.incidentResponse.delete({
     *   where: {
     *     // ... filter to delete one IncidentResponse
     *   }
     * })
     * 
     */
    delete<T extends IncidentResponseDeleteArgs>(args: SelectSubset<T, IncidentResponseDeleteArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentResponse.
     * @param {IncidentResponseUpdateArgs} args - Arguments to update one IncidentResponse.
     * @example
     * // Update one IncidentResponse
     * const incidentResponse = await prisma.incidentResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentResponseUpdateArgs>(args: SelectSubset<T, IncidentResponseUpdateArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentResponses.
     * @param {IncidentResponseDeleteManyArgs} args - Arguments to filter IncidentResponses to delete.
     * @example
     * // Delete a few IncidentResponses
     * const { count } = await prisma.incidentResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentResponseDeleteManyArgs>(args?: SelectSubset<T, IncidentResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentResponses
     * const incidentResponse = await prisma.incidentResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentResponseUpdateManyArgs>(args: SelectSubset<T, IncidentResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentResponses and returns the data updated in the database.
     * @param {IncidentResponseUpdateManyAndReturnArgs} args - Arguments to update many IncidentResponses.
     * @example
     * // Update many IncidentResponses
     * const incidentResponse = await prisma.incidentResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentResponses and only return the `id`
     * const incidentResponseWithIdOnly = await prisma.incidentResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentResponse.
     * @param {IncidentResponseUpsertArgs} args - Arguments to update or create a IncidentResponse.
     * @example
     * // Update or create a IncidentResponse
     * const incidentResponse = await prisma.incidentResponse.upsert({
     *   create: {
     *     // ... data to create a IncidentResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentResponse we want to update
     *   }
     * })
     */
    upsert<T extends IncidentResponseUpsertArgs>(args: SelectSubset<T, IncidentResponseUpsertArgs<ExtArgs>>): Prisma__IncidentResponseClient<$Result.GetResult<Prisma.$IncidentResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseCountArgs} args - Arguments to filter IncidentResponses to count.
     * @example
     * // Count the number of IncidentResponses
     * const count = await prisma.incidentResponse.count({
     *   where: {
     *     // ... the filter for the IncidentResponses we want to count
     *   }
     * })
    **/
    count<T extends IncidentResponseCountArgs>(
      args?: Subset<T, IncidentResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentResponseAggregateArgs>(args: Subset<T, IncidentResponseAggregateArgs>): Prisma.PrismaPromise<GetIncidentResponseAggregateType<T>>

    /**
     * Group by IncidentResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentResponseGroupByArgs['orderBy'] }
        : { orderBy?: IncidentResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentResponse model
   */
  readonly fields: IncidentResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentResponse model
   */
  interface IncidentResponseFieldRefs {
    readonly id: FieldRef<"IncidentResponse", 'Int'>
    readonly incidentId: FieldRef<"IncidentResponse", 'Int'>
    readonly responseType: FieldRef<"IncidentResponse", 'String'>
    readonly responder: FieldRef<"IncidentResponse", 'String'>
    readonly notes: FieldRef<"IncidentResponse", 'String'>
    readonly createdAt: FieldRef<"IncidentResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"IncidentResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentResponse findUnique
   */
  export type IncidentResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * Filter, which IncidentResponse to fetch.
     */
    where: IncidentResponseWhereUniqueInput
  }

  /**
   * IncidentResponse findUniqueOrThrow
   */
  export type IncidentResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * Filter, which IncidentResponse to fetch.
     */
    where: IncidentResponseWhereUniqueInput
  }

  /**
   * IncidentResponse findFirst
   */
  export type IncidentResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * Filter, which IncidentResponse to fetch.
     */
    where?: IncidentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentResponses to fetch.
     */
    orderBy?: IncidentResponseOrderByWithRelationInput | IncidentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentResponses.
     */
    cursor?: IncidentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentResponses.
     */
    distinct?: IncidentResponseScalarFieldEnum | IncidentResponseScalarFieldEnum[]
  }

  /**
   * IncidentResponse findFirstOrThrow
   */
  export type IncidentResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * Filter, which IncidentResponse to fetch.
     */
    where?: IncidentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentResponses to fetch.
     */
    orderBy?: IncidentResponseOrderByWithRelationInput | IncidentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentResponses.
     */
    cursor?: IncidentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentResponses.
     */
    distinct?: IncidentResponseScalarFieldEnum | IncidentResponseScalarFieldEnum[]
  }

  /**
   * IncidentResponse findMany
   */
  export type IncidentResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * Filter, which IncidentResponses to fetch.
     */
    where?: IncidentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentResponses to fetch.
     */
    orderBy?: IncidentResponseOrderByWithRelationInput | IncidentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentResponses.
     */
    cursor?: IncidentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentResponses.
     */
    skip?: number
    distinct?: IncidentResponseScalarFieldEnum | IncidentResponseScalarFieldEnum[]
  }

  /**
   * IncidentResponse create
   */
  export type IncidentResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentResponse.
     */
    data: XOR<IncidentResponseCreateInput, IncidentResponseUncheckedCreateInput>
  }

  /**
   * IncidentResponse createMany
   */
  export type IncidentResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentResponses.
     */
    data: IncidentResponseCreateManyInput | IncidentResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentResponse createManyAndReturn
   */
  export type IncidentResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentResponses.
     */
    data: IncidentResponseCreateManyInput | IncidentResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentResponse update
   */
  export type IncidentResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentResponse.
     */
    data: XOR<IncidentResponseUpdateInput, IncidentResponseUncheckedUpdateInput>
    /**
     * Choose, which IncidentResponse to update.
     */
    where: IncidentResponseWhereUniqueInput
  }

  /**
   * IncidentResponse updateMany
   */
  export type IncidentResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentResponses.
     */
    data: XOR<IncidentResponseUpdateManyMutationInput, IncidentResponseUncheckedUpdateManyInput>
    /**
     * Filter which IncidentResponses to update
     */
    where?: IncidentResponseWhereInput
    /**
     * Limit how many IncidentResponses to update.
     */
    limit?: number
  }

  /**
   * IncidentResponse updateManyAndReturn
   */
  export type IncidentResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * The data used to update IncidentResponses.
     */
    data: XOR<IncidentResponseUpdateManyMutationInput, IncidentResponseUncheckedUpdateManyInput>
    /**
     * Filter which IncidentResponses to update
     */
    where?: IncidentResponseWhereInput
    /**
     * Limit how many IncidentResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentResponse upsert
   */
  export type IncidentResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentResponse to update in case it exists.
     */
    where: IncidentResponseWhereUniqueInput
    /**
     * In case the IncidentResponse found by the `where` argument doesn't exist, create a new IncidentResponse with this data.
     */
    create: XOR<IncidentResponseCreateInput, IncidentResponseUncheckedCreateInput>
    /**
     * In case the IncidentResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentResponseUpdateInput, IncidentResponseUncheckedUpdateInput>
  }

  /**
   * IncidentResponse delete
   */
  export type IncidentResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
    /**
     * Filter which IncidentResponse to delete.
     */
    where: IncidentResponseWhereUniqueInput
  }

  /**
   * IncidentResponse deleteMany
   */
  export type IncidentResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentResponses to delete
     */
    where?: IncidentResponseWhereInput
    /**
     * Limit how many IncidentResponses to delete.
     */
    limit?: number
  }

  /**
   * IncidentResponse without action
   */
  export type IncidentResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentResponse
     */
    select?: IncidentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentResponse
     */
    omit?: IncidentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentResponseInclude<ExtArgs> | null
  }


  /**
   * Model IncidentAsset
   */

  export type AggregateIncidentAsset = {
    _count: IncidentAssetCountAggregateOutputType | null
    _avg: IncidentAssetAvgAggregateOutputType | null
    _sum: IncidentAssetSumAggregateOutputType | null
    _min: IncidentAssetMinAggregateOutputType | null
    _max: IncidentAssetMaxAggregateOutputType | null
  }

  export type IncidentAssetAvgAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentAssetSumAggregateOutputType = {
    id: number | null
    incidentId: number | null
  }

  export type IncidentAssetMinAggregateOutputType = {
    id: number | null
    incidentId: number | null
    assetType: string | null
    url: string | null
    fileName: string | null
    description: string | null
    createdAt: Date | null
  }

  export type IncidentAssetMaxAggregateOutputType = {
    id: number | null
    incidentId: number | null
    assetType: string | null
    url: string | null
    fileName: string | null
    description: string | null
    createdAt: Date | null
  }

  export type IncidentAssetCountAggregateOutputType = {
    id: number
    incidentId: number
    assetType: number
    url: number
    fileName: number
    description: number
    createdAt: number
    _all: number
  }


  export type IncidentAssetAvgAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentAssetSumAggregateInputType = {
    id?: true
    incidentId?: true
  }

  export type IncidentAssetMinAggregateInputType = {
    id?: true
    incidentId?: true
    assetType?: true
    url?: true
    fileName?: true
    description?: true
    createdAt?: true
  }

  export type IncidentAssetMaxAggregateInputType = {
    id?: true
    incidentId?: true
    assetType?: true
    url?: true
    fileName?: true
    description?: true
    createdAt?: true
  }

  export type IncidentAssetCountAggregateInputType = {
    id?: true
    incidentId?: true
    assetType?: true
    url?: true
    fileName?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type IncidentAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentAsset to aggregate.
     */
    where?: IncidentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentAssets to fetch.
     */
    orderBy?: IncidentAssetOrderByWithRelationInput | IncidentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncidentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncidentAssets
    **/
    _count?: true | IncidentAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncidentAssetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncidentAssetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncidentAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncidentAssetMaxAggregateInputType
  }

  export type GetIncidentAssetAggregateType<T extends IncidentAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateIncidentAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncidentAsset[P]>
      : GetScalarType<T[P], AggregateIncidentAsset[P]>
  }




  export type IncidentAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncidentAssetWhereInput
    orderBy?: IncidentAssetOrderByWithAggregationInput | IncidentAssetOrderByWithAggregationInput[]
    by: IncidentAssetScalarFieldEnum[] | IncidentAssetScalarFieldEnum
    having?: IncidentAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncidentAssetCountAggregateInputType | true
    _avg?: IncidentAssetAvgAggregateInputType
    _sum?: IncidentAssetSumAggregateInputType
    _min?: IncidentAssetMinAggregateInputType
    _max?: IncidentAssetMaxAggregateInputType
  }

  export type IncidentAssetGroupByOutputType = {
    id: number
    incidentId: number
    assetType: string
    url: string
    fileName: string | null
    description: string | null
    createdAt: Date
    _count: IncidentAssetCountAggregateOutputType | null
    _avg: IncidentAssetAvgAggregateOutputType | null
    _sum: IncidentAssetSumAggregateOutputType | null
    _min: IncidentAssetMinAggregateOutputType | null
    _max: IncidentAssetMaxAggregateOutputType | null
  }

  type GetIncidentAssetGroupByPayload<T extends IncidentAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncidentAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncidentAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncidentAssetGroupByOutputType[P]>
            : GetScalarType<T[P], IncidentAssetGroupByOutputType[P]>
        }
      >
    >


  export type IncidentAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    assetType?: boolean
    url?: boolean
    fileName?: boolean
    description?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentAsset"]>

  export type IncidentAssetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    assetType?: boolean
    url?: boolean
    fileName?: boolean
    description?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentAsset"]>

  export type IncidentAssetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    incidentId?: boolean
    assetType?: boolean
    url?: boolean
    fileName?: boolean
    description?: boolean
    createdAt?: boolean
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incidentAsset"]>

  export type IncidentAssetSelectScalar = {
    id?: boolean
    incidentId?: boolean
    assetType?: boolean
    url?: boolean
    fileName?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type IncidentAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "incidentId" | "assetType" | "url" | "fileName" | "description" | "createdAt", ExtArgs["result"]["incidentAsset"]>
  export type IncidentAssetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentAssetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }
  export type IncidentAssetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incident?: boolean | IncidentDefaultArgs<ExtArgs>
  }

  export type $IncidentAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncidentAsset"
    objects: {
      incident: Prisma.$IncidentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      incidentId: number
      assetType: string
      url: string
      fileName: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["incidentAsset"]>
    composites: {}
  }

  type IncidentAssetGetPayload<S extends boolean | null | undefined | IncidentAssetDefaultArgs> = $Result.GetResult<Prisma.$IncidentAssetPayload, S>

  type IncidentAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncidentAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncidentAssetCountAggregateInputType | true
    }

  export interface IncidentAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncidentAsset'], meta: { name: 'IncidentAsset' } }
    /**
     * Find zero or one IncidentAsset that matches the filter.
     * @param {IncidentAssetFindUniqueArgs} args - Arguments to find a IncidentAsset
     * @example
     * // Get one IncidentAsset
     * const incidentAsset = await prisma.incidentAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncidentAssetFindUniqueArgs>(args: SelectSubset<T, IncidentAssetFindUniqueArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncidentAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncidentAssetFindUniqueOrThrowArgs} args - Arguments to find a IncidentAsset
     * @example
     * // Get one IncidentAsset
     * const incidentAsset = await prisma.incidentAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncidentAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, IncidentAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetFindFirstArgs} args - Arguments to find a IncidentAsset
     * @example
     * // Get one IncidentAsset
     * const incidentAsset = await prisma.incidentAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncidentAssetFindFirstArgs>(args?: SelectSubset<T, IncidentAssetFindFirstArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncidentAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetFindFirstOrThrowArgs} args - Arguments to find a IncidentAsset
     * @example
     * // Get one IncidentAsset
     * const incidentAsset = await prisma.incidentAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncidentAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, IncidentAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncidentAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncidentAssets
     * const incidentAssets = await prisma.incidentAsset.findMany()
     * 
     * // Get first 10 IncidentAssets
     * const incidentAssets = await prisma.incidentAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incidentAssetWithIdOnly = await prisma.incidentAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncidentAssetFindManyArgs>(args?: SelectSubset<T, IncidentAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncidentAsset.
     * @param {IncidentAssetCreateArgs} args - Arguments to create a IncidentAsset.
     * @example
     * // Create one IncidentAsset
     * const IncidentAsset = await prisma.incidentAsset.create({
     *   data: {
     *     // ... data to create a IncidentAsset
     *   }
     * })
     * 
     */
    create<T extends IncidentAssetCreateArgs>(args: SelectSubset<T, IncidentAssetCreateArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncidentAssets.
     * @param {IncidentAssetCreateManyArgs} args - Arguments to create many IncidentAssets.
     * @example
     * // Create many IncidentAssets
     * const incidentAsset = await prisma.incidentAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncidentAssetCreateManyArgs>(args?: SelectSubset<T, IncidentAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncidentAssets and returns the data saved in the database.
     * @param {IncidentAssetCreateManyAndReturnArgs} args - Arguments to create many IncidentAssets.
     * @example
     * // Create many IncidentAssets
     * const incidentAsset = await prisma.incidentAsset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncidentAssets and only return the `id`
     * const incidentAssetWithIdOnly = await prisma.incidentAsset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncidentAssetCreateManyAndReturnArgs>(args?: SelectSubset<T, IncidentAssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncidentAsset.
     * @param {IncidentAssetDeleteArgs} args - Arguments to delete one IncidentAsset.
     * @example
     * // Delete one IncidentAsset
     * const IncidentAsset = await prisma.incidentAsset.delete({
     *   where: {
     *     // ... filter to delete one IncidentAsset
     *   }
     * })
     * 
     */
    delete<T extends IncidentAssetDeleteArgs>(args: SelectSubset<T, IncidentAssetDeleteArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncidentAsset.
     * @param {IncidentAssetUpdateArgs} args - Arguments to update one IncidentAsset.
     * @example
     * // Update one IncidentAsset
     * const incidentAsset = await prisma.incidentAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncidentAssetUpdateArgs>(args: SelectSubset<T, IncidentAssetUpdateArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncidentAssets.
     * @param {IncidentAssetDeleteManyArgs} args - Arguments to filter IncidentAssets to delete.
     * @example
     * // Delete a few IncidentAssets
     * const { count } = await prisma.incidentAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncidentAssetDeleteManyArgs>(args?: SelectSubset<T, IncidentAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncidentAssets
     * const incidentAsset = await prisma.incidentAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncidentAssetUpdateManyArgs>(args: SelectSubset<T, IncidentAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncidentAssets and returns the data updated in the database.
     * @param {IncidentAssetUpdateManyAndReturnArgs} args - Arguments to update many IncidentAssets.
     * @example
     * // Update many IncidentAssets
     * const incidentAsset = await prisma.incidentAsset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncidentAssets and only return the `id`
     * const incidentAssetWithIdOnly = await prisma.incidentAsset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncidentAssetUpdateManyAndReturnArgs>(args: SelectSubset<T, IncidentAssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncidentAsset.
     * @param {IncidentAssetUpsertArgs} args - Arguments to update or create a IncidentAsset.
     * @example
     * // Update or create a IncidentAsset
     * const incidentAsset = await prisma.incidentAsset.upsert({
     *   create: {
     *     // ... data to create a IncidentAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncidentAsset we want to update
     *   }
     * })
     */
    upsert<T extends IncidentAssetUpsertArgs>(args: SelectSubset<T, IncidentAssetUpsertArgs<ExtArgs>>): Prisma__IncidentAssetClient<$Result.GetResult<Prisma.$IncidentAssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncidentAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetCountArgs} args - Arguments to filter IncidentAssets to count.
     * @example
     * // Count the number of IncidentAssets
     * const count = await prisma.incidentAsset.count({
     *   where: {
     *     // ... the filter for the IncidentAssets we want to count
     *   }
     * })
    **/
    count<T extends IncidentAssetCountArgs>(
      args?: Subset<T, IncidentAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncidentAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncidentAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncidentAssetAggregateArgs>(args: Subset<T, IncidentAssetAggregateArgs>): Prisma.PrismaPromise<GetIncidentAssetAggregateType<T>>

    /**
     * Group by IncidentAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncidentAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncidentAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncidentAssetGroupByArgs['orderBy'] }
        : { orderBy?: IncidentAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncidentAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncidentAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncidentAsset model
   */
  readonly fields: IncidentAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncidentAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncidentAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incident<T extends IncidentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IncidentDefaultArgs<ExtArgs>>): Prisma__IncidentClient<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncidentAsset model
   */
  interface IncidentAssetFieldRefs {
    readonly id: FieldRef<"IncidentAsset", 'Int'>
    readonly incidentId: FieldRef<"IncidentAsset", 'Int'>
    readonly assetType: FieldRef<"IncidentAsset", 'String'>
    readonly url: FieldRef<"IncidentAsset", 'String'>
    readonly fileName: FieldRef<"IncidentAsset", 'String'>
    readonly description: FieldRef<"IncidentAsset", 'String'>
    readonly createdAt: FieldRef<"IncidentAsset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncidentAsset findUnique
   */
  export type IncidentAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * Filter, which IncidentAsset to fetch.
     */
    where: IncidentAssetWhereUniqueInput
  }

  /**
   * IncidentAsset findUniqueOrThrow
   */
  export type IncidentAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * Filter, which IncidentAsset to fetch.
     */
    where: IncidentAssetWhereUniqueInput
  }

  /**
   * IncidentAsset findFirst
   */
  export type IncidentAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * Filter, which IncidentAsset to fetch.
     */
    where?: IncidentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentAssets to fetch.
     */
    orderBy?: IncidentAssetOrderByWithRelationInput | IncidentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentAssets.
     */
    cursor?: IncidentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentAssets.
     */
    distinct?: IncidentAssetScalarFieldEnum | IncidentAssetScalarFieldEnum[]
  }

  /**
   * IncidentAsset findFirstOrThrow
   */
  export type IncidentAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * Filter, which IncidentAsset to fetch.
     */
    where?: IncidentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentAssets to fetch.
     */
    orderBy?: IncidentAssetOrderByWithRelationInput | IncidentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncidentAssets.
     */
    cursor?: IncidentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncidentAssets.
     */
    distinct?: IncidentAssetScalarFieldEnum | IncidentAssetScalarFieldEnum[]
  }

  /**
   * IncidentAsset findMany
   */
  export type IncidentAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * Filter, which IncidentAssets to fetch.
     */
    where?: IncidentAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncidentAssets to fetch.
     */
    orderBy?: IncidentAssetOrderByWithRelationInput | IncidentAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncidentAssets.
     */
    cursor?: IncidentAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncidentAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncidentAssets.
     */
    skip?: number
    distinct?: IncidentAssetScalarFieldEnum | IncidentAssetScalarFieldEnum[]
  }

  /**
   * IncidentAsset create
   */
  export type IncidentAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * The data needed to create a IncidentAsset.
     */
    data: XOR<IncidentAssetCreateInput, IncidentAssetUncheckedCreateInput>
  }

  /**
   * IncidentAsset createMany
   */
  export type IncidentAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncidentAssets.
     */
    data: IncidentAssetCreateManyInput | IncidentAssetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncidentAsset createManyAndReturn
   */
  export type IncidentAssetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * The data used to create many IncidentAssets.
     */
    data: IncidentAssetCreateManyInput | IncidentAssetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentAsset update
   */
  export type IncidentAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * The data needed to update a IncidentAsset.
     */
    data: XOR<IncidentAssetUpdateInput, IncidentAssetUncheckedUpdateInput>
    /**
     * Choose, which IncidentAsset to update.
     */
    where: IncidentAssetWhereUniqueInput
  }

  /**
   * IncidentAsset updateMany
   */
  export type IncidentAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncidentAssets.
     */
    data: XOR<IncidentAssetUpdateManyMutationInput, IncidentAssetUncheckedUpdateManyInput>
    /**
     * Filter which IncidentAssets to update
     */
    where?: IncidentAssetWhereInput
    /**
     * Limit how many IncidentAssets to update.
     */
    limit?: number
  }

  /**
   * IncidentAsset updateManyAndReturn
   */
  export type IncidentAssetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * The data used to update IncidentAssets.
     */
    data: XOR<IncidentAssetUpdateManyMutationInput, IncidentAssetUncheckedUpdateManyInput>
    /**
     * Filter which IncidentAssets to update
     */
    where?: IncidentAssetWhereInput
    /**
     * Limit how many IncidentAssets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncidentAsset upsert
   */
  export type IncidentAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * The filter to search for the IncidentAsset to update in case it exists.
     */
    where: IncidentAssetWhereUniqueInput
    /**
     * In case the IncidentAsset found by the `where` argument doesn't exist, create a new IncidentAsset with this data.
     */
    create: XOR<IncidentAssetCreateInput, IncidentAssetUncheckedCreateInput>
    /**
     * In case the IncidentAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncidentAssetUpdateInput, IncidentAssetUncheckedUpdateInput>
  }

  /**
   * IncidentAsset delete
   */
  export type IncidentAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
    /**
     * Filter which IncidentAsset to delete.
     */
    where: IncidentAssetWhereUniqueInput
  }

  /**
   * IncidentAsset deleteMany
   */
  export type IncidentAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncidentAssets to delete
     */
    where?: IncidentAssetWhereInput
    /**
     * Limit how many IncidentAssets to delete.
     */
    limit?: number
  }

  /**
   * IncidentAsset without action
   */
  export type IncidentAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncidentAsset
     */
    select?: IncidentAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncidentAsset
     */
    omit?: IncidentAssetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentAssetInclude<ExtArgs> | null
  }


  /**
   * Model WeatherAlert
   */

  export type AggregateWeatherAlert = {
    _count: WeatherAlertCountAggregateOutputType | null
    _avg: WeatherAlertAvgAggregateOutputType | null
    _sum: WeatherAlertSumAggregateOutputType | null
    _min: WeatherAlertMinAggregateOutputType | null
    _max: WeatherAlertMaxAggregateOutputType | null
  }

  export type WeatherAlertAvgAggregateOutputType = {
    id: number | null
  }

  export type WeatherAlertSumAggregateOutputType = {
    id: number | null
  }

  export type WeatherAlertMinAggregateOutputType = {
    id: number | null
    alertType: string | null
    title: string | null
    description: string | null
    severity: string | null
    area: string | null
    startTime: Date | null
    endTime: Date | null
    source: string | null
    sourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeatherAlertMaxAggregateOutputType = {
    id: number | null
    alertType: string | null
    title: string | null
    description: string | null
    severity: string | null
    area: string | null
    startTime: Date | null
    endTime: Date | null
    source: string | null
    sourceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeatherAlertCountAggregateOutputType = {
    id: number
    alertType: number
    title: number
    description: number
    severity: number
    area: number
    coordinates: number
    startTime: number
    endTime: number
    source: number
    sourceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeatherAlertAvgAggregateInputType = {
    id?: true
  }

  export type WeatherAlertSumAggregateInputType = {
    id?: true
  }

  export type WeatherAlertMinAggregateInputType = {
    id?: true
    alertType?: true
    title?: true
    description?: true
    severity?: true
    area?: true
    startTime?: true
    endTime?: true
    source?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeatherAlertMaxAggregateInputType = {
    id?: true
    alertType?: true
    title?: true
    description?: true
    severity?: true
    area?: true
    startTime?: true
    endTime?: true
    source?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeatherAlertCountAggregateInputType = {
    id?: true
    alertType?: true
    title?: true
    description?: true
    severity?: true
    area?: true
    coordinates?: true
    startTime?: true
    endTime?: true
    source?: true
    sourceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeatherAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherAlert to aggregate.
     */
    where?: WeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherAlerts to fetch.
     */
    orderBy?: WeatherAlertOrderByWithRelationInput | WeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeatherAlerts
    **/
    _count?: true | WeatherAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherAlertMaxAggregateInputType
  }

  export type GetWeatherAlertAggregateType<T extends WeatherAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateWeatherAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeatherAlert[P]>
      : GetScalarType<T[P], AggregateWeatherAlert[P]>
  }




  export type WeatherAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherAlertWhereInput
    orderBy?: WeatherAlertOrderByWithAggregationInput | WeatherAlertOrderByWithAggregationInput[]
    by: WeatherAlertScalarFieldEnum[] | WeatherAlertScalarFieldEnum
    having?: WeatherAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherAlertCountAggregateInputType | true
    _avg?: WeatherAlertAvgAggregateInputType
    _sum?: WeatherAlertSumAggregateInputType
    _min?: WeatherAlertMinAggregateInputType
    _max?: WeatherAlertMaxAggregateInputType
  }

  export type WeatherAlertGroupByOutputType = {
    id: number
    alertType: string
    title: string
    description: string
    severity: string
    area: string
    coordinates: JsonValue | null
    startTime: Date
    endTime: Date | null
    source: string
    sourceId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WeatherAlertCountAggregateOutputType | null
    _avg: WeatherAlertAvgAggregateOutputType | null
    _sum: WeatherAlertSumAggregateOutputType | null
    _min: WeatherAlertMinAggregateOutputType | null
    _max: WeatherAlertMaxAggregateOutputType | null
  }

  type GetWeatherAlertGroupByPayload<T extends WeatherAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherAlertGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherAlertGroupByOutputType[P]>
        }
      >
    >


  export type WeatherAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertType?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    area?: boolean
    coordinates?: boolean
    startTime?: boolean
    endTime?: boolean
    source?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    affectedStores?: boolean | WeatherAlert$affectedStoresArgs<ExtArgs>
    _count?: boolean | WeatherAlertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weatherAlert"]>

  export type WeatherAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertType?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    area?: boolean
    coordinates?: boolean
    startTime?: boolean
    endTime?: boolean
    source?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weatherAlert"]>

  export type WeatherAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertType?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    area?: boolean
    coordinates?: boolean
    startTime?: boolean
    endTime?: boolean
    source?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weatherAlert"]>

  export type WeatherAlertSelectScalar = {
    id?: boolean
    alertType?: boolean
    title?: boolean
    description?: boolean
    severity?: boolean
    area?: boolean
    coordinates?: boolean
    startTime?: boolean
    endTime?: boolean
    source?: boolean
    sourceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeatherAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertType" | "title" | "description" | "severity" | "area" | "coordinates" | "startTime" | "endTime" | "source" | "sourceId" | "createdAt" | "updatedAt", ExtArgs["result"]["weatherAlert"]>
  export type WeatherAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affectedStores?: boolean | WeatherAlert$affectedStoresArgs<ExtArgs>
    _count?: boolean | WeatherAlertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeatherAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeatherAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeatherAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeatherAlert"
    objects: {
      affectedStores: Prisma.$StoreWeatherAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alertType: string
      title: string
      description: string
      severity: string
      area: string
      coordinates: Prisma.JsonValue | null
      startTime: Date
      endTime: Date | null
      source: string
      sourceId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weatherAlert"]>
    composites: {}
  }

  type WeatherAlertGetPayload<S extends boolean | null | undefined | WeatherAlertDefaultArgs> = $Result.GetResult<Prisma.$WeatherAlertPayload, S>

  type WeatherAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherAlertCountAggregateInputType | true
    }

  export interface WeatherAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeatherAlert'], meta: { name: 'WeatherAlert' } }
    /**
     * Find zero or one WeatherAlert that matches the filter.
     * @param {WeatherAlertFindUniqueArgs} args - Arguments to find a WeatherAlert
     * @example
     * // Get one WeatherAlert
     * const weatherAlert = await prisma.weatherAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherAlertFindUniqueArgs>(args: SelectSubset<T, WeatherAlertFindUniqueArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeatherAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherAlertFindUniqueOrThrowArgs} args - Arguments to find a WeatherAlert
     * @example
     * // Get one WeatherAlert
     * const weatherAlert = await prisma.weatherAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertFindFirstArgs} args - Arguments to find a WeatherAlert
     * @example
     * // Get one WeatherAlert
     * const weatherAlert = await prisma.weatherAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherAlertFindFirstArgs>(args?: SelectSubset<T, WeatherAlertFindFirstArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeatherAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertFindFirstOrThrowArgs} args - Arguments to find a WeatherAlert
     * @example
     * // Get one WeatherAlert
     * const weatherAlert = await prisma.weatherAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeatherAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeatherAlerts
     * const weatherAlerts = await prisma.weatherAlert.findMany()
     * 
     * // Get first 10 WeatherAlerts
     * const weatherAlerts = await prisma.weatherAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherAlertWithIdOnly = await prisma.weatherAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherAlertFindManyArgs>(args?: SelectSubset<T, WeatherAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeatherAlert.
     * @param {WeatherAlertCreateArgs} args - Arguments to create a WeatherAlert.
     * @example
     * // Create one WeatherAlert
     * const WeatherAlert = await prisma.weatherAlert.create({
     *   data: {
     *     // ... data to create a WeatherAlert
     *   }
     * })
     * 
     */
    create<T extends WeatherAlertCreateArgs>(args: SelectSubset<T, WeatherAlertCreateArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeatherAlerts.
     * @param {WeatherAlertCreateManyArgs} args - Arguments to create many WeatherAlerts.
     * @example
     * // Create many WeatherAlerts
     * const weatherAlert = await prisma.weatherAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherAlertCreateManyArgs>(args?: SelectSubset<T, WeatherAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeatherAlerts and returns the data saved in the database.
     * @param {WeatherAlertCreateManyAndReturnArgs} args - Arguments to create many WeatherAlerts.
     * @example
     * // Create many WeatherAlerts
     * const weatherAlert = await prisma.weatherAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeatherAlerts and only return the `id`
     * const weatherAlertWithIdOnly = await prisma.weatherAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeatherAlert.
     * @param {WeatherAlertDeleteArgs} args - Arguments to delete one WeatherAlert.
     * @example
     * // Delete one WeatherAlert
     * const WeatherAlert = await prisma.weatherAlert.delete({
     *   where: {
     *     // ... filter to delete one WeatherAlert
     *   }
     * })
     * 
     */
    delete<T extends WeatherAlertDeleteArgs>(args: SelectSubset<T, WeatherAlertDeleteArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeatherAlert.
     * @param {WeatherAlertUpdateArgs} args - Arguments to update one WeatherAlert.
     * @example
     * // Update one WeatherAlert
     * const weatherAlert = await prisma.weatherAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherAlertUpdateArgs>(args: SelectSubset<T, WeatherAlertUpdateArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeatherAlerts.
     * @param {WeatherAlertDeleteManyArgs} args - Arguments to filter WeatherAlerts to delete.
     * @example
     * // Delete a few WeatherAlerts
     * const { count } = await prisma.weatherAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherAlertDeleteManyArgs>(args?: SelectSubset<T, WeatherAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeatherAlerts
     * const weatherAlert = await prisma.weatherAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherAlertUpdateManyArgs>(args: SelectSubset<T, WeatherAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeatherAlerts and returns the data updated in the database.
     * @param {WeatherAlertUpdateManyAndReturnArgs} args - Arguments to update many WeatherAlerts.
     * @example
     * // Update many WeatherAlerts
     * const weatherAlert = await prisma.weatherAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeatherAlerts and only return the `id`
     * const weatherAlertWithIdOnly = await prisma.weatherAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeatherAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeatherAlert.
     * @param {WeatherAlertUpsertArgs} args - Arguments to update or create a WeatherAlert.
     * @example
     * // Update or create a WeatherAlert
     * const weatherAlert = await prisma.weatherAlert.upsert({
     *   create: {
     *     // ... data to create a WeatherAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeatherAlert we want to update
     *   }
     * })
     */
    upsert<T extends WeatherAlertUpsertArgs>(args: SelectSubset<T, WeatherAlertUpsertArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeatherAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertCountArgs} args - Arguments to filter WeatherAlerts to count.
     * @example
     * // Count the number of WeatherAlerts
     * const count = await prisma.weatherAlert.count({
     *   where: {
     *     // ... the filter for the WeatherAlerts we want to count
     *   }
     * })
    **/
    count<T extends WeatherAlertCountArgs>(
      args?: Subset<T, WeatherAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeatherAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeatherAlertAggregateArgs>(args: Subset<T, WeatherAlertAggregateArgs>): Prisma.PrismaPromise<GetWeatherAlertAggregateType<T>>

    /**
     * Group by WeatherAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeatherAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherAlertGroupByArgs['orderBy'] }
        : { orderBy?: WeatherAlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeatherAlert model
   */
  readonly fields: WeatherAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeatherAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affectedStores<T extends WeatherAlert$affectedStoresArgs<ExtArgs> = {}>(args?: Subset<T, WeatherAlert$affectedStoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeatherAlert model
   */
  interface WeatherAlertFieldRefs {
    readonly id: FieldRef<"WeatherAlert", 'Int'>
    readonly alertType: FieldRef<"WeatherAlert", 'String'>
    readonly title: FieldRef<"WeatherAlert", 'String'>
    readonly description: FieldRef<"WeatherAlert", 'String'>
    readonly severity: FieldRef<"WeatherAlert", 'String'>
    readonly area: FieldRef<"WeatherAlert", 'String'>
    readonly coordinates: FieldRef<"WeatherAlert", 'Json'>
    readonly startTime: FieldRef<"WeatherAlert", 'DateTime'>
    readonly endTime: FieldRef<"WeatherAlert", 'DateTime'>
    readonly source: FieldRef<"WeatherAlert", 'String'>
    readonly sourceId: FieldRef<"WeatherAlert", 'String'>
    readonly createdAt: FieldRef<"WeatherAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"WeatherAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeatherAlert findUnique
   */
  export type WeatherAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which WeatherAlert to fetch.
     */
    where: WeatherAlertWhereUniqueInput
  }

  /**
   * WeatherAlert findUniqueOrThrow
   */
  export type WeatherAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which WeatherAlert to fetch.
     */
    where: WeatherAlertWhereUniqueInput
  }

  /**
   * WeatherAlert findFirst
   */
  export type WeatherAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which WeatherAlert to fetch.
     */
    where?: WeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherAlerts to fetch.
     */
    orderBy?: WeatherAlertOrderByWithRelationInput | WeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherAlerts.
     */
    cursor?: WeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherAlerts.
     */
    distinct?: WeatherAlertScalarFieldEnum | WeatherAlertScalarFieldEnum[]
  }

  /**
   * WeatherAlert findFirstOrThrow
   */
  export type WeatherAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which WeatherAlert to fetch.
     */
    where?: WeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherAlerts to fetch.
     */
    orderBy?: WeatherAlertOrderByWithRelationInput | WeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeatherAlerts.
     */
    cursor?: WeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeatherAlerts.
     */
    distinct?: WeatherAlertScalarFieldEnum | WeatherAlertScalarFieldEnum[]
  }

  /**
   * WeatherAlert findMany
   */
  export type WeatherAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which WeatherAlerts to fetch.
     */
    where?: WeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeatherAlerts to fetch.
     */
    orderBy?: WeatherAlertOrderByWithRelationInput | WeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeatherAlerts.
     */
    cursor?: WeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeatherAlerts.
     */
    skip?: number
    distinct?: WeatherAlertScalarFieldEnum | WeatherAlertScalarFieldEnum[]
  }

  /**
   * WeatherAlert create
   */
  export type WeatherAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a WeatherAlert.
     */
    data: XOR<WeatherAlertCreateInput, WeatherAlertUncheckedCreateInput>
  }

  /**
   * WeatherAlert createMany
   */
  export type WeatherAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeatherAlerts.
     */
    data: WeatherAlertCreateManyInput | WeatherAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherAlert createManyAndReturn
   */
  export type WeatherAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * The data used to create many WeatherAlerts.
     */
    data: WeatherAlertCreateManyInput | WeatherAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeatherAlert update
   */
  export type WeatherAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a WeatherAlert.
     */
    data: XOR<WeatherAlertUpdateInput, WeatherAlertUncheckedUpdateInput>
    /**
     * Choose, which WeatherAlert to update.
     */
    where: WeatherAlertWhereUniqueInput
  }

  /**
   * WeatherAlert updateMany
   */
  export type WeatherAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeatherAlerts.
     */
    data: XOR<WeatherAlertUpdateManyMutationInput, WeatherAlertUncheckedUpdateManyInput>
    /**
     * Filter which WeatherAlerts to update
     */
    where?: WeatherAlertWhereInput
    /**
     * Limit how many WeatherAlerts to update.
     */
    limit?: number
  }

  /**
   * WeatherAlert updateManyAndReturn
   */
  export type WeatherAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * The data used to update WeatherAlerts.
     */
    data: XOR<WeatherAlertUpdateManyMutationInput, WeatherAlertUncheckedUpdateManyInput>
    /**
     * Filter which WeatherAlerts to update
     */
    where?: WeatherAlertWhereInput
    /**
     * Limit how many WeatherAlerts to update.
     */
    limit?: number
  }

  /**
   * WeatherAlert upsert
   */
  export type WeatherAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the WeatherAlert to update in case it exists.
     */
    where: WeatherAlertWhereUniqueInput
    /**
     * In case the WeatherAlert found by the `where` argument doesn't exist, create a new WeatherAlert with this data.
     */
    create: XOR<WeatherAlertCreateInput, WeatherAlertUncheckedCreateInput>
    /**
     * In case the WeatherAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherAlertUpdateInput, WeatherAlertUncheckedUpdateInput>
  }

  /**
   * WeatherAlert delete
   */
  export type WeatherAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
    /**
     * Filter which WeatherAlert to delete.
     */
    where: WeatherAlertWhereUniqueInput
  }

  /**
   * WeatherAlert deleteMany
   */
  export type WeatherAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeatherAlerts to delete
     */
    where?: WeatherAlertWhereInput
    /**
     * Limit how many WeatherAlerts to delete.
     */
    limit?: number
  }

  /**
   * WeatherAlert.affectedStores
   */
  export type WeatherAlert$affectedStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    where?: StoreWeatherAlertWhereInput
    orderBy?: StoreWeatherAlertOrderByWithRelationInput | StoreWeatherAlertOrderByWithRelationInput[]
    cursor?: StoreWeatherAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreWeatherAlertScalarFieldEnum | StoreWeatherAlertScalarFieldEnum[]
  }

  /**
   * WeatherAlert without action
   */
  export type WeatherAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherAlert
     */
    select?: WeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeatherAlert
     */
    omit?: WeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherAlertInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    storeNumber: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    phone: string | null
    latitude: number | null
    longitude: number | null
    isActive: boolean | null
    lastIncident: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    storeNumber: string | null
    name: string | null
    address: string | null
    city: string | null
    state: string | null
    zipCode: string | null
    phone: string | null
    latitude: number | null
    longitude: number | null
    isActive: boolean | null
    lastIncident: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    storeNumber: number
    name: number
    address: number
    city: number
    state: number
    zipCode: number
    phone: number
    latitude: number
    longitude: number
    isActive: number
    lastIncident: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    storeNumber?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    phone?: true
    latitude?: true
    longitude?: true
    isActive?: true
    lastIncident?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    storeNumber?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    phone?: true
    latitude?: true
    longitude?: true
    isActive?: true
    lastIncident?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    storeNumber?: true
    name?: true
    address?: true
    city?: true
    state?: true
    zipCode?: true
    phone?: true
    latitude?: true
    longitude?: true
    isActive?: true
    lastIncident?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone: string | null
    latitude: number | null
    longitude: number | null
    isActive: boolean
    lastIncident: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeNumber?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    lastIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    incidents?: boolean | Store$incidentsArgs<ExtArgs>
    weatherAlerts?: boolean | Store$weatherAlertsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>

  export type StoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeNumber?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    lastIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeNumber?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    lastIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>

  export type StoreSelectScalar = {
    id?: boolean
    storeNumber?: boolean
    name?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zipCode?: boolean
    phone?: boolean
    latitude?: boolean
    longitude?: boolean
    isActive?: boolean
    lastIncident?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeNumber" | "name" | "address" | "city" | "state" | "zipCode" | "phone" | "latitude" | "longitude" | "isActive" | "lastIncident" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidents?: boolean | Store$incidentsArgs<ExtArgs>
    weatherAlerts?: boolean | Store$weatherAlertsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      incidents: Prisma.$IncidentPayload<ExtArgs>[]
      weatherAlerts: Prisma.$StoreWeatherAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeNumber: string
      name: string
      address: string
      city: string
      state: string
      zipCode: string
      phone: string | null
      latitude: number | null
      longitude: number | null
      isActive: boolean
      lastIncident: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {StoreCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {StoreUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `id`
     * const storeWithIdOnly = await prisma.store.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incidents<T extends Store$incidentsArgs<ExtArgs> = {}>(args?: Subset<T, Store$incidentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    weatherAlerts<T extends Store$weatherAlertsArgs<ExtArgs> = {}>(args?: Subset<T, Store$weatherAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly storeNumber: FieldRef<"Store", 'String'>
    readonly name: FieldRef<"Store", 'String'>
    readonly address: FieldRef<"Store", 'String'>
    readonly city: FieldRef<"Store", 'String'>
    readonly state: FieldRef<"Store", 'String'>
    readonly zipCode: FieldRef<"Store", 'String'>
    readonly phone: FieldRef<"Store", 'String'>
    readonly latitude: FieldRef<"Store", 'Float'>
    readonly longitude: FieldRef<"Store", 'Float'>
    readonly isActive: FieldRef<"Store", 'Boolean'>
    readonly lastIncident: FieldRef<"Store", 'DateTime'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store createManyAndReturn
   */
  export type StoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store updateManyAndReturn
   */
  export type StoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.incidents
   */
  export type Store$incidentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Incident
     */
    select?: IncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Incident
     */
    omit?: IncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncidentInclude<ExtArgs> | null
    where?: IncidentWhereInput
    orderBy?: IncidentOrderByWithRelationInput | IncidentOrderByWithRelationInput[]
    cursor?: IncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncidentScalarFieldEnum | IncidentScalarFieldEnum[]
  }

  /**
   * Store.weatherAlerts
   */
  export type Store$weatherAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    where?: StoreWeatherAlertWhereInput
    orderBy?: StoreWeatherAlertOrderByWithRelationInput | StoreWeatherAlertOrderByWithRelationInput[]
    cursor?: StoreWeatherAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreWeatherAlertScalarFieldEnum | StoreWeatherAlertScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model StoreWeatherAlert
   */

  export type AggregateStoreWeatherAlert = {
    _count: StoreWeatherAlertCountAggregateOutputType | null
    _avg: StoreWeatherAlertAvgAggregateOutputType | null
    _sum: StoreWeatherAlertSumAggregateOutputType | null
    _min: StoreWeatherAlertMinAggregateOutputType | null
    _max: StoreWeatherAlertMaxAggregateOutputType | null
  }

  export type StoreWeatherAlertAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    weatherAlertId: number | null
    distance: number | null
  }

  export type StoreWeatherAlertSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    weatherAlertId: number | null
    distance: number | null
  }

  export type StoreWeatherAlertMinAggregateOutputType = {
    id: number | null
    storeId: number | null
    weatherAlertId: number | null
    distance: number | null
    createdAt: Date | null
  }

  export type StoreWeatherAlertMaxAggregateOutputType = {
    id: number | null
    storeId: number | null
    weatherAlertId: number | null
    distance: number | null
    createdAt: Date | null
  }

  export type StoreWeatherAlertCountAggregateOutputType = {
    id: number
    storeId: number
    weatherAlertId: number
    distance: number
    createdAt: number
    _all: number
  }


  export type StoreWeatherAlertAvgAggregateInputType = {
    id?: true
    storeId?: true
    weatherAlertId?: true
    distance?: true
  }

  export type StoreWeatherAlertSumAggregateInputType = {
    id?: true
    storeId?: true
    weatherAlertId?: true
    distance?: true
  }

  export type StoreWeatherAlertMinAggregateInputType = {
    id?: true
    storeId?: true
    weatherAlertId?: true
    distance?: true
    createdAt?: true
  }

  export type StoreWeatherAlertMaxAggregateInputType = {
    id?: true
    storeId?: true
    weatherAlertId?: true
    distance?: true
    createdAt?: true
  }

  export type StoreWeatherAlertCountAggregateInputType = {
    id?: true
    storeId?: true
    weatherAlertId?: true
    distance?: true
    createdAt?: true
    _all?: true
  }

  export type StoreWeatherAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreWeatherAlert to aggregate.
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreWeatherAlerts to fetch.
     */
    orderBy?: StoreWeatherAlertOrderByWithRelationInput | StoreWeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreWeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreWeatherAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreWeatherAlerts
    **/
    _count?: true | StoreWeatherAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreWeatherAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreWeatherAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreWeatherAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreWeatherAlertMaxAggregateInputType
  }

  export type GetStoreWeatherAlertAggregateType<T extends StoreWeatherAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreWeatherAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreWeatherAlert[P]>
      : GetScalarType<T[P], AggregateStoreWeatherAlert[P]>
  }




  export type StoreWeatherAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWeatherAlertWhereInput
    orderBy?: StoreWeatherAlertOrderByWithAggregationInput | StoreWeatherAlertOrderByWithAggregationInput[]
    by: StoreWeatherAlertScalarFieldEnum[] | StoreWeatherAlertScalarFieldEnum
    having?: StoreWeatherAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreWeatherAlertCountAggregateInputType | true
    _avg?: StoreWeatherAlertAvgAggregateInputType
    _sum?: StoreWeatherAlertSumAggregateInputType
    _min?: StoreWeatherAlertMinAggregateInputType
    _max?: StoreWeatherAlertMaxAggregateInputType
  }

  export type StoreWeatherAlertGroupByOutputType = {
    id: number
    storeId: number
    weatherAlertId: number
    distance: number | null
    createdAt: Date
    _count: StoreWeatherAlertCountAggregateOutputType | null
    _avg: StoreWeatherAlertAvgAggregateOutputType | null
    _sum: StoreWeatherAlertSumAggregateOutputType | null
    _min: StoreWeatherAlertMinAggregateOutputType | null
    _max: StoreWeatherAlertMaxAggregateOutputType | null
  }

  type GetStoreWeatherAlertGroupByPayload<T extends StoreWeatherAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreWeatherAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreWeatherAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreWeatherAlertGroupByOutputType[P]>
            : GetScalarType<T[P], StoreWeatherAlertGroupByOutputType[P]>
        }
      >
    >


  export type StoreWeatherAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    weatherAlertId?: boolean
    distance?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    weatherAlert?: boolean | WeatherAlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeWeatherAlert"]>

  export type StoreWeatherAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    weatherAlertId?: boolean
    distance?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    weatherAlert?: boolean | WeatherAlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeWeatherAlert"]>

  export type StoreWeatherAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    weatherAlertId?: boolean
    distance?: boolean
    createdAt?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    weatherAlert?: boolean | WeatherAlertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["storeWeatherAlert"]>

  export type StoreWeatherAlertSelectScalar = {
    id?: boolean
    storeId?: boolean
    weatherAlertId?: boolean
    distance?: boolean
    createdAt?: boolean
  }

  export type StoreWeatherAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "weatherAlertId" | "distance" | "createdAt", ExtArgs["result"]["storeWeatherAlert"]>
  export type StoreWeatherAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    weatherAlert?: boolean | WeatherAlertDefaultArgs<ExtArgs>
  }
  export type StoreWeatherAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    weatherAlert?: boolean | WeatherAlertDefaultArgs<ExtArgs>
  }
  export type StoreWeatherAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    weatherAlert?: boolean | WeatherAlertDefaultArgs<ExtArgs>
  }

  export type $StoreWeatherAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreWeatherAlert"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      weatherAlert: Prisma.$WeatherAlertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      storeId: number
      weatherAlertId: number
      distance: number | null
      createdAt: Date
    }, ExtArgs["result"]["storeWeatherAlert"]>
    composites: {}
  }

  type StoreWeatherAlertGetPayload<S extends boolean | null | undefined | StoreWeatherAlertDefaultArgs> = $Result.GetResult<Prisma.$StoreWeatherAlertPayload, S>

  type StoreWeatherAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreWeatherAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreWeatherAlertCountAggregateInputType | true
    }

  export interface StoreWeatherAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreWeatherAlert'], meta: { name: 'StoreWeatherAlert' } }
    /**
     * Find zero or one StoreWeatherAlert that matches the filter.
     * @param {StoreWeatherAlertFindUniqueArgs} args - Arguments to find a StoreWeatherAlert
     * @example
     * // Get one StoreWeatherAlert
     * const storeWeatherAlert = await prisma.storeWeatherAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreWeatherAlertFindUniqueArgs>(args: SelectSubset<T, StoreWeatherAlertFindUniqueArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreWeatherAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreWeatherAlertFindUniqueOrThrowArgs} args - Arguments to find a StoreWeatherAlert
     * @example
     * // Get one StoreWeatherAlert
     * const storeWeatherAlert = await prisma.storeWeatherAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreWeatherAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreWeatherAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreWeatherAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertFindFirstArgs} args - Arguments to find a StoreWeatherAlert
     * @example
     * // Get one StoreWeatherAlert
     * const storeWeatherAlert = await prisma.storeWeatherAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreWeatherAlertFindFirstArgs>(args?: SelectSubset<T, StoreWeatherAlertFindFirstArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreWeatherAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertFindFirstOrThrowArgs} args - Arguments to find a StoreWeatherAlert
     * @example
     * // Get one StoreWeatherAlert
     * const storeWeatherAlert = await prisma.storeWeatherAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreWeatherAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreWeatherAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreWeatherAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreWeatherAlerts
     * const storeWeatherAlerts = await prisma.storeWeatherAlert.findMany()
     * 
     * // Get first 10 StoreWeatherAlerts
     * const storeWeatherAlerts = await prisma.storeWeatherAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWeatherAlertWithIdOnly = await prisma.storeWeatherAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreWeatherAlertFindManyArgs>(args?: SelectSubset<T, StoreWeatherAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreWeatherAlert.
     * @param {StoreWeatherAlertCreateArgs} args - Arguments to create a StoreWeatherAlert.
     * @example
     * // Create one StoreWeatherAlert
     * const StoreWeatherAlert = await prisma.storeWeatherAlert.create({
     *   data: {
     *     // ... data to create a StoreWeatherAlert
     *   }
     * })
     * 
     */
    create<T extends StoreWeatherAlertCreateArgs>(args: SelectSubset<T, StoreWeatherAlertCreateArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreWeatherAlerts.
     * @param {StoreWeatherAlertCreateManyArgs} args - Arguments to create many StoreWeatherAlerts.
     * @example
     * // Create many StoreWeatherAlerts
     * const storeWeatherAlert = await prisma.storeWeatherAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreWeatherAlertCreateManyArgs>(args?: SelectSubset<T, StoreWeatherAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StoreWeatherAlerts and returns the data saved in the database.
     * @param {StoreWeatherAlertCreateManyAndReturnArgs} args - Arguments to create many StoreWeatherAlerts.
     * @example
     * // Create many StoreWeatherAlerts
     * const storeWeatherAlert = await prisma.storeWeatherAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StoreWeatherAlerts and only return the `id`
     * const storeWeatherAlertWithIdOnly = await prisma.storeWeatherAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StoreWeatherAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, StoreWeatherAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StoreWeatherAlert.
     * @param {StoreWeatherAlertDeleteArgs} args - Arguments to delete one StoreWeatherAlert.
     * @example
     * // Delete one StoreWeatherAlert
     * const StoreWeatherAlert = await prisma.storeWeatherAlert.delete({
     *   where: {
     *     // ... filter to delete one StoreWeatherAlert
     *   }
     * })
     * 
     */
    delete<T extends StoreWeatherAlertDeleteArgs>(args: SelectSubset<T, StoreWeatherAlertDeleteArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreWeatherAlert.
     * @param {StoreWeatherAlertUpdateArgs} args - Arguments to update one StoreWeatherAlert.
     * @example
     * // Update one StoreWeatherAlert
     * const storeWeatherAlert = await prisma.storeWeatherAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreWeatherAlertUpdateArgs>(args: SelectSubset<T, StoreWeatherAlertUpdateArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreWeatherAlerts.
     * @param {StoreWeatherAlertDeleteManyArgs} args - Arguments to filter StoreWeatherAlerts to delete.
     * @example
     * // Delete a few StoreWeatherAlerts
     * const { count } = await prisma.storeWeatherAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreWeatherAlertDeleteManyArgs>(args?: SelectSubset<T, StoreWeatherAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreWeatherAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreWeatherAlerts
     * const storeWeatherAlert = await prisma.storeWeatherAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreWeatherAlertUpdateManyArgs>(args: SelectSubset<T, StoreWeatherAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreWeatherAlerts and returns the data updated in the database.
     * @param {StoreWeatherAlertUpdateManyAndReturnArgs} args - Arguments to update many StoreWeatherAlerts.
     * @example
     * // Update many StoreWeatherAlerts
     * const storeWeatherAlert = await prisma.storeWeatherAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StoreWeatherAlerts and only return the `id`
     * const storeWeatherAlertWithIdOnly = await prisma.storeWeatherAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StoreWeatherAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, StoreWeatherAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StoreWeatherAlert.
     * @param {StoreWeatherAlertUpsertArgs} args - Arguments to update or create a StoreWeatherAlert.
     * @example
     * // Update or create a StoreWeatherAlert
     * const storeWeatherAlert = await prisma.storeWeatherAlert.upsert({
     *   create: {
     *     // ... data to create a StoreWeatherAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreWeatherAlert we want to update
     *   }
     * })
     */
    upsert<T extends StoreWeatherAlertUpsertArgs>(args: SelectSubset<T, StoreWeatherAlertUpsertArgs<ExtArgs>>): Prisma__StoreWeatherAlertClient<$Result.GetResult<Prisma.$StoreWeatherAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreWeatherAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertCountArgs} args - Arguments to filter StoreWeatherAlerts to count.
     * @example
     * // Count the number of StoreWeatherAlerts
     * const count = await prisma.storeWeatherAlert.count({
     *   where: {
     *     // ... the filter for the StoreWeatherAlerts we want to count
     *   }
     * })
    **/
    count<T extends StoreWeatherAlertCountArgs>(
      args?: Subset<T, StoreWeatherAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreWeatherAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreWeatherAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreWeatherAlertAggregateArgs>(args: Subset<T, StoreWeatherAlertAggregateArgs>): Prisma.PrismaPromise<GetStoreWeatherAlertAggregateType<T>>

    /**
     * Group by StoreWeatherAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreWeatherAlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreWeatherAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreWeatherAlertGroupByArgs['orderBy'] }
        : { orderBy?: StoreWeatherAlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreWeatherAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreWeatherAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreWeatherAlert model
   */
  readonly fields: StoreWeatherAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreWeatherAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreWeatherAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    weatherAlert<T extends WeatherAlertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeatherAlertDefaultArgs<ExtArgs>>): Prisma__WeatherAlertClient<$Result.GetResult<Prisma.$WeatherAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreWeatherAlert model
   */
  interface StoreWeatherAlertFieldRefs {
    readonly id: FieldRef<"StoreWeatherAlert", 'Int'>
    readonly storeId: FieldRef<"StoreWeatherAlert", 'Int'>
    readonly weatherAlertId: FieldRef<"StoreWeatherAlert", 'Int'>
    readonly distance: FieldRef<"StoreWeatherAlert", 'Float'>
    readonly createdAt: FieldRef<"StoreWeatherAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreWeatherAlert findUnique
   */
  export type StoreWeatherAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which StoreWeatherAlert to fetch.
     */
    where: StoreWeatherAlertWhereUniqueInput
  }

  /**
   * StoreWeatherAlert findUniqueOrThrow
   */
  export type StoreWeatherAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which StoreWeatherAlert to fetch.
     */
    where: StoreWeatherAlertWhereUniqueInput
  }

  /**
   * StoreWeatherAlert findFirst
   */
  export type StoreWeatherAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which StoreWeatherAlert to fetch.
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreWeatherAlerts to fetch.
     */
    orderBy?: StoreWeatherAlertOrderByWithRelationInput | StoreWeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreWeatherAlerts.
     */
    cursor?: StoreWeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreWeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreWeatherAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreWeatherAlerts.
     */
    distinct?: StoreWeatherAlertScalarFieldEnum | StoreWeatherAlertScalarFieldEnum[]
  }

  /**
   * StoreWeatherAlert findFirstOrThrow
   */
  export type StoreWeatherAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which StoreWeatherAlert to fetch.
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreWeatherAlerts to fetch.
     */
    orderBy?: StoreWeatherAlertOrderByWithRelationInput | StoreWeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreWeatherAlerts.
     */
    cursor?: StoreWeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreWeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreWeatherAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreWeatherAlerts.
     */
    distinct?: StoreWeatherAlertScalarFieldEnum | StoreWeatherAlertScalarFieldEnum[]
  }

  /**
   * StoreWeatherAlert findMany
   */
  export type StoreWeatherAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * Filter, which StoreWeatherAlerts to fetch.
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreWeatherAlerts to fetch.
     */
    orderBy?: StoreWeatherAlertOrderByWithRelationInput | StoreWeatherAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreWeatherAlerts.
     */
    cursor?: StoreWeatherAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreWeatherAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreWeatherAlerts.
     */
    skip?: number
    distinct?: StoreWeatherAlertScalarFieldEnum | StoreWeatherAlertScalarFieldEnum[]
  }

  /**
   * StoreWeatherAlert create
   */
  export type StoreWeatherAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a StoreWeatherAlert.
     */
    data: XOR<StoreWeatherAlertCreateInput, StoreWeatherAlertUncheckedCreateInput>
  }

  /**
   * StoreWeatherAlert createMany
   */
  export type StoreWeatherAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreWeatherAlerts.
     */
    data: StoreWeatherAlertCreateManyInput | StoreWeatherAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreWeatherAlert createManyAndReturn
   */
  export type StoreWeatherAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * The data used to create many StoreWeatherAlerts.
     */
    data: StoreWeatherAlertCreateManyInput | StoreWeatherAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreWeatherAlert update
   */
  export type StoreWeatherAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a StoreWeatherAlert.
     */
    data: XOR<StoreWeatherAlertUpdateInput, StoreWeatherAlertUncheckedUpdateInput>
    /**
     * Choose, which StoreWeatherAlert to update.
     */
    where: StoreWeatherAlertWhereUniqueInput
  }

  /**
   * StoreWeatherAlert updateMany
   */
  export type StoreWeatherAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreWeatherAlerts.
     */
    data: XOR<StoreWeatherAlertUpdateManyMutationInput, StoreWeatherAlertUncheckedUpdateManyInput>
    /**
     * Filter which StoreWeatherAlerts to update
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * Limit how many StoreWeatherAlerts to update.
     */
    limit?: number
  }

  /**
   * StoreWeatherAlert updateManyAndReturn
   */
  export type StoreWeatherAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * The data used to update StoreWeatherAlerts.
     */
    data: XOR<StoreWeatherAlertUpdateManyMutationInput, StoreWeatherAlertUncheckedUpdateManyInput>
    /**
     * Filter which StoreWeatherAlerts to update
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * Limit how many StoreWeatherAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StoreWeatherAlert upsert
   */
  export type StoreWeatherAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the StoreWeatherAlert to update in case it exists.
     */
    where: StoreWeatherAlertWhereUniqueInput
    /**
     * In case the StoreWeatherAlert found by the `where` argument doesn't exist, create a new StoreWeatherAlert with this data.
     */
    create: XOR<StoreWeatherAlertCreateInput, StoreWeatherAlertUncheckedCreateInput>
    /**
     * In case the StoreWeatherAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreWeatherAlertUpdateInput, StoreWeatherAlertUncheckedUpdateInput>
  }

  /**
   * StoreWeatherAlert delete
   */
  export type StoreWeatherAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
    /**
     * Filter which StoreWeatherAlert to delete.
     */
    where: StoreWeatherAlertWhereUniqueInput
  }

  /**
   * StoreWeatherAlert deleteMany
   */
  export type StoreWeatherAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreWeatherAlerts to delete
     */
    where?: StoreWeatherAlertWhereInput
    /**
     * Limit how many StoreWeatherAlerts to delete.
     */
    limit?: number
  }

  /**
   * StoreWeatherAlert without action
   */
  export type StoreWeatherAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreWeatherAlert
     */
    select?: StoreWeatherAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreWeatherAlert
     */
    omit?: StoreWeatherAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreWeatherAlertInclude<ExtArgs> | null
  }


  /**
   * Model NewsArticle
   */

  export type AggregateNewsArticle = {
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  export type NewsArticleAvgAggregateOutputType = {
    id: number | null
    relevance: number | null
  }

  export type NewsArticleSumAggregateOutputType = {
    id: number | null
    relevance: number | null
  }

  export type NewsArticleMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    source: string | null
    sourceUrl: string | null
    publishedAt: Date | null
    relevance: number | null
    category: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    source: string | null
    sourceUrl: string | null
    publishedAt: Date | null
    relevance: number | null
    category: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsArticleCountAggregateOutputType = {
    id: number
    title: number
    content: number
    source: number
    sourceUrl: number
    publishedAt: number
    relevance: number
    category: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsArticleAvgAggregateInputType = {
    id?: true
    relevance?: true
  }

  export type NewsArticleSumAggregateInputType = {
    id?: true
    relevance?: true
  }

  export type NewsArticleMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    source?: true
    sourceUrl?: true
    publishedAt?: true
    relevance?: true
    category?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    source?: true
    sourceUrl?: true
    publishedAt?: true
    relevance?: true
    category?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsArticleCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    source?: true
    sourceUrl?: true
    publishedAt?: true
    relevance?: true
    category?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticle to aggregate.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsArticles
    **/
    _count?: true | NewsArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsArticleMaxAggregateInputType
  }

  export type GetNewsArticleAggregateType<T extends NewsArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsArticle[P]>
      : GetScalarType<T[P], AggregateNewsArticle[P]>
  }




  export type NewsArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsArticleWhereInput
    orderBy?: NewsArticleOrderByWithAggregationInput | NewsArticleOrderByWithAggregationInput[]
    by: NewsArticleScalarFieldEnum[] | NewsArticleScalarFieldEnum
    having?: NewsArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsArticleCountAggregateInputType | true
    _avg?: NewsArticleAvgAggregateInputType
    _sum?: NewsArticleSumAggregateInputType
    _min?: NewsArticleMinAggregateInputType
    _max?: NewsArticleMaxAggregateInputType
  }

  export type NewsArticleGroupByOutputType = {
    id: number
    title: string
    content: string
    source: string
    sourceUrl: string
    publishedAt: Date
    relevance: number | null
    category: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: NewsArticleCountAggregateOutputType | null
    _avg: NewsArticleAvgAggregateOutputType | null
    _sum: NewsArticleSumAggregateOutputType | null
    _min: NewsArticleMinAggregateOutputType | null
    _max: NewsArticleMaxAggregateOutputType | null
  }

  type GetNewsArticleGroupByPayload<T extends NewsArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
            : GetScalarType<T[P], NewsArticleGroupByOutputType[P]>
        }
      >
    >


  export type NewsArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    relevance?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    relevance?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    relevance?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["newsArticle"]>

  export type NewsArticleSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    sourceUrl?: boolean
    publishedAt?: boolean
    relevance?: boolean
    category?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "source" | "sourceUrl" | "publishedAt" | "relevance" | "category" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["newsArticle"]>

  export type $NewsArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsArticle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      source: string
      sourceUrl: string
      publishedAt: Date
      relevance: number | null
      category: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["newsArticle"]>
    composites: {}
  }

  type NewsArticleGetPayload<S extends boolean | null | undefined | NewsArticleDefaultArgs> = $Result.GetResult<Prisma.$NewsArticlePayload, S>

  type NewsArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsArticleCountAggregateInputType | true
    }

  export interface NewsArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsArticle'], meta: { name: 'NewsArticle' } }
    /**
     * Find zero or one NewsArticle that matches the filter.
     * @param {NewsArticleFindUniqueArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsArticleFindUniqueArgs>(args: SelectSubset<T, NewsArticleFindUniqueArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsArticle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsArticleFindUniqueOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsArticleFindFirstArgs>(args?: SelectSubset<T, NewsArticleFindFirstArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsArticle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindFirstOrThrowArgs} args - Arguments to find a NewsArticle
     * @example
     * // Get one NewsArticle
     * const newsArticle = await prisma.newsArticle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsArticles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany()
     * 
     * // Get first 10 NewsArticles
     * const newsArticles = await prisma.newsArticle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsArticleFindManyArgs>(args?: SelectSubset<T, NewsArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsArticle.
     * @param {NewsArticleCreateArgs} args - Arguments to create a NewsArticle.
     * @example
     * // Create one NewsArticle
     * const NewsArticle = await prisma.newsArticle.create({
     *   data: {
     *     // ... data to create a NewsArticle
     *   }
     * })
     * 
     */
    create<T extends NewsArticleCreateArgs>(args: SelectSubset<T, NewsArticleCreateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsArticles.
     * @param {NewsArticleCreateManyArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsArticleCreateManyArgs>(args?: SelectSubset<T, NewsArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsArticles and returns the data saved in the database.
     * @param {NewsArticleCreateManyAndReturnArgs} args - Arguments to create many NewsArticles.
     * @example
     * // Create many NewsArticles
     * const newsArticle = await prisma.newsArticle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsArticle.
     * @param {NewsArticleDeleteArgs} args - Arguments to delete one NewsArticle.
     * @example
     * // Delete one NewsArticle
     * const NewsArticle = await prisma.newsArticle.delete({
     *   where: {
     *     // ... filter to delete one NewsArticle
     *   }
     * })
     * 
     */
    delete<T extends NewsArticleDeleteArgs>(args: SelectSubset<T, NewsArticleDeleteArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsArticle.
     * @param {NewsArticleUpdateArgs} args - Arguments to update one NewsArticle.
     * @example
     * // Update one NewsArticle
     * const newsArticle = await prisma.newsArticle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsArticleUpdateArgs>(args: SelectSubset<T, NewsArticleUpdateArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsArticles.
     * @param {NewsArticleDeleteManyArgs} args - Arguments to filter NewsArticles to delete.
     * @example
     * // Delete a few NewsArticles
     * const { count } = await prisma.newsArticle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsArticleDeleteManyArgs>(args?: SelectSubset<T, NewsArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsArticleUpdateManyArgs>(args: SelectSubset<T, NewsArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsArticles and returns the data updated in the database.
     * @param {NewsArticleUpdateManyAndReturnArgs} args - Arguments to update many NewsArticles.
     * @example
     * // Update many NewsArticles
     * const newsArticle = await prisma.newsArticle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsArticles and only return the `id`
     * const newsArticleWithIdOnly = await prisma.newsArticle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsArticle.
     * @param {NewsArticleUpsertArgs} args - Arguments to update or create a NewsArticle.
     * @example
     * // Update or create a NewsArticle
     * const newsArticle = await prisma.newsArticle.upsert({
     *   create: {
     *     // ... data to create a NewsArticle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsArticle we want to update
     *   }
     * })
     */
    upsert<T extends NewsArticleUpsertArgs>(args: SelectSubset<T, NewsArticleUpsertArgs<ExtArgs>>): Prisma__NewsArticleClient<$Result.GetResult<Prisma.$NewsArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsArticles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleCountArgs} args - Arguments to filter NewsArticles to count.
     * @example
     * // Count the number of NewsArticles
     * const count = await prisma.newsArticle.count({
     *   where: {
     *     // ... the filter for the NewsArticles we want to count
     *   }
     * })
    **/
    count<T extends NewsArticleCountArgs>(
      args?: Subset<T, NewsArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsArticleAggregateArgs>(args: Subset<T, NewsArticleAggregateArgs>): Prisma.PrismaPromise<GetNewsArticleAggregateType<T>>

    /**
     * Group by NewsArticle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsArticleGroupByArgs['orderBy'] }
        : { orderBy?: NewsArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsArticle model
   */
  readonly fields: NewsArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsArticle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsArticle model
   */
  interface NewsArticleFieldRefs {
    readonly id: FieldRef<"NewsArticle", 'Int'>
    readonly title: FieldRef<"NewsArticle", 'String'>
    readonly content: FieldRef<"NewsArticle", 'String'>
    readonly source: FieldRef<"NewsArticle", 'String'>
    readonly sourceUrl: FieldRef<"NewsArticle", 'String'>
    readonly publishedAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly relevance: FieldRef<"NewsArticle", 'Int'>
    readonly category: FieldRef<"NewsArticle", 'String'>
    readonly imageUrl: FieldRef<"NewsArticle", 'String'>
    readonly createdAt: FieldRef<"NewsArticle", 'DateTime'>
    readonly updatedAt: FieldRef<"NewsArticle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsArticle findUnique
   */
  export type NewsArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findUniqueOrThrow
   */
  export type NewsArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle findFirst
   */
  export type NewsArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findFirstOrThrow
   */
  export type NewsArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticle to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsArticles.
     */
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle findMany
   */
  export type NewsArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter, which NewsArticles to fetch.
     */
    where?: NewsArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsArticles to fetch.
     */
    orderBy?: NewsArticleOrderByWithRelationInput | NewsArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsArticles.
     */
    cursor?: NewsArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsArticles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsArticles.
     */
    skip?: number
    distinct?: NewsArticleScalarFieldEnum | NewsArticleScalarFieldEnum[]
  }

  /**
   * NewsArticle create
   */
  export type NewsArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data needed to create a NewsArticle.
     */
    data: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
  }

  /**
   * NewsArticle createMany
   */
  export type NewsArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle createManyAndReturn
   */
  export type NewsArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to create many NewsArticles.
     */
    data: NewsArticleCreateManyInput | NewsArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsArticle update
   */
  export type NewsArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data needed to update a NewsArticle.
     */
    data: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
    /**
     * Choose, which NewsArticle to update.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle updateMany
   */
  export type NewsArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle updateManyAndReturn
   */
  export type NewsArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The data used to update NewsArticles.
     */
    data: XOR<NewsArticleUpdateManyMutationInput, NewsArticleUncheckedUpdateManyInput>
    /**
     * Filter which NewsArticles to update
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to update.
     */
    limit?: number
  }

  /**
   * NewsArticle upsert
   */
  export type NewsArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * The filter to search for the NewsArticle to update in case it exists.
     */
    where: NewsArticleWhereUniqueInput
    /**
     * In case the NewsArticle found by the `where` argument doesn't exist, create a new NewsArticle with this data.
     */
    create: XOR<NewsArticleCreateInput, NewsArticleUncheckedCreateInput>
    /**
     * In case the NewsArticle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsArticleUpdateInput, NewsArticleUncheckedUpdateInput>
  }

  /**
   * NewsArticle delete
   */
  export type NewsArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
    /**
     * Filter which NewsArticle to delete.
     */
    where: NewsArticleWhereUniqueInput
  }

  /**
   * NewsArticle deleteMany
   */
  export type NewsArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsArticles to delete
     */
    where?: NewsArticleWhereInput
    /**
     * Limit how many NewsArticles to delete.
     */
    limit?: number
  }

  /**
   * NewsArticle without action
   */
  export type NewsArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsArticle
     */
    select?: NewsArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsArticle
     */
    omit?: NewsArticleOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: string | null
    passwordHash: string | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    role: string | null
    passwordHash: string | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    role: number
    passwordHash: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    role?: true
    passwordHash?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    role: string
    passwordHash: string
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    role?: boolean
    passwordHash?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "role" | "passwordHash" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      role: string
      passwordHash: string
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    description: string | null
    userId: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    description: string | null
    userId: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    description: number
    userId: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    description?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    description?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    description?: true
    userId?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    action: string
    description: string
    userId: number | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    description?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    description?: boolean
    userId?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "description" | "userId" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["activityLog"]>

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      description: string
      userId: number | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'Int'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
  }


  /**
   * Model DataCache
   */

  export type AggregateDataCache = {
    _count: DataCacheCountAggregateOutputType | null
    _avg: DataCacheAvgAggregateOutputType | null
    _sum: DataCacheSumAggregateOutputType | null
    _min: DataCacheMinAggregateOutputType | null
    _max: DataCacheMaxAggregateOutputType | null
  }

  export type DataCacheAvgAggregateOutputType = {
    id: number | null
  }

  export type DataCacheSumAggregateOutputType = {
    id: number | null
  }

  export type DataCacheMinAggregateOutputType = {
    id: number | null
    source: string | null
    key: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataCacheMaxAggregateOutputType = {
    id: number | null
    source: string | null
    key: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataCacheCountAggregateOutputType = {
    id: number
    source: number
    key: number
    data: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataCacheAvgAggregateInputType = {
    id?: true
  }

  export type DataCacheSumAggregateInputType = {
    id?: true
  }

  export type DataCacheMinAggregateInputType = {
    id?: true
    source?: true
    key?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataCacheMaxAggregateInputType = {
    id?: true
    source?: true
    key?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataCacheCountAggregateInputType = {
    id?: true
    source?: true
    key?: true
    data?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataCache to aggregate.
     */
    where?: DataCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataCaches to fetch.
     */
    orderBy?: DataCacheOrderByWithRelationInput | DataCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataCaches
    **/
    _count?: true | DataCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataCacheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataCacheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataCacheMaxAggregateInputType
  }

  export type GetDataCacheAggregateType<T extends DataCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateDataCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataCache[P]>
      : GetScalarType<T[P], AggregateDataCache[P]>
  }




  export type DataCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataCacheWhereInput
    orderBy?: DataCacheOrderByWithAggregationInput | DataCacheOrderByWithAggregationInput[]
    by: DataCacheScalarFieldEnum[] | DataCacheScalarFieldEnum
    having?: DataCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataCacheCountAggregateInputType | true
    _avg?: DataCacheAvgAggregateInputType
    _sum?: DataCacheSumAggregateInputType
    _min?: DataCacheMinAggregateInputType
    _max?: DataCacheMaxAggregateInputType
  }

  export type DataCacheGroupByOutputType = {
    id: number
    source: string
    key: string
    data: JsonValue
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: DataCacheCountAggregateOutputType | null
    _avg: DataCacheAvgAggregateOutputType | null
    _sum: DataCacheSumAggregateOutputType | null
    _min: DataCacheMinAggregateOutputType | null
    _max: DataCacheMaxAggregateOutputType | null
  }

  type GetDataCacheGroupByPayload<T extends DataCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataCacheGroupByOutputType[P]>
            : GetScalarType<T[P], DataCacheGroupByOutputType[P]>
        }
      >
    >


  export type DataCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    key?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataCache"]>

  export type DataCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    key?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataCache"]>

  export type DataCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    key?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dataCache"]>

  export type DataCacheSelectScalar = {
    id?: boolean
    source?: boolean
    key?: boolean
    data?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "key" | "data" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["dataCache"]>

  export type $DataCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      source: string
      key: string
      data: Prisma.JsonValue
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataCache"]>
    composites: {}
  }

  type DataCacheGetPayload<S extends boolean | null | undefined | DataCacheDefaultArgs> = $Result.GetResult<Prisma.$DataCachePayload, S>

  type DataCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataCacheCountAggregateInputType | true
    }

  export interface DataCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataCache'], meta: { name: 'DataCache' } }
    /**
     * Find zero or one DataCache that matches the filter.
     * @param {DataCacheFindUniqueArgs} args - Arguments to find a DataCache
     * @example
     * // Get one DataCache
     * const dataCache = await prisma.dataCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataCacheFindUniqueArgs>(args: SelectSubset<T, DataCacheFindUniqueArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataCacheFindUniqueOrThrowArgs} args - Arguments to find a DataCache
     * @example
     * // Get one DataCache
     * const dataCache = await prisma.dataCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, DataCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheFindFirstArgs} args - Arguments to find a DataCache
     * @example
     * // Get one DataCache
     * const dataCache = await prisma.dataCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataCacheFindFirstArgs>(args?: SelectSubset<T, DataCacheFindFirstArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheFindFirstOrThrowArgs} args - Arguments to find a DataCache
     * @example
     * // Get one DataCache
     * const dataCache = await prisma.dataCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, DataCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataCaches
     * const dataCaches = await prisma.dataCache.findMany()
     * 
     * // Get first 10 DataCaches
     * const dataCaches = await prisma.dataCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataCacheWithIdOnly = await prisma.dataCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataCacheFindManyArgs>(args?: SelectSubset<T, DataCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataCache.
     * @param {DataCacheCreateArgs} args - Arguments to create a DataCache.
     * @example
     * // Create one DataCache
     * const DataCache = await prisma.dataCache.create({
     *   data: {
     *     // ... data to create a DataCache
     *   }
     * })
     * 
     */
    create<T extends DataCacheCreateArgs>(args: SelectSubset<T, DataCacheCreateArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataCaches.
     * @param {DataCacheCreateManyArgs} args - Arguments to create many DataCaches.
     * @example
     * // Create many DataCaches
     * const dataCache = await prisma.dataCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataCacheCreateManyArgs>(args?: SelectSubset<T, DataCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataCaches and returns the data saved in the database.
     * @param {DataCacheCreateManyAndReturnArgs} args - Arguments to create many DataCaches.
     * @example
     * // Create many DataCaches
     * const dataCache = await prisma.dataCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataCaches and only return the `id`
     * const dataCacheWithIdOnly = await prisma.dataCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, DataCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataCache.
     * @param {DataCacheDeleteArgs} args - Arguments to delete one DataCache.
     * @example
     * // Delete one DataCache
     * const DataCache = await prisma.dataCache.delete({
     *   where: {
     *     // ... filter to delete one DataCache
     *   }
     * })
     * 
     */
    delete<T extends DataCacheDeleteArgs>(args: SelectSubset<T, DataCacheDeleteArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataCache.
     * @param {DataCacheUpdateArgs} args - Arguments to update one DataCache.
     * @example
     * // Update one DataCache
     * const dataCache = await prisma.dataCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataCacheUpdateArgs>(args: SelectSubset<T, DataCacheUpdateArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataCaches.
     * @param {DataCacheDeleteManyArgs} args - Arguments to filter DataCaches to delete.
     * @example
     * // Delete a few DataCaches
     * const { count } = await prisma.dataCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataCacheDeleteManyArgs>(args?: SelectSubset<T, DataCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataCaches
     * const dataCache = await prisma.dataCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataCacheUpdateManyArgs>(args: SelectSubset<T, DataCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataCaches and returns the data updated in the database.
     * @param {DataCacheUpdateManyAndReturnArgs} args - Arguments to update many DataCaches.
     * @example
     * // Update many DataCaches
     * const dataCache = await prisma.dataCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataCaches and only return the `id`
     * const dataCacheWithIdOnly = await prisma.dataCache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, DataCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataCache.
     * @param {DataCacheUpsertArgs} args - Arguments to update or create a DataCache.
     * @example
     * // Update or create a DataCache
     * const dataCache = await prisma.dataCache.upsert({
     *   create: {
     *     // ... data to create a DataCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataCache we want to update
     *   }
     * })
     */
    upsert<T extends DataCacheUpsertArgs>(args: SelectSubset<T, DataCacheUpsertArgs<ExtArgs>>): Prisma__DataCacheClient<$Result.GetResult<Prisma.$DataCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheCountArgs} args - Arguments to filter DataCaches to count.
     * @example
     * // Count the number of DataCaches
     * const count = await prisma.dataCache.count({
     *   where: {
     *     // ... the filter for the DataCaches we want to count
     *   }
     * })
    **/
    count<T extends DataCacheCountArgs>(
      args?: Subset<T, DataCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataCacheAggregateArgs>(args: Subset<T, DataCacheAggregateArgs>): Prisma.PrismaPromise<GetDataCacheAggregateType<T>>

    /**
     * Group by DataCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataCacheGroupByArgs['orderBy'] }
        : { orderBy?: DataCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataCache model
   */
  readonly fields: DataCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataCache model
   */
  interface DataCacheFieldRefs {
    readonly id: FieldRef<"DataCache", 'Int'>
    readonly source: FieldRef<"DataCache", 'String'>
    readonly key: FieldRef<"DataCache", 'String'>
    readonly data: FieldRef<"DataCache", 'Json'>
    readonly expiresAt: FieldRef<"DataCache", 'DateTime'>
    readonly createdAt: FieldRef<"DataCache", 'DateTime'>
    readonly updatedAt: FieldRef<"DataCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataCache findUnique
   */
  export type DataCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * Filter, which DataCache to fetch.
     */
    where: DataCacheWhereUniqueInput
  }

  /**
   * DataCache findUniqueOrThrow
   */
  export type DataCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * Filter, which DataCache to fetch.
     */
    where: DataCacheWhereUniqueInput
  }

  /**
   * DataCache findFirst
   */
  export type DataCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * Filter, which DataCache to fetch.
     */
    where?: DataCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataCaches to fetch.
     */
    orderBy?: DataCacheOrderByWithRelationInput | DataCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataCaches.
     */
    cursor?: DataCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataCaches.
     */
    distinct?: DataCacheScalarFieldEnum | DataCacheScalarFieldEnum[]
  }

  /**
   * DataCache findFirstOrThrow
   */
  export type DataCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * Filter, which DataCache to fetch.
     */
    where?: DataCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataCaches to fetch.
     */
    orderBy?: DataCacheOrderByWithRelationInput | DataCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataCaches.
     */
    cursor?: DataCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataCaches.
     */
    distinct?: DataCacheScalarFieldEnum | DataCacheScalarFieldEnum[]
  }

  /**
   * DataCache findMany
   */
  export type DataCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * Filter, which DataCaches to fetch.
     */
    where?: DataCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataCaches to fetch.
     */
    orderBy?: DataCacheOrderByWithRelationInput | DataCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataCaches.
     */
    cursor?: DataCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataCaches.
     */
    skip?: number
    distinct?: DataCacheScalarFieldEnum | DataCacheScalarFieldEnum[]
  }

  /**
   * DataCache create
   */
  export type DataCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a DataCache.
     */
    data: XOR<DataCacheCreateInput, DataCacheUncheckedCreateInput>
  }

  /**
   * DataCache createMany
   */
  export type DataCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataCaches.
     */
    data: DataCacheCreateManyInput | DataCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataCache createManyAndReturn
   */
  export type DataCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * The data used to create many DataCaches.
     */
    data: DataCacheCreateManyInput | DataCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataCache update
   */
  export type DataCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a DataCache.
     */
    data: XOR<DataCacheUpdateInput, DataCacheUncheckedUpdateInput>
    /**
     * Choose, which DataCache to update.
     */
    where: DataCacheWhereUniqueInput
  }

  /**
   * DataCache updateMany
   */
  export type DataCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataCaches.
     */
    data: XOR<DataCacheUpdateManyMutationInput, DataCacheUncheckedUpdateManyInput>
    /**
     * Filter which DataCaches to update
     */
    where?: DataCacheWhereInput
    /**
     * Limit how many DataCaches to update.
     */
    limit?: number
  }

  /**
   * DataCache updateManyAndReturn
   */
  export type DataCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * The data used to update DataCaches.
     */
    data: XOR<DataCacheUpdateManyMutationInput, DataCacheUncheckedUpdateManyInput>
    /**
     * Filter which DataCaches to update
     */
    where?: DataCacheWhereInput
    /**
     * Limit how many DataCaches to update.
     */
    limit?: number
  }

  /**
   * DataCache upsert
   */
  export type DataCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the DataCache to update in case it exists.
     */
    where: DataCacheWhereUniqueInput
    /**
     * In case the DataCache found by the `where` argument doesn't exist, create a new DataCache with this data.
     */
    create: XOR<DataCacheCreateInput, DataCacheUncheckedCreateInput>
    /**
     * In case the DataCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataCacheUpdateInput, DataCacheUncheckedUpdateInput>
  }

  /**
   * DataCache delete
   */
  export type DataCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
    /**
     * Filter which DataCache to delete.
     */
    where: DataCacheWhereUniqueInput
  }

  /**
   * DataCache deleteMany
   */
  export type DataCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataCaches to delete
     */
    where?: DataCacheWhereInput
    /**
     * Limit how many DataCaches to delete.
     */
    limit?: number
  }

  /**
   * DataCache without action
   */
  export type DataCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataCache
     */
    select?: DataCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataCache
     */
    omit?: DataCacheOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IncidentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    location: 'location',
    coordinates: 'coordinates',
    severity: 'severity',
    incidentType: 'incidentType',
    status: 'status',
    reportedAt: 'reportedAt',
    resolvedAt: 'resolvedAt',
    sourceId: 'sourceId',
    sourceSystem: 'sourceSystem',
    storeId: 'storeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentScalarFieldEnum = (typeof IncidentScalarFieldEnum)[keyof typeof IncidentScalarFieldEnum]


  export const IncidentUpdateScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    message: 'message',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type IncidentUpdateScalarFieldEnum = (typeof IncidentUpdateScalarFieldEnum)[keyof typeof IncidentUpdateScalarFieldEnum]


  export const IncidentResponseScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    responseType: 'responseType',
    responder: 'responder',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IncidentResponseScalarFieldEnum = (typeof IncidentResponseScalarFieldEnum)[keyof typeof IncidentResponseScalarFieldEnum]


  export const IncidentAssetScalarFieldEnum: {
    id: 'id',
    incidentId: 'incidentId',
    assetType: 'assetType',
    url: 'url',
    fileName: 'fileName',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type IncidentAssetScalarFieldEnum = (typeof IncidentAssetScalarFieldEnum)[keyof typeof IncidentAssetScalarFieldEnum]


  export const WeatherAlertScalarFieldEnum: {
    id: 'id',
    alertType: 'alertType',
    title: 'title',
    description: 'description',
    severity: 'severity',
    area: 'area',
    coordinates: 'coordinates',
    startTime: 'startTime',
    endTime: 'endTime',
    source: 'source',
    sourceId: 'sourceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeatherAlertScalarFieldEnum = (typeof WeatherAlertScalarFieldEnum)[keyof typeof WeatherAlertScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    storeNumber: 'storeNumber',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    phone: 'phone',
    latitude: 'latitude',
    longitude: 'longitude',
    isActive: 'isActive',
    lastIncident: 'lastIncident',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const StoreWeatherAlertScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    weatherAlertId: 'weatherAlertId',
    distance: 'distance',
    createdAt: 'createdAt'
  };

  export type StoreWeatherAlertScalarFieldEnum = (typeof StoreWeatherAlertScalarFieldEnum)[keyof typeof StoreWeatherAlertScalarFieldEnum]


  export const NewsArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    source: 'source',
    sourceUrl: 'sourceUrl',
    publishedAt: 'publishedAt',
    relevance: 'relevance',
    category: 'category',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsArticleScalarFieldEnum = (typeof NewsArticleScalarFieldEnum)[keyof typeof NewsArticleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    role: 'role',
    passwordHash: 'passwordHash',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    description: 'description',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const DataCacheScalarFieldEnum: {
    id: 'id',
    source: 'source',
    key: 'key',
    data: 'data',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataCacheScalarFieldEnum = (typeof DataCacheScalarFieldEnum)[keyof typeof DataCacheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type IncidentWhereInput = {
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    id?: IntFilter<"Incident"> | number
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    coordinates?: JsonNullableFilter<"Incident">
    severity?: IntFilter<"Incident"> | number
    incidentType?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    sourceId?: StringNullableFilter<"Incident"> | string | null
    sourceSystem?: StringNullableFilter<"Incident"> | string | null
    storeId?: IntNullableFilter<"Incident"> | number | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    incidentUpdates?: IncidentUpdateListRelationFilter
    responses?: IncidentResponseListRelationFilter
    assets?: IncidentAssetListRelationFilter
  }

  export type IncidentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    coordinates?: SortOrderInput | SortOrder
    severity?: SortOrder
    incidentType?: SortOrder
    status?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceSystem?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    incidentUpdates?: IncidentUpdateOrderByRelationAggregateInput
    responses?: IncidentResponseOrderByRelationAggregateInput
    assets?: IncidentAssetOrderByRelationAggregateInput
  }

  export type IncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentWhereInput | IncidentWhereInput[]
    OR?: IncidentWhereInput[]
    NOT?: IncidentWhereInput | IncidentWhereInput[]
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    coordinates?: JsonNullableFilter<"Incident">
    severity?: IntFilter<"Incident"> | number
    incidentType?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    sourceId?: StringNullableFilter<"Incident"> | string | null
    sourceSystem?: StringNullableFilter<"Incident"> | string | null
    storeId?: IntNullableFilter<"Incident"> | number | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    incidentUpdates?: IncidentUpdateListRelationFilter
    responses?: IncidentResponseListRelationFilter
    assets?: IncidentAssetListRelationFilter
  }, "id">

  export type IncidentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    coordinates?: SortOrderInput | SortOrder
    severity?: SortOrder
    incidentType?: SortOrder
    status?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    sourceId?: SortOrderInput | SortOrder
    sourceSystem?: SortOrderInput | SortOrder
    storeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentCountOrderByAggregateInput
    _avg?: IncidentAvgOrderByAggregateInput
    _max?: IncidentMaxOrderByAggregateInput
    _min?: IncidentMinOrderByAggregateInput
    _sum?: IncidentSumOrderByAggregateInput
  }

  export type IncidentScalarWhereWithAggregatesInput = {
    AND?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    OR?: IncidentScalarWhereWithAggregatesInput[]
    NOT?: IncidentScalarWhereWithAggregatesInput | IncidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Incident"> | number
    title?: StringWithAggregatesFilter<"Incident"> | string
    description?: StringWithAggregatesFilter<"Incident"> | string
    location?: StringWithAggregatesFilter<"Incident"> | string
    coordinates?: JsonNullableWithAggregatesFilter<"Incident">
    severity?: IntWithAggregatesFilter<"Incident"> | number
    incidentType?: StringWithAggregatesFilter<"Incident"> | string
    status?: StringWithAggregatesFilter<"Incident"> | string
    reportedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Incident"> | Date | string | null
    sourceId?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    sourceSystem?: StringNullableWithAggregatesFilter<"Incident"> | string | null
    storeId?: IntNullableWithAggregatesFilter<"Incident"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Incident"> | Date | string
  }

  export type IncidentUpdateWhereInput = {
    AND?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    OR?: IncidentUpdateWhereInput[]
    NOT?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    id?: IntFilter<"IncidentUpdate"> | number
    incidentId?: IntFilter<"IncidentUpdate"> | number
    message?: StringFilter<"IncidentUpdate"> | string
    status?: StringNullableFilter<"IncidentUpdate"> | string | null
    createdBy?: StringNullableFilter<"IncidentUpdate"> | string | null
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentUpdateOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    OR?: IncidentUpdateWhereInput[]
    NOT?: IncidentUpdateWhereInput | IncidentUpdateWhereInput[]
    incidentId?: IntFilter<"IncidentUpdate"> | number
    message?: StringFilter<"IncidentUpdate"> | string
    status?: StringNullableFilter<"IncidentUpdate"> | string | null
    createdBy?: StringNullableFilter<"IncidentUpdate"> | string | null
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IncidentUpdateCountOrderByAggregateInput
    _avg?: IncidentUpdateAvgOrderByAggregateInput
    _max?: IncidentUpdateMaxOrderByAggregateInput
    _min?: IncidentUpdateMinOrderByAggregateInput
    _sum?: IncidentUpdateSumOrderByAggregateInput
  }

  export type IncidentUpdateScalarWhereWithAggregatesInput = {
    AND?: IncidentUpdateScalarWhereWithAggregatesInput | IncidentUpdateScalarWhereWithAggregatesInput[]
    OR?: IncidentUpdateScalarWhereWithAggregatesInput[]
    NOT?: IncidentUpdateScalarWhereWithAggregatesInput | IncidentUpdateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncidentUpdate"> | number
    incidentId?: IntWithAggregatesFilter<"IncidentUpdate"> | number
    message?: StringWithAggregatesFilter<"IncidentUpdate"> | string
    status?: StringNullableWithAggregatesFilter<"IncidentUpdate"> | string | null
    createdBy?: StringNullableWithAggregatesFilter<"IncidentUpdate"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentUpdate"> | Date | string
  }

  export type IncidentResponseWhereInput = {
    AND?: IncidentResponseWhereInput | IncidentResponseWhereInput[]
    OR?: IncidentResponseWhereInput[]
    NOT?: IncidentResponseWhereInput | IncidentResponseWhereInput[]
    id?: IntFilter<"IncidentResponse"> | number
    incidentId?: IntFilter<"IncidentResponse"> | number
    responseType?: StringFilter<"IncidentResponse"> | string
    responder?: StringNullableFilter<"IncidentResponse"> | string | null
    notes?: StringNullableFilter<"IncidentResponse"> | string | null
    createdAt?: DateTimeFilter<"IncidentResponse"> | Date | string
    updatedAt?: DateTimeFilter<"IncidentResponse"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentResponseOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    responseType?: SortOrder
    responder?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentResponseWhereInput | IncidentResponseWhereInput[]
    OR?: IncidentResponseWhereInput[]
    NOT?: IncidentResponseWhereInput | IncidentResponseWhereInput[]
    incidentId?: IntFilter<"IncidentResponse"> | number
    responseType?: StringFilter<"IncidentResponse"> | string
    responder?: StringNullableFilter<"IncidentResponse"> | string | null
    notes?: StringNullableFilter<"IncidentResponse"> | string | null
    createdAt?: DateTimeFilter<"IncidentResponse"> | Date | string
    updatedAt?: DateTimeFilter<"IncidentResponse"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentResponseOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    responseType?: SortOrder
    responder?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IncidentResponseCountOrderByAggregateInput
    _avg?: IncidentResponseAvgOrderByAggregateInput
    _max?: IncidentResponseMaxOrderByAggregateInput
    _min?: IncidentResponseMinOrderByAggregateInput
    _sum?: IncidentResponseSumOrderByAggregateInput
  }

  export type IncidentResponseScalarWhereWithAggregatesInput = {
    AND?: IncidentResponseScalarWhereWithAggregatesInput | IncidentResponseScalarWhereWithAggregatesInput[]
    OR?: IncidentResponseScalarWhereWithAggregatesInput[]
    NOT?: IncidentResponseScalarWhereWithAggregatesInput | IncidentResponseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncidentResponse"> | number
    incidentId?: IntWithAggregatesFilter<"IncidentResponse"> | number
    responseType?: StringWithAggregatesFilter<"IncidentResponse"> | string
    responder?: StringNullableWithAggregatesFilter<"IncidentResponse"> | string | null
    notes?: StringNullableWithAggregatesFilter<"IncidentResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IncidentResponse"> | Date | string
  }

  export type IncidentAssetWhereInput = {
    AND?: IncidentAssetWhereInput | IncidentAssetWhereInput[]
    OR?: IncidentAssetWhereInput[]
    NOT?: IncidentAssetWhereInput | IncidentAssetWhereInput[]
    id?: IntFilter<"IncidentAsset"> | number
    incidentId?: IntFilter<"IncidentAsset"> | number
    assetType?: StringFilter<"IncidentAsset"> | string
    url?: StringFilter<"IncidentAsset"> | string
    fileName?: StringNullableFilter<"IncidentAsset"> | string | null
    description?: StringNullableFilter<"IncidentAsset"> | string | null
    createdAt?: DateTimeFilter<"IncidentAsset"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }

  export type IncidentAssetOrderByWithRelationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    assetType?: SortOrder
    url?: SortOrder
    fileName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    incident?: IncidentOrderByWithRelationInput
  }

  export type IncidentAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IncidentAssetWhereInput | IncidentAssetWhereInput[]
    OR?: IncidentAssetWhereInput[]
    NOT?: IncidentAssetWhereInput | IncidentAssetWhereInput[]
    incidentId?: IntFilter<"IncidentAsset"> | number
    assetType?: StringFilter<"IncidentAsset"> | string
    url?: StringFilter<"IncidentAsset"> | string
    fileName?: StringNullableFilter<"IncidentAsset"> | string | null
    description?: StringNullableFilter<"IncidentAsset"> | string | null
    createdAt?: DateTimeFilter<"IncidentAsset"> | Date | string
    incident?: XOR<IncidentScalarRelationFilter, IncidentWhereInput>
  }, "id">

  export type IncidentAssetOrderByWithAggregationInput = {
    id?: SortOrder
    incidentId?: SortOrder
    assetType?: SortOrder
    url?: SortOrder
    fileName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: IncidentAssetCountOrderByAggregateInput
    _avg?: IncidentAssetAvgOrderByAggregateInput
    _max?: IncidentAssetMaxOrderByAggregateInput
    _min?: IncidentAssetMinOrderByAggregateInput
    _sum?: IncidentAssetSumOrderByAggregateInput
  }

  export type IncidentAssetScalarWhereWithAggregatesInput = {
    AND?: IncidentAssetScalarWhereWithAggregatesInput | IncidentAssetScalarWhereWithAggregatesInput[]
    OR?: IncidentAssetScalarWhereWithAggregatesInput[]
    NOT?: IncidentAssetScalarWhereWithAggregatesInput | IncidentAssetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IncidentAsset"> | number
    incidentId?: IntWithAggregatesFilter<"IncidentAsset"> | number
    assetType?: StringWithAggregatesFilter<"IncidentAsset"> | string
    url?: StringWithAggregatesFilter<"IncidentAsset"> | string
    fileName?: StringNullableWithAggregatesFilter<"IncidentAsset"> | string | null
    description?: StringNullableWithAggregatesFilter<"IncidentAsset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IncidentAsset"> | Date | string
  }

  export type WeatherAlertWhereInput = {
    AND?: WeatherAlertWhereInput | WeatherAlertWhereInput[]
    OR?: WeatherAlertWhereInput[]
    NOT?: WeatherAlertWhereInput | WeatherAlertWhereInput[]
    id?: IntFilter<"WeatherAlert"> | number
    alertType?: StringFilter<"WeatherAlert"> | string
    title?: StringFilter<"WeatherAlert"> | string
    description?: StringFilter<"WeatherAlert"> | string
    severity?: StringFilter<"WeatherAlert"> | string
    area?: StringFilter<"WeatherAlert"> | string
    coordinates?: JsonNullableFilter<"WeatherAlert">
    startTime?: DateTimeFilter<"WeatherAlert"> | Date | string
    endTime?: DateTimeNullableFilter<"WeatherAlert"> | Date | string | null
    source?: StringFilter<"WeatherAlert"> | string
    sourceId?: StringNullableFilter<"WeatherAlert"> | string | null
    createdAt?: DateTimeFilter<"WeatherAlert"> | Date | string
    updatedAt?: DateTimeFilter<"WeatherAlert"> | Date | string
    affectedStores?: StoreWeatherAlertListRelationFilter
  }

  export type WeatherAlertOrderByWithRelationInput = {
    id?: SortOrder
    alertType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    area?: SortOrder
    coordinates?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    source?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    affectedStores?: StoreWeatherAlertOrderByRelationAggregateInput
  }

  export type WeatherAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeatherAlertWhereInput | WeatherAlertWhereInput[]
    OR?: WeatherAlertWhereInput[]
    NOT?: WeatherAlertWhereInput | WeatherAlertWhereInput[]
    alertType?: StringFilter<"WeatherAlert"> | string
    title?: StringFilter<"WeatherAlert"> | string
    description?: StringFilter<"WeatherAlert"> | string
    severity?: StringFilter<"WeatherAlert"> | string
    area?: StringFilter<"WeatherAlert"> | string
    coordinates?: JsonNullableFilter<"WeatherAlert">
    startTime?: DateTimeFilter<"WeatherAlert"> | Date | string
    endTime?: DateTimeNullableFilter<"WeatherAlert"> | Date | string | null
    source?: StringFilter<"WeatherAlert"> | string
    sourceId?: StringNullableFilter<"WeatherAlert"> | string | null
    createdAt?: DateTimeFilter<"WeatherAlert"> | Date | string
    updatedAt?: DateTimeFilter<"WeatherAlert"> | Date | string
    affectedStores?: StoreWeatherAlertListRelationFilter
  }, "id">

  export type WeatherAlertOrderByWithAggregationInput = {
    id?: SortOrder
    alertType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    area?: SortOrder
    coordinates?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    source?: SortOrder
    sourceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeatherAlertCountOrderByAggregateInput
    _avg?: WeatherAlertAvgOrderByAggregateInput
    _max?: WeatherAlertMaxOrderByAggregateInput
    _min?: WeatherAlertMinOrderByAggregateInput
    _sum?: WeatherAlertSumOrderByAggregateInput
  }

  export type WeatherAlertScalarWhereWithAggregatesInput = {
    AND?: WeatherAlertScalarWhereWithAggregatesInput | WeatherAlertScalarWhereWithAggregatesInput[]
    OR?: WeatherAlertScalarWhereWithAggregatesInput[]
    NOT?: WeatherAlertScalarWhereWithAggregatesInput | WeatherAlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeatherAlert"> | number
    alertType?: StringWithAggregatesFilter<"WeatherAlert"> | string
    title?: StringWithAggregatesFilter<"WeatherAlert"> | string
    description?: StringWithAggregatesFilter<"WeatherAlert"> | string
    severity?: StringWithAggregatesFilter<"WeatherAlert"> | string
    area?: StringWithAggregatesFilter<"WeatherAlert"> | string
    coordinates?: JsonNullableWithAggregatesFilter<"WeatherAlert">
    startTime?: DateTimeWithAggregatesFilter<"WeatherAlert"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"WeatherAlert"> | Date | string | null
    source?: StringWithAggregatesFilter<"WeatherAlert"> | string
    sourceId?: StringNullableWithAggregatesFilter<"WeatherAlert"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WeatherAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeatherAlert"> | Date | string
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    storeNumber?: StringFilter<"Store"> | string
    name?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    state?: StringFilter<"Store"> | string
    zipCode?: StringFilter<"Store"> | string
    phone?: StringNullableFilter<"Store"> | string | null
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    isActive?: BoolFilter<"Store"> | boolean
    lastIncident?: DateTimeNullableFilter<"Store"> | Date | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    incidents?: IncidentListRelationFilter
    weatherAlerts?: StoreWeatherAlertListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    storeNumber?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastIncident?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    incidents?: IncidentOrderByRelationAggregateInput
    weatherAlerts?: StoreWeatherAlertOrderByRelationAggregateInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    storeNumber?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    state?: StringFilter<"Store"> | string
    zipCode?: StringFilter<"Store"> | string
    phone?: StringNullableFilter<"Store"> | string | null
    latitude?: FloatNullableFilter<"Store"> | number | null
    longitude?: FloatNullableFilter<"Store"> | number | null
    isActive?: BoolFilter<"Store"> | boolean
    lastIncident?: DateTimeNullableFilter<"Store"> | Date | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeFilter<"Store"> | Date | string
    incidents?: IncidentListRelationFilter
    weatherAlerts?: StoreWeatherAlertListRelationFilter
  }, "id" | "storeNumber">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    storeNumber?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastIncident?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    storeNumber?: StringWithAggregatesFilter<"Store"> | string
    name?: StringWithAggregatesFilter<"Store"> | string
    address?: StringWithAggregatesFilter<"Store"> | string
    city?: StringWithAggregatesFilter<"Store"> | string
    state?: StringWithAggregatesFilter<"Store"> | string
    zipCode?: StringWithAggregatesFilter<"Store"> | string
    phone?: StringNullableWithAggregatesFilter<"Store"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Store"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Store"> | number | null
    isActive?: BoolWithAggregatesFilter<"Store"> | boolean
    lastIncident?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
  }

  export type StoreWeatherAlertWhereInput = {
    AND?: StoreWeatherAlertWhereInput | StoreWeatherAlertWhereInput[]
    OR?: StoreWeatherAlertWhereInput[]
    NOT?: StoreWeatherAlertWhereInput | StoreWeatherAlertWhereInput[]
    id?: IntFilter<"StoreWeatherAlert"> | number
    storeId?: IntFilter<"StoreWeatherAlert"> | number
    weatherAlertId?: IntFilter<"StoreWeatherAlert"> | number
    distance?: FloatNullableFilter<"StoreWeatherAlert"> | number | null
    createdAt?: DateTimeFilter<"StoreWeatherAlert"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    weatherAlert?: XOR<WeatherAlertScalarRelationFilter, WeatherAlertWhereInput>
  }

  export type StoreWeatherAlertOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    store?: StoreOrderByWithRelationInput
    weatherAlert?: WeatherAlertOrderByWithRelationInput
  }

  export type StoreWeatherAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    storeId_weatherAlertId?: StoreWeatherAlertStoreIdWeatherAlertIdCompoundUniqueInput
    AND?: StoreWeatherAlertWhereInput | StoreWeatherAlertWhereInput[]
    OR?: StoreWeatherAlertWhereInput[]
    NOT?: StoreWeatherAlertWhereInput | StoreWeatherAlertWhereInput[]
    storeId?: IntFilter<"StoreWeatherAlert"> | number
    weatherAlertId?: IntFilter<"StoreWeatherAlert"> | number
    distance?: FloatNullableFilter<"StoreWeatherAlert"> | number | null
    createdAt?: DateTimeFilter<"StoreWeatherAlert"> | Date | string
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    weatherAlert?: XOR<WeatherAlertScalarRelationFilter, WeatherAlertWhereInput>
  }, "id" | "storeId_weatherAlertId">

  export type StoreWeatherAlertOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StoreWeatherAlertCountOrderByAggregateInput
    _avg?: StoreWeatherAlertAvgOrderByAggregateInput
    _max?: StoreWeatherAlertMaxOrderByAggregateInput
    _min?: StoreWeatherAlertMinOrderByAggregateInput
    _sum?: StoreWeatherAlertSumOrderByAggregateInput
  }

  export type StoreWeatherAlertScalarWhereWithAggregatesInput = {
    AND?: StoreWeatherAlertScalarWhereWithAggregatesInput | StoreWeatherAlertScalarWhereWithAggregatesInput[]
    OR?: StoreWeatherAlertScalarWhereWithAggregatesInput[]
    NOT?: StoreWeatherAlertScalarWhereWithAggregatesInput | StoreWeatherAlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StoreWeatherAlert"> | number
    storeId?: IntWithAggregatesFilter<"StoreWeatherAlert"> | number
    weatherAlertId?: IntWithAggregatesFilter<"StoreWeatherAlert"> | number
    distance?: FloatNullableWithAggregatesFilter<"StoreWeatherAlert"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StoreWeatherAlert"> | Date | string
  }

  export type NewsArticleWhereInput = {
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    id?: IntFilter<"NewsArticle"> | number
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    source?: StringFilter<"NewsArticle"> | string
    sourceUrl?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    relevance?: IntNullableFilter<"NewsArticle"> | number | null
    category?: StringNullableFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }

  export type NewsArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    relevance?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsArticleWhereInput | NewsArticleWhereInput[]
    OR?: NewsArticleWhereInput[]
    NOT?: NewsArticleWhereInput | NewsArticleWhereInput[]
    title?: StringFilter<"NewsArticle"> | string
    content?: StringFilter<"NewsArticle"> | string
    source?: StringFilter<"NewsArticle"> | string
    sourceUrl?: StringFilter<"NewsArticle"> | string
    publishedAt?: DateTimeFilter<"NewsArticle"> | Date | string
    relevance?: IntNullableFilter<"NewsArticle"> | number | null
    category?: StringNullableFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeFilter<"NewsArticle"> | Date | string
  }, "id">

  export type NewsArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    relevance?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsArticleCountOrderByAggregateInput
    _avg?: NewsArticleAvgOrderByAggregateInput
    _max?: NewsArticleMaxOrderByAggregateInput
    _min?: NewsArticleMinOrderByAggregateInput
    _sum?: NewsArticleSumOrderByAggregateInput
  }

  export type NewsArticleScalarWhereWithAggregatesInput = {
    AND?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    OR?: NewsArticleScalarWhereWithAggregatesInput[]
    NOT?: NewsArticleScalarWhereWithAggregatesInput | NewsArticleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NewsArticle"> | number
    title?: StringWithAggregatesFilter<"NewsArticle"> | string
    content?: StringWithAggregatesFilter<"NewsArticle"> | string
    source?: StringWithAggregatesFilter<"NewsArticle"> | string
    sourceUrl?: StringWithAggregatesFilter<"NewsArticle"> | string
    publishedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    relevance?: IntNullableWithAggregatesFilter<"NewsArticle"> | number | null
    category?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"NewsArticle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NewsArticle"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    userId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: StringFilter<"ActivityLog"> | string
    description?: StringFilter<"ActivityLog"> | string
    userId?: IntNullableFilter<"ActivityLog"> | number | null
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    userId?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    description?: StringWithAggregatesFilter<"ActivityLog"> | string
    userId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type DataCacheWhereInput = {
    AND?: DataCacheWhereInput | DataCacheWhereInput[]
    OR?: DataCacheWhereInput[]
    NOT?: DataCacheWhereInput | DataCacheWhereInput[]
    id?: IntFilter<"DataCache"> | number
    source?: StringFilter<"DataCache"> | string
    key?: StringFilter<"DataCache"> | string
    data?: JsonFilter<"DataCache">
    expiresAt?: DateTimeFilter<"DataCache"> | Date | string
    createdAt?: DateTimeFilter<"DataCache"> | Date | string
    updatedAt?: DateTimeFilter<"DataCache"> | Date | string
  }

  export type DataCacheOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    key?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    source_key?: DataCacheSourceKeyCompoundUniqueInput
    AND?: DataCacheWhereInput | DataCacheWhereInput[]
    OR?: DataCacheWhereInput[]
    NOT?: DataCacheWhereInput | DataCacheWhereInput[]
    source?: StringFilter<"DataCache"> | string
    key?: StringFilter<"DataCache"> | string
    data?: JsonFilter<"DataCache">
    expiresAt?: DateTimeFilter<"DataCache"> | Date | string
    createdAt?: DateTimeFilter<"DataCache"> | Date | string
    updatedAt?: DateTimeFilter<"DataCache"> | Date | string
  }, "id" | "source_key">

  export type DataCacheOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    key?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataCacheCountOrderByAggregateInput
    _avg?: DataCacheAvgOrderByAggregateInput
    _max?: DataCacheMaxOrderByAggregateInput
    _min?: DataCacheMinOrderByAggregateInput
    _sum?: DataCacheSumOrderByAggregateInput
  }

  export type DataCacheScalarWhereWithAggregatesInput = {
    AND?: DataCacheScalarWhereWithAggregatesInput | DataCacheScalarWhereWithAggregatesInput[]
    OR?: DataCacheScalarWhereWithAggregatesInput[]
    NOT?: DataCacheScalarWhereWithAggregatesInput | DataCacheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataCache"> | number
    source?: StringWithAggregatesFilter<"DataCache"> | string
    key?: StringWithAggregatesFilter<"DataCache"> | string
    data?: JsonWithAggregatesFilter<"DataCache">
    expiresAt?: DateTimeWithAggregatesFilter<"DataCache"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DataCache"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataCache"> | Date | string
  }

  export type IncidentCreateInput = {
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    store?: StoreCreateNestedOneWithoutIncidentsInput
    incidentUpdates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
    responses?: IncidentResponseCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidentUpdates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
    responses?: IncidentResponseUncheckedCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneWithoutIncidentsNestedInput
    incidentUpdates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
    responses?: IncidentResponseUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidentUpdates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
    responses?: IncidentResponseUncheckedUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateManyInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateInput = {
    message: string
    status?: string | null
    createdBy?: string | null
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutIncidentUpdatesInput
  }

  export type IncidentUpdateUncheckedCreateInput = {
    id?: number
    incidentId: number
    message: string
    status?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type IncidentUpdateUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutIncidentUpdatesNestedInput
  }

  export type IncidentUpdateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateManyInput = {
    id?: number
    incidentId: number
    message: string
    status?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type IncidentUpdateUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentResponseCreateInput = {
    responseType: string
    responder?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incident: IncidentCreateNestedOneWithoutResponsesInput
  }

  export type IncidentResponseUncheckedCreateInput = {
    id?: number
    incidentId: number
    responseType: string
    responder?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentResponseUpdateInput = {
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type IncidentResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentResponseCreateManyInput = {
    id?: number
    incidentId: number
    responseType: string
    responder?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentResponseUpdateManyMutationInput = {
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentAssetCreateInput = {
    assetType: string
    url: string
    fileName?: string | null
    description?: string | null
    createdAt?: Date | string
    incident: IncidentCreateNestedOneWithoutAssetsInput
  }

  export type IncidentAssetUncheckedCreateInput = {
    id?: number
    incidentId: number
    assetType: string
    url: string
    fileName?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type IncidentAssetUpdateInput = {
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incident?: IncidentUpdateOneRequiredWithoutAssetsNestedInput
  }

  export type IncidentAssetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentAssetCreateManyInput = {
    id?: number
    incidentId: number
    assetType: string
    url: string
    fileName?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type IncidentAssetUpdateManyMutationInput = {
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentAssetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    incidentId?: IntFieldUpdateOperationsInput | number
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherAlertCreateInput = {
    alertType: string
    title: string
    description: string
    severity: string
    area: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    source: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affectedStores?: StoreWeatherAlertCreateNestedManyWithoutWeatherAlertInput
  }

  export type WeatherAlertUncheckedCreateInput = {
    id?: number
    alertType: string
    title: string
    description: string
    severity: string
    area: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    source: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affectedStores?: StoreWeatherAlertUncheckedCreateNestedManyWithoutWeatherAlertInput
  }

  export type WeatherAlertUpdateInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affectedStores?: StoreWeatherAlertUpdateManyWithoutWeatherAlertNestedInput
  }

  export type WeatherAlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affectedStores?: StoreWeatherAlertUncheckedUpdateManyWithoutWeatherAlertNestedInput
  }

  export type WeatherAlertCreateManyInput = {
    id?: number
    alertType: string
    title: string
    description: string
    severity: string
    area: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    source: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherAlertUpdateManyMutationInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherAlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreCreateInput = {
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutStoreInput
    weatherAlerts?: StoreWeatherAlertCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutStoreInput
    weatherAlerts?: StoreWeatherAlertUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutStoreNestedInput
    weatherAlerts?: StoreWeatherAlertUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutStoreNestedInput
    weatherAlerts?: StoreWeatherAlertUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreUpdateManyMutationInput = {
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertCreateInput = {
    distance?: number | null
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutWeatherAlertsInput
    weatherAlert: WeatherAlertCreateNestedOneWithoutAffectedStoresInput
  }

  export type StoreWeatherAlertUncheckedCreateInput = {
    id?: number
    storeId: number
    weatherAlertId: number
    distance?: number | null
    createdAt?: Date | string
  }

  export type StoreWeatherAlertUpdateInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutWeatherAlertsNestedInput
    weatherAlert?: WeatherAlertUpdateOneRequiredWithoutAffectedStoresNestedInput
  }

  export type StoreWeatherAlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    weatherAlertId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertCreateManyInput = {
    id?: number
    storeId: number
    weatherAlertId: number
    distance?: number | null
    createdAt?: Date | string
  }

  export type StoreWeatherAlertUpdateManyMutationInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    weatherAlertId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateInput = {
    title: string
    content: string
    source: string
    sourceUrl: string
    publishedAt: Date | string
    relevance?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    source: string
    sourceUrl: string
    publishedAt: Date | string
    relevance?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relevance?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relevance?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleCreateManyInput = {
    id?: number
    title: string
    content: string
    source: string
    sourceUrl: string
    publishedAt: Date | string
    relevance?: number | null
    category?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsArticleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relevance?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsArticleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    sourceUrl?: StringFieldUpdateOperationsInput | string
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    relevance?: NullableIntFieldUpdateOperationsInput | number | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    role: string
    passwordHash: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    role: string
    passwordHash: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    role: string
    passwordHash: string
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    action: string
    description: string
    userId?: number | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    action: string
    description: string
    userId?: number | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    action: string
    description: string
    userId?: number | null
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataCacheCreateInput = {
    source: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCacheUncheckedCreateInput = {
    id?: number
    source: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCacheUpdateInput = {
    source?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataCacheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataCacheCreateManyInput = {
    id?: number
    source: string
    key: string
    data: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataCacheUpdateManyMutationInput = {
    source?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataCacheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StoreNullableScalarRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type IncidentUpdateListRelationFilter = {
    every?: IncidentUpdateWhereInput
    some?: IncidentUpdateWhereInput
    none?: IncidentUpdateWhereInput
  }

  export type IncidentResponseListRelationFilter = {
    every?: IncidentResponseWhereInput
    some?: IncidentResponseWhereInput
    none?: IncidentResponseWhereInput
  }

  export type IncidentAssetListRelationFilter = {
    every?: IncidentAssetWhereInput
    some?: IncidentAssetWhereInput
    none?: IncidentAssetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IncidentUpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentAssetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncidentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    coordinates?: SortOrder
    severity?: SortOrder
    incidentType?: SortOrder
    status?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrder
    sourceId?: SortOrder
    sourceSystem?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentAvgOrderByAggregateInput = {
    id?: SortOrder
    severity?: SortOrder
    storeId?: SortOrder
  }

  export type IncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    severity?: SortOrder
    incidentType?: SortOrder
    status?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrder
    sourceId?: SortOrder
    sourceSystem?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    severity?: SortOrder
    incidentType?: SortOrder
    status?: SortOrder
    reportedAt?: SortOrder
    resolvedAt?: SortOrder
    sourceId?: SortOrder
    sourceSystem?: SortOrder
    storeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentSumOrderByAggregateInput = {
    id?: SortOrder
    severity?: SortOrder
    storeId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IncidentScalarRelationFilter = {
    is?: IncidentWhereInput
    isNot?: IncidentWhereInput
  }

  export type IncidentUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentUpdateAvgOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type IncidentUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentUpdateSumOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type IncidentResponseCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    responseType?: SortOrder
    responder?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type IncidentResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    responseType?: SortOrder
    responder?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentResponseMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    responseType?: SortOrder
    responder?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IncidentResponseSumOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type IncidentAssetCountOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    assetType?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentAssetAvgOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type IncidentAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    assetType?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentAssetMinOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
    assetType?: SortOrder
    url?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IncidentAssetSumOrderByAggregateInput = {
    id?: SortOrder
    incidentId?: SortOrder
  }

  export type StoreWeatherAlertListRelationFilter = {
    every?: StoreWeatherAlertWhereInput
    some?: StoreWeatherAlertWhereInput
    none?: StoreWeatherAlertWhereInput
  }

  export type StoreWeatherAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeatherAlertCountOrderByAggregateInput = {
    id?: SortOrder
    alertType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    area?: SortOrder
    coordinates?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherAlertAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeatherAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    alertType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    area?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherAlertMinOrderByAggregateInput = {
    id?: SortOrder
    alertType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    severity?: SortOrder
    area?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    source?: SortOrder
    sourceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherAlertSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IncidentListRelationFilter = {
    every?: IncidentWhereInput
    some?: IncidentWhereInput
    none?: IncidentWhereInput
  }

  export type IncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    storeNumber?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    lastIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    storeNumber?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    lastIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    storeNumber?: SortOrder
    name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zipCode?: SortOrder
    phone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    isActive?: SortOrder
    lastIncident?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type WeatherAlertScalarRelationFilter = {
    is?: WeatherAlertWhereInput
    isNot?: WeatherAlertWhereInput
  }

  export type StoreWeatherAlertStoreIdWeatherAlertIdCompoundUniqueInput = {
    storeId: number
    weatherAlertId: number
  }

  export type StoreWeatherAlertCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreWeatherAlertAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrder
  }

  export type StoreWeatherAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreWeatherAlertMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreWeatherAlertSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    weatherAlertId?: SortOrder
    distance?: SortOrder
  }

  export type NewsArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    relevance?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleAvgOrderByAggregateInput = {
    id?: SortOrder
    relevance?: SortOrder
  }

  export type NewsArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    relevance?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    sourceUrl?: SortOrder
    publishedAt?: SortOrder
    relevance?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsArticleSumOrderByAggregateInput = {
    id?: SortOrder
    relevance?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DataCacheSourceKeyCompoundUniqueInput = {
    source: string
    key: string
  }

  export type DataCacheCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    key?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataCacheAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DataCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    key?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataCacheMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    key?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataCacheSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StoreCreateNestedOneWithoutIncidentsInput = {
    create?: XOR<StoreCreateWithoutIncidentsInput, StoreUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutIncidentsInput
    connect?: StoreWhereUniqueInput
  }

  export type IncidentUpdateCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type IncidentResponseCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentResponseCreateWithoutIncidentInput, IncidentResponseUncheckedCreateWithoutIncidentInput> | IncidentResponseCreateWithoutIncidentInput[] | IncidentResponseUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentResponseCreateOrConnectWithoutIncidentInput | IncidentResponseCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentResponseCreateManyIncidentInputEnvelope
    connect?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
  }

  export type IncidentAssetCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentAssetCreateWithoutIncidentInput, IncidentAssetUncheckedCreateWithoutIncidentInput> | IncidentAssetCreateWithoutIncidentInput[] | IncidentAssetUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentAssetCreateOrConnectWithoutIncidentInput | IncidentAssetCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentAssetCreateManyIncidentInputEnvelope
    connect?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
  }

  export type IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
  }

  export type IncidentResponseUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentResponseCreateWithoutIncidentInput, IncidentResponseUncheckedCreateWithoutIncidentInput> | IncidentResponseCreateWithoutIncidentInput[] | IncidentResponseUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentResponseCreateOrConnectWithoutIncidentInput | IncidentResponseCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentResponseCreateManyIncidentInputEnvelope
    connect?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
  }

  export type IncidentAssetUncheckedCreateNestedManyWithoutIncidentInput = {
    create?: XOR<IncidentAssetCreateWithoutIncidentInput, IncidentAssetUncheckedCreateWithoutIncidentInput> | IncidentAssetCreateWithoutIncidentInput[] | IncidentAssetUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentAssetCreateOrConnectWithoutIncidentInput | IncidentAssetCreateOrConnectWithoutIncidentInput[]
    createMany?: IncidentAssetCreateManyIncidentInputEnvelope
    connect?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StoreUpdateOneWithoutIncidentsNestedInput = {
    create?: XOR<StoreCreateWithoutIncidentsInput, StoreUncheckedCreateWithoutIncidentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutIncidentsInput
    upsert?: StoreUpsertWithoutIncidentsInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutIncidentsInput, StoreUpdateWithoutIncidentsInput>, StoreUncheckedUpdateWithoutIncidentsInput>
  }

  export type IncidentUpdateUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutIncidentInput | IncidentUpdateUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type IncidentResponseUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentResponseCreateWithoutIncidentInput, IncidentResponseUncheckedCreateWithoutIncidentInput> | IncidentResponseCreateWithoutIncidentInput[] | IncidentResponseUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentResponseCreateOrConnectWithoutIncidentInput | IncidentResponseCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentResponseUpsertWithWhereUniqueWithoutIncidentInput | IncidentResponseUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentResponseCreateManyIncidentInputEnvelope
    set?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    disconnect?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    delete?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    connect?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    update?: IncidentResponseUpdateWithWhereUniqueWithoutIncidentInput | IncidentResponseUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentResponseUpdateManyWithWhereWithoutIncidentInput | IncidentResponseUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentResponseScalarWhereInput | IncidentResponseScalarWhereInput[]
  }

  export type IncidentAssetUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentAssetCreateWithoutIncidentInput, IncidentAssetUncheckedCreateWithoutIncidentInput> | IncidentAssetCreateWithoutIncidentInput[] | IncidentAssetUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentAssetCreateOrConnectWithoutIncidentInput | IncidentAssetCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentAssetUpsertWithWhereUniqueWithoutIncidentInput | IncidentAssetUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentAssetCreateManyIncidentInputEnvelope
    set?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    disconnect?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    delete?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    connect?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    update?: IncidentAssetUpdateWithWhereUniqueWithoutIncidentInput | IncidentAssetUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentAssetUpdateManyWithWhereWithoutIncidentInput | IncidentAssetUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentAssetScalarWhereInput | IncidentAssetScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput> | IncidentUpdateCreateWithoutIncidentInput[] | IncidentUpdateUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentUpdateCreateOrConnectWithoutIncidentInput | IncidentUpdateCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentUpdateCreateManyIncidentInputEnvelope
    set?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    disconnect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    delete?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    connect?: IncidentUpdateWhereUniqueInput | IncidentUpdateWhereUniqueInput[]
    update?: IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput | IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentUpdateUpdateManyWithWhereWithoutIncidentInput | IncidentUpdateUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
  }

  export type IncidentResponseUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentResponseCreateWithoutIncidentInput, IncidentResponseUncheckedCreateWithoutIncidentInput> | IncidentResponseCreateWithoutIncidentInput[] | IncidentResponseUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentResponseCreateOrConnectWithoutIncidentInput | IncidentResponseCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentResponseUpsertWithWhereUniqueWithoutIncidentInput | IncidentResponseUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentResponseCreateManyIncidentInputEnvelope
    set?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    disconnect?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    delete?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    connect?: IncidentResponseWhereUniqueInput | IncidentResponseWhereUniqueInput[]
    update?: IncidentResponseUpdateWithWhereUniqueWithoutIncidentInput | IncidentResponseUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentResponseUpdateManyWithWhereWithoutIncidentInput | IncidentResponseUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentResponseScalarWhereInput | IncidentResponseScalarWhereInput[]
  }

  export type IncidentAssetUncheckedUpdateManyWithoutIncidentNestedInput = {
    create?: XOR<IncidentAssetCreateWithoutIncidentInput, IncidentAssetUncheckedCreateWithoutIncidentInput> | IncidentAssetCreateWithoutIncidentInput[] | IncidentAssetUncheckedCreateWithoutIncidentInput[]
    connectOrCreate?: IncidentAssetCreateOrConnectWithoutIncidentInput | IncidentAssetCreateOrConnectWithoutIncidentInput[]
    upsert?: IncidentAssetUpsertWithWhereUniqueWithoutIncidentInput | IncidentAssetUpsertWithWhereUniqueWithoutIncidentInput[]
    createMany?: IncidentAssetCreateManyIncidentInputEnvelope
    set?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    disconnect?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    delete?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    connect?: IncidentAssetWhereUniqueInput | IncidentAssetWhereUniqueInput[]
    update?: IncidentAssetUpdateWithWhereUniqueWithoutIncidentInput | IncidentAssetUpdateWithWhereUniqueWithoutIncidentInput[]
    updateMany?: IncidentAssetUpdateManyWithWhereWithoutIncidentInput | IncidentAssetUpdateManyWithWhereWithoutIncidentInput[]
    deleteMany?: IncidentAssetScalarWhereInput | IncidentAssetScalarWhereInput[]
  }

  export type IncidentCreateNestedOneWithoutIncidentUpdatesInput = {
    create?: XOR<IncidentCreateWithoutIncidentUpdatesInput, IncidentUncheckedCreateWithoutIncidentUpdatesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutIncidentUpdatesInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutIncidentUpdatesNestedInput = {
    create?: XOR<IncidentCreateWithoutIncidentUpdatesInput, IncidentUncheckedCreateWithoutIncidentUpdatesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutIncidentUpdatesInput
    upsert?: IncidentUpsertWithoutIncidentUpdatesInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutIncidentUpdatesInput, IncidentUpdateWithoutIncidentUpdatesInput>, IncidentUncheckedUpdateWithoutIncidentUpdatesInput>
  }

  export type IncidentCreateNestedOneWithoutResponsesInput = {
    create?: XOR<IncidentCreateWithoutResponsesInput, IncidentUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutResponsesInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<IncidentCreateWithoutResponsesInput, IncidentUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutResponsesInput
    upsert?: IncidentUpsertWithoutResponsesInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutResponsesInput, IncidentUpdateWithoutResponsesInput>, IncidentUncheckedUpdateWithoutResponsesInput>
  }

  export type IncidentCreateNestedOneWithoutAssetsInput = {
    create?: XOR<IncidentCreateWithoutAssetsInput, IncidentUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutAssetsInput
    connect?: IncidentWhereUniqueInput
  }

  export type IncidentUpdateOneRequiredWithoutAssetsNestedInput = {
    create?: XOR<IncidentCreateWithoutAssetsInput, IncidentUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: IncidentCreateOrConnectWithoutAssetsInput
    upsert?: IncidentUpsertWithoutAssetsInput
    connect?: IncidentWhereUniqueInput
    update?: XOR<XOR<IncidentUpdateToOneWithWhereWithoutAssetsInput, IncidentUpdateWithoutAssetsInput>, IncidentUncheckedUpdateWithoutAssetsInput>
  }

  export type StoreWeatherAlertCreateNestedManyWithoutWeatherAlertInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput> | StoreWeatherAlertCreateWithoutWeatherAlertInput[] | StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput | StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput[]
    createMany?: StoreWeatherAlertCreateManyWeatherAlertInputEnvelope
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
  }

  export type StoreWeatherAlertUncheckedCreateNestedManyWithoutWeatherAlertInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput> | StoreWeatherAlertCreateWithoutWeatherAlertInput[] | StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput | StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput[]
    createMany?: StoreWeatherAlertCreateManyWeatherAlertInputEnvelope
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
  }

  export type StoreWeatherAlertUpdateManyWithoutWeatherAlertNestedInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput> | StoreWeatherAlertCreateWithoutWeatherAlertInput[] | StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput | StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput[]
    upsert?: StoreWeatherAlertUpsertWithWhereUniqueWithoutWeatherAlertInput | StoreWeatherAlertUpsertWithWhereUniqueWithoutWeatherAlertInput[]
    createMany?: StoreWeatherAlertCreateManyWeatherAlertInputEnvelope
    set?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    disconnect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    delete?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    update?: StoreWeatherAlertUpdateWithWhereUniqueWithoutWeatherAlertInput | StoreWeatherAlertUpdateWithWhereUniqueWithoutWeatherAlertInput[]
    updateMany?: StoreWeatherAlertUpdateManyWithWhereWithoutWeatherAlertInput | StoreWeatherAlertUpdateManyWithWhereWithoutWeatherAlertInput[]
    deleteMany?: StoreWeatherAlertScalarWhereInput | StoreWeatherAlertScalarWhereInput[]
  }

  export type StoreWeatherAlertUncheckedUpdateManyWithoutWeatherAlertNestedInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput> | StoreWeatherAlertCreateWithoutWeatherAlertInput[] | StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput | StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput[]
    upsert?: StoreWeatherAlertUpsertWithWhereUniqueWithoutWeatherAlertInput | StoreWeatherAlertUpsertWithWhereUniqueWithoutWeatherAlertInput[]
    createMany?: StoreWeatherAlertCreateManyWeatherAlertInputEnvelope
    set?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    disconnect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    delete?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    update?: StoreWeatherAlertUpdateWithWhereUniqueWithoutWeatherAlertInput | StoreWeatherAlertUpdateWithWhereUniqueWithoutWeatherAlertInput[]
    updateMany?: StoreWeatherAlertUpdateManyWithWhereWithoutWeatherAlertInput | StoreWeatherAlertUpdateManyWithWhereWithoutWeatherAlertInput[]
    deleteMany?: StoreWeatherAlertScalarWhereInput | StoreWeatherAlertScalarWhereInput[]
  }

  export type IncidentCreateNestedManyWithoutStoreInput = {
    create?: XOR<IncidentCreateWithoutStoreInput, IncidentUncheckedCreateWithoutStoreInput> | IncidentCreateWithoutStoreInput[] | IncidentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutStoreInput | IncidentCreateOrConnectWithoutStoreInput[]
    createMany?: IncidentCreateManyStoreInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type StoreWeatherAlertCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutStoreInput, StoreWeatherAlertUncheckedCreateWithoutStoreInput> | StoreWeatherAlertCreateWithoutStoreInput[] | StoreWeatherAlertUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutStoreInput | StoreWeatherAlertCreateOrConnectWithoutStoreInput[]
    createMany?: StoreWeatherAlertCreateManyStoreInputEnvelope
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
  }

  export type IncidentUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<IncidentCreateWithoutStoreInput, IncidentUncheckedCreateWithoutStoreInput> | IncidentCreateWithoutStoreInput[] | IncidentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutStoreInput | IncidentCreateOrConnectWithoutStoreInput[]
    createMany?: IncidentCreateManyStoreInputEnvelope
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
  }

  export type StoreWeatherAlertUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutStoreInput, StoreWeatherAlertUncheckedCreateWithoutStoreInput> | StoreWeatherAlertCreateWithoutStoreInput[] | StoreWeatherAlertUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutStoreInput | StoreWeatherAlertCreateOrConnectWithoutStoreInput[]
    createMany?: StoreWeatherAlertCreateManyStoreInputEnvelope
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IncidentUpdateManyWithoutStoreNestedInput = {
    create?: XOR<IncidentCreateWithoutStoreInput, IncidentUncheckedCreateWithoutStoreInput> | IncidentCreateWithoutStoreInput[] | IncidentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutStoreInput | IncidentCreateOrConnectWithoutStoreInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutStoreInput | IncidentUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: IncidentCreateManyStoreInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutStoreInput | IncidentUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutStoreInput | IncidentUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type StoreWeatherAlertUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutStoreInput, StoreWeatherAlertUncheckedCreateWithoutStoreInput> | StoreWeatherAlertCreateWithoutStoreInput[] | StoreWeatherAlertUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutStoreInput | StoreWeatherAlertCreateOrConnectWithoutStoreInput[]
    upsert?: StoreWeatherAlertUpsertWithWhereUniqueWithoutStoreInput | StoreWeatherAlertUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreWeatherAlertCreateManyStoreInputEnvelope
    set?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    disconnect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    delete?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    update?: StoreWeatherAlertUpdateWithWhereUniqueWithoutStoreInput | StoreWeatherAlertUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreWeatherAlertUpdateManyWithWhereWithoutStoreInput | StoreWeatherAlertUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreWeatherAlertScalarWhereInput | StoreWeatherAlertScalarWhereInput[]
  }

  export type IncidentUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<IncidentCreateWithoutStoreInput, IncidentUncheckedCreateWithoutStoreInput> | IncidentCreateWithoutStoreInput[] | IncidentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: IncidentCreateOrConnectWithoutStoreInput | IncidentCreateOrConnectWithoutStoreInput[]
    upsert?: IncidentUpsertWithWhereUniqueWithoutStoreInput | IncidentUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: IncidentCreateManyStoreInputEnvelope
    set?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    disconnect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    delete?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    connect?: IncidentWhereUniqueInput | IncidentWhereUniqueInput[]
    update?: IncidentUpdateWithWhereUniqueWithoutStoreInput | IncidentUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: IncidentUpdateManyWithWhereWithoutStoreInput | IncidentUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
  }

  export type StoreWeatherAlertUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<StoreWeatherAlertCreateWithoutStoreInput, StoreWeatherAlertUncheckedCreateWithoutStoreInput> | StoreWeatherAlertCreateWithoutStoreInput[] | StoreWeatherAlertUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: StoreWeatherAlertCreateOrConnectWithoutStoreInput | StoreWeatherAlertCreateOrConnectWithoutStoreInput[]
    upsert?: StoreWeatherAlertUpsertWithWhereUniqueWithoutStoreInput | StoreWeatherAlertUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: StoreWeatherAlertCreateManyStoreInputEnvelope
    set?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    disconnect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    delete?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    connect?: StoreWeatherAlertWhereUniqueInput | StoreWeatherAlertWhereUniqueInput[]
    update?: StoreWeatherAlertUpdateWithWhereUniqueWithoutStoreInput | StoreWeatherAlertUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: StoreWeatherAlertUpdateManyWithWhereWithoutStoreInput | StoreWeatherAlertUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: StoreWeatherAlertScalarWhereInput | StoreWeatherAlertScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutWeatherAlertsInput = {
    create?: XOR<StoreCreateWithoutWeatherAlertsInput, StoreUncheckedCreateWithoutWeatherAlertsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutWeatherAlertsInput
    connect?: StoreWhereUniqueInput
  }

  export type WeatherAlertCreateNestedOneWithoutAffectedStoresInput = {
    create?: XOR<WeatherAlertCreateWithoutAffectedStoresInput, WeatherAlertUncheckedCreateWithoutAffectedStoresInput>
    connectOrCreate?: WeatherAlertCreateOrConnectWithoutAffectedStoresInput
    connect?: WeatherAlertWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutWeatherAlertsNestedInput = {
    create?: XOR<StoreCreateWithoutWeatherAlertsInput, StoreUncheckedCreateWithoutWeatherAlertsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutWeatherAlertsInput
    upsert?: StoreUpsertWithoutWeatherAlertsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutWeatherAlertsInput, StoreUpdateWithoutWeatherAlertsInput>, StoreUncheckedUpdateWithoutWeatherAlertsInput>
  }

  export type WeatherAlertUpdateOneRequiredWithoutAffectedStoresNestedInput = {
    create?: XOR<WeatherAlertCreateWithoutAffectedStoresInput, WeatherAlertUncheckedCreateWithoutAffectedStoresInput>
    connectOrCreate?: WeatherAlertCreateOrConnectWithoutAffectedStoresInput
    upsert?: WeatherAlertUpsertWithoutAffectedStoresInput
    connect?: WeatherAlertWhereUniqueInput
    update?: XOR<XOR<WeatherAlertUpdateToOneWithWhereWithoutAffectedStoresInput, WeatherAlertUpdateWithoutAffectedStoresInput>, WeatherAlertUncheckedUpdateWithoutAffectedStoresInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StoreCreateWithoutIncidentsInput = {
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weatherAlerts?: StoreWeatherAlertCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutIncidentsInput = {
    id?: number
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weatherAlerts?: StoreWeatherAlertUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutIncidentsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutIncidentsInput, StoreUncheckedCreateWithoutIncidentsInput>
  }

  export type IncidentUpdateCreateWithoutIncidentInput = {
    message: string
    status?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type IncidentUpdateUncheckedCreateWithoutIncidentInput = {
    id?: number
    message: string
    status?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type IncidentUpdateCreateOrConnectWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    create: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateCreateManyIncidentInputEnvelope = {
    data: IncidentUpdateCreateManyIncidentInput | IncidentUpdateCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type IncidentResponseCreateWithoutIncidentInput = {
    responseType: string
    responder?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentResponseUncheckedCreateWithoutIncidentInput = {
    id?: number
    responseType: string
    responder?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentResponseCreateOrConnectWithoutIncidentInput = {
    where: IncidentResponseWhereUniqueInput
    create: XOR<IncidentResponseCreateWithoutIncidentInput, IncidentResponseUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentResponseCreateManyIncidentInputEnvelope = {
    data: IncidentResponseCreateManyIncidentInput | IncidentResponseCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type IncidentAssetCreateWithoutIncidentInput = {
    assetType: string
    url: string
    fileName?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type IncidentAssetUncheckedCreateWithoutIncidentInput = {
    id?: number
    assetType: string
    url: string
    fileName?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type IncidentAssetCreateOrConnectWithoutIncidentInput = {
    where: IncidentAssetWhereUniqueInput
    create: XOR<IncidentAssetCreateWithoutIncidentInput, IncidentAssetUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentAssetCreateManyIncidentInputEnvelope = {
    data: IncidentAssetCreateManyIncidentInput | IncidentAssetCreateManyIncidentInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutIncidentsInput = {
    update: XOR<StoreUpdateWithoutIncidentsInput, StoreUncheckedUpdateWithoutIncidentsInput>
    create: XOR<StoreCreateWithoutIncidentsInput, StoreUncheckedCreateWithoutIncidentsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutIncidentsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutIncidentsInput, StoreUncheckedUpdateWithoutIncidentsInput>
  }

  export type StoreUpdateWithoutIncidentsInput = {
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherAlerts?: StoreWeatherAlertUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutIncidentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherAlerts?: StoreWeatherAlertUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type IncidentUpdateUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    update: XOR<IncidentUpdateUpdateWithoutIncidentInput, IncidentUpdateUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentUpdateCreateWithoutIncidentInput, IncidentUpdateUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentUpdateWhereUniqueInput
    data: XOR<IncidentUpdateUpdateWithoutIncidentInput, IncidentUpdateUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentUpdateUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentUpdateScalarWhereInput
    data: XOR<IncidentUpdateUpdateManyMutationInput, IncidentUpdateUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentUpdateScalarWhereInput = {
    AND?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
    OR?: IncidentUpdateScalarWhereInput[]
    NOT?: IncidentUpdateScalarWhereInput | IncidentUpdateScalarWhereInput[]
    id?: IntFilter<"IncidentUpdate"> | number
    incidentId?: IntFilter<"IncidentUpdate"> | number
    message?: StringFilter<"IncidentUpdate"> | string
    status?: StringNullableFilter<"IncidentUpdate"> | string | null
    createdBy?: StringNullableFilter<"IncidentUpdate"> | string | null
    createdAt?: DateTimeFilter<"IncidentUpdate"> | Date | string
  }

  export type IncidentResponseUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentResponseWhereUniqueInput
    update: XOR<IncidentResponseUpdateWithoutIncidentInput, IncidentResponseUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentResponseCreateWithoutIncidentInput, IncidentResponseUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentResponseUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentResponseWhereUniqueInput
    data: XOR<IncidentResponseUpdateWithoutIncidentInput, IncidentResponseUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentResponseUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentResponseScalarWhereInput
    data: XOR<IncidentResponseUpdateManyMutationInput, IncidentResponseUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentResponseScalarWhereInput = {
    AND?: IncidentResponseScalarWhereInput | IncidentResponseScalarWhereInput[]
    OR?: IncidentResponseScalarWhereInput[]
    NOT?: IncidentResponseScalarWhereInput | IncidentResponseScalarWhereInput[]
    id?: IntFilter<"IncidentResponse"> | number
    incidentId?: IntFilter<"IncidentResponse"> | number
    responseType?: StringFilter<"IncidentResponse"> | string
    responder?: StringNullableFilter<"IncidentResponse"> | string | null
    notes?: StringNullableFilter<"IncidentResponse"> | string | null
    createdAt?: DateTimeFilter<"IncidentResponse"> | Date | string
    updatedAt?: DateTimeFilter<"IncidentResponse"> | Date | string
  }

  export type IncidentAssetUpsertWithWhereUniqueWithoutIncidentInput = {
    where: IncidentAssetWhereUniqueInput
    update: XOR<IncidentAssetUpdateWithoutIncidentInput, IncidentAssetUncheckedUpdateWithoutIncidentInput>
    create: XOR<IncidentAssetCreateWithoutIncidentInput, IncidentAssetUncheckedCreateWithoutIncidentInput>
  }

  export type IncidentAssetUpdateWithWhereUniqueWithoutIncidentInput = {
    where: IncidentAssetWhereUniqueInput
    data: XOR<IncidentAssetUpdateWithoutIncidentInput, IncidentAssetUncheckedUpdateWithoutIncidentInput>
  }

  export type IncidentAssetUpdateManyWithWhereWithoutIncidentInput = {
    where: IncidentAssetScalarWhereInput
    data: XOR<IncidentAssetUpdateManyMutationInput, IncidentAssetUncheckedUpdateManyWithoutIncidentInput>
  }

  export type IncidentAssetScalarWhereInput = {
    AND?: IncidentAssetScalarWhereInput | IncidentAssetScalarWhereInput[]
    OR?: IncidentAssetScalarWhereInput[]
    NOT?: IncidentAssetScalarWhereInput | IncidentAssetScalarWhereInput[]
    id?: IntFilter<"IncidentAsset"> | number
    incidentId?: IntFilter<"IncidentAsset"> | number
    assetType?: StringFilter<"IncidentAsset"> | string
    url?: StringFilter<"IncidentAsset"> | string
    fileName?: StringNullableFilter<"IncidentAsset"> | string | null
    description?: StringNullableFilter<"IncidentAsset"> | string | null
    createdAt?: DateTimeFilter<"IncidentAsset"> | Date | string
  }

  export type IncidentCreateWithoutIncidentUpdatesInput = {
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    store?: StoreCreateNestedOneWithoutIncidentsInput
    responses?: IncidentResponseCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutIncidentUpdatesInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: IncidentResponseUncheckedCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutIncidentUpdatesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutIncidentUpdatesInput, IncidentUncheckedCreateWithoutIncidentUpdatesInput>
  }

  export type IncidentUpsertWithoutIncidentUpdatesInput = {
    update: XOR<IncidentUpdateWithoutIncidentUpdatesInput, IncidentUncheckedUpdateWithoutIncidentUpdatesInput>
    create: XOR<IncidentCreateWithoutIncidentUpdatesInput, IncidentUncheckedCreateWithoutIncidentUpdatesInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutIncidentUpdatesInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutIncidentUpdatesInput, IncidentUncheckedUpdateWithoutIncidentUpdatesInput>
  }

  export type IncidentUpdateWithoutIncidentUpdatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneWithoutIncidentsNestedInput
    responses?: IncidentResponseUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutIncidentUpdatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: IncidentResponseUncheckedUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateWithoutResponsesInput = {
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    store?: StoreCreateNestedOneWithoutIncidentsInput
    incidentUpdates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutResponsesInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidentUpdates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutResponsesInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutResponsesInput, IncidentUncheckedCreateWithoutResponsesInput>
  }

  export type IncidentUpsertWithoutResponsesInput = {
    update: XOR<IncidentUpdateWithoutResponsesInput, IncidentUncheckedUpdateWithoutResponsesInput>
    create: XOR<IncidentCreateWithoutResponsesInput, IncidentUncheckedCreateWithoutResponsesInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutResponsesInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutResponsesInput, IncidentUncheckedUpdateWithoutResponsesInput>
  }

  export type IncidentUpdateWithoutResponsesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneWithoutIncidentsNestedInput
    incidentUpdates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidentUpdates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentCreateWithoutAssetsInput = {
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    store?: StoreCreateNestedOneWithoutIncidentsInput
    incidentUpdates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
    responses?: IncidentResponseCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutAssetsInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    storeId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidentUpdates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
    responses?: IncidentResponseUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutAssetsInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutAssetsInput, IncidentUncheckedCreateWithoutAssetsInput>
  }

  export type IncidentUpsertWithoutAssetsInput = {
    update: XOR<IncidentUpdateWithoutAssetsInput, IncidentUncheckedUpdateWithoutAssetsInput>
    create: XOR<IncidentCreateWithoutAssetsInput, IncidentUncheckedCreateWithoutAssetsInput>
    where?: IncidentWhereInput
  }

  export type IncidentUpdateToOneWithWhereWithoutAssetsInput = {
    where?: IncidentWhereInput
    data: XOR<IncidentUpdateWithoutAssetsInput, IncidentUncheckedUpdateWithoutAssetsInput>
  }

  export type IncidentUpdateWithoutAssetsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneWithoutIncidentsNestedInput
    incidentUpdates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
    responses?: IncidentResponseUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutAssetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    storeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidentUpdates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
    responses?: IncidentResponseUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type StoreWeatherAlertCreateWithoutWeatherAlertInput = {
    distance?: number | null
    createdAt?: Date | string
    store: StoreCreateNestedOneWithoutWeatherAlertsInput
  }

  export type StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput = {
    id?: number
    storeId: number
    distance?: number | null
    createdAt?: Date | string
  }

  export type StoreWeatherAlertCreateOrConnectWithoutWeatherAlertInput = {
    where: StoreWeatherAlertWhereUniqueInput
    create: XOR<StoreWeatherAlertCreateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput>
  }

  export type StoreWeatherAlertCreateManyWeatherAlertInputEnvelope = {
    data: StoreWeatherAlertCreateManyWeatherAlertInput | StoreWeatherAlertCreateManyWeatherAlertInput[]
    skipDuplicates?: boolean
  }

  export type StoreWeatherAlertUpsertWithWhereUniqueWithoutWeatherAlertInput = {
    where: StoreWeatherAlertWhereUniqueInput
    update: XOR<StoreWeatherAlertUpdateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedUpdateWithoutWeatherAlertInput>
    create: XOR<StoreWeatherAlertCreateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedCreateWithoutWeatherAlertInput>
  }

  export type StoreWeatherAlertUpdateWithWhereUniqueWithoutWeatherAlertInput = {
    where: StoreWeatherAlertWhereUniqueInput
    data: XOR<StoreWeatherAlertUpdateWithoutWeatherAlertInput, StoreWeatherAlertUncheckedUpdateWithoutWeatherAlertInput>
  }

  export type StoreWeatherAlertUpdateManyWithWhereWithoutWeatherAlertInput = {
    where: StoreWeatherAlertScalarWhereInput
    data: XOR<StoreWeatherAlertUpdateManyMutationInput, StoreWeatherAlertUncheckedUpdateManyWithoutWeatherAlertInput>
  }

  export type StoreWeatherAlertScalarWhereInput = {
    AND?: StoreWeatherAlertScalarWhereInput | StoreWeatherAlertScalarWhereInput[]
    OR?: StoreWeatherAlertScalarWhereInput[]
    NOT?: StoreWeatherAlertScalarWhereInput | StoreWeatherAlertScalarWhereInput[]
    id?: IntFilter<"StoreWeatherAlert"> | number
    storeId?: IntFilter<"StoreWeatherAlert"> | number
    weatherAlertId?: IntFilter<"StoreWeatherAlert"> | number
    distance?: FloatNullableFilter<"StoreWeatherAlert"> | number | null
    createdAt?: DateTimeFilter<"StoreWeatherAlert"> | Date | string
  }

  export type IncidentCreateWithoutStoreInput = {
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidentUpdates?: IncidentUpdateCreateNestedManyWithoutIncidentInput
    responses?: IncidentResponseCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetCreateNestedManyWithoutIncidentInput
  }

  export type IncidentUncheckedCreateWithoutStoreInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidentUpdates?: IncidentUpdateUncheckedCreateNestedManyWithoutIncidentInput
    responses?: IncidentResponseUncheckedCreateNestedManyWithoutIncidentInput
    assets?: IncidentAssetUncheckedCreateNestedManyWithoutIncidentInput
  }

  export type IncidentCreateOrConnectWithoutStoreInput = {
    where: IncidentWhereUniqueInput
    create: XOR<IncidentCreateWithoutStoreInput, IncidentUncheckedCreateWithoutStoreInput>
  }

  export type IncidentCreateManyStoreInputEnvelope = {
    data: IncidentCreateManyStoreInput | IncidentCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type StoreWeatherAlertCreateWithoutStoreInput = {
    distance?: number | null
    createdAt?: Date | string
    weatherAlert: WeatherAlertCreateNestedOneWithoutAffectedStoresInput
  }

  export type StoreWeatherAlertUncheckedCreateWithoutStoreInput = {
    id?: number
    weatherAlertId: number
    distance?: number | null
    createdAt?: Date | string
  }

  export type StoreWeatherAlertCreateOrConnectWithoutStoreInput = {
    where: StoreWeatherAlertWhereUniqueInput
    create: XOR<StoreWeatherAlertCreateWithoutStoreInput, StoreWeatherAlertUncheckedCreateWithoutStoreInput>
  }

  export type StoreWeatherAlertCreateManyStoreInputEnvelope = {
    data: StoreWeatherAlertCreateManyStoreInput | StoreWeatherAlertCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type IncidentUpsertWithWhereUniqueWithoutStoreInput = {
    where: IncidentWhereUniqueInput
    update: XOR<IncidentUpdateWithoutStoreInput, IncidentUncheckedUpdateWithoutStoreInput>
    create: XOR<IncidentCreateWithoutStoreInput, IncidentUncheckedCreateWithoutStoreInput>
  }

  export type IncidentUpdateWithWhereUniqueWithoutStoreInput = {
    where: IncidentWhereUniqueInput
    data: XOR<IncidentUpdateWithoutStoreInput, IncidentUncheckedUpdateWithoutStoreInput>
  }

  export type IncidentUpdateManyWithWhereWithoutStoreInput = {
    where: IncidentScalarWhereInput
    data: XOR<IncidentUpdateManyMutationInput, IncidentUncheckedUpdateManyWithoutStoreInput>
  }

  export type IncidentScalarWhereInput = {
    AND?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    OR?: IncidentScalarWhereInput[]
    NOT?: IncidentScalarWhereInput | IncidentScalarWhereInput[]
    id?: IntFilter<"Incident"> | number
    title?: StringFilter<"Incident"> | string
    description?: StringFilter<"Incident"> | string
    location?: StringFilter<"Incident"> | string
    coordinates?: JsonNullableFilter<"Incident">
    severity?: IntFilter<"Incident"> | number
    incidentType?: StringFilter<"Incident"> | string
    status?: StringFilter<"Incident"> | string
    reportedAt?: DateTimeFilter<"Incident"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Incident"> | Date | string | null
    sourceId?: StringNullableFilter<"Incident"> | string | null
    sourceSystem?: StringNullableFilter<"Incident"> | string | null
    storeId?: IntNullableFilter<"Incident"> | number | null
    createdAt?: DateTimeFilter<"Incident"> | Date | string
    updatedAt?: DateTimeFilter<"Incident"> | Date | string
  }

  export type StoreWeatherAlertUpsertWithWhereUniqueWithoutStoreInput = {
    where: StoreWeatherAlertWhereUniqueInput
    update: XOR<StoreWeatherAlertUpdateWithoutStoreInput, StoreWeatherAlertUncheckedUpdateWithoutStoreInput>
    create: XOR<StoreWeatherAlertCreateWithoutStoreInput, StoreWeatherAlertUncheckedCreateWithoutStoreInput>
  }

  export type StoreWeatherAlertUpdateWithWhereUniqueWithoutStoreInput = {
    where: StoreWeatherAlertWhereUniqueInput
    data: XOR<StoreWeatherAlertUpdateWithoutStoreInput, StoreWeatherAlertUncheckedUpdateWithoutStoreInput>
  }

  export type StoreWeatherAlertUpdateManyWithWhereWithoutStoreInput = {
    where: StoreWeatherAlertScalarWhereInput
    data: XOR<StoreWeatherAlertUpdateManyMutationInput, StoreWeatherAlertUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreCreateWithoutWeatherAlertsInput = {
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutWeatherAlertsInput = {
    id?: number
    storeNumber: string
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    phone?: string | null
    latitude?: number | null
    longitude?: number | null
    isActive?: boolean
    lastIncident?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    incidents?: IncidentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutWeatherAlertsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutWeatherAlertsInput, StoreUncheckedCreateWithoutWeatherAlertsInput>
  }

  export type WeatherAlertCreateWithoutAffectedStoresInput = {
    alertType: string
    title: string
    description: string
    severity: string
    area: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    source: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherAlertUncheckedCreateWithoutAffectedStoresInput = {
    id?: number
    alertType: string
    title: string
    description: string
    severity: string
    area: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    source: string
    sourceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherAlertCreateOrConnectWithoutAffectedStoresInput = {
    where: WeatherAlertWhereUniqueInput
    create: XOR<WeatherAlertCreateWithoutAffectedStoresInput, WeatherAlertUncheckedCreateWithoutAffectedStoresInput>
  }

  export type StoreUpsertWithoutWeatherAlertsInput = {
    update: XOR<StoreUpdateWithoutWeatherAlertsInput, StoreUncheckedUpdateWithoutWeatherAlertsInput>
    create: XOR<StoreCreateWithoutWeatherAlertsInput, StoreUncheckedCreateWithoutWeatherAlertsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutWeatherAlertsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutWeatherAlertsInput, StoreUncheckedUpdateWithoutWeatherAlertsInput>
  }

  export type StoreUpdateWithoutWeatherAlertsInput = {
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutWeatherAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeNumber?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastIncident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidents?: IncidentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type WeatherAlertUpsertWithoutAffectedStoresInput = {
    update: XOR<WeatherAlertUpdateWithoutAffectedStoresInput, WeatherAlertUncheckedUpdateWithoutAffectedStoresInput>
    create: XOR<WeatherAlertCreateWithoutAffectedStoresInput, WeatherAlertUncheckedCreateWithoutAffectedStoresInput>
    where?: WeatherAlertWhereInput
  }

  export type WeatherAlertUpdateToOneWithWhereWithoutAffectedStoresInput = {
    where?: WeatherAlertWhereInput
    data: XOR<WeatherAlertUpdateWithoutAffectedStoresInput, WeatherAlertUncheckedUpdateWithoutAffectedStoresInput>
  }

  export type WeatherAlertUpdateWithoutAffectedStoresInput = {
    alertType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherAlertUncheckedUpdateWithoutAffectedStoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    alertType?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    source?: StringFieldUpdateOperationsInput | string
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateCreateManyIncidentInput = {
    id?: number
    message: string
    status?: string | null
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type IncidentResponseCreateManyIncidentInput = {
    id?: number
    responseType: string
    responder?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IncidentAssetCreateManyIncidentInput = {
    id?: number
    assetType: string
    url: string
    fileName?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type IncidentUpdateUpdateWithoutIncidentInput = {
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUncheckedUpdateWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentUpdateUncheckedUpdateManyWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentResponseUpdateWithoutIncidentInput = {
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentResponseUncheckedUpdateWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentResponseUncheckedUpdateManyWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    responseType?: StringFieldUpdateOperationsInput | string
    responder?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentAssetUpdateWithoutIncidentInput = {
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentAssetUncheckedUpdateWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentAssetUncheckedUpdateManyWithoutIncidentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assetType?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertCreateManyWeatherAlertInput = {
    id?: number
    storeId: number
    distance?: number | null
    createdAt?: Date | string
  }

  export type StoreWeatherAlertUpdateWithoutWeatherAlertInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    store?: StoreUpdateOneRequiredWithoutWeatherAlertsNestedInput
  }

  export type StoreWeatherAlertUncheckedUpdateWithoutWeatherAlertInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertUncheckedUpdateManyWithoutWeatherAlertInput = {
    id?: IntFieldUpdateOperationsInput | number
    storeId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncidentCreateManyStoreInput = {
    id?: number
    title: string
    description: string
    location: string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity: number
    incidentType: string
    status: string
    reportedAt?: Date | string
    resolvedAt?: Date | string | null
    sourceId?: string | null
    sourceSystem?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StoreWeatherAlertCreateManyStoreInput = {
    id?: number
    weatherAlertId: number
    distance?: number | null
    createdAt?: Date | string
  }

  export type IncidentUpdateWithoutStoreInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidentUpdates?: IncidentUpdateUpdateManyWithoutIncidentNestedInput
    responses?: IncidentResponseUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    incidentUpdates?: IncidentUpdateUncheckedUpdateManyWithoutIncidentNestedInput
    responses?: IncidentResponseUncheckedUpdateManyWithoutIncidentNestedInput
    assets?: IncidentAssetUncheckedUpdateManyWithoutIncidentNestedInput
  }

  export type IncidentUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    coordinates?: NullableJsonNullValueInput | InputJsonValue
    severity?: IntFieldUpdateOperationsInput | number
    incidentType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceId?: NullableStringFieldUpdateOperationsInput | string | null
    sourceSystem?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertUpdateWithoutStoreInput = {
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherAlert?: WeatherAlertUpdateOneRequiredWithoutAffectedStoresNestedInput
  }

  export type StoreWeatherAlertUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherAlertId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StoreWeatherAlertUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherAlertId?: IntFieldUpdateOperationsInput | number
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}