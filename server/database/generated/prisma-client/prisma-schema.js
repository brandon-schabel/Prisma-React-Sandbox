module.exports = {
        typeDefs: /* GraphQL */ `type AggregateNote {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createNote(data: NoteCreateInput!): Note!
  updateNote(data: NoteUpdateInput!, where: NoteWhereUniqueInput!): Note
  updateManyNotes(data: NoteUpdateManyMutationInput!, where: NoteWhereInput): BatchPayload!
  upsertNote(where: NoteWhereUniqueInput!, create: NoteCreateInput!, update: NoteUpdateInput!): Note!
  deleteNote(where: NoteWhereUniqueInput!): Note
  deleteManyNotes(where: NoteWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Note {
  id: ID!
  text: String!
  user: String!
  done: Boolean
}

type NoteConnection {
  pageInfo: PageInfo!
  edges: [NoteEdge]!
  aggregate: AggregateNote!
}

input NoteCreateInput {
  text: String!
  user: String!
  done: Boolean
}

input NoteCreateManyInput {
  create: [NoteCreateInput!]
  connect: [NoteWhereUniqueInput!]
}

type NoteEdge {
  node: Note!
  cursor: String!
}

enum NoteOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  user_ASC
  user_DESC
  done_ASC
  done_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NotePreviousValues {
  id: ID!
  text: String!
  user: String!
  done: Boolean
}

input NoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  user: String
  user_not: String
  user_in: [String!]
  user_not_in: [String!]
  user_lt: String
  user_lte: String
  user_gt: String
  user_gte: String
  user_contains: String
  user_not_contains: String
  user_starts_with: String
  user_not_starts_with: String
  user_ends_with: String
  user_not_ends_with: String
  done: Boolean
  done_not: Boolean
  AND: [NoteScalarWhereInput!]
  OR: [NoteScalarWhereInput!]
  NOT: [NoteScalarWhereInput!]
}

type NoteSubscriptionPayload {
  mutation: MutationType!
  node: Note
  updatedFields: [String!]
  previousValues: NotePreviousValues
}

input NoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NoteWhereInput
  AND: [NoteSubscriptionWhereInput!]
  OR: [NoteSubscriptionWhereInput!]
  NOT: [NoteSubscriptionWhereInput!]
}

input NoteUpdateDataInput {
  text: String
  user: String
  done: Boolean
}

input NoteUpdateInput {
  text: String
  user: String
  done: Boolean
}

input NoteUpdateManyDataInput {
  text: String
  user: String
  done: Boolean
}

input NoteUpdateManyInput {
  create: [NoteCreateInput!]
  update: [NoteUpdateWithWhereUniqueNestedInput!]
  upsert: [NoteUpsertWithWhereUniqueNestedInput!]
  delete: [NoteWhereUniqueInput!]
  connect: [NoteWhereUniqueInput!]
  disconnect: [NoteWhereUniqueInput!]
  deleteMany: [NoteScalarWhereInput!]
  updateMany: [NoteUpdateManyWithWhereNestedInput!]
}

input NoteUpdateManyMutationInput {
  text: String
  user: String
  done: Boolean
}

input NoteUpdateManyWithWhereNestedInput {
  where: NoteScalarWhereInput!
  data: NoteUpdateManyDataInput!
}

input NoteUpdateWithWhereUniqueNestedInput {
  where: NoteWhereUniqueInput!
  data: NoteUpdateDataInput!
}

input NoteUpsertWithWhereUniqueNestedInput {
  where: NoteWhereUniqueInput!
  update: NoteUpdateDataInput!
  create: NoteCreateInput!
}

input NoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  user: String
  user_not: String
  user_in: [String!]
  user_not_in: [String!]
  user_lt: String
  user_lte: String
  user_gt: String
  user_gte: String
  user_contains: String
  user_not_contains: String
  user_starts_with: String
  user_not_starts_with: String
  user_ends_with: String
  user_not_ends_with: String
  done: Boolean
  done_not: Boolean
  AND: [NoteWhereInput!]
  OR: [NoteWhereInput!]
  NOT: [NoteWhereInput!]
}

input NoteWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  note(where: NoteWhereUniqueInput!): Note
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note]!
  notesConnection(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NoteConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  note(where: NoteSubscriptionWhereInput): NoteSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  notes: NoteCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  notes: NoteUpdateManyInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  notes_every: NoteWhereInput
  notes_some: NoteWhereInput
  notes_none: NoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    