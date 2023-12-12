# GraphQL-CheatSheet
A Sipmle project to practice GraphQL - Including Key Concepts

## Must Know GraphQL Concepts

- Schema:  
The central definition in GraphQL is the schema, which defines the types and their relationships. It serves as the contract between the client and the server.

- Type:  
GraphQL is a strongly typed query language. Types define the shape of your data and specify the operations that can be performed. 

- Query:  
A GraphQL query is a request for specific fields on specific types. Clients use queries to request the data they need.

- Mutation:  
Mutations are used to modify data on the server. They are similar to queries but are used for write operations.

- Resolver:  
Resolvers are functions responsible for fetching the data for a particular field in the schema. They define how to retrieve the data.

- Field:  
Fields represent properties on types. A GraphQL query consists of fields, and each field corresponds to a property or method on the server.

- Directive:  
Directives provide a way to describe alternate runtime execution and type validation behavior in a GraphQL document. Common directives include @include and @skip.

- Fragment:  
Fragments allow you to construct sets of fields and reuse them in multiple queries, reducing duplication in your GraphQL documents.

- Subscription:  
Subscriptions enable real-time communication between the server and the client. They allow clients to receive updates when data changes.

- Introspection:  
GraphQL provides introspection, which allows clients to query the schema itself to discover what types and operations are available.

- Nullable and Non-Nullable:  
Fields in GraphQL can be nullable or non-nullable. Non-nullable fields must always have a value; nullable fields can be null.

- Scalars:  
Scalars are basic units of data in GraphQL. Examples include Int, Float, String, Boolean, and ID. You can also define custom scalars.

- Enums:  
Enums represent a fixed set of values. They are useful when a field should only represent a limited set of options.

- Union and Interface:  
Unions and interfaces allow you to represent multiple types in a single field. Unions represent a type that can be one of several specified types, while interfaces define a set of fields that must be implemented by any object that implements the interface.

- Batching and DataLoader:   
Batching is the process of combining multiple requests into a single request to optimize data fetching. DataLoader is a library commonly used for batching in GraphQL.

- Authentication and Authorization:   
GraphQL itself does not specify how authentication and authorization should be handled, but these concepts are crucial in securing GraphQL APIs.

- Apollo Client and Relay:   
Apollo Client and Relay are popular client-side libraries used to interact with GraphQL APIs in web applications.