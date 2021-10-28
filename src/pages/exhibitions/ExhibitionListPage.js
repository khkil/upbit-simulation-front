import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/util/Loader'
import { getExhibitions } from '../../redux/actions/exhibitionAction';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CLOUD_MASTER_DOMAIN, CLOUD_NUMBER, SERVER28_MASTER_DOMAIN, SERVER28_NUMBER } from '../../constants';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const ExhibitionList = ({ exValue }) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, exhibitions } = useSelector(state => state.exhibitionReducer);

  useEffect(() => {
    console.log(dispatch);
    const domain = 
      exValue === CLOUD_NUMBER ? CLOUD_MASTER_DOMAIN :
      exValue === SERVER28_NUMBER ? SERVER28_MASTER_DOMAIN : null;
    if(domain){
      dispatch(getExhibitions(domain));
    }
  }, [dispatch, exValue]);
  

  if(loading) return <Loader/>;
  if(!exhibitions) return null;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell align="center">행사명</StyledTableCell>
            <StyledTableCell align="center">Url</StyledTableCell>
            <StyledTableCell align="center">사용 여부</StyledTableCell>
            <StyledTableCell align="center">사용 시스템</StyledTableCell>
            <StyledTableCell align="center">EX_IDX</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exhibitions.map(({ exIdx, exNmKor, exNmEng, miceExUrl}) => (
            <StyledTableRow key={exIdx}> 
              <StyledTableCell component="th" scope="row">1</StyledTableCell>
              <StyledTableCell align="left">
                <Link component="button" onClick={() => { history.push(`/exhibitions/${exIdx}`)}}>
                  <Typography align="left" variant="subtitle2">{exNmKor}</Typography>
                  <Typography align="left" variant="subtitle2">{exNmEng}</Typography>
                </Link>
              </StyledTableCell>
              <StyledTableCell align="left">
                {miceExUrl.map(({ url }, index) => (
                  <Typography key={index} variant="subtitle2" gutterBottom>
                    <Link component="button" variant="body2" onClick={() => { window.open(`http://${url}`) }}>
                      <>{url}</>
                    </Link>
                  </Typography>
                ))}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {exValue}
    </TableContainer>
  )
}

const ExhibitionListPage = () => {

  const [server, setServer] = useState(CLOUD_NUMBER);
  const handleChange = (event, value) => {
    setServer(value);
  };

  return (
    <>
      <Tabs
        value={server}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Cloud 서버" />
        <Tab label="28번 서버" />
      </Tabs>
      <ExhibitionList exValue={server}/>
    </>

  )
}

export default ExhibitionListPage;