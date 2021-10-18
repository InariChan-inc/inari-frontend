import {
  ReactNode,
} from "react";
import {
  ApolloClient,
  NormalizedCacheObject,
  QueryResult,
  DocumentNode,
  TypedDocumentNode,
  OperationVariables,
  useQuery,
} from '@apollo/client';
import guest from "@common/graphql/guest";

export interface QueryProps<TData = any, TVariables = OperationVariables> {
  client?: ApolloClient<NormalizedCacheObject>;
  children: (props: QueryResult<TData, TVariables>) => JSX.Element;
  query: DocumentNode | TypedDocumentNode<TData, TVariables>;
}


const Query = <TData extends {} = any, TVariables = OperationVariables>({
  client = guest,
  children,
  query,
}: QueryProps<TData, TVariables>) => {
  const data = useQuery(query, { client });

  return children(data);
};


export default Query;
