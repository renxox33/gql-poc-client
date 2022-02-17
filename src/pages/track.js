import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_QUERY = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      description
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
    }
  }
`;

const Track = ({ trackId }) => {

    const { loading, error, data } = useQuery(GET_QUERY, {
        variables: {
            trackId
        }
    });

  return (<Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
  </Layout>)
};

export default Track;
