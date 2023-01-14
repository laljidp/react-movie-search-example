import styled from '@emotion/styled';

const Placeholder = styled.div((props) => ({
  display: 'flex',
  marginTop: '2rem',
  '.search-control': {
    width: 'calc(100% - 250px)',
    marginRight: '10px',
    position: 'relative'
  },
  '.dropdown-section': {
    display: 'flex',
    width: '250px',
    '.genre-dd': {
      marginLeft: '10px'
    }
  }
}));

export default Placeholder;
