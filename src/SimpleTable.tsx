import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
} from "@chakra-ui/react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const SimpleTable = () => {
  type Member = {
    name: string;
    sex: string;
  };
  const member: Member[] = [
    {
      name: "田吾作",
      sex: "男",
    },
    {
      name: "払次郎",
      sex: "男",
    },
    {
      name: "ヨネ",
      sex: "女",
    },
  ];

  const columns: ColumnDef<Member, any>[] = [
    {
      accessorKey: "name",
      header: "名前",
    },
    {
      accessorKey: "sex",
      header: "性別",
    },
  ];
  const table = useReactTable<Member>({
    data: member,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <TableContainer>
        <Table>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} borderX="1px solid #e2e8f0">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SimpleTable;
