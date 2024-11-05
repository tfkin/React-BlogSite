import React from "react";
import Feed from "./content/Feed";
// import { useContext } from "react";
// import DataContext from "../context/DataContext";
import { useStoreState } from "easy-peasy";

const Homepage = ({ isLoading, fetchError }) => {
  // const { searchResults, fetchError, isLoading } = useContext(DataContext);
  // EASY PEASY
  const searchResults = useStoreState((state) => state.searchResults);
  // EASY PEASY

  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg text-danger">{fetchError}</p>
      )}

      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="statusMsg" style={{ marginTop: "2rem" }}>
            No posts to display!
          </p>
        ))}
    </main>
  );
};

export default Homepage;
