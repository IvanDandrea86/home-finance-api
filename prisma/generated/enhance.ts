import { ClassType } from 'type-graphql';
import * as tslib from 'tslib';
import * as crudResolvers from './resolvers/crud/resolvers-crud.index';
import * as argsTypes from './resolvers/crud/args.index';
import * as actionResolvers from './resolvers/crud/resolvers-actions.index';
import * as relationResolvers from './resolvers/relations/resolvers.index';
import * as models from './models';
import * as outputTypes from './resolvers/outputs';
import * as inputTypes from './resolvers/inputs';

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Permission: crudResolvers.PermissionCrudResolver,
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
  },
  Permission: {
    permission: actionResolvers.FindUniquePermissionResolver,
    findFirstPermission: actionResolvers.FindFirstPermissionResolver,
    permissions: actionResolvers.FindManyPermissionResolver,
    createPermission: actionResolvers.CreatePermissionResolver,
    createManyPermission: actionResolvers.CreateManyPermissionResolver,
    deletePermission: actionResolvers.DeletePermissionResolver,
    updatePermission: actionResolvers.UpdatePermissionResolver,
    deleteManyPermission: actionResolvers.DeleteManyPermissionResolver,
    updateManyPermission: actionResolvers.UpdateManyPermissionResolver,
    upsertPermission: actionResolvers.UpsertPermissionResolver,
    aggregatePermission: actionResolvers.AggregatePermissionResolver,
    groupByPermission: actionResolvers.GroupByPermissionResolver,
  },
};
const crudResolversInfo = {
  User: [
    'user',
    'findFirstUser',
    'users',
    'createUser',
    'createManyUser',
    'deleteUser',
    'updateUser',
    'deleteManyUser',
    'updateManyUser',
    'upsertUser',
    'aggregateUser',
    'groupByUser',
  ],
  Permission: [
    'permission',
    'findFirstPermission',
    'permissions',
    'createPermission',
    'createManyPermission',
    'deletePermission',
    'updatePermission',
    'deleteManyPermission',
    'updateManyPermission',
    'upsertPermission',
    'aggregatePermission',
    'groupByPermission',
  ],
};
const argsInfo = {
  FindUniqueUserArgs: ['where'],
  FindFirstUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  FindManyUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip', 'distinct'],
  CreateUserArgs: ['data'],
  CreateManyUserArgs: ['data', 'skipDuplicates'],
  DeleteUserArgs: ['where'],
  UpdateUserArgs: ['data', 'where'],
  DeleteManyUserArgs: ['where'],
  UpdateManyUserArgs: ['data', 'where'],
  UpsertUserArgs: ['where', 'create', 'update'],
  AggregateUserArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupByUserArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
  FindUniquePermissionArgs: ['where'],
  FindFirstPermissionArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  FindManyPermissionArgs: [
    'where',
    'orderBy',
    'cursor',
    'take',
    'skip',
    'distinct',
  ],
  CreatePermissionArgs: ['data'],
  CreateManyPermissionArgs: ['data', 'skipDuplicates'],
  DeletePermissionArgs: ['where'],
  UpdatePermissionArgs: ['data', 'where'],
  DeleteManyPermissionArgs: ['where'],
  UpdateManyPermissionArgs: ['data', 'where'],
  UpsertPermissionArgs: ['where', 'create', 'update'],
  AggregatePermissionArgs: ['where', 'orderBy', 'cursor', 'take', 'skip'],
  GroupByPermissionArgs: ['where', 'orderBy', 'by', 'having', 'take', 'skip'],
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<TModel extends ResolverModelNames> =
  keyof typeof crudResolversMap[TModel]['prototype'];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<
  Record<ModelResolverActionNames<TModel> | '_all', MethodDecorator[]>
>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName =
      resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames =
        crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (
          actionResolversConfig[
            resolverActionName as keyof typeof actionResolversConfig
          ] as Function
        ).prototype;
        tslib.__decorate(
          allActionsDecorators,
          crudTarget,
          resolverActionName,
          null,
        );
        tslib.__decorate(
          allActionsDecorators,
          actionTarget,
          resolverActionName,
          null,
        );
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      (it) => it !== '_all',
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (
        actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function
      ).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]['prototype'],
  number | symbol
>;

type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<
  ArgFieldNames<TArgsType>
>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName =
      argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Permission: relationResolvers.PermissionRelationsResolver,
};
const relationResolversInfo = {
  User: ['permission'],
  Permission: ['user'],
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<TModel extends RelationResolverModelNames> =
  keyof typeof relationResolversMap[TModel]['prototype'];

export type RelationResolverActionsConfig<
  TModel extends RelationResolverModelNames,
> = Partial<
  Record<RelationResolverActionNames<TModel> | '_all', MethodDecorator[]>
>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(
    relationResolversEnhanceMap,
  )) {
    const modelName =
      relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig =
      relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames =
        relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(
          allActionsDecorators,
          relationResolverTarget,
          relationResolverActionName,
          null,
        );
      }
    }
    const relationResolverActionsToApply = Object.keys(
      relationResolverActionsConfig,
    ).filter((it) => it !== '_all');
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(
        decorators,
        relationResolverTarget,
        relationResolverActionName,
        null,
      );
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | '_all', PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object,
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[],
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(
          allFieldsDecorators,
          typePrototype,
          typeFieldName,
          void 0,
        );
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      (it) => it !== '_all',
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  Permission: ['id', 'createdAt', 'updatedAt', 'userId', 'type'],
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]['prototype'],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ['_count', '_min', '_max'],
  UserGroupBy: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    '_count',
    '_min',
    '_max',
  ],
  AggregatePermission: ['_count', '_min', '_max'],
  PermissionGroupBy: [
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
    '_count',
    '_min',
    '_max',
  ],
  AffectedRowsOutput: ['count'],
  UserCountAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    '_all',
  ],
  UserMinAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  UserMaxAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  PermissionCountAggregate: [
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
    '_all',
  ],
  PermissionMinAggregate: ['id', 'createdAt', 'updatedAt', 'userId', 'type'],
  PermissionMaxAggregate: ['id', 'createdAt', 'updatedAt', 'userId', 'type'],
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]['prototype'],
  number | symbol
>;

type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<
  OutputTypeFieldNames<TOutput>
>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName =
      outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    'permission',
  ],
  UserOrderByWithRelationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    'permission',
  ],
  UserWhereUniqueInput: ['id', 'email'],
  UserOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    '_count',
    '_max',
    '_min',
  ],
  UserScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  PermissionWhereInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'user',
    'userId',
    'type',
  ],
  PermissionOrderByWithRelationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'user',
    'userId',
    'type',
  ],
  PermissionWhereUniqueInput: ['id', 'userId'],
  PermissionOrderByWithAggregationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
    '_count',
    '_max',
    '_min',
  ],
  PermissionScalarWhereWithAggregatesInput: [
    'AND',
    'OR',
    'NOT',
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
  ],
  UserCreateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    'permission',
  ],
  UserUpdateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
    'permission',
  ],
  UserCreateManyInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  UserUpdateManyMutationInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  PermissionCreateInput: ['id', 'createdAt', 'updatedAt', 'user', 'type'],
  PermissionUpdateInput: ['id', 'createdAt', 'updatedAt', 'user', 'type'],
  PermissionCreateManyInput: ['id', 'createdAt', 'updatedAt', 'userId', 'type'],
  PermissionUpdateManyMutationInput: ['id', 'createdAt', 'updatedAt', 'type'],
  StringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
  ],
  DateTimeFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  StringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
  ],
  DateTimeNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  EnumVerificationStatusFilter: ['equals', 'in', 'notIn', 'not'],
  PermissionRelationFilter: ['is', 'isNot'],
  UserCountOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  UserMaxOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  UserMinOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  StringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  DateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  StringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'mode',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  DateTimeNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  EnumVerificationStatusWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  UserRelationFilter: ['is', 'isNot'],
  EnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  PermissionCountOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
  ],
  PermissionMaxOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
  ],
  PermissionMinOrderByAggregateInput: [
    'id',
    'createdAt',
    'updatedAt',
    'userId',
    'type',
  ],
  EnumRoleWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  PermissionCreateNestedOneWithoutUserInput: [
    'create',
    'connectOrCreate',
    'connect',
  ],
  StringFieldUpdateOperationsInput: ['set'],
  DateTimeFieldUpdateOperationsInput: ['set'],
  NullableStringFieldUpdateOperationsInput: ['set'],
  NullableDateTimeFieldUpdateOperationsInput: ['set'],
  EnumVerificationStatusFieldUpdateOperationsInput: ['set'],
  PermissionUpdateOneWithoutUserInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'disconnect',
    'delete',
    'connect',
    'update',
  ],
  UserCreateNestedOneWithoutPermissionInput: [
    'create',
    'connectOrCreate',
    'connect',
  ],
  UserUpdateOneWithoutPermissionInput: [
    'create',
    'connectOrCreate',
    'upsert',
    'disconnect',
    'delete',
    'connect',
    'update',
  ],
  EnumRoleFieldUpdateOperationsInput: ['set'],
  NestedStringFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedDateTimeFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedStringNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
  ],
  NestedDateTimeNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedEnumVerificationStatusFilter: ['equals', 'in', 'notIn', 'not'],
  NestedStringWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntFilter: ['equals', 'in', 'notIn', 'lt', 'lte', 'gt', 'gte', 'not'],
  NestedDateTimeWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedStringNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'contains',
    'startsWith',
    'endsWith',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedIntNullableFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
  ],
  NestedDateTimeNullableWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'lt',
    'lte',
    'gt',
    'gte',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedEnumVerificationStatusWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  NestedEnumRoleFilter: ['equals', 'in', 'notIn', 'not'],
  NestedEnumRoleWithAggregatesFilter: [
    'equals',
    'in',
    'notIn',
    'not',
    '_count',
    '_min',
    '_max',
  ],
  PermissionCreateWithoutUserInput: ['id', 'createdAt', 'updatedAt', 'type'],
  PermissionCreateOrConnectWithoutUserInput: ['where', 'create'],
  PermissionUpsertWithoutUserInput: ['update', 'create'],
  PermissionUpdateWithoutUserInput: ['id', 'createdAt', 'updatedAt', 'type'],
  UserCreateWithoutPermissionInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
  UserCreateOrConnectWithoutPermissionInput: ['where', 'create'],
  UserUpsertWithoutPermissionInput: ['update', 'create'],
  UserUpdateWithoutPermissionInput: [
    'id',
    'createdAt',
    'updatedAt',
    'firstName',
    'lastName',
    'email',
    'password',
    'validationToken',
    'lastLogin',
    'verificationStatus',
  ],
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]['prototype'],
  number | symbol
>;

type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<
  InputTypeFieldNames<TInput>
>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName =
      inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}
