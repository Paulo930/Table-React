import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin: 10px;
  border: 3px solid #c0c0c0;
  border-radius: 10px;
  width: 900px;
`;

export const Filters = styled.div`
  background: #fff;
  border-bottom: 1px solid #c0c0c0;
`;

export const Options = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c0c0c0;
  background: #fff;
  @media (max-width: 800px) {
    position: initial;
    flex-direction: column;
    padding: 10px;
  }
`;

export const SearchBar = styled.div`
  padding-right: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  outline: 1px solid #000;

  &:hover {
    outline: 1px solid #c0c0c0;
  }
  @media (max-width: 800px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: 10px 5px;
  width: 300px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  background: none;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 19px;
`;

export const TableScroll = styled.div`
  overflow: auto;
  max-height: ${({ MaxHeightScroll }) => MaxHeightScroll};
`;

export const Table = styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
`;

export const Thead = styled.thead`
  background: #fff;
  position: sticky;
  top: 0;
`;

export const Tr = styled.tr`
  border-bottom: solid 1px #e0e0e0;
`;

export const Th = styled.th`
  padding: 16px;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 16px;
`;

export const Tbody = styled.tbody``;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #fff;
  padding: 0 6px;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 15px;
  }
`;

export const PageItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 10px;
`;

export const FilterPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const RowTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Select = styled.select`
  background: transparent;
  outline: 1px solid #000;
  padding: 5px;
  border: none;

  &:hover {
    outline: 1px solid #c0c0c0;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const PageSelection = styled.div``;

export const ArrowPrevNext = styled.button`
  cursor: pointer;
  background: transparent;
  outline: none;
  border: none;
  min-width: 50px;
  min-height: 50px;
`;

export const Option = styled.option``;
