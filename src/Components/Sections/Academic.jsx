import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 40px;
  padding: 40px;
`;

const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #4caf50;
  color: white;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const HighSchoolResults = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>YEAR</TableHeader>
            <TableHeader>MEAN SCORE</TableHeader>
            <TableHeader>MEAN GRADE</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>2018</TableCell>
            <TableCell>3.16</TableCell>
            <TableCell>D</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2019</TableCell>
            <TableCell>3.760</TableCell>
            <TableCell>D+</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2020</TableCell>
            <TableCell>3.760</TableCell>
            <TableCell>D+</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021</TableCell>
            <TableCell>3.718</TableCell>
            <TableCell>D+</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2022</TableCell>
            <TableCell>3.5484</TableCell>
            <TableCell>D+</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2023</TableCell>
            <TableCell>4.286</TableCell>
            <TableCell>D+</TableCell>
          </TableRow>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default HighSchoolResults;
