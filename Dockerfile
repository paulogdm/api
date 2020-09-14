FROM hasura/graphql-engine:v1.3.2.cli-migrations-v2

COPY ./hasura/migrations /hasura-migrations
COPY ./hasura/metadata /hasura-metadata

ENV HASURA_GRAPHQL_ENABLE_CONSOLE=$HASURA_GRAPHQL_ENABLE_CONSOLE
ENV HASURA_GRAPHQL_DATABASE_URL=$HASURA_GRAPHQL_DATABASE_URL
ENV HASURA_GRAPHQL_CLI_ENVIRONMENT=default
ENV API_URL=$API_URL

# Change $DATABASE_URL to your Heroku Postgres URL if you're not using
# the primary Postgres instance in your app
CMD graphql-engine \
  serve \
  --server-port $PORT \
  --unauthorized-role anonymous \
  --enable-console
