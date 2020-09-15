// https://stackoverflow.com/questions/40376911/how-do-i-easily-combine-elements-from-two-arrays-in-javascript-alternating-elem
const interleave = ([x, ...xs]: any, ys = []): string[] =>
  x === undefined
    ? ys // base: no x
    : [x, ...interleave(ys, xs)] // inductive: some x

// This is just to mock gql so that it syntax highlights the query and works with graphql-codegen
const gql = (strings: any, ...args: any): string => {
  return interleave(strings, args).join('')
}

export default gql
