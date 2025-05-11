import {
  useMutation,
  useQuery,
  useSuspenseQuery,
  type UseMutationOptions,
  type UseQueryOptions,
  type UseSuspenseQueryOptions,
} from "@tanstack/react-query";
import { fetcher } from "../fetcher";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type CreateMenuCategoryInput = {
  name: Scalars["String"]["input"];
  restaurantId: Scalars["Int"]["input"];
};

export type CreateMenuItemInput = {
  categoryId: Scalars["Int"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  isAvailable: Scalars["Boolean"]["input"];
  name: Scalars["String"]["input"];
  preparationArea: MenuItemPreparationArea;
  price: Scalars["Float"]["input"];
};

export type CreateOrderInput = {
  createdAt: Scalars["Date"]["input"];
  itemIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  status: OrderStatus;
  tableId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

export type CreateOrderItemInput = {
  menuItemId: Scalars["Int"]["input"];
  notes?: InputMaybe<Scalars["String"]["input"]>;
  orderId: Scalars["Int"]["input"];
  quantity: Scalars["Int"]["input"];
  status?: InputMaybe<OrderItemStatus>;
};

export type CreateOrganizationInput = {
  name: Scalars["String"]["input"];
  restaurantIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type CreateRestaurantInput = {
  location?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  organizationId: Scalars["Int"]["input"];
  tableIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type CreateRestaurantTableInput = {
  restaurantId?: InputMaybe<Scalars["Int"]["input"]>;
  seats?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RestaurantTableStatus>;
  tableName?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  restaurantId?: InputMaybe<Scalars["Int"]["input"]>;
  role?: InputMaybe<UserRole>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type LoginInput = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type MenuCategory = {
  __typename?: "MenuCategory";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  id: Scalars["Int"]["output"];
  items?: Maybe<Array<Maybe<MenuItem>>>;
  name: Scalars["String"]["output"];
  restaurant?: Maybe<Restaurant>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
};

export type MenuItem = {
  __typename?: "MenuItem";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  categoryId?: Maybe<Scalars["Int"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  isAvailable?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  preparationArea?: Maybe<MenuItemPreparationArea>;
  price?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
};

export type MenuItemPreparationArea = "Bar" | "Kitchen";

export type Mutation = {
  __typename?: "Mutation";
  createMenuCategory: MenuCategory;
  createMenuItem: MenuItem;
  createOrder: Order;
  createOrderItem: OrderItem;
  createOrganization: Organization;
  createRestaurant: Restaurant;
  createRestaurantTable: RestaurantTable;
  createUser: User;
  deleteMenuCategory?: Maybe<Scalars["Boolean"]["output"]>;
  deleteMenuItem?: Maybe<MenuItem>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteOrganization?: Maybe<Organization>;
  deleteRestaurant?: Maybe<Restaurant>;
  deleteUser?: Maybe<User>;
  login: UserAuth;
  removeRestaurantTable?: Maybe<RestaurantTable>;
  updateMenuCategory: MenuCategory;
  updateMenuItem: MenuItem;
  updateOrder: Order;
  updateOrderItem: OrderItem;
  updateOrganization: Organization;
  updateRestaurant: Restaurant;
  updateRestaurantTable: RestaurantTable;
  updateUser: User;
};

export type MutationCreateMenuCategoryArgs = {
  createMenuCategoryInput: CreateMenuCategoryInput;
};

export type MutationCreateMenuItemArgs = {
  createMenuItemInput: CreateMenuItemInput;
};

export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};

export type MutationCreateOrderItemArgs = {
  createOrderItemInput: CreateOrderItemInput;
};

export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
};

export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};

export type MutationCreateRestaurantTableArgs = {
  createRestaurantTableInput: CreateRestaurantTableInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDeleteMenuCategoryArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteMenuItemArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteOrderItemArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteOrganizationArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteRestaurantArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationRemoveRestaurantTableArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationUpdateMenuCategoryArgs = {
  updateMenuCategoryInput: UpdateMenuCategoryInput;
};

export type MutationUpdateMenuItemArgs = {
  updateMenuItemInput: UpdateMenuItemInput;
};

export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
};

export type MutationUpdateOrderItemArgs = {
  updateOrderItemInput: UpdateOrderItemInput;
};

export type MutationUpdateOrganizationArgs = {
  updateOrganizationInput: UpdateOrganizationInput;
};

export type MutationUpdateRestaurantArgs = {
  updateRestaurantInput: UpdateRestaurantInput;
};

export type MutationUpdateRestaurantTableArgs = {
  updateRestaurantTableInput: UpdateRestaurantTableInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Order = {
  __typename?: "Order";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars["Int"]["output"]>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  status?: Maybe<OrderStatus>;
  table?: Maybe<RestaurantTable>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
  waiter?: Maybe<User>;
};

export type OrderItem = {
  __typename?: "OrderItem";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars["Int"]["output"]>;
  menuItem?: Maybe<MenuItem>;
  notes?: Maybe<Scalars["String"]["output"]>;
  order?: Maybe<Order>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<OrderItemStatus>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
};

export type OrderItemStatus =
  | "Cancelled"
  | "Delivered"
  | "Preparing"
  | "Queued"
  | "Ready";

export type OrderStatus =
  | "Cancelled"
  | "Completed"
  | "Confirmed"
  | "InProgress"
  | "Pending";

export type Organization = {
  __typename?: "Organization";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  restaurants?: Maybe<Array<Maybe<Restaurant>>>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
};

export type Query = {
  __typename?: "Query";
  login: UserAuth;
  menuCategory?: Maybe<MenuCategory>;
  menuItem?: Maybe<MenuItem>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  organization?: Maybe<Organization>;
  restaurant?: Maybe<Restaurant>;
  restaurantTable?: Maybe<RestaurantTable>;
  user?: Maybe<User>;
};

export type QueryMenuCategoryArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryMenuItemArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryOrderArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryOrderItemArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryOrganizationArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRestaurantArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryRestaurantTableArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["Int"]["input"];
};

export type Restaurant = {
  __typename?: "Restaurant";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars["Int"]["output"]>;
  location?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  organization?: Maybe<Organization>;
  tables?: Maybe<Array<Maybe<RestaurantTable>>>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RestaurantTable = {
  __typename?: "RestaurantTable";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  id?: Maybe<Scalars["Int"]["output"]>;
  restaurant?: Maybe<Restaurant>;
  seats?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<RestaurantTableStatus>;
  tableName?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
};

export type RestaurantTableStatus = "Available" | "Occupied" | "Reserved";

export type UpdateMenuCategoryInput = {
  id: Scalars["Int"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
  restaurantId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateMenuItemInput = {
  categoryId?: InputMaybe<Scalars["Int"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  isAvailable?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  preparationArea?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateOrderInput = {
  createdAt?: InputMaybe<Scalars["Date"]["input"]>;
  id: Scalars["Int"]["input"];
  itemIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  status?: InputMaybe<OrderStatus>;
  tableId?: InputMaybe<Scalars["Int"]["input"]>;
  userId?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UpdateOrderItemInput = {
  id: Scalars["Int"]["input"];
  menuItem?: InputMaybe<Scalars["Int"]["input"]>;
  notes?: InputMaybe<Scalars["String"]["input"]>;
  orderId?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<OrderItemStatus>;
};

export type UpdateOrganizationInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  restaurantIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type UpdateRestaurantInput = {
  id: Scalars["Int"]["input"];
  location?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  organizationId?: InputMaybe<Scalars["Int"]["input"]>;
  tableIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type UpdateRestaurantTableInput = {
  id: Scalars["Int"]["input"];
  restaurantId?: InputMaybe<Scalars["Int"]["input"]>;
  seats?: InputMaybe<Scalars["Int"]["input"]>;
  status?: InputMaybe<RestaurantTableStatus>;
  tableName?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["Int"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  restaurantId?: InputMaybe<Scalars["Int"]["input"]>;
  role?: InputMaybe<UserRole>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["Date"]["output"]>;
  createdBy?: Maybe<User>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  restaurant?: Maybe<Restaurant>;
  role?: Maybe<UserRole>;
  updatedAt?: Maybe<Scalars["Date"]["output"]>;
  updatedBy?: Maybe<User>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type UserAuth = {
  __typename?: "UserAuth";
  access_token: Scalars["String"]["output"];
};

export type UserRole = "admin" | "bartender" | "chef" | "manager" | "waiter";

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "UserAuth"; access_token: string };
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id?: number | null;
    username?: string | null;
    email?: string | null;
  } | null;
};

export const LoginDocument = `
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    access_token
  }
}
    `;

export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >
) => {
  return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>({
    mutationKey: ["Login"],
    mutationFn: (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables
      )(),
    ...options,
  });
};

export const GetUserByIdDocument = `
    query getUserById($id: Int!) {
  user(id: $id) {
    id
    username
    email
  }
}
    `;

export const useGetUserByIdQuery = <TData = GetUserByIdQuery, TError = unknown>(
  variables: GetUserByIdQueryVariables,
  options?: Omit<
    UseQueryOptions<GetUserByIdQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<GetUserByIdQuery, TError, TData>["queryKey"];
  }
) => {
  return useQuery<GetUserByIdQuery, TError, TData>({
    queryKey: ["getUserById", variables],
    queryFn: fetcher<GetUserByIdQuery, GetUserByIdQueryVariables>(
      GetUserByIdDocument,
      variables
    ),
    ...options,
  });
};

export const useSuspenseGetUserByIdQuery = <
  TData = GetUserByIdQuery,
  TError = unknown
>(
  variables: GetUserByIdQueryVariables,
  options?: Omit<
    UseSuspenseQueryOptions<GetUserByIdQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseSuspenseQueryOptions<
      GetUserByIdQuery,
      TError,
      TData
    >["queryKey"];
  }
) => {
  return useSuspenseQuery<GetUserByIdQuery, TError, TData>({
    queryKey: ["getUserByIdSuspense", variables],
    queryFn: fetcher<GetUserByIdQuery, GetUserByIdQueryVariables>(
      GetUserByIdDocument,
      variables
    ),
    ...options,
  });
};
