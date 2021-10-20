import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

import {
  ArrowForwardIos,
  SearchOutlined,
  CloseOutlined,
  ArrowBackIos,
} from "@material-ui/icons";

import {
  Table as TableContainer,
  PageSelection,
  ArrowPrevNext,
  TableScroll,
  SearchInput,
  FilterPage,
  SearchBar,
  PageItems,
  Container,
  RowTable,
  Filters,
  Options,
  Select,
  Option,
  Title,
  Thead,
  Tbody,
  Pages,
  Label,
  Tr,
  Th,
  Td,
} from "./styles";
import SkeletonElement from "../../skeletons/SkeletonElement";

const defaultSettings = {
  limit: 10,
  page: 1,
  search: "",
  orderByColumns: "",
  orderByDirection: "desc",
};

/**
 * @param {{
 *  data: Array
 *  columns: Array
 *  columnNames: Array
 *  columnButtons: Array
 *  columnsModify: Object
 *  MaxHeightScroll: Number
 *  title: String
 *  edit: Function
 *  delete_: Function
 *  read: Function
 *  keyStorage: String
 * }}
 */
export default function Table({
  data = [],
  columns = [],
  columnNames = [],
  columnButtons = [],
  columnsModify = {},
  MaxHeightScroll = "400px",
  title = "",
  keyStorage,
}) {
  const [
    { limit, orderByColumns, orderByDirection, page, search },
    setAppSettings,
  ] = useLocalStorage(keyStorage, defaultSettings);

  const functionOrder = (item1, item2) => {
    if (orderByColumns === "") return 0;
    switch (orderByDirection) {
      case "desc":
        if (item2[orderByColumns] > item1[orderByColumns]) return 1;
        if (item2[orderByColumns] < item1[orderByColumns]) return -1;
        return 0;
      case "asc":
        if (item1[orderByColumns] > item2[orderByColumns]) return 1;
        if (item1[orderByColumns] < item2[orderByColumns]) return -1;
        return 0;
      default:
        return 0;
    }
  };

  const functionFilter = (item) =>
    Object.values(item)
      .toString()
      .toLowerCase()
      .replace(",", "")
      .includes(search.toLowerCase());

  const maxPage = Math.ceil(data.filter(functionFilter).length / limit);

  return (
    <Container>
      <Filters>
        <Options>
          <Title>{title}</Title>
          <SearchBar>
            <SearchInput
              type="text"
              value={search}
              placeholder="Pesquisar"
              id="search"
              onChange={({ target }) =>
                setAppSettings((settings) => ({
                  ...settings,
                  search: target.value,
                  page: 1,
                }))
              }
            />
            <label htmlFor="search">
              {search.length > 0 ? (
                <CloseOutlined
                  onClick={() => {
                    setAppSettings((settings) => ({
                      ...settings,
                      search: "",
                    }));
                  }}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <SearchOutlined />
              )}
            </label>
          </SearchBar>
        </Options>
      </Filters>
      <TableScroll MaxHeightScroll={MaxHeightScroll}>
        {!!data.length ? (
          <TableContainer>
            <Thead>
              <Tr>
                {columnNames.map((col, i) => (
                  <Th key={i}>{col}</Th>
                ))}
                {columnButtons.map((_, i) => (
                  <Th key={i}></Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {data
                .filter(functionFilter)
                .sort(functionOrder)
                .slice((page - 1) * limit, (page - 1) * limit + limit)
                .map((data, i) => (
                  <Tr key={i}>
                    {columns.map((col, index) =>
                      Object.keys(columnsModify).includes(col) ? (
                        <Td key={index}>{columnsModify[col](data[col])}</Td>
                      ) : (
                        <Td key={index}>{data[col]}</Td>
                      )
                    )}
                    {columnButtons.map((button, i) => (
                      <Td key={i}>{button(data)}</Td>
                    ))}
                  </Tr>
                ))}
            </Tbody>
          </TableContainer>
        ) : (
          [...Array(15)].map((e, i) => (
            <SkeletonElement key={i} type="table-data" />
          ))
        )}
      </TableScroll>
      <Pages>
        <PageItems>
          <Select
            value={orderByColumns}
            onChange={({ target }) =>
              setAppSettings((settings) => ({
                ...settings,
                orderByColumns: target.value,
              }))
            }
          >
            <Option value="">Ordenar por coluna</Option>
            {columns.map((col, i) => (
              <Option key={i} value={col}>
                {col}
              </Option>
            ))}
          </Select>
          <Select
            value={orderByDirection}
            onChange={({ target }) =>
              setAppSettings((settings) => ({
                ...settings,
                orderByDirection: target.value,
              }))
            }
          >
            <Option value="">Ordenar por tipo</Option>
            <Option value="asc">Crescente</Option>
            <Option value="desc">Descrecente</Option>
          </Select>
        </PageItems>
        <PageItems>
          <FilterPage>
            <RowTable>
              <Label>Linha(s) selecionada(s)</Label>
              <Select
                value={limit}
                onChange={({ target }) =>
                  setAppSettings((settings) => ({
                    ...settings,
                    limit: target.value,
                    page: 1,
                  }))
                }
              >
                <Option value={10}>10</Option>
                <Option value={50}>50</Option>
                <Option value={100}>100</Option>
              </Select>
            </RowTable>
            <RowTable>
              <PageSelection>
                pagina {page} de {maxPage}
              </PageSelection>
              <ArrowPrevNext
                disabled={page === 1}
                onClick={() =>
                  setAppSettings((settings) => ({
                    ...settings,
                    page: settings.page - 1,
                  }))
                }
              >
                <ArrowBackIos />
              </ArrowPrevNext>
              <ArrowPrevNext
                disabled={page >= maxPage}
                onClick={() =>
                  setAppSettings((settings) => ({
                    ...settings,
                    page: settings.page + 1,
                  }))
                }
              >
                <ArrowForwardIos />
              </ArrowPrevNext>
            </RowTable>
          </FilterPage>
        </PageItems>
      </Pages>
    </Container>
  );
}
