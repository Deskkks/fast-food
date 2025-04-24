
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
 * Model codes
 * 
 */
export type codes = $Result.DefaultSelection<Prisma.$codesPayload>
/**
 * Model commands
 * 
 */
export type commands = $Result.DefaultSelection<Prisma.$commandsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model ratings
 * 
 */
export type ratings = $Result.DefaultSelection<Prisma.$ratingsPayload>
/**
 * Model stocks
 * 
 */
export type stocks = $Result.DefaultSelection<Prisma.$stocksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Codes
 * const codes = await prisma.codes.findMany()
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
   * // Fetch zero or more Codes
   * const codes = await prisma.codes.findMany()
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
   * `prisma.codes`: Exposes CRUD operations for the **codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.codes.findMany()
    * ```
    */
  get codes(): Prisma.codesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commands`: Exposes CRUD operations for the **commands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.commands.findMany()
    * ```
    */
  get commands(): Prisma.commandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratings`: Exposes CRUD operations for the **ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.ratingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocks`: Exposes CRUD operations for the **stocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stocks.findMany()
    * ```
    */
  get stocks(): Prisma.stocksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    codes: 'codes',
    commands: 'commands',
    orders: 'orders',
    ratings: 'ratings',
    stocks: 'stocks'
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
      modelProps: "codes" | "commands" | "orders" | "ratings" | "stocks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      codes: {
        payload: Prisma.$codesPayload<ExtArgs>
        fields: Prisma.codesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.codesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.codesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>
          }
          findFirst: {
            args: Prisma.codesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.codesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>
          }
          findMany: {
            args: Prisma.codesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>[]
          }
          create: {
            args: Prisma.codesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>
          }
          createMany: {
            args: Prisma.codesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.codesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>
          }
          update: {
            args: Prisma.codesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>
          }
          deleteMany: {
            args: Prisma.codesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.codesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.codesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$codesPayload>
          }
          aggregate: {
            args: Prisma.CodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodes>
          }
          groupBy: {
            args: Prisma.codesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.codesCountArgs<ExtArgs>
            result: $Utils.Optional<CodesCountAggregateOutputType> | number
          }
        }
      }
      commands: {
        payload: Prisma.$commandsPayload<ExtArgs>
        fields: Prisma.commandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>
          }
          findFirst: {
            args: Prisma.commandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>
          }
          findMany: {
            args: Prisma.commandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>[]
          }
          create: {
            args: Prisma.commandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>
          }
          createMany: {
            args: Prisma.commandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.commandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>
          }
          update: {
            args: Prisma.commandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>
          }
          deleteMany: {
            args: Prisma.commandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandsPayload>
          }
          aggregate: {
            args: Prisma.CommandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommands>
          }
          groupBy: {
            args: Prisma.commandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.commandsCountArgs<ExtArgs>
            result: $Utils.Optional<CommandsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      ratings: {
        payload: Prisma.$ratingsPayload<ExtArgs>
        fields: Prisma.ratingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ratingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ratingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findFirst: {
            args: Prisma.ratingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ratingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findMany: {
            args: Prisma.ratingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          create: {
            args: Prisma.ratingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          createMany: {
            args: Prisma.ratingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ratingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          update: {
            args: Prisma.ratingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          deleteMany: {
            args: Prisma.ratingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ratingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ratingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          aggregate: {
            args: Prisma.RatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatings>
          }
          groupBy: {
            args: Prisma.ratingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ratingsCountArgs<ExtArgs>
            result: $Utils.Optional<RatingsCountAggregateOutputType> | number
          }
        }
      }
      stocks: {
        payload: Prisma.$stocksPayload<ExtArgs>
        fields: Prisma.stocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          findFirst: {
            args: Prisma.stocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          findMany: {
            args: Prisma.stocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          create: {
            args: Prisma.stocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          createMany: {
            args: Prisma.stocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          update: {
            args: Prisma.stocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          deleteMany: {
            args: Prisma.stocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          aggregate: {
            args: Prisma.StocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocks>
          }
          groupBy: {
            args: Prisma.stocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<StocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.stocksCountArgs<ExtArgs>
            result: $Utils.Optional<StocksCountAggregateOutputType> | number
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
    codes?: codesOmit
    commands?: commandsOmit
    orders?: ordersOmit
    ratings?: ratingsOmit
    stocks?: stocksOmit
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
   * Count Type CommandsCountOutputType
   */

  export type CommandsCountOutputType = {
    orders: number
  }

  export type CommandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CommandsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CommandsCountOutputType without action
   */
  export type CommandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandsCountOutputType
     */
    select?: CommandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandsCountOutputType without action
   */
  export type CommandsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model codes
   */

  export type AggregateCodes = {
    _count: CodesCountAggregateOutputType | null
    _avg: CodesAvgAggregateOutputType | null
    _sum: CodesSumAggregateOutputType | null
    _min: CodesMinAggregateOutputType | null
    _max: CodesMaxAggregateOutputType | null
  }

  export type CodesAvgAggregateOutputType = {
    id: number | null
  }

  export type CodesSumAggregateOutputType = {
    id: number | null
  }

  export type CodesMinAggregateOutputType = {
    id: number | null
    code: string | null
    connected: boolean | null
  }

  export type CodesMaxAggregateOutputType = {
    id: number | null
    code: string | null
    connected: boolean | null
  }

  export type CodesCountAggregateOutputType = {
    id: number
    code: number
    connected: number
    _all: number
  }


  export type CodesAvgAggregateInputType = {
    id?: true
  }

  export type CodesSumAggregateInputType = {
    id?: true
  }

  export type CodesMinAggregateInputType = {
    id?: true
    code?: true
    connected?: true
  }

  export type CodesMaxAggregateInputType = {
    id?: true
    code?: true
    connected?: true
  }

  export type CodesCountAggregateInputType = {
    id?: true
    code?: true
    connected?: true
    _all?: true
  }

  export type CodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which codes to aggregate.
     */
    where?: codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codesOrderByWithRelationInput | codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned codes
    **/
    _count?: true | CodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodesMaxAggregateInputType
  }

  export type GetCodesAggregateType<T extends CodesAggregateArgs> = {
        [P in keyof T & keyof AggregateCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodes[P]>
      : GetScalarType<T[P], AggregateCodes[P]>
  }




  export type codesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: codesWhereInput
    orderBy?: codesOrderByWithAggregationInput | codesOrderByWithAggregationInput[]
    by: CodesScalarFieldEnum[] | CodesScalarFieldEnum
    having?: codesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodesCountAggregateInputType | true
    _avg?: CodesAvgAggregateInputType
    _sum?: CodesSumAggregateInputType
    _min?: CodesMinAggregateInputType
    _max?: CodesMaxAggregateInputType
  }

  export type CodesGroupByOutputType = {
    id: number
    code: string | null
    connected: boolean | null
    _count: CodesCountAggregateOutputType | null
    _avg: CodesAvgAggregateOutputType | null
    _sum: CodesSumAggregateOutputType | null
    _min: CodesMinAggregateOutputType | null
    _max: CodesMaxAggregateOutputType | null
  }

  type GetCodesGroupByPayload<T extends codesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodesGroupByOutputType[P]>
            : GetScalarType<T[P], CodesGroupByOutputType[P]>
        }
      >
    >


  export type codesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    connected?: boolean
  }, ExtArgs["result"]["codes"]>



  export type codesSelectScalar = {
    id?: boolean
    code?: boolean
    connected?: boolean
  }

  export type codesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "connected", ExtArgs["result"]["codes"]>

  export type $codesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "codes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string | null
      connected: boolean | null
    }, ExtArgs["result"]["codes"]>
    composites: {}
  }

  type codesGetPayload<S extends boolean | null | undefined | codesDefaultArgs> = $Result.GetResult<Prisma.$codesPayload, S>

  type codesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<codesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodesCountAggregateInputType | true
    }

  export interface codesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['codes'], meta: { name: 'codes' } }
    /**
     * Find zero or one Codes that matches the filter.
     * @param {codesFindUniqueArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends codesFindUniqueArgs>(args: SelectSubset<T, codesFindUniqueArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Codes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {codesFindUniqueOrThrowArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends codesFindUniqueOrThrowArgs>(args: SelectSubset<T, codesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codesFindFirstArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends codesFindFirstArgs>(args?: SelectSubset<T, codesFindFirstArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codesFindFirstOrThrowArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends codesFindFirstOrThrowArgs>(args?: SelectSubset<T, codesFindFirstOrThrowArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.codes.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.codes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codesWithIdOnly = await prisma.codes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends codesFindManyArgs>(args?: SelectSubset<T, codesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Codes.
     * @param {codesCreateArgs} args - Arguments to create a Codes.
     * @example
     * // Create one Codes
     * const Codes = await prisma.codes.create({
     *   data: {
     *     // ... data to create a Codes
     *   }
     * })
     * 
     */
    create<T extends codesCreateArgs>(args: SelectSubset<T, codesCreateArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {codesCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const codes = await prisma.codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends codesCreateManyArgs>(args?: SelectSubset<T, codesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Codes.
     * @param {codesDeleteArgs} args - Arguments to delete one Codes.
     * @example
     * // Delete one Codes
     * const Codes = await prisma.codes.delete({
     *   where: {
     *     // ... filter to delete one Codes
     *   }
     * })
     * 
     */
    delete<T extends codesDeleteArgs>(args: SelectSubset<T, codesDeleteArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Codes.
     * @param {codesUpdateArgs} args - Arguments to update one Codes.
     * @example
     * // Update one Codes
     * const codes = await prisma.codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends codesUpdateArgs>(args: SelectSubset<T, codesUpdateArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {codesDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends codesDeleteManyArgs>(args?: SelectSubset<T, codesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const codes = await prisma.codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends codesUpdateManyArgs>(args: SelectSubset<T, codesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Codes.
     * @param {codesUpsertArgs} args - Arguments to update or create a Codes.
     * @example
     * // Update or create a Codes
     * const codes = await prisma.codes.upsert({
     *   create: {
     *     // ... data to create a Codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Codes we want to update
     *   }
     * })
     */
    upsert<T extends codesUpsertArgs>(args: SelectSubset<T, codesUpsertArgs<ExtArgs>>): Prisma__codesClient<$Result.GetResult<Prisma.$codesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codesCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.codes.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends codesCountArgs>(
      args?: Subset<T, codesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodesAggregateArgs>(args: Subset<T, CodesAggregateArgs>): Prisma.PrismaPromise<GetCodesAggregateType<T>>

    /**
     * Group by Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {codesGroupByArgs} args - Group by arguments.
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
      T extends codesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: codesGroupByArgs['orderBy'] }
        : { orderBy?: codesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, codesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the codes model
   */
  readonly fields: codesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__codesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the codes model
   */
  interface codesFieldRefs {
    readonly id: FieldRef<"codes", 'Int'>
    readonly code: FieldRef<"codes", 'String'>
    readonly connected: FieldRef<"codes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * codes findUnique
   */
  export type codesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * Filter, which codes to fetch.
     */
    where: codesWhereUniqueInput
  }

  /**
   * codes findUniqueOrThrow
   */
  export type codesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * Filter, which codes to fetch.
     */
    where: codesWhereUniqueInput
  }

  /**
   * codes findFirst
   */
  export type codesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * Filter, which codes to fetch.
     */
    where?: codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codesOrderByWithRelationInput | codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for codes.
     */
    cursor?: codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of codes.
     */
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * codes findFirstOrThrow
   */
  export type codesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * Filter, which codes to fetch.
     */
    where?: codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codesOrderByWithRelationInput | codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for codes.
     */
    cursor?: codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of codes.
     */
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * codes findMany
   */
  export type codesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * Filter, which codes to fetch.
     */
    where?: codesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of codes to fetch.
     */
    orderBy?: codesOrderByWithRelationInput | codesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing codes.
     */
    cursor?: codesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` codes.
     */
    skip?: number
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * codes create
   */
  export type codesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * The data needed to create a codes.
     */
    data?: XOR<codesCreateInput, codesUncheckedCreateInput>
  }

  /**
   * codes createMany
   */
  export type codesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many codes.
     */
    data: codesCreateManyInput | codesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * codes update
   */
  export type codesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * The data needed to update a codes.
     */
    data: XOR<codesUpdateInput, codesUncheckedUpdateInput>
    /**
     * Choose, which codes to update.
     */
    where: codesWhereUniqueInput
  }

  /**
   * codes updateMany
   */
  export type codesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update codes.
     */
    data: XOR<codesUpdateManyMutationInput, codesUncheckedUpdateManyInput>
    /**
     * Filter which codes to update
     */
    where?: codesWhereInput
    /**
     * Limit how many codes to update.
     */
    limit?: number
  }

  /**
   * codes upsert
   */
  export type codesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * The filter to search for the codes to update in case it exists.
     */
    where: codesWhereUniqueInput
    /**
     * In case the codes found by the `where` argument doesn't exist, create a new codes with this data.
     */
    create: XOR<codesCreateInput, codesUncheckedCreateInput>
    /**
     * In case the codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<codesUpdateInput, codesUncheckedUpdateInput>
  }

  /**
   * codes delete
   */
  export type codesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
    /**
     * Filter which codes to delete.
     */
    where: codesWhereUniqueInput
  }

  /**
   * codes deleteMany
   */
  export type codesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which codes to delete
     */
    where?: codesWhereInput
    /**
     * Limit how many codes to delete.
     */
    limit?: number
  }

  /**
   * codes without action
   */
  export type codesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the codes
     */
    select?: codesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the codes
     */
    omit?: codesOmit<ExtArgs> | null
  }


  /**
   * Model commands
   */

  export type AggregateCommands = {
    _count: CommandsCountAggregateOutputType | null
    _avg: CommandsAvgAggregateOutputType | null
    _sum: CommandsSumAggregateOutputType | null
    _min: CommandsMinAggregateOutputType | null
    _max: CommandsMaxAggregateOutputType | null
  }

  export type CommandsAvgAggregateOutputType = {
    id: number | null
  }

  export type CommandsSumAggregateOutputType = {
    id: number | null
  }

  export type CommandsMinAggregateOutputType = {
    id: number | null
    userId: string | null
    nome: string | null
    pronto: boolean | null
    entregue: boolean | null
  }

  export type CommandsMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    nome: string | null
    pronto: boolean | null
    entregue: boolean | null
  }

  export type CommandsCountAggregateOutputType = {
    id: number
    userId: number
    nome: number
    pronto: number
    entregue: number
    _all: number
  }


  export type CommandsAvgAggregateInputType = {
    id?: true
  }

  export type CommandsSumAggregateInputType = {
    id?: true
  }

  export type CommandsMinAggregateInputType = {
    id?: true
    userId?: true
    nome?: true
    pronto?: true
    entregue?: true
  }

  export type CommandsMaxAggregateInputType = {
    id?: true
    userId?: true
    nome?: true
    pronto?: true
    entregue?: true
  }

  export type CommandsCountAggregateInputType = {
    id?: true
    userId?: true
    nome?: true
    pronto?: true
    entregue?: true
    _all?: true
  }

  export type CommandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commands to aggregate.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandsOrderByWithRelationInput | commandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commands
    **/
    _count?: true | CommandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandsMaxAggregateInputType
  }

  export type GetCommandsAggregateType<T extends CommandsAggregateArgs> = {
        [P in keyof T & keyof AggregateCommands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommands[P]>
      : GetScalarType<T[P], AggregateCommands[P]>
  }




  export type commandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commandsWhereInput
    orderBy?: commandsOrderByWithAggregationInput | commandsOrderByWithAggregationInput[]
    by: CommandsScalarFieldEnum[] | CommandsScalarFieldEnum
    having?: commandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandsCountAggregateInputType | true
    _avg?: CommandsAvgAggregateInputType
    _sum?: CommandsSumAggregateInputType
    _min?: CommandsMinAggregateInputType
    _max?: CommandsMaxAggregateInputType
  }

  export type CommandsGroupByOutputType = {
    id: number
    userId: string | null
    nome: string | null
    pronto: boolean | null
    entregue: boolean | null
    _count: CommandsCountAggregateOutputType | null
    _avg: CommandsAvgAggregateOutputType | null
    _sum: CommandsSumAggregateOutputType | null
    _min: CommandsMinAggregateOutputType | null
    _max: CommandsMaxAggregateOutputType | null
  }

  type GetCommandsGroupByPayload<T extends commandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandsGroupByOutputType[P]>
            : GetScalarType<T[P], CommandsGroupByOutputType[P]>
        }
      >
    >


  export type commandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nome?: boolean
    pronto?: boolean
    entregue?: boolean
    orders?: boolean | commands$ordersArgs<ExtArgs>
    _count?: boolean | CommandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commands"]>



  export type commandsSelectScalar = {
    id?: boolean
    userId?: boolean
    nome?: boolean
    pronto?: boolean
    entregue?: boolean
  }

  export type commandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "nome" | "pronto" | "entregue", ExtArgs["result"]["commands"]>
  export type commandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | commands$ordersArgs<ExtArgs>
    _count?: boolean | CommandsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $commandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "commands"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      nome: string | null
      pronto: boolean | null
      entregue: boolean | null
    }, ExtArgs["result"]["commands"]>
    composites: {}
  }

  type commandsGetPayload<S extends boolean | null | undefined | commandsDefaultArgs> = $Result.GetResult<Prisma.$commandsPayload, S>

  type commandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<commandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandsCountAggregateInputType | true
    }

  export interface commandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['commands'], meta: { name: 'commands' } }
    /**
     * Find zero or one Commands that matches the filter.
     * @param {commandsFindUniqueArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commandsFindUniqueArgs>(args: SelectSubset<T, commandsFindUniqueArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {commandsFindUniqueOrThrowArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commandsFindUniqueOrThrowArgs>(args: SelectSubset<T, commandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindFirstArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commandsFindFirstArgs>(args?: SelectSubset<T, commandsFindFirstArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindFirstOrThrowArgs} args - Arguments to find a Commands
     * @example
     * // Get one Commands
     * const commands = await prisma.commands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commandsFindFirstOrThrowArgs>(args?: SelectSubset<T, commandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.commands.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.commands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandsWithIdOnly = await prisma.commands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends commandsFindManyArgs>(args?: SelectSubset<T, commandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commands.
     * @param {commandsCreateArgs} args - Arguments to create a Commands.
     * @example
     * // Create one Commands
     * const Commands = await prisma.commands.create({
     *   data: {
     *     // ... data to create a Commands
     *   }
     * })
     * 
     */
    create<T extends commandsCreateArgs>(args: SelectSubset<T, commandsCreateArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commands.
     * @param {commandsCreateManyArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const commands = await prisma.commands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commandsCreateManyArgs>(args?: SelectSubset<T, commandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commands.
     * @param {commandsDeleteArgs} args - Arguments to delete one Commands.
     * @example
     * // Delete one Commands
     * const Commands = await prisma.commands.delete({
     *   where: {
     *     // ... filter to delete one Commands
     *   }
     * })
     * 
     */
    delete<T extends commandsDeleteArgs>(args: SelectSubset<T, commandsDeleteArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commands.
     * @param {commandsUpdateArgs} args - Arguments to update one Commands.
     * @example
     * // Update one Commands
     * const commands = await prisma.commands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commandsUpdateArgs>(args: SelectSubset<T, commandsUpdateArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commands.
     * @param {commandsDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.commands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commandsDeleteManyArgs>(args?: SelectSubset<T, commandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const commands = await prisma.commands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commandsUpdateManyArgs>(args: SelectSubset<T, commandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commands.
     * @param {commandsUpsertArgs} args - Arguments to update or create a Commands.
     * @example
     * // Update or create a Commands
     * const commands = await prisma.commands.upsert({
     *   create: {
     *     // ... data to create a Commands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commands we want to update
     *   }
     * })
     */
    upsert<T extends commandsUpsertArgs>(args: SelectSubset<T, commandsUpsertArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.commands.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends commandsCountArgs>(
      args?: Subset<T, commandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandsAggregateArgs>(args: Subset<T, CommandsAggregateArgs>): Prisma.PrismaPromise<GetCommandsAggregateType<T>>

    /**
     * Group by Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandsGroupByArgs} args - Group by arguments.
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
      T extends commandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commandsGroupByArgs['orderBy'] }
        : { orderBy?: commandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the commands model
   */
  readonly fields: commandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for commands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends commands$ordersArgs<ExtArgs> = {}>(args?: Subset<T, commands$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the commands model
   */
  interface commandsFieldRefs {
    readonly id: FieldRef<"commands", 'Int'>
    readonly userId: FieldRef<"commands", 'String'>
    readonly nome: FieldRef<"commands", 'String'>
    readonly pronto: FieldRef<"commands", 'Boolean'>
    readonly entregue: FieldRef<"commands", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * commands findUnique
   */
  export type commandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * Filter, which commands to fetch.
     */
    where: commandsWhereUniqueInput
  }

  /**
   * commands findUniqueOrThrow
   */
  export type commandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * Filter, which commands to fetch.
     */
    where: commandsWhereUniqueInput
  }

  /**
   * commands findFirst
   */
  export type commandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandsOrderByWithRelationInput | commandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: CommandsScalarFieldEnum | CommandsScalarFieldEnum[]
  }

  /**
   * commands findFirstOrThrow
   */
  export type commandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandsOrderByWithRelationInput | commandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: CommandsScalarFieldEnum | CommandsScalarFieldEnum[]
  }

  /**
   * commands findMany
   */
  export type commandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandsOrderByWithRelationInput | commandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commands.
     */
    cursor?: commandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    distinct?: CommandsScalarFieldEnum | CommandsScalarFieldEnum[]
  }

  /**
   * commands create
   */
  export type commandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * The data needed to create a commands.
     */
    data?: XOR<commandsCreateInput, commandsUncheckedCreateInput>
  }

  /**
   * commands createMany
   */
  export type commandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many commands.
     */
    data: commandsCreateManyInput | commandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * commands update
   */
  export type commandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * The data needed to update a commands.
     */
    data: XOR<commandsUpdateInput, commandsUncheckedUpdateInput>
    /**
     * Choose, which commands to update.
     */
    where: commandsWhereUniqueInput
  }

  /**
   * commands updateMany
   */
  export type commandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update commands.
     */
    data: XOR<commandsUpdateManyMutationInput, commandsUncheckedUpdateManyInput>
    /**
     * Filter which commands to update
     */
    where?: commandsWhereInput
    /**
     * Limit how many commands to update.
     */
    limit?: number
  }

  /**
   * commands upsert
   */
  export type commandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * The filter to search for the commands to update in case it exists.
     */
    where: commandsWhereUniqueInput
    /**
     * In case the commands found by the `where` argument doesn't exist, create a new commands with this data.
     */
    create: XOR<commandsCreateInput, commandsUncheckedCreateInput>
    /**
     * In case the commands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commandsUpdateInput, commandsUncheckedUpdateInput>
  }

  /**
   * commands delete
   */
  export type commandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    /**
     * Filter which commands to delete.
     */
    where: commandsWhereUniqueInput
  }

  /**
   * commands deleteMany
   */
  export type commandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commands to delete
     */
    where?: commandsWhereInput
    /**
     * Limit how many commands to delete.
     */
    limit?: number
  }

  /**
   * commands.orders
   */
  export type commands$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * commands without action
   */
  export type commandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    commandId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    commandId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    produto: string | null
    tipo: string | null
    commandId: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    produto: string | null
    tipo: string | null
    commandId: number | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    produto: number
    tipo: number
    commandId: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    commandId?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    commandId?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    produto?: true
    tipo?: true
    commandId?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    produto?: true
    tipo?: true
    commandId?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    produto?: true
    tipo?: true
    commandId?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    produto: string | null
    tipo: string | null
    commandId: number | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto?: boolean
    tipo?: boolean
    commandId?: boolean
    commands?: boolean | orders$commandsArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    id?: boolean
    produto?: boolean
    tipo?: boolean
    commandId?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto" | "tipo" | "commandId", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commands?: boolean | orders$commandsArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      commands: Prisma.$commandsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produto: string | null
      tipo: string | null
      commandId: number | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commands<T extends orders$commandsArgs<ExtArgs> = {}>(args?: Subset<T, orders$commandsArgs<ExtArgs>>): Prisma__commandsClient<$Result.GetResult<Prisma.$commandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly produto: FieldRef<"orders", 'String'>
    readonly tipo: FieldRef<"orders", 'String'>
    readonly commandId: FieldRef<"orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.commands
   */
  export type orders$commandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the commands
     */
    select?: commandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the commands
     */
    omit?: commandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandsInclude<ExtArgs> | null
    where?: commandsWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model ratings
   */

  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    food: number | null
    time: number | null
    recomendation: number | null
  }

  export type RatingsSumAggregateOutputType = {
    id: number | null
    rating: number | null
    food: number | null
    time: number | null
    recomendation: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: number | null
    rating: number | null
    food: number | null
    time: number | null
    recomendation: number | null
    comment: string | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: number | null
    rating: number | null
    food: number | null
    time: number | null
    recomendation: number | null
    comment: string | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    rating: number
    food: number
    time: number
    recomendation: number
    comment: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    id?: true
    rating?: true
    food?: true
    time?: true
    recomendation?: true
  }

  export type RatingsSumAggregateInputType = {
    id?: true
    rating?: true
    food?: true
    time?: true
    recomendation?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    rating?: true
    food?: true
    time?: true
    recomendation?: true
    comment?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    rating?: true
    food?: true
    time?: true
    recomendation?: true
    comment?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    rating?: true
    food?: true
    time?: true
    recomendation?: true
    comment?: true
    _all?: true
  }

  export type RatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to aggregate.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type ratingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithAggregationInput | ratingsOrderByWithAggregationInput[]
    by: RatingsScalarFieldEnum[] | RatingsScalarFieldEnum
    having?: ratingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }

  export type RatingsGroupByOutputType = {
    id: number
    rating: number | null
    food: number | null
    time: number | null
    recomendation: number | null
    comment: string | null
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends ratingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type ratingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    food?: boolean
    time?: boolean
    recomendation?: boolean
    comment?: boolean
  }, ExtArgs["result"]["ratings"]>



  export type ratingsSelectScalar = {
    id?: boolean
    rating?: boolean
    food?: boolean
    time?: boolean
    recomendation?: boolean
    comment?: boolean
  }

  export type ratingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "food" | "time" | "recomendation" | "comment", ExtArgs["result"]["ratings"]>

  export type $ratingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ratings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rating: number | null
      food: number | null
      time: number | null
      recomendation: number | null
      comment: string | null
    }, ExtArgs["result"]["ratings"]>
    composites: {}
  }

  type ratingsGetPayload<S extends boolean | null | undefined | ratingsDefaultArgs> = $Result.GetResult<Prisma.$ratingsPayload, S>

  type ratingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ratingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface ratingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ratings'], meta: { name: 'ratings' } }
    /**
     * Find zero or one Ratings that matches the filter.
     * @param {ratingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ratingsFindUniqueArgs>(args: SelectSubset<T, ratingsFindUniqueArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ratings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ratingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ratingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ratingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ratingsFindFirstArgs>(args?: SelectSubset<T, ratingsFindFirstArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ratingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ratingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ratingsFindManyArgs>(args?: SelectSubset<T, ratingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ratings.
     * @param {ratingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
     */
    create<T extends ratingsCreateArgs>(args: SelectSubset<T, ratingsCreateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {ratingsCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ratingsCreateManyArgs>(args?: SelectSubset<T, ratingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ratings.
     * @param {ratingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
     */
    delete<T extends ratingsDeleteArgs>(args: SelectSubset<T, ratingsDeleteArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ratings.
     * @param {ratingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ratingsUpdateArgs>(args: SelectSubset<T, ratingsUpdateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {ratingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ratingsDeleteManyArgs>(args?: SelectSubset<T, ratingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ratingsUpdateManyArgs>(args: SelectSubset<T, ratingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ratings.
     * @param {ratingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
     */
    upsert<T extends ratingsUpsertArgs>(args: SelectSubset<T, ratingsUpsertArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingsCountArgs>(
      args?: Subset<T, ratingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsGroupByArgs} args - Group by arguments.
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
      T extends ratingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ratingsGroupByArgs['orderBy'] }
        : { orderBy?: ratingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ratingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ratings model
   */
  readonly fields: ratingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ratingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ratings model
   */
  interface ratingsFieldRefs {
    readonly id: FieldRef<"ratings", 'Int'>
    readonly rating: FieldRef<"ratings", 'Int'>
    readonly food: FieldRef<"ratings", 'Int'>
    readonly time: FieldRef<"ratings", 'Int'>
    readonly recomendation: FieldRef<"ratings", 'Int'>
    readonly comment: FieldRef<"ratings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ratings findUnique
   */
  export type ratingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findUniqueOrThrow
   */
  export type ratingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findFirst
   */
  export type ratingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findFirstOrThrow
   */
  export type ratingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findMany
   */
  export type ratingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings create
   */
  export type ratingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data needed to create a ratings.
     */
    data?: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
  }

  /**
   * ratings createMany
   */
  export type ratingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ratings.
     */
    data: ratingsCreateManyInput | ratingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ratings update
   */
  export type ratingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data needed to update a ratings.
     */
    data: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
    /**
     * Choose, which ratings to update.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings updateMany
   */
  export type ratingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
  }

  /**
   * ratings upsert
   */
  export type ratingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The filter to search for the ratings to update in case it exists.
     */
    where: ratingsWhereUniqueInput
    /**
     * In case the ratings found by the `where` argument doesn't exist, create a new ratings with this data.
     */
    create: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
    /**
     * In case the ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
  }

  /**
   * ratings delete
   */
  export type ratingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter which ratings to delete.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings deleteMany
   */
  export type ratingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to delete
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to delete.
     */
    limit?: number
  }

  /**
   * ratings without action
   */
  export type ratingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
  }


  /**
   * Model stocks
   */

  export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  export type StocksAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type StocksSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
  }

  export type StocksMinAggregateOutputType = {
    id: number | null
    produto: string | null
    quantidade: number | null
    tipo: string | null
  }

  export type StocksMaxAggregateOutputType = {
    id: number | null
    produto: string | null
    quantidade: number | null
    tipo: string | null
  }

  export type StocksCountAggregateOutputType = {
    id: number
    produto: number
    quantidade: number
    tipo: number
    _all: number
  }


  export type StocksAvgAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type StocksSumAggregateInputType = {
    id?: true
    quantidade?: true
  }

  export type StocksMinAggregateInputType = {
    id?: true
    produto?: true
    quantidade?: true
    tipo?: true
  }

  export type StocksMaxAggregateInputType = {
    id?: true
    produto?: true
    quantidade?: true
    tipo?: true
  }

  export type StocksCountAggregateInputType = {
    id?: true
    produto?: true
    quantidade?: true
    tipo?: true
    _all?: true
  }

  export type StocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to aggregate.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocksMaxAggregateInputType
  }

  export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks[P]>
      : GetScalarType<T[P], AggregateStocks[P]>
  }




  export type stocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocksWhereInput
    orderBy?: stocksOrderByWithAggregationInput | stocksOrderByWithAggregationInput[]
    by: StocksScalarFieldEnum[] | StocksScalarFieldEnum
    having?: stocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocksCountAggregateInputType | true
    _avg?: StocksAvgAggregateInputType
    _sum?: StocksSumAggregateInputType
    _min?: StocksMinAggregateInputType
    _max?: StocksMaxAggregateInputType
  }

  export type StocksGroupByOutputType = {
    id: number
    produto: string | null
    quantidade: number | null
    tipo: string | null
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  type GetStocksGroupByPayload<T extends stocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocksGroupByOutputType[P]>
            : GetScalarType<T[P], StocksGroupByOutputType[P]>
        }
      >
    >


  export type stocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto?: boolean
    quantidade?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["stocks"]>



  export type stocksSelectScalar = {
    id?: boolean
    produto?: boolean
    quantidade?: boolean
    tipo?: boolean
  }

  export type stocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto" | "quantidade" | "tipo", ExtArgs["result"]["stocks"]>

  export type $stocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stocks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produto: string | null
      quantidade: number | null
      tipo: string | null
    }, ExtArgs["result"]["stocks"]>
    composites: {}
  }

  type stocksGetPayload<S extends boolean | null | undefined | stocksDefaultArgs> = $Result.GetResult<Prisma.$stocksPayload, S>

  type stocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StocksCountAggregateInputType | true
    }

  export interface stocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stocks'], meta: { name: 'stocks' } }
    /**
     * Find zero or one Stocks that matches the filter.
     * @param {stocksFindUniqueArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stocksFindUniqueArgs>(args: SelectSubset<T, stocksFindUniqueArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stocksFindUniqueOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stocksFindUniqueOrThrowArgs>(args: SelectSubset<T, stocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindFirstArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stocksFindFirstArgs>(args?: SelectSubset<T, stocksFindFirstArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindFirstOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stocksFindFirstOrThrowArgs>(args?: SelectSubset<T, stocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stocks.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stocksWithIdOnly = await prisma.stocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stocksFindManyArgs>(args?: SelectSubset<T, stocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stocks.
     * @param {stocksCreateArgs} args - Arguments to create a Stocks.
     * @example
     * // Create one Stocks
     * const Stocks = await prisma.stocks.create({
     *   data: {
     *     // ... data to create a Stocks
     *   }
     * })
     * 
     */
    create<T extends stocksCreateArgs>(args: SelectSubset<T, stocksCreateArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {stocksCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stocksCreateManyArgs>(args?: SelectSubset<T, stocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stocks.
     * @param {stocksDeleteArgs} args - Arguments to delete one Stocks.
     * @example
     * // Delete one Stocks
     * const Stocks = await prisma.stocks.delete({
     *   where: {
     *     // ... filter to delete one Stocks
     *   }
     * })
     * 
     */
    delete<T extends stocksDeleteArgs>(args: SelectSubset<T, stocksDeleteArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stocks.
     * @param {stocksUpdateArgs} args - Arguments to update one Stocks.
     * @example
     * // Update one Stocks
     * const stocks = await prisma.stocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stocksUpdateArgs>(args: SelectSubset<T, stocksUpdateArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stocksDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stocksDeleteManyArgs>(args?: SelectSubset<T, stocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stocksUpdateManyArgs>(args: SelectSubset<T, stocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stocks.
     * @param {stocksUpsertArgs} args - Arguments to update or create a Stocks.
     * @example
     * // Update or create a Stocks
     * const stocks = await prisma.stocks.upsert({
     *   create: {
     *     // ... data to create a Stocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks we want to update
     *   }
     * })
     */
    upsert<T extends stocksUpsertArgs>(args: SelectSubset<T, stocksUpsertArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stocks.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stocksCountArgs>(
      args?: Subset<T, stocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StocksAggregateArgs>(args: Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>

    /**
     * Group by Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksGroupByArgs} args - Group by arguments.
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
      T extends stocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stocksGroupByArgs['orderBy'] }
        : { orderBy?: stocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stocks model
   */
  readonly fields: stocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the stocks model
   */
  interface stocksFieldRefs {
    readonly id: FieldRef<"stocks", 'Int'>
    readonly produto: FieldRef<"stocks", 'String'>
    readonly quantidade: FieldRef<"stocks", 'Int'>
    readonly tipo: FieldRef<"stocks", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stocks findUnique
   */
  export type stocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks findUniqueOrThrow
   */
  export type stocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks findFirst
   */
  export type stocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks findFirstOrThrow
   */
  export type stocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks findMany
   */
  export type stocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks create
   */
  export type stocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data needed to create a stocks.
     */
    data?: XOR<stocksCreateInput, stocksUncheckedCreateInput>
  }

  /**
   * stocks createMany
   */
  export type stocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stocksCreateManyInput | stocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stocks update
   */
  export type stocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data needed to update a stocks.
     */
    data: XOR<stocksUpdateInput, stocksUncheckedUpdateInput>
    /**
     * Choose, which stocks to update.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks updateMany
   */
  export type stocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stocksWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stocks upsert
   */
  export type stocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The filter to search for the stocks to update in case it exists.
     */
    where: stocksWhereUniqueInput
    /**
     * In case the stocks found by the `where` argument doesn't exist, create a new stocks with this data.
     */
    create: XOR<stocksCreateInput, stocksUncheckedCreateInput>
    /**
     * In case the stocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stocksUpdateInput, stocksUncheckedUpdateInput>
  }

  /**
   * stocks delete
   */
  export type stocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Filter which stocks to delete.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks deleteMany
   */
  export type stocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stocksWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stocks without action
   */
  export type stocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
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


  export const CodesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    connected: 'connected'
  };

  export type CodesScalarFieldEnum = (typeof CodesScalarFieldEnum)[keyof typeof CodesScalarFieldEnum]


  export const CommandsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nome: 'nome',
    pronto: 'pronto',
    entregue: 'entregue'
  };

  export type CommandsScalarFieldEnum = (typeof CommandsScalarFieldEnum)[keyof typeof CommandsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    produto: 'produto',
    tipo: 'tipo',
    commandId: 'commandId'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    food: 'food',
    time: 'time',
    recomendation: 'recomendation',
    comment: 'comment'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


  export const StocksScalarFieldEnum: {
    id: 'id',
    produto: 'produto',
    quantidade: 'quantidade',
    tipo: 'tipo'
  };

  export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const codesOrderByRelevanceFieldEnum: {
    code: 'code'
  };

  export type codesOrderByRelevanceFieldEnum = (typeof codesOrderByRelevanceFieldEnum)[keyof typeof codesOrderByRelevanceFieldEnum]


  export const commandsOrderByRelevanceFieldEnum: {
    userId: 'userId',
    nome: 'nome'
  };

  export type commandsOrderByRelevanceFieldEnum = (typeof commandsOrderByRelevanceFieldEnum)[keyof typeof commandsOrderByRelevanceFieldEnum]


  export const ordersOrderByRelevanceFieldEnum: {
    produto: 'produto',
    tipo: 'tipo'
  };

  export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum]


  export const ratingsOrderByRelevanceFieldEnum: {
    comment: 'comment'
  };

  export type ratingsOrderByRelevanceFieldEnum = (typeof ratingsOrderByRelevanceFieldEnum)[keyof typeof ratingsOrderByRelevanceFieldEnum]


  export const stocksOrderByRelevanceFieldEnum: {
    produto: 'produto',
    tipo: 'tipo'
  };

  export type stocksOrderByRelevanceFieldEnum = (typeof stocksOrderByRelevanceFieldEnum)[keyof typeof stocksOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type codesWhereInput = {
    AND?: codesWhereInput | codesWhereInput[]
    OR?: codesWhereInput[]
    NOT?: codesWhereInput | codesWhereInput[]
    id?: IntFilter<"codes"> | number
    code?: StringNullableFilter<"codes"> | string | null
    connected?: BoolNullableFilter<"codes"> | boolean | null
  }

  export type codesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    connected?: SortOrderInput | SortOrder
    _relevance?: codesOrderByRelevanceInput
  }

  export type codesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: codesWhereInput | codesWhereInput[]
    OR?: codesWhereInput[]
    NOT?: codesWhereInput | codesWhereInput[]
    code?: StringNullableFilter<"codes"> | string | null
    connected?: BoolNullableFilter<"codes"> | boolean | null
  }, "id">

  export type codesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    connected?: SortOrderInput | SortOrder
    _count?: codesCountOrderByAggregateInput
    _avg?: codesAvgOrderByAggregateInput
    _max?: codesMaxOrderByAggregateInput
    _min?: codesMinOrderByAggregateInput
    _sum?: codesSumOrderByAggregateInput
  }

  export type codesScalarWhereWithAggregatesInput = {
    AND?: codesScalarWhereWithAggregatesInput | codesScalarWhereWithAggregatesInput[]
    OR?: codesScalarWhereWithAggregatesInput[]
    NOT?: codesScalarWhereWithAggregatesInput | codesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"codes"> | number
    code?: StringNullableWithAggregatesFilter<"codes"> | string | null
    connected?: BoolNullableWithAggregatesFilter<"codes"> | boolean | null
  }

  export type commandsWhereInput = {
    AND?: commandsWhereInput | commandsWhereInput[]
    OR?: commandsWhereInput[]
    NOT?: commandsWhereInput | commandsWhereInput[]
    id?: IntFilter<"commands"> | number
    userId?: StringNullableFilter<"commands"> | string | null
    nome?: StringNullableFilter<"commands"> | string | null
    pronto?: BoolNullableFilter<"commands"> | boolean | null
    entregue?: BoolNullableFilter<"commands"> | boolean | null
    orders?: OrdersListRelationFilter
  }

  export type commandsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    pronto?: SortOrderInput | SortOrder
    entregue?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: commandsOrderByRelevanceInput
  }

  export type commandsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: commandsWhereInput | commandsWhereInput[]
    OR?: commandsWhereInput[]
    NOT?: commandsWhereInput | commandsWhereInput[]
    nome?: StringNullableFilter<"commands"> | string | null
    pronto?: BoolNullableFilter<"commands"> | boolean | null
    entregue?: BoolNullableFilter<"commands"> | boolean | null
    orders?: OrdersListRelationFilter
  }, "id" | "userId">

  export type commandsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    pronto?: SortOrderInput | SortOrder
    entregue?: SortOrderInput | SortOrder
    _count?: commandsCountOrderByAggregateInput
    _avg?: commandsAvgOrderByAggregateInput
    _max?: commandsMaxOrderByAggregateInput
    _min?: commandsMinOrderByAggregateInput
    _sum?: commandsSumOrderByAggregateInput
  }

  export type commandsScalarWhereWithAggregatesInput = {
    AND?: commandsScalarWhereWithAggregatesInput | commandsScalarWhereWithAggregatesInput[]
    OR?: commandsScalarWhereWithAggregatesInput[]
    NOT?: commandsScalarWhereWithAggregatesInput | commandsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"commands"> | number
    userId?: StringNullableWithAggregatesFilter<"commands"> | string | null
    nome?: StringNullableWithAggregatesFilter<"commands"> | string | null
    pronto?: BoolNullableWithAggregatesFilter<"commands"> | boolean | null
    entregue?: BoolNullableWithAggregatesFilter<"commands"> | boolean | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    produto?: StringNullableFilter<"orders"> | string | null
    tipo?: StringNullableFilter<"orders"> | string | null
    commandId?: IntNullableFilter<"orders"> | number | null
    commands?: XOR<CommandsNullableScalarRelationFilter, commandsWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    produto?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    commandId?: SortOrderInput | SortOrder
    commands?: commandsOrderByWithRelationInput
    _relevance?: ordersOrderByRelevanceInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    produto?: StringNullableFilter<"orders"> | string | null
    tipo?: StringNullableFilter<"orders"> | string | null
    commandId?: IntNullableFilter<"orders"> | number | null
    commands?: XOR<CommandsNullableScalarRelationFilter, commandsWhereInput> | null
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    produto?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    commandId?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    produto?: StringNullableWithAggregatesFilter<"orders"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"orders"> | string | null
    commandId?: IntNullableWithAggregatesFilter<"orders"> | number | null
  }

  export type ratingsWhereInput = {
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    id?: IntFilter<"ratings"> | number
    rating?: IntNullableFilter<"ratings"> | number | null
    food?: IntNullableFilter<"ratings"> | number | null
    time?: IntNullableFilter<"ratings"> | number | null
    recomendation?: IntNullableFilter<"ratings"> | number | null
    comment?: StringNullableFilter<"ratings"> | string | null
  }

  export type ratingsOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrderInput | SortOrder
    food?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    recomendation?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    _relevance?: ratingsOrderByRelevanceInput
  }

  export type ratingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    rating?: IntNullableFilter<"ratings"> | number | null
    food?: IntNullableFilter<"ratings"> | number | null
    time?: IntNullableFilter<"ratings"> | number | null
    recomendation?: IntNullableFilter<"ratings"> | number | null
    comment?: StringNullableFilter<"ratings"> | string | null
  }, "id">

  export type ratingsOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrderInput | SortOrder
    food?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    recomendation?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: ratingsCountOrderByAggregateInput
    _avg?: ratingsAvgOrderByAggregateInput
    _max?: ratingsMaxOrderByAggregateInput
    _min?: ratingsMinOrderByAggregateInput
    _sum?: ratingsSumOrderByAggregateInput
  }

  export type ratingsScalarWhereWithAggregatesInput = {
    AND?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    OR?: ratingsScalarWhereWithAggregatesInput[]
    NOT?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ratings"> | number
    rating?: IntNullableWithAggregatesFilter<"ratings"> | number | null
    food?: IntNullableWithAggregatesFilter<"ratings"> | number | null
    time?: IntNullableWithAggregatesFilter<"ratings"> | number | null
    recomendation?: IntNullableWithAggregatesFilter<"ratings"> | number | null
    comment?: StringNullableWithAggregatesFilter<"ratings"> | string | null
  }

  export type stocksWhereInput = {
    AND?: stocksWhereInput | stocksWhereInput[]
    OR?: stocksWhereInput[]
    NOT?: stocksWhereInput | stocksWhereInput[]
    id?: IntFilter<"stocks"> | number
    produto?: StringNullableFilter<"stocks"> | string | null
    quantidade?: IntNullableFilter<"stocks"> | number | null
    tipo?: StringNullableFilter<"stocks"> | string | null
  }

  export type stocksOrderByWithRelationInput = {
    id?: SortOrder
    produto?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    _relevance?: stocksOrderByRelevanceInput
  }

  export type stocksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    produto?: string
    AND?: stocksWhereInput | stocksWhereInput[]
    OR?: stocksWhereInput[]
    NOT?: stocksWhereInput | stocksWhereInput[]
    quantidade?: IntNullableFilter<"stocks"> | number | null
    tipo?: StringNullableFilter<"stocks"> | string | null
  }, "id" | "produto">

  export type stocksOrderByWithAggregationInput = {
    id?: SortOrder
    produto?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    _count?: stocksCountOrderByAggregateInput
    _avg?: stocksAvgOrderByAggregateInput
    _max?: stocksMaxOrderByAggregateInput
    _min?: stocksMinOrderByAggregateInput
    _sum?: stocksSumOrderByAggregateInput
  }

  export type stocksScalarWhereWithAggregatesInput = {
    AND?: stocksScalarWhereWithAggregatesInput | stocksScalarWhereWithAggregatesInput[]
    OR?: stocksScalarWhereWithAggregatesInput[]
    NOT?: stocksScalarWhereWithAggregatesInput | stocksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stocks"> | number
    produto?: StringNullableWithAggregatesFilter<"stocks"> | string | null
    quantidade?: IntNullableWithAggregatesFilter<"stocks"> | number | null
    tipo?: StringNullableWithAggregatesFilter<"stocks"> | string | null
  }

  export type codesCreateInput = {
    code?: string | null
    connected?: boolean | null
  }

  export type codesUncheckedCreateInput = {
    id?: number
    code?: string | null
    connected?: boolean | null
  }

  export type codesUpdateInput = {
    code?: NullableStringFieldUpdateOperationsInput | string | null
    connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type codesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type codesCreateManyInput = {
    id?: number
    code?: string | null
    connected?: boolean | null
  }

  export type codesUpdateManyMutationInput = {
    code?: NullableStringFieldUpdateOperationsInput | string | null
    connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type codesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    connected?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type commandsCreateInput = {
    userId?: string | null
    nome?: string | null
    pronto?: boolean | null
    entregue?: boolean | null
    orders?: ordersCreateNestedManyWithoutCommandsInput
  }

  export type commandsUncheckedCreateInput = {
    id?: number
    userId?: string | null
    nome?: string | null
    pronto?: boolean | null
    entregue?: boolean | null
    orders?: ordersUncheckedCreateNestedManyWithoutCommandsInput
  }

  export type commandsUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    pronto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orders?: ordersUpdateManyWithoutCommandsNestedInput
  }

  export type commandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    pronto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
    orders?: ordersUncheckedUpdateManyWithoutCommandsNestedInput
  }

  export type commandsCreateManyInput = {
    id?: number
    userId?: string | null
    nome?: string | null
    pronto?: boolean | null
    entregue?: boolean | null
  }

  export type commandsUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    pronto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type commandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    pronto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ordersCreateInput = {
    produto?: string | null
    tipo?: string | null
    commands?: commandsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    produto?: string | null
    tipo?: string | null
    commandId?: number | null
  }

  export type ordersUpdateInput = {
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    commands?: commandsUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    commandId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ordersCreateManyInput = {
    id?: number
    produto?: string | null
    tipo?: string | null
    commandId?: number | null
  }

  export type ordersUpdateManyMutationInput = {
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    commandId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ratingsCreateInput = {
    rating?: number | null
    food?: number | null
    time?: number | null
    recomendation?: number | null
    comment?: string | null
  }

  export type ratingsUncheckedCreateInput = {
    id?: number
    rating?: number | null
    food?: number | null
    time?: number | null
    recomendation?: number | null
    comment?: string | null
  }

  export type ratingsUpdateInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    food?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableIntFieldUpdateOperationsInput | number | null
    recomendation?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    food?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableIntFieldUpdateOperationsInput | number | null
    recomendation?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsCreateManyInput = {
    id?: number
    rating?: number | null
    food?: number | null
    time?: number | null
    recomendation?: number | null
    comment?: string | null
  }

  export type ratingsUpdateManyMutationInput = {
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    food?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableIntFieldUpdateOperationsInput | number | null
    recomendation?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    food?: NullableIntFieldUpdateOperationsInput | number | null
    time?: NullableIntFieldUpdateOperationsInput | number | null
    recomendation?: NullableIntFieldUpdateOperationsInput | number | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stocksCreateInput = {
    produto?: string | null
    quantidade?: number | null
    tipo?: string | null
  }

  export type stocksUncheckedCreateInput = {
    id?: number
    produto?: string | null
    quantidade?: number | null
    tipo?: string | null
  }

  export type stocksUpdateInput = {
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stocksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stocksCreateManyInput = {
    id?: number
    produto?: string | null
    quantidade?: number | null
    tipo?: string | null
  }

  export type stocksUpdateManyMutationInput = {
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stocksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type codesOrderByRelevanceInput = {
    fields: codesOrderByRelevanceFieldEnum | codesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type codesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    connected?: SortOrder
  }

  export type codesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type codesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    connected?: SortOrder
  }

  export type codesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    connected?: SortOrder
  }

  export type codesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type commandsOrderByRelevanceInput = {
    fields: commandsOrderByRelevanceFieldEnum | commandsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type commandsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nome?: SortOrder
    pronto?: SortOrder
    entregue?: SortOrder
  }

  export type commandsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type commandsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nome?: SortOrder
    pronto?: SortOrder
    entregue?: SortOrder
  }

  export type commandsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nome?: SortOrder
    pronto?: SortOrder
    entregue?: SortOrder
  }

  export type commandsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommandsNullableScalarRelationFilter = {
    is?: commandsWhereInput | null
    isNot?: commandsWhereInput | null
  }

  export type ordersOrderByRelevanceInput = {
    fields: ordersOrderByRelevanceFieldEnum | ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    tipo?: SortOrder
    commandId?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    tipo?: SortOrder
    commandId?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    tipo?: SortOrder
    commandId?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    commandId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type ratingsOrderByRelevanceInput = {
    fields: ratingsOrderByRelevanceFieldEnum | ratingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ratingsCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food?: SortOrder
    time?: SortOrder
    recomendation?: SortOrder
    comment?: SortOrder
  }

  export type ratingsAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food?: SortOrder
    time?: SortOrder
    recomendation?: SortOrder
  }

  export type ratingsMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food?: SortOrder
    time?: SortOrder
    recomendation?: SortOrder
    comment?: SortOrder
  }

  export type ratingsMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food?: SortOrder
    time?: SortOrder
    recomendation?: SortOrder
    comment?: SortOrder
  }

  export type ratingsSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    food?: SortOrder
    time?: SortOrder
    recomendation?: SortOrder
  }

  export type stocksOrderByRelevanceInput = {
    fields: stocksOrderByRelevanceFieldEnum | stocksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type stocksCountOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    quantidade?: SortOrder
    tipo?: SortOrder
  }

  export type stocksAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type stocksMaxOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    quantidade?: SortOrder
    tipo?: SortOrder
  }

  export type stocksMinOrderByAggregateInput = {
    id?: SortOrder
    produto?: SortOrder
    quantidade?: SortOrder
    tipo?: SortOrder
  }

  export type stocksSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersCreateNestedManyWithoutCommandsInput = {
    create?: XOR<ordersCreateWithoutCommandsInput, ordersUncheckedCreateWithoutCommandsInput> | ordersCreateWithoutCommandsInput[] | ordersUncheckedCreateWithoutCommandsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCommandsInput | ordersCreateOrConnectWithoutCommandsInput[]
    createMany?: ordersCreateManyCommandsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCommandsInput = {
    create?: XOR<ordersCreateWithoutCommandsInput, ordersUncheckedCreateWithoutCommandsInput> | ordersCreateWithoutCommandsInput[] | ordersUncheckedCreateWithoutCommandsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCommandsInput | ordersCreateOrConnectWithoutCommandsInput[]
    createMany?: ordersCreateManyCommandsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutCommandsNestedInput = {
    create?: XOR<ordersCreateWithoutCommandsInput, ordersUncheckedCreateWithoutCommandsInput> | ordersCreateWithoutCommandsInput[] | ordersUncheckedCreateWithoutCommandsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCommandsInput | ordersCreateOrConnectWithoutCommandsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCommandsInput | ordersUpsertWithWhereUniqueWithoutCommandsInput[]
    createMany?: ordersCreateManyCommandsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCommandsInput | ordersUpdateWithWhereUniqueWithoutCommandsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCommandsInput | ordersUpdateManyWithWhereWithoutCommandsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCommandsNestedInput = {
    create?: XOR<ordersCreateWithoutCommandsInput, ordersUncheckedCreateWithoutCommandsInput> | ordersCreateWithoutCommandsInput[] | ordersUncheckedCreateWithoutCommandsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCommandsInput | ordersCreateOrConnectWithoutCommandsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCommandsInput | ordersUpsertWithWhereUniqueWithoutCommandsInput[]
    createMany?: ordersCreateManyCommandsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCommandsInput | ordersUpdateWithWhereUniqueWithoutCommandsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCommandsInput | ordersUpdateManyWithWhereWithoutCommandsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type commandsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<commandsCreateWithoutOrdersInput, commandsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: commandsCreateOrConnectWithoutOrdersInput
    connect?: commandsWhereUniqueInput
  }

  export type commandsUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<commandsCreateWithoutOrdersInput, commandsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: commandsCreateOrConnectWithoutOrdersInput
    upsert?: commandsUpsertWithoutOrdersInput
    disconnect?: commandsWhereInput | boolean
    delete?: commandsWhereInput | boolean
    connect?: commandsWhereUniqueInput
    update?: XOR<XOR<commandsUpdateToOneWithWhereWithoutOrdersInput, commandsUpdateWithoutOrdersInput>, commandsUncheckedUpdateWithoutOrdersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ordersCreateWithoutCommandsInput = {
    produto?: string | null
    tipo?: string | null
  }

  export type ordersUncheckedCreateWithoutCommandsInput = {
    id?: number
    produto?: string | null
    tipo?: string | null
  }

  export type ordersCreateOrConnectWithoutCommandsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCommandsInput, ordersUncheckedCreateWithoutCommandsInput>
  }

  export type ordersCreateManyCommandsInputEnvelope = {
    data: ordersCreateManyCommandsInput | ordersCreateManyCommandsInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCommandsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCommandsInput, ordersUncheckedUpdateWithoutCommandsInput>
    create: XOR<ordersCreateWithoutCommandsInput, ordersUncheckedCreateWithoutCommandsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCommandsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCommandsInput, ordersUncheckedUpdateWithoutCommandsInput>
  }

  export type ordersUpdateManyWithWhereWithoutCommandsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCommandsInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    produto?: StringNullableFilter<"orders"> | string | null
    tipo?: StringNullableFilter<"orders"> | string | null
    commandId?: IntNullableFilter<"orders"> | number | null
  }

  export type commandsCreateWithoutOrdersInput = {
    userId?: string | null
    nome?: string | null
    pronto?: boolean | null
    entregue?: boolean | null
  }

  export type commandsUncheckedCreateWithoutOrdersInput = {
    id?: number
    userId?: string | null
    nome?: string | null
    pronto?: boolean | null
    entregue?: boolean | null
  }

  export type commandsCreateOrConnectWithoutOrdersInput = {
    where: commandsWhereUniqueInput
    create: XOR<commandsCreateWithoutOrdersInput, commandsUncheckedCreateWithoutOrdersInput>
  }

  export type commandsUpsertWithoutOrdersInput = {
    update: XOR<commandsUpdateWithoutOrdersInput, commandsUncheckedUpdateWithoutOrdersInput>
    create: XOR<commandsCreateWithoutOrdersInput, commandsUncheckedCreateWithoutOrdersInput>
    where?: commandsWhereInput
  }

  export type commandsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: commandsWhereInput
    data: XOR<commandsUpdateWithoutOrdersInput, commandsUncheckedUpdateWithoutOrdersInput>
  }

  export type commandsUpdateWithoutOrdersInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    pronto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type commandsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    pronto?: NullableBoolFieldUpdateOperationsInput | boolean | null
    entregue?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ordersCreateManyCommandsInput = {
    id?: number
    produto?: string | null
    tipo?: string | null
  }

  export type ordersUpdateWithoutCommandsInput = {
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateWithoutCommandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyWithoutCommandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
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