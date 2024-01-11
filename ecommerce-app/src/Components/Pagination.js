import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function PaginationRounded({ setPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    setPage(value);
  };
  console.log(`currentPage`, currentPage);
  return (
    <Stack spacing={2}>
      <div className="">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
          style={{
            color: "black",
            fontWeight: "bold",
            backgroundColor: "whitesmoke",
            textDecoration: "none",
            width: "100%",
          }}
        />
      </div>
    </Stack>
  );
}
