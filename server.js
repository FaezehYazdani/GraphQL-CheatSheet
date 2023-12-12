const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull 
} = require('graphql');

const authors = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  
const books = [
{ id: 101, name: 'Book 1', authorId: 1 },
{ id: 102, name: 'Book 2', authorId: 1 },
{ id: 103, name: 'Book 3', authorId: 2 },
{ id: 104, name: 'Book 4', authorId: 2 },
];

const BookType = new GraphQLObjectType ({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        authorId: {type: new GraphQLNonNull(GraphQLInt)},
        author: {
            type: AuthorType,
            resolve: (books) => {
                return authors.find(authors =>authors.id === books.authorId )
            }
        }
    })
});

const AuthorType = new GraphQLObjectType ({
    name: 'Author',
    description: 'This represents a author of a book',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        book: {
            type: new GraphQLList(BookType),
            resolve: (authors) => {
                return books.filter( books => books.authorId === authors.id)
            }
        }
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        book:{
            type: BookType,
            description: 'A single book',
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args) => books.find(book => book.id === args.id)
        },
        books:{
            type: new GraphQLList(BookType),
            description: 'List of books',
            resolve: () => books
        },
        author: {
            type: AuthorType,
            description: 'A single author',
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args) => authors.find(author => args.id === author.id)
        },
        authors: {
            type: new GraphQLList(AuthorType),
            description: 'List of authors',
            resolve: () => authors
        }
    })
})

const RootMutationType =  new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addBook: {
            type: BookType,
            description: 'Add a book',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: (parent, args) => {
                const book = {
                    id: books.length + 1,
                    name: args.name,
                    authorId: args.authorId
                }
                books.push(book)
                return book
            }
        },
        addAuthor: {
            type: AuthorType,
            description: 'Add an author',
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (parent, args) => {
                const author = {
                    id: authors.length + 1,
                    name: args.name,
                }
                authors.push(author)
                return author
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen('5000', () => console.log(`Running on the port 5000`));
