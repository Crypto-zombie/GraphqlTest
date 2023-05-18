const Query =
{
  greeting: () => 'Hello GraphQL  From TutorialsPoint !!',
  sayHello: (root, args, context, info) => `Hi ${args.name} GraphQL server says Hello to you!!`
}
module.exports = { Query }