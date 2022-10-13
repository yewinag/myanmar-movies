import styled from 'styled-components';

export const StyledLayouts = styled.section``;

export const SectionLayout = styled.section`
  margin-top: ${p => p.theme.space['16']};
`;

export const ArticleRow = styled.section`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${p => p.theme.space['16']};
  row-gap: ${p => p.theme.space['32']};
  max-height: ${p => p.theme.heights.row};
  overflow: hidden;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLayout = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SidebarLayout = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 20px;
  padding: 20px;
  width: 260px;
`;
export const ContentLayout = styled.section`
  .listing-layout {
    display: flex;
    align-items: flex-start;
  }
  .content-body {
    width: 740px;
    padding: 0 20px;
    border-right: solid 1px #ddd;
  }
`;
export const MainContent = styled.section`
  height: auto;
  min-height: 85vh;
`;
export const HeaderLayout = styled.header`
  width: 100%;
  margin: 0 auto;
  // background: #262b36;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  .header-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-menu {
      ul {
        margin: 0;
        padding: 0;
        li {
          display: inline-flex;
          padding: 0 1rem;
          height: 57px;
          align-items: center;
          cursor: pointer;
          a {
            float: left;
            color: #7a889d;
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
            font-family: Helvetica, Arial, sans-serif;
            cursor: pointer;
            &:hover {
              color: #8bbce0;
            }
          }
        }
      }
      .logo-layout {
        margin-right: 20px;
        padding: 6px 0;
      }
    }
    .search {
      input {
        height: 48px;
        background: transparent;
        color: #fff;
        border: 1px solid #ddd;
        line-height: 22px;
        padding: 0 20px;
        border-radius: 4px;
      }
      .search-btn {
        height: 57px;
        border: 0;
        background: #8bbce0;
        color: #fff;
        cursor: pointer;
      }
      .theme-btn {
        height: 57px;
        margin-right: 10px;
        background: transparent;
        border: 0;
      }
    }
  }
`;
