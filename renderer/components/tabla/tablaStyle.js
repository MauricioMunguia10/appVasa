import styled from "styled-components";

export const TablaContainer = styled.div`
  position: relative;
  top: 10px;
  .css-rbjqkq-MuiDataGrid-root .MuiDataGrid-container--top [role="row"],
  .css-rbjqkq-MuiDataGrid-root .MuiDataGrid-container--bottom [role="row"] {
    background-color: var(--terciario);
  }
  .css-15n4jlm-MuiDataGrid-root
    .MuiDataGrid-columnHeader:not(.MuiDataGrid-columnHeader--sorted)
    .MuiDataGrid-sortIcon {
    opacity: 1;
    color: white;
  }
  .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root {
    color: white;
  }

  .elemento {
    height: 50px;
  }
  .MuiDataGrid-cell {
    font-size: 20px;
  }
  .MuiDataGrid-columnHeaderTitle {
    font-size: 20px;
  }
  .css-74bi4q-MuiDataGrid-overlayWrapper {
    height: 40px;
  }
  .css-15n4jlm-MuiDataGrid-root {
    --unstable_DataGrid-radius: 20px;
  }
  .css-tgsonj {
    display: none;
  }
  .custom-header {
    background-color: var(--terciario);
    color: white;
    width: 100%;
  }
  .header-table {
    background-color: gray;
  }
  .tabla {
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); /* offsetX offsetY blurRadius color */
  }

  .even-row {
    background-color: var(--alpha);
  }
  .odd-row {
    background-color: var(--alpha);
  }
  .search {
    position: relative;
    top: 10px;
    left: 20px;
    width: 25%;
    border-radius: 15px;
  }
  .head {
    background-color: var(--terciario);
    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 20px;
    margin-bottom: 15px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); /* offsetX offsetY blurRadius color */
  }
  .searchButton {
    position: absolute;
    top: 10px;
    left: calc(100% - 260px);
    width: 110px;
    border-radius: 20px;
    @media (max-width: 640px) {
      display: none;
    }
  }
  .tittle {
    position: absolute;
    top: -5px;
    left: 20px;
    color: white;
    display: flex;
    @media (max-width: 640px) {
      display: none;
    }
  }
  .newButton {
    position: absolute;
    top: 10px;
    left: calc(100% - 130px);
    width: 110px;
    border-radius: 20px;
  }

  .cancelButton {
    position: relative;
    left: 10px;
    top: 10px;
  }
  .none {
    display: none;
  }
  .MuiDataGrid-filler {
    display: none;
  }
  .txtPermisosCondicional {
    position: absolute;
    top: -80px;
    right: 0;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    font-family: sanserif, system-ui;
    font-weight: 600;
    font-style: normal;
  }
  .css-15n4jlm-MuiDataGrid-root .MuiDataGrid-container--top [role="row"] {
    background-color: var(--terciario);
  }
  .MuiDataGrid-virtualScrollerContent {
    max-height: 500px;
  }
`;
